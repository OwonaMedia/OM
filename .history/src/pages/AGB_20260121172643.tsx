import { useTranslation } from '../translations';

export default function AGB() {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-br from-white via-[#f8f8f8] to-white shadow-[0_8px_32px_rgba(0,0,0,0.07)] rounded-3xl border border-[#ececec] text-black min-h-screen pt-32 pb-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-light mb-12 tracking-tight">{t('footer.terms')}</h1>
        
        <div className="space-y-12 text-black/70 font-light leading-relaxed">
          <section>
            <h2 className="text-xl text-[#D4AF37] mb-4 uppercase tracking-widest text-[10px]">1. Geltungsbereich</h2>
            <p>Für alle Geschäftsbeziehungen zwischen Owona Media (nachfolgend „Anbieter“), Salomon Owona, Ahornstrasse 52, 68542 Heddesheim, Deutschland, Telefon: +49 6203 4202697, E-Mail: <a href="mailto:salomon@owona.de" className="text-[#D4AF37] hover:underline">salomon@owona.de</a> und dem Kunden gelten ausschließlich die nachfolgenden Allgemeinen Geschäftsbedingungen in ihrer zum Zeitpunkt der Bestellung gültigen Fassung.</p>
          </section>

          <section>
            <h2 className="text-xl text-[#D4AF37] mb-4 uppercase tracking-widest text-[10px]">2. Vertragsgegenstand</h2>
            <p>Gegenstand des Vertrages ist die Erbringung von Dienstleistungen im Bereich Webentwicklung, Design und digitale Beratung.</p>
          </section>

          <section>
            <h2 className="text-xl text-[#D4AF37] mb-4 uppercase tracking-widest text-[10px]">3. Vertragsschluss</h2>
            <p>Der Vertrag kommt durch die Annahme des Angebots des Anbieters durch den Kunden zustande. Die Annahme kann schriftlich oder per E-Mail erfolgen.</p>
          </section>
          
           <section>
            <h2 className="text-xl text-[#D4AF37] mb-4 uppercase tracking-widest text-[10px]">4. Preise und Zahlungsbedingungen</h2>
            <p>Es gelten die vereinbarten Preise. Sofern nicht anders vereinbart, sind Rechnungen sofort nach Erhalt ohne Abzug zahlbar.</p>
          </section>

          {/* Platzhalter */}
          <div className="p-8 bg-gray-50 border border-gray-100 text-sm text-gray-400 italic text-center">
            Hier folgen weitere rechtliche Bestimmungen (Haftung, Gewährleistung, Schlussbestimmungen).
          </div>
        </div>
      </div>
    </div>
  );
}
