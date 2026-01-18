import Layout from '../components/layout/Layout';
import { useTranslation } from '../../translations';

export default function Produkte() {
  const { t } = useTranslation();
  return (
    <Layout darkBg={false}>
      <div className="min-h-screen flex items-center justify-center px-4 bg-white">
        <div className="w-full max-w-md relative z-10">
          <div className="text-center mb-12">
            <div className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-[#D4AF37]">Owona Media</div>
            <h1 className="text-3xl font-light text-black mb-2">Unsere Produkte</h1>
            <p className="text-gray-400 text-sm">Entdecken Sie unsere digitalen Lösungen für Unternehmen: Websites, Webapps und Automatisierung. Maßgeschneidert für Ihren Erfolg.</p>
          </div>
          <ul className="space-y-6 bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 rounded-2xl">
            <li>
              <b>Starter Website</b>: Das digitale Fundament für moderne Marken.
            </li>
            <li>
              <b>Professional Ecosystem</b>: Skalierbare Plattform mit Automatisierung.
            </li>
            <li>
              <b>Enterprise Apps</b>: Individuelle Webanwendungen & Infrastruktur.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
