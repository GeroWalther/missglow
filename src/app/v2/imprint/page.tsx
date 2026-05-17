'use client';

import LegalPageLayoutV2, {
  LegalH2,
  LegalP,
  LegalSection,
} from '../_components/LegalPageLayoutV2';

export default function ImprintV2() {
  return (
    <LegalPageLayoutV2
      eyebrow='Impressum'
      title='Impressum'
      heroImage='/gallery1.jpg'
      heroAlt='Miss Glow Beauty'>
      <LegalSection>
        <p className='text-xl sm:text-2xl text-foreground/90 leading-relaxed'>
          Angaben gemäß § 5 TMG.
        </p>
        <LegalP>Schaller Cosmetic Group</LegalP>
        <LegalP>Umsatzsteuer-ID DE363514924</LegalP>
        <LegalP>Tatjana Schaller</LegalP>
        <LegalP>An der Leiten 38</LegalP>
        <LegalP>91177 Thalmässing</LegalP>
        <LegalP>Deutschland</LegalP>
        <LegalP>Tel: +49 91736699940</LegalP>
        <LegalP>
          E-Mail:{' '}
          <a
            href='mailto:info@missglowbeauty.com'
            className='text-bloom-deep underline underline-offset-4 hover:opacity-80'>
            info@missglowbeauty.com
          </a>
        </LegalP>
      </LegalSection>

      <LegalSection>
        <LegalH2>Streitschlichtung</LegalH2>
        <LegalP>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{' '}
          <a
            href='https://ec.europa.eu/consumers/odr'
            className='text-bloom-deep underline underline-offset-4 hover:opacity-80'>
            https://ec.europa.eu/consumers/odr
          </a>
          . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht
          bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </LegalP>
      </LegalSection>

      <LegalSection>
        <LegalH2>Haftung für Inhalte</LegalH2>
        <LegalP>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine
          rechtswidrige Tätigkeit hinweisen.
        </LegalP>
        <LegalP>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon
          unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
          Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
          Inhalte umgehend entfernen.
        </LegalP>
      </LegalSection>

      <LegalSection>
        <LegalH2>Haftung für Links</LegalH2>
        <LegalP>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
          der Seiten verantwortlich. Die verlinkten Seiten wurden zum
          Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
          Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
          erkennbar.
        </LegalP>
        <LegalP>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
          jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
          zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
          derartige Links umgehend entfernen.
        </LegalP>
      </LegalSection>

      <LegalSection>
        <LegalH2>Urheberrecht</LegalH2>
        <LegalP>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
          diesen Seiten unterliegen dem deutschen Urheberrecht. Die
          Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
          Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
          schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          Downloads und Kopien dieser Seite sind nur für den privaten, nicht
          kommerziellen Gebrauch gestattet.
        </LegalP>
        <LegalP>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
          werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
          trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
          wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
          Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </LegalP>
      </LegalSection>
    </LegalPageLayoutV2>
  );
}
