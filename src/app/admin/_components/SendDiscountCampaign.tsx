'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import {
  sendDiscountCampaign,
  type CampaignResult,
} from '../_actions/sendDiscountCampaign';

export default function SendDiscountCampaign({
  subscriberCount,
}: {
  subscriberCount: number;
}) {
  const [discountPercent, setDiscountPercent] = useState(15);
  const [validityDays, setValidityDays] = useState(30);
  const [subject, setSubject] = useState('');
  const [intro, setIntro] = useState('');
  const [confirming, setConfirming] = useState(false);
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<CampaignResult | null>(null);

  function onSend() {
    setConfirming(false);
    setResult(null);
    startTransition(async () => {
      try {
        const res = await sendDiscountCampaign({
          discountPercent,
          validityDays,
          intro: intro.trim() || undefined,
          subject: subject.trim() || undefined,
        });
        setResult(res);
        if (res.sent > 0) {
          toast.success(
            `${res.sent} Codes versendet${res.failed ? ` · ${res.failed} fehlgeschlagen` : ''}.`
          );
        } else if (res.failed === 0) {
          toast('Keine Abonnenten gefunden.');
        } else {
          toast.error(`Alle ${res.failed} Sendungen sind fehlgeschlagen.`);
        }
      } catch (e) {
        const msg = e instanceof Error ? e.message : 'Unknown error';
        toast.error(msg);
      }
    });
  }

  return (
    <div className='p-4 border-t border-border'>
      <h3 className='font-semibold text-base mb-1'>
        Einmalige Rabattcodes an alle Abonnenten senden
      </h3>
      <p className='text-sm text-muted-foreground mb-4'>
        {subscriberCount} Newsletter-Abonnenten · Jeder Empfänger erhält einen
        einmalig gültigen, personalisierten Code per E-Mail.
      </p>

      <div className='grid gap-3 sm:grid-cols-2 max-w-2xl'>
        <div>
          <label className='text-xs font-medium block mb-1'>
            Rabatt in %
          </label>
          <Input
            type='number'
            min={1}
            max={100}
            value={discountPercent}
            onChange={(e) => setDiscountPercent(Number(e.target.value))}
            disabled={pending}
          />
        </div>
        <div>
          <label className='text-xs font-medium block mb-1'>
            Gültigkeit (Tage)
          </label>
          <Input
            type='number'
            min={1}
            max={365}
            value={validityDays}
            onChange={(e) => setValidityDays(Number(e.target.value))}
            disabled={pending}
          />
        </div>
        <div className='sm:col-span-2'>
          <label className='text-xs font-medium block mb-1'>
            Betreff (optional)
          </label>
          <Input
            type='text'
            value={subject}
            placeholder={`Dein persönlicher ${discountPercent}% Rabattcode`}
            onChange={(e) => setSubject(e.target.value)}
            disabled={pending}
          />
        </div>
        <div className='sm:col-span-2'>
          <label className='text-xs font-medium block mb-1'>
            Einleitung (optional)
          </label>
          <textarea
            value={intro}
            onChange={(e) => setIntro(e.target.value)}
            disabled={pending}
            rows={3}
            placeholder='z.B. „Frühjahrsangebot — für unsere treuen Abonnentinnen."'
            className='w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring'
          />
        </div>
      </div>

      <div className='mt-5 flex flex-wrap gap-3 items-center'>
        {!confirming ? (
          <Button
            type='button'
            onClick={() => setConfirming(true)}
            disabled={pending || subscriberCount === 0}>
            Codes an {subscriberCount} Abonnenten senden
          </Button>
        ) : (
          <>
            <p className='text-sm text-bloom-deep font-semibold'>
              {subscriberCount} Codes erstellen und versenden?
            </p>
            <Button
              type='button'
              onClick={onSend}
              variant='bloom'
              disabled={pending}>
              {pending && <Loader2 className='size-4 animate-spin mr-2' />}
              Bestätigen
            </Button>
            <Button
              type='button'
              variant='outline'
              onClick={() => setConfirming(false)}
              disabled={pending}>
              Abbrechen
            </Button>
          </>
        )}
      </div>

      {result && (
        <div className='mt-5 rounded-md border border-border bg-card p-4 text-sm'>
          <p className='font-semibold mb-1'>Kampagnen-Ergebnis</p>
          <p>Abonnenten gesamt: {result.totalSubscribers}</p>
          <p>Erfolgreich versendet: {result.sent}</p>
          {result.failed > 0 && (
            <>
              <p className='text-destructive'>
                Fehlgeschlagen: {result.failed}
              </p>
              <details className='mt-2'>
                <summary className='cursor-pointer text-xs text-muted-foreground'>
                  Details anzeigen
                </summary>
                <ul className='mt-2 space-y-1 text-xs text-muted-foreground list-disc pl-5'>
                  {result.errors.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
                </ul>
              </details>
            </>
          )}
        </div>
      )}
    </div>
  );
}
