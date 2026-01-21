import { useTranslation } from '../translations';

export default function Impressum() {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-br from-white via-[#f8f8f8] to-white shadow-[0_8px_32px_rgba(0,0,0,0.07)] rounded-3xl border border-[#ececec] text-black min-h-screen pt-32 pb-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-light mb-12 tracking-tight">{t('footer.impressum')}</h1>
        
        <div className="space-y-8 text-black/70 font-light leading-relaxed">
          <section>
            <h2 className="text-xl text-[#D4AF37] mb-4 uppercase tracking-widest text-[10px]">Angaben gemäß § 5 TMG</h2>
            <p>Owona Media</p>
            <p>Salomon Owona</p>
            <p>Ahornstrasse 52</p>
            <p>68542 Heddesheim, Deutschland</p>
          </section>

          <section>
            <h2 className="text-xl text-[#D4AF37] mb-4 uppercase tracking-widest text-[10px]">Kontakt</h2>
            <p>Telefon: +49 6203 4202697</p>
            <p>E-Mail: <a href="mailto:salomon@owona.de" className="text-[#D4AF37] hover:underline">salomon@owona.de</a></p>
          </section>

          <section>
            <h2 className="text-xl text-[#D4AF37] mb-4 uppercase tracking-widest text-[10px]">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
            <p className="font-mono bg-gray-100 inline-block px-2 py-1 mt-2">DE XXX XXX XXX</p>
          </section>

          <section>
            <h2 className="text-xl text-[#D4AF37] mb-4 uppercase tracking-widest text-[10px]">Redaktionell verantwortlich</h2>
            <p>Salomon Owona</p>
            <p>Ahornstrasse 52</p>
            <p>68542 Heddesheim, Deutschland</p>
          </section>
        </div>
      </div>
    </div>
  );
}
