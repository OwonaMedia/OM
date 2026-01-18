import Layout from '../components/layout/Layout';
import { useTranslation } from '../../translations';

export default function Abo() {
  const { t } = useTranslation();
  return (
    <Layout darkBg={false}>
      <div className="min-h-screen flex items-center justify-center px-4 bg-white">
        <div className="w-full max-w-md relative z-10">
          <div className="text-center mb-12">
            <div className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-[#D4AF37]">Owona Media</div>
            <h1 className="text-3xl font-light text-black mb-2">Abo-Modelle</h1>
            <p className="text-gray-400 text-sm">Unsere flexiblen Wartungs- und Service-Abos sorgen für Sicherheit, Wachstum und sorgenfreie IT.</p>
          </div>
          <ul className="space-y-6 bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 rounded-2xl">
            <li>
              <b>Basis Wartung</b>: Essenzielle Sicherheit & Geschwindigkeit.
            </li>
            <li>
              <b>Pro Wachstum</b>: Skalieren Sie Ihre digitale Reichweite.
            </li>
            <li>
              <b>Vollmanagement</b>: Ihre ausgelagerte IT-Abteilung.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
