import Layout from '../components/layout/Layout';
import { useTranslation } from '../../translations';

export default function Ueber() {
  const { t } = useTranslation();
  return (
    <Layout darkBg={false}>
      <div className="min-h-screen flex items-center justify-center px-4 bg-white">
        <div className="w-full max-w-md relative z-10">
          <div className="text-center mb-12">
            <div className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-[#D4AF37]">Owona Media</div>
            <h1 className="text-3xl font-light text-black mb-2">Über Owona Media</h1>
            <p className="text-gray-400 text-sm">Wir sind eine Boutique Digitalagentur für Webentwicklung, Automatisierung und digitale Markenführung. Unser Gründer Salomon Owona steht für Qualität und Innovation.</p>
          </div>
          <div className="bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 rounded-2xl text-gray-700 text-sm">
            <p>Mit über 5 Jahren Erfahrung und mehr als 50 Projekten bieten wir individuelle Lösungen für Unternehmen, die keine Kompromisse machen wollen. Unser Fokus liegt auf Automatisierung, Performance und exklusivem Design.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
