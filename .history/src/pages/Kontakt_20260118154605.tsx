import Layout from '../components/layout/Layout';
import { useTranslation } from '../translations';

export default function Kontakt() {
  const { t } = useTranslation();
  return (
    <Layout darkBg={false}>
      <div className="min-h-screen flex items-center justify-center px-4 bg-white">
        <div className="w-full max-w-md relative z-10">
          <div className="text-center mb-12">
            <div className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-[#D4AF37]">Owona Media</div>
            <h1 className="text-3xl font-light text-black mb-2">Kontakt</h1>
            <p className="text-gray-400 text-sm">Sie haben Fragen oder möchten ein Projekt starten? Kontaktieren Sie uns – wir freuen uns auf Ihre Nachricht!</p>
          </div>
          <form className="space-y-6 bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 rounded-2xl">
            <input type="text" required placeholder="Name" className="w-full bg-gray-50 border border-gray-200 p-4 text-black focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all rounded-lg" />
            <input type="email" required placeholder="Email" className="w-full bg-gray-50 border border-gray-200 p-4 text-black focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all rounded-lg" />
            <textarea rows={4} required placeholder="Ihre Nachricht" className="w-full bg-gray-50 border border-gray-200 p-4 text-black focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all rounded-lg resize-none"></textarea>
            <button type="submit" className="w-full bg-black text-white py-4 rounded-lg uppercase tracking-widest text-xs hover:bg-[#D4AF37] hover:text-white transition-all">Senden</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
