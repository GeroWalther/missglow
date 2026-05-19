'use client';

import { useLanguage } from '@/contexts/LanguageProvider';
import LegalPageLayoutV2, {
  LegalH2,
  LegalH3,
  LegalP,
  LegalSection,
} from '../_components/LegalPageLayoutV2';

export default function PrivacyPolicyV2() {
  const { language } = useLanguage();
  const isDE = language === 'de';

  return (
    <LegalPageLayoutV2
      eyebrow={isDE ? 'Datenschutz' : 'Privacy Policy'}
      title={
        isDE ? 'Datenschutz auf einen Blick' : 'Data protection at a glance'
      }
      heroImage='/datenschutz.jpg'
      heroAlt={isDE ? 'Datenschutz' : 'Privacy'}>
      <LegalSection>
        <p className='text-xl sm:text-2xl text-foreground/90 leading-relaxed'>
          {isDE
            ? 'Allgemeine Hinweise.'
            : 'General information.'}
        </p>
        <LegalP>
          {isDE
            ? 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.'
            : 'The following information provides a simple overview of what happens to your personal data when you visit our website. Personal data is all data with which you can be personally identified. You can find detailed information on the subject of data protection in our data protection declaration listed under this text.'}
        </LegalP>
      </LegalSection>

      <LegalSection>
        <LegalH2>
          {isDE
            ? 'Datenerfassung auf unserer Website'
            : 'Data collection on our website'}
        </LegalH2>
        <LegalH3>
          {isDE
            ? 'Wer ist verantwortlich für die Datenerfassung auf dieser Website?'
            : 'Who is responsible for data collection on this website?'}
        </LegalH3>
        <LegalP>
          {isDE
            ? 'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.'
            : 'The data processing on this website is carried out by the website operator. You can find his contact details in the imprint of this website.'}
        </LegalP>
        <LegalH3>
          {isDE ? 'Wie erfassen wir Ihre Daten?' : 'How do we collect your data?'}
        </LegalH3>
        <LegalP>
          {isDE
            ? 'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.'
            : 'On the one hand, your data is collected when you communicate it to us. This may, for example, be data that you enter in a contact form.'}
        </LegalP>
        <LegalP>
          {isDE
            ? 'Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.'
            : 'Other data is automatically recorded by our IT systems when you visit the website. This is primarily technical data (e.g. Internet browser, operating system or time of page access). This data is recorded automatically as soon as you enter our website.'}
        </LegalP>
        <LegalH3>
          {isDE
            ? 'Wofür nutzen wir Ihre Daten?'
            : 'What do we use your data for?'}
        </LegalH3>
        <LegalP>
          {isDE
            ? 'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.'
            : 'Some of the data is collected to ensure that the website is provided without errors. Other data can be used to analyze your user behavior.'}
        </LegalP>
        <LegalH3>
          {isDE
            ? 'Welche Rechte haben Sie bezüglich Ihrer Daten?'
            : 'What rights do you have regarding your data?'}
        </LegalH3>
        <LegalP>
          {isDE
            ? 'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.'
            : 'You have the right to obtain information about the origin, recipient and purpose of your stored personal data free of charge at any time. You also have the right to request that this data be corrected, blocked or deleted. You can contact us at any time at the address provided in the imprint if you have any questions about this or other questions regarding data protection. You also have the right to lodge a complaint with the responsible supervisory authority.'}
        </LegalP>
        <LegalP>
          {isDE
            ? 'Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung unter „Recht auf Einschränkung der Verarbeitung".'
            : 'You also have the right to request that the processing of your personal data be restricted under certain circumstances. For details, please see the privacy policy under "Right to restriction of processing".'}
        </LegalP>
      </LegalSection>

      <LegalSection>
        <LegalH2>
          {isDE
            ? 'Analyse-Tools und Tools von Drittanbietern'
            : 'Analysis tools and third-party tools'}
        </LegalH2>
        <LegalP>
          {isDE
            ? 'Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zurückverfolgt werden. Sie können dieser Analyse widersprechen oder sie durch die Nichtbenutzung bestimmter Tools verhindern. Detaillierte Informationen dazu finden Sie in der folgenden Datenschutzerklärung.'
            : 'When you visit our website, your surfing behavior can be statistically evaluated. This is done primarily with cookies and so-called analysis programs. The analysis of your surfing behavior is usually anonymous; the surfing behavior cannot be traced back to you. You can object to this analysis or prevent it by not using certain tools. You can find detailed information about this in the following data protection declaration.'}
        </LegalP>
        <LegalP>
          {isDE
            ? 'Sie können dieser Analyse widersprechen. Über die Widerspruchsmöglichkeiten werden wir Sie in dieser Datenschutzerklärung informieren.'
            : 'You can object to this analysis. We will inform you about the options for objection in this privacy policy.'}
        </LegalP>
      </LegalSection>

      <LegalSection>
        <LegalH2>
          {isDE
            ? 'Allgemeine Hinweise und Pflichtinformationen'
            : 'General information and mandatory information'}
        </LegalH2>
        <LegalH3>{isDE ? 'Datenschutz' : 'Data protection'}</LegalH3>
        <LegalP>
          {isDE
            ? 'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.'
            : 'The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this data protection declaration.'}
        </LegalP>
        <LegalP>
          {isDE
            ? 'Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.'
            : 'When you use this website, various personal data is collected. Personal data is data with which you can be personally identified. This privacy statement explains what data we collect and what we use it for. It also explains how and for what purpose this is done.'}
        </LegalP>
        <LegalP>
          {isDE
            ? 'Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.'
            : 'We would like to point out that data transmission over the Internet (e.g. when communicating by email) may have security gaps. Complete protection of data against access by third parties is not possible.'}
        </LegalP>
        <LegalH3>
          {isDE
            ? 'Hinweis zur verantwortlichen Stelle'
            : 'Note on the responsible body'}
        </LegalH3>
        <LegalP>
          {isDE
            ? 'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:'
            : 'The responsible body for data processing on this website is:'}{' '}
          Schaller Cosmetic Group ·{' '}
          <a
            href='mailto:info@missglowbeauty.com'
            className='text-bloom-deep underline underline-offset-4 hover:opacity-80'>
            info@missglowbeauty.com
          </a>
        </LegalP>
        <LegalP>
          {isDE
            ? 'Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.'
            : 'The responsible body is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data (e.g. names, e-mail addresses, etc.).'}
        </LegalP>
      </LegalSection>

      <LegalSection>
        <LegalH2>
          {isDE
            ? 'Widerruf Ihrer Einwilligung zur Datenverarbeitung'
            : 'Revocation of your consent to data processing'}
        </LegalH2>
        <LegalP>
          {isDE
            ? 'Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.'
            : 'Many data processing operations are only possible with your express consent. You can revoke your consent at any time. All you need to do is send us an informal email. The legality of the data processing carried out up to the time of revocation remains unaffected by the revocation.'}
        </LegalP>
      </LegalSection>

      <LegalSection>
        <LegalH2>
          {isDE
            ? 'Widerspruchsrecht gegen Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)'
            : 'Right to object to data collection in special cases and to direct advertising (Art. 21 GDPR)'}
        </LegalH2>
        <LegalP>
          {isDE
            ? 'Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).'
            : 'If the data processing is carried out on the basis of Art. 6 Para. 1 lit. e or f GDPR, you have the right to object to the processing of your personal data at any time for reasons arising from your particular situation; this also applies to profiling based on these provisions. The respective legal basis on which processing is based can be found in this data protection declaration. If you object, we will no longer process your personal data unless we can demonstrate compelling legitimate grounds for the processing which outweigh your interests, rights and freedoms or the processing serves to assert, exercise or defend legal claims (objection pursuant to Art. 21 Para. 1 GDPR).'}
        </LegalP>
        <LegalP>
          {isDE
            ? 'Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).'
            : 'If your personal data is processed for direct marketing purposes, you have the right to object at any time to the processing of personal data concerning you for the purposes of such advertising; this also applies to profiling insofar as it is associated with such direct marketing. If you object, your personal data will subsequently no longer be used for the purposes of direct marketing (objection in accordance with Art. 21 Para. 2 GDPR).'}
        </LegalP>
      </LegalSection>

      <LegalSection>
        <LegalH2>
          {isDE
            ? 'Beschwerderecht bei der zuständigen Aufsichtsbehörde'
            : 'Right to lodge a complaint with the competent supervisory authority'}
        </LegalH2>
        <LegalP>
          {isDE
            ? 'Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.'
            : 'In the event of violations of the GDPR, those affected have the right to lodge a complaint with a supervisory authority, in particular in the Member State of their habitual residence, place of work or place of the alleged violation. The right to lodge a complaint is without prejudice to other administrative or judicial remedies.'}
        </LegalP>
      </LegalSection>

      <LegalSection>
        <LegalH2>
          {isDE ? 'Recht auf Datenübertragbarkeit' : 'Right to data portability'}
        </LegalH2>
        <LegalP>
          {isDE
            ? 'Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.'
            : 'You have the right to have data that we process automatically on the basis of your consent or in fulfillment of a contract handed over to you or to a third party in a common, machine-readable format. If you request that the data be transferred directly to another responsible party, this will only be done if it is technically feasible.'}
        </LegalP>
      </LegalSection>

      <LegalSection>
        <LegalH2>
          {isDE
            ? 'SSL- bzw. TLS-Verschlüsselung'
            : 'SSL or TLS encryption'}
        </LegalH2>
        <LegalP>
          {isDE
            ? 'Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.'
            : 'For security reasons and to protect the transmission of confidential content, such as orders or enquiries that you send to us as the site operator, this site uses SSL or TLS encryption. You can recognize an encrypted connection by the fact that the address line of the browser changes from "http://" to "https://" and by the lock symbol in your browser line.'}
        </LegalP>
        <LegalP>
          {isDE
            ? 'Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.'
            : 'If SSL or TLS encryption is activated, the data you send to us cannot be read by third parties.'}
        </LegalP>
      </LegalSection>

      <LegalSection>
        <LegalH2>
          {isDE
            ? 'Auskunft, Sperrung, Löschung und Berichtigung'
            : 'Information, blocking, deletion and correction'}
        </LegalH2>
        <LegalP>
          {isDE
            ? 'Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.'
            : 'Within the framework of the applicable legal provisions, you have the right at any time to obtain free information about your stored personal data, its origin and recipient and the purpose of data processing and, if applicable, a right to correction, blocking or deletion of this data. You can contact us at any time at the address provided in the imprint if you have any questions about this or other questions on the subject of personal data.'}
        </LegalP>
      </LegalSection>

      <LegalSection>
        <LegalH2>
          {isDE
            ? 'Recht auf Einschränkung der Verarbeitung'
            : 'Right to restriction of processing'}
        </LegalH2>
        <LegalP>
          {isDE
            ? 'Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:'
            : 'You have the right to request that the processing of your personal data be restricted. You can contact us at any time using the address provided in the imprint. The right to restrict processing exists in the following cases:'}
        </LegalP>
        <ul className='list-disc pl-6 space-y-2 text-base sm:text-lg text-muted-foreground leading-relaxed'>
          <li>
            {isDE
              ? 'Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.'
              : 'If you dispute the accuracy of your personal data stored by us, we usually need time to check this. For the duration of the check, you have the right to request that the processing of your personal data be restricted.'}
          </li>
          <li>
            {isDE
              ? 'Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.'
              : 'If the processing of your personal data was/is unlawful, you can request the restriction of data processing instead of deletion.'}
          </li>
          <li>
            {isDE
              ? 'Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.'
              : 'If we no longer need your personal data, but you require it to exercise, defend or assert legal claims, you have the right to request that the processing of your personal data be restricted instead of deleted.'}
          </li>
          <li>
            {isDE
              ? 'Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.'
              : 'If you have lodged an objection in accordance with Art. 21 Para. 1 GDPR, a balance must be struck between your interests and ours. As long as it is not yet clear whose interests prevail, you have the right to request that the processing of your personal data be restricted.'}
          </li>
        </ul>
        <LegalP>
          {isDE
            ? 'Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.'
            : 'If you have restricted the processing of your personal data, these data may - with the exception of storage - only be processed with your consent or for the establishment, exercise or defense of legal claims or to protect the rights of another natural or legal person or for reasons of important public interest of the European Union or a Member State.'}
        </LegalP>
      </LegalSection>
    </LegalPageLayoutV2>
  );
}
