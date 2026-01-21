import { useTranslation } from '../TranslationContext';

export default function Kontakt() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-white via-[#f8f8f8] to-white shadow-[0_8px_32px_rgba(0,0,0,0.07)] rounded-3xl border border-[#ececec] py-16">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-[#D4AF37]">Owona Media</div>
          <h1 className="text-4xl font-light text-black mb-4">{t('contact.label')}</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t('contact.desc')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Kontaktformular Kachel */}
          <div className="bg-white border border-[#D4AF37]/30 rounded-2xl shadow-lg p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all col-span-2">
            <h2 className="text-xl font-semibold mb-4 font-serif tracking-tight text-black group-hover:text-[#D4AF37] transition-colors">{t('contact.label')}</h2>
            <form className="space-y-4 w-full max-w-sm mx-auto">
              <input type="text" required placeholder={t('contact.form.name')} className="w-full bg-gray-50 border border-gray-200 p-4 text-black focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all rounded-lg" />
              <input type="email" required placeholder={t('contact.form.email')} className="w-full bg-gray-50 border border-gray-200 p-4 text-black focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all rounded-lg" />
              <textarea rows={4} required placeholder={t('contact.form.details')} className="w-full bg-gray-50 border border-gray-200 p-4 text-black focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all rounded-lg resize-none"></textarea>
              <button type="submit" className="w-full bg-black text-white py-4 rounded-lg uppercase tracking-widest text-xs hover:bg-[#D4AF37] hover:text-white transition-all">{t('contact.send')}</button>
            </form>
          </div>
          {/* Kontaktinfos Kachel */}
          <div className="bg-white border border-[#D4AF37]/30 rounded-2xl shadow-lg p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all">
            <h2 className="text-xl font-semibold mb-4 font-serif tracking-tight text-black group-hover:text-[#D4AF37] transition-colors">{t('contact.info')}</h2>
            <div className="text-gray-400 mb-2">{t('contact.address')}</div>
            <div className="text-gray-400 mb-2">{t('contact.email.label')}: <a href="mailto:salomon@owona.de" className="text-[#D4AF37] hover:underline">salomon@owona.de</a></div>
            <div className="text-gray-400 mb-2">{t('contact.phone')}: <a href="tel:+4917680808080" className="text-[#D4AF37] hover:underline">+49 176 80808080</a></div>
            <div className="text-gray-400 mt-4 text-xs">{t('contact.hours')}</div>
          </div>
        </div>
        <div className="text-xs text-gray-400 text-center mt-8 max-w-2xl mx-auto">
          <b>{t('contact.hint.label')}</b> {t('contact.hint')}
        </div>
      </div>
    </div>
  );
}
