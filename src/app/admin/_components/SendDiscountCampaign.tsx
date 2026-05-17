'use client';

import { useMemo, useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, Search } from 'lucide-react';
import { toast } from 'sonner';
import {
  sendDiscountCampaign,
  type CampaignResult,
} from '../_actions/sendDiscountCampaign';

type Subscriber = { email: string; name: string };

export default function SendDiscountCampaign({
  subscribers,
}: {
  subscribers: Subscriber[];
}) {
  const totalCount = subscribers.length;

  const [discountPercent, setDiscountPercent] = useState(15);
  const [validityDays, setValidityDays] = useState(30);
  const [subject, setSubject] = useState('');
  const [intro, setIntro] = useState('');
  const [search, setSearch] = useState('');
  // All selected by default — admin can clear / deselect individuals.
  const [selectedEmails, setSelectedEmails] = useState<Set<string>>(
    () => new Set(subscribers.map((s) => s.email))
  );
  const [confirming, setConfirming] = useState(false);
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<CampaignResult | null>(null);

  const filteredSubscribers = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return subscribers;
    return subscribers.filter(
      (s) =>
        s.email.toLowerCase().includes(term) ||
        (s.name ?? '').toLowerCase().includes(term)
    );
  }, [search, subscribers]);

  const selectedCount = selectedEmails.size;
  const allFilteredSelected =
    filteredSubscribers.length > 0 &&
    filteredSubscribers.every((s) => selectedEmails.has(s.email));

  function toggleOne(email: string) {
    setSelectedEmails((prev) => {
      const next = new Set(prev);
      if (next.has(email)) next.delete(email);
      else next.add(email);
      return next;
    });
  }
  function selectAll() {
    setSelectedEmails(new Set(subscribers.map((s) => s.email)));
  }
  function clearAll() {
    setSelectedEmails(new Set());
  }
  function toggleFiltered() {
    setSelectedEmails((prev) => {
      const next = new Set(prev);
      if (allFilteredSelected) {
        filteredSubscribers.forEach((s) => next.delete(s.email));
      } else {
        filteredSubscribers.forEach((s) => next.add(s.email));
      }
      return next;
    });
  }

  function onSend() {
    setConfirming(false);
    setResult(null);
    const emails = Array.from(selectedEmails);
    startTransition(async () => {
      try {
        const res = await sendDiscountCampaign({
          discountPercent,
          validityDays,
          intro: intro.trim() || undefined,
          subject: subject.trim() || undefined,
          // If admin has every subscriber selected we send an undefined list
          // (= everyone) — otherwise the explicit list.
          subscriberEmails:
            emails.length === totalCount ? undefined : emails,
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

  const sendDisabled = pending || selectedCount === 0;
  const sendLabel =
    selectedCount === totalCount
      ? `Codes an alle ${totalCount} Abonnenten senden`
      : `Codes an ${selectedCount} ausgewählte Abonnenten senden`;

  return (
    <div className='p-4 border-t border-border'>
      <h3 className='font-semibold text-base mb-1'>
        Einmalige Rabattcodes an Abonnenten senden
      </h3>
      <p className='text-sm text-muted-foreground mb-4'>
        {totalCount} Newsletter-Abonnenten · Jeder ausgewählte Empfänger
        erhält einen einmalig gültigen, personalisierten Code per E-Mail.
      </p>

      <div className='grid gap-3 sm:grid-cols-2 max-w-2xl'>
        <div>
          <label className='text-xs font-medium block mb-1'>Rabatt in %</label>
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

      {/* Subscriber picker */}
      <div className='mt-6 max-w-2xl border border-border rounded-md'>
        <div className='flex flex-wrap items-center justify-between gap-3 p-3 border-b border-border'>
          <div>
            <p className='text-sm font-medium'>Empfänger auswählen</p>
            <p className='text-xs text-muted-foreground'>
              {selectedCount} von {totalCount} ausgewählt
            </p>
          </div>
          <div className='flex gap-2'>
            <Button
              type='button'
              size='sm'
              variant='outline'
              onClick={selectAll}
              disabled={pending || selectedCount === totalCount}>
              Alle
            </Button>
            <Button
              type='button'
              size='sm'
              variant='outline'
              onClick={clearAll}
              disabled={pending || selectedCount === 0}>
              Keine
            </Button>
          </div>
        </div>

        <div className='p-3 border-b border-border flex items-center gap-2'>
          <Search className='size-4 text-muted-foreground shrink-0' />
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            disabled={pending}
            placeholder='Suchen nach Name oder E-Mail…'
            className='flex-1 bg-transparent text-sm focus:outline-none'
          />
          {filteredSubscribers.length > 0 && (
            <button
              type='button'
              onClick={toggleFiltered}
              disabled={pending}
              className='text-xs text-muted-foreground hover:text-foreground underline underline-offset-2 shrink-0'>
              {allFilteredSelected
                ? 'Sichtbare abwählen'
                : 'Sichtbare auswählen'}
            </button>
          )}
        </div>

        <ul className='max-h-72 overflow-y-auto divide-y divide-border'>
          {filteredSubscribers.length === 0 && (
            <li className='p-4 text-sm text-muted-foreground'>
              Keine Abonnenten gefunden.
            </li>
          )}
          {filteredSubscribers.map((sub) => {
            const checked = selectedEmails.has(sub.email);
            return (
              <li key={sub.email}>
                <label className='flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-muted/40'>
                  <input
                    type='checkbox'
                    checked={checked}
                    onChange={() => toggleOne(sub.email)}
                    disabled={pending}
                    className='size-4 shrink-0 accent-bloom-deep'
                  />
                  <div className='min-w-0 flex-1'>
                    <p className='text-sm truncate'>{sub.name || '—'}</p>
                    <p className='text-xs text-muted-foreground truncate'>
                      {sub.email}
                    </p>
                  </div>
                </label>
              </li>
            );
          })}
        </ul>
      </div>

      <div className='mt-5 flex flex-wrap gap-3 items-center'>
        {!confirming ? (
          <Button
            type='button'
            onClick={() => setConfirming(true)}
            disabled={sendDisabled}>
            {sendLabel}
          </Button>
        ) : (
          <>
            <p className='text-sm text-bloom-deep font-semibold'>
              {selectedCount} Codes erstellen und versenden?
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
