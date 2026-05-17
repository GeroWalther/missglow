'use client';

import { useLanguage } from '@/contexts/LanguageProvider';
import LegalPageLayoutV2, {
  LegalH2,
  LegalH3,
  LegalP,
  LegalSection,
} from '../_components/LegalPageLayoutV2';

export default function ReturnsV2() {
  const { language } = useLanguage();
  const isDE = language === 'de';

  return (
    <LegalPageLayoutV2
      eyebrow={isDE ? 'Widerruf & Rücksendungen' : 'Cancellation & Returns'}
      title={
        isDE ? 'Widerruf & Rücksendungen' : 'Cancellation & Returns'
      }
      heroImage='/thankyou.jpg'
      heroAlt={isDE ? 'Widerruf & Rücksendungen' : 'Cancellation & Returns'}>
      <LegalSection>
        <p className='text-xl sm:text-2xl text-foreground/90 leading-relaxed'>
          {isDE
            ? 'Deine Zufriedenheit ist uns wichtig. Hier findest du alle Informationen zu deinem Widerrufsrecht und zu Rücksendungen.'
            : 'Your satisfaction matters. Below you will find everything about your right of withdrawal and how returns work.'}
        </p>
      </LegalSection>

      <LegalSection>
        <LegalH2>
          {isDE ? 'I. Widerrufsrecht' : 'I. Right of withdrawal'}
        </LegalH2>
        <LegalP>
          {isDE
            ? 'Sie haben das Recht, binnen 14 Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt 14 Tage ab dem Tag an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die letzte Ware in Besitz genommen haben bzw. hat.'
            : 'You have the right to cancel this contract within 14 days without giving any reason. The cancellation period is 14 days from the day on which you or a third party named by you, who is not the carrier, took possession of the last goods.'}
        </LegalP>
        <LegalP>
          {isDE
            ? 'Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Schaller Cosmetic Group, An der Leiten 38, 91177 Thalmässing, Deutschland, E-Mail: info[at]missglowbeauty.com) mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.'
            : 'To exercise your right of withdrawal, you must inform us (Schaller Cosmetic Group, An der Leiten 38, 91177 Thalmässing, Germany, email: info[at]missglowbeauty.com) of your decision to withdraw from this contract by means of a clear statement (e.g. a letter or email sent by post).'}
        </LegalP>
      </LegalSection>

      <LegalSection>
        <LegalH2>
          {isDE ? 'II. Folgen des Widerrufs' : 'II. Consequences of withdrawal'}
        </LegalH2>
        <LegalP>
          {isDE
            ? 'Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen 14 Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.'
            : 'If you withdraw from this contract, we shall reimburse to you all payments received from you, including delivery costs (with the exception of the additional costs resulting from your choice of a type of delivery other than the least expensive type of standard delivery offered by us), without undue delay and in any event not later than 14 days from the day on which we are informed about your decision to withdraw from this contract. We will carry out such reimbursement using the same means of payment as you used for the initial transaction, unless you have expressly agreed otherwise; in any event, you will not incur any fees as a result of such reimbursement.'}
        </LegalP>
        <LegalP>
          {isDE
            ? 'Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist.'
            : 'We may withhold reimbursement until we have received the goods back or you have supplied evidence of having sent back the goods, whichever is the earliest.'}
        </LegalP>
        <LegalP>
          {isDE
            ? 'Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist.'
            : 'You shall only be liable for any diminished value of the goods resulting from the handling other than what is necessary to establish the nature, characteristics and functioning of the goods.'}
        </LegalP>
        <LegalH3>{isDE ? 'B. Besondere Hinweise' : 'B. Special notes'}</LegalH3>
        <LegalP>
          {isDE
            ? 'Wenn Sie diesen Vertrag durch ein Darlehen finanzieren und ihn später widerrufen, sind sie auch an den Darlehensvertrag nicht mehr gebunden, sofern beide Verträge eine wirtschaftliche Einheit bilden. Dies ist insbesondere dann anzunehmen, wenn wir gleichzeitig Ihr Darlehensgeber sind oder wenn sich Ihr Darlehensgeber im Hinblick auf die Finanzierung unserer Mitwirkung bedient. Wenn uns das Darlehen bei Wirksamwerden des Widerrufs bereits zugeflossen ist, tritt Ihr Darlehensgeber im Verhältnis zu Ihnen hinsichtlich der Rechtsfolgen des Widerrufs oder der Rückgabe in unsere Rechte und Pflichten aus dem finanzierten Vertrag ein. Letzteres gilt nicht, wenn der vorliegende Vertrag den Erwerb von Finanzinstrumenten (z.B. von Wertpapieren, Devisen oder Derivaten) zum Gegenstand hat. Wollen Sie eine vertragliche Bindung so weitgehend wie möglich vermeiden, machen Sie von Ihrem Widerrufsrecht Gebrauch und widerrufen Sie zudem den Darlehensvertrag, wenn Ihnen auch dafür ein Widerrufsrecht zusteht.'
            : 'If you finance this contract through a loan and later revoke it, you are no longer bound by the loan agreement, provided that both contracts form an economic unit. This is particularly likely if we are your lender at the same time or if your lender uses our cooperation to finance. If the loan has already been transferred to us when the revocation becomes effective, your lender shall enter into our rights and obligations under the financed contract with regard to the legal consequences of the revocation or return. This shall not apply if the present contract concerns the acquisition of financial instruments (e.g. securities, foreign exchange or derivatives). If you wish to avoid being bound by a contract as far as possible, make use of your right of revocation and also revoke the loan agreement if you are entitled to a right of revocation for this purpose.'}
        </LegalP>
      </LegalSection>

      <LegalSection>
        <LegalH2>
          {isDE
            ? 'Rücksendungen nach Widerruf und bei Reklamation'
            : 'Returns after withdrawal and in case of complaints'}
        </LegalH2>
        <LegalP>
          {isDE
            ? 'Bitte beachte folgende allgemeine Hinweise für Rücksendungen.'
            : 'Please note the following general information for returns.'}
        </LegalP>
        <LegalP>
          {isDE
            ? 'Klarstellung: Die Beachtung der Hinweise sind keine Voraussetzung für die wirksame Ausübung des Widerrufsrechts gemäß dem Abschnitt „Widerruf".'
            : 'Clarification: Observance of the instructions is not a prerequisite for the effective exercise of the right of withdrawal in accordance with the section "Cancellation".'}
        </LegalP>
        <LegalP>
          {isDE
            ? 'Bitte vermeide Beschädigungen oder Verunreinigungen der Waren. Die Ware sollte nach Möglichkeit in Originalverpackung mit sämtlichem Zubehör an den Verkäufer zurück gesendet werden. Ist die Originalverpackung nicht mehr in deinem Besitz, sollte eine andere geeignete Verpackung verwendet werden, um für einen ausreichenden Schutz vor Transportschäden zu sorgen und etwaige Schadensersatzansprüche wegen Beschädigungen infolge mangelhafter Verpackung zu vermeiden.'
            : 'Please avoid damaging or soiling the goods. The goods should be returned to the seller if possible in the original packaging with all accessories. If the original packaging is no longer in your possession, another suitable packaging should be used to ensure adequate protection against transport damage and to avoid any claims for damages due to damage caused by inadequate packaging.'}
        </LegalP>
        <LegalH3>
          {isDE
            ? 'Bitte beachte, dass wir nur ungeöffnete Produkte erstatten können.'
            : 'Please note that we can only refund unopened products.'}
        </LegalH3>
        <LegalP>
          {isDE
            ? 'Sollten bei deiner Bestellung Gratisprodukte enthalten sein, bitten wir darum, diese ebenfalls zu retournieren, um eine vollständige Erstattung des Kaufpreises zu erhalten. Solltest du Teile der Produkte behalten, können wir dir nur eine teilweise Rückerstattung gewähren.'
            : 'If your order includes free products, please return them as well to receive a full refund of the purchase price. If you keep parts of the products, we can only grant you a partial refund.'}
        </LegalP>
        <LegalH3>
          {isDE ? 'Rücksendung nach Widerruf' : 'Return after withdrawal'}
        </LegalH3>
        <LegalP>
          {isDE
            ? 'Rücksendung erfolgt auf deine Kosten, da wir leider keine sonstigen Portokosten erstatten können.'
            : 'Return is at your expense, as we unfortunately cannot refund any other postage costs.'}
        </LegalP>
        <LegalP>
          {isDE
            ? 'Sobald das Paket im Warenhaus eingetroffen ist und geprüft wurde, werden wir die Rückerstattung vornehmen.'
            : 'As soon as the package has arrived at the warehouse and been inspected, we will issue the refund.'}
        </LegalP>
        <LegalP>
          {isDE
            ? 'Bitte beachte, dass die Rückzahlung über die ursprünglich ausgewählte Zahlungsmethode erfolgt, sofern es nicht anders vereinbart wurde.'
            : 'Please note that the refund will be made via the originally selected payment method, unless otherwise agreed.'}
        </LegalP>
      </LegalSection>

      <LegalSection>
        <LegalH2>
          {isDE
            ? 'Rücksendungen bei Reklamation'
            : 'Returns in case of complaints'}
        </LegalH2>
        <LegalP>
          {isDE
            ? 'Sollten Artikel beschädigt sein (z.B. Bruch bei Glas) oder andere Mängel aufweisen, kannst du diese selbstverständlich reklamieren. Bitte kontaktiere hierzu unseren Kundenservice unter:'
            : 'If items are damaged (e.g. breakage in glass) or have other defects, you can of course complain about them. Please contact our customer service at:'}{' '}
          <a
            href='mailto:shop@missglowbeauty.com'
            className='text-bloom-deep underline underline-offset-4 hover:opacity-80'>
            shop@missglowbeauty.com
          </a>
        </LegalP>
      </LegalSection>
    </LegalPageLayoutV2>
  );
}
