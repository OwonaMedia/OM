import { useTranslation } from '../src_translations';

export default function Datenschutz() {
  const { t } = useTranslation();

  return (
    <div className="bg-white text-black min-h-screen pt-32 pb-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-light mb-12 tracking-tight">{t('footer.privacy')}</h1>
        
        <div className="space-y-12 text-black/70 font-light leading-relaxed">
          <section>
            <h2 className="text-xl text-[#D4AF37] mb-4 uppercase tracking-widest text-[10px]">1. Datenschutz auf einen Blick</h2>
            <h3 className="font-medium text-black mb-2">Allgemeine Hinweise</h3>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
          </section>

          <section>
            <h2 className="text-xl text-[#D4AF37] mb-4 uppercase tracking-widest text-[10px]">2. Hosting und Content Delivery Networks (CDN)</h2>
            <h3 className="font-medium text-black mb-2">Externes Hosting</h3>
            <p>Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters (z.B. Cloudflare/Vercel) gespeichert.</p>
          </section>

          <section>
            <h2 className="text-xl text-[#D4AF37] mb-4 uppercase tracking-widest text-[10px]">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="font-medium text-black mb-2">Datenschutz</h3>
            <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften.</p>
          </section>

          {/* Platzhalter für weitere Abschnitte */}
          <div className="p-8 bg-gray-50 border border-gray-100 text-sm text-gray-400 italic text-center">
            Hier folgen die detaillierten Datenschutzerklärungen (Analytics, Plugins, etc.)
          </div>
        </div>
      </div>
    </div>
  );
}
