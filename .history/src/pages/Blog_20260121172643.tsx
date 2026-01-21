import { useTranslation } from '../TranslationContext';

export default function Blog() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-white via-[#f8f8f8] to-white shadow-[0_8px_32px_rgba(0,0,0,0.07)] rounded-3xl border border-[#ececec]">
      <div className="w-full max-w-2xl relative z-10">
        <div className="text-center mb-12">
          <div className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-[#D4AF37]">Owona Media</div>
          <h1 className="text-3xl font-light text-black mb-2">{t('blog.title')}</h1>
          <p className="text-gray-400 text-sm">{t('blog.desc')}</p>
        </div>
        <div className="space-y-8">
          {/* Blog-Kachel 1: Webdesign Trends */}
          <div className="bg-white p-8 shadow border border-gray-100 rounded-2xl">
            <h2 className="text-xl font-bold mb-2">{t('blog.post1.title')}</h2>
            <p className="text-gray-500 mb-2">{t('blog.post1.excerpt')}</p>
            <span className="text-xs text-gray-400">{t('blog.post1.date')}</span>
          </div>
          {/* Blog-Kachel 2: DSGVO für Unternehmen */}
          <div className="bg-white p-8 shadow border border-gray-100 rounded-2xl">
            <h2 className="text-xl font-bold mb-2">{t('blog.post2.title')}</h2>
            <p className="text-gray-500 mb-2">{t('blog.post2.excerpt')}</p>
            <span className="text-xs text-gray-400">{t('blog.post2.date')}</span>
          </div>
          {/* Blog-Kachel 3: Automatisierung */}
          <div className="bg-white p-8 shadow border border-gray-100 rounded-2xl">
            <h2 className="text-xl font-bold mb-2">{t('blog.post3.title')}</h2>
            <p className="text-gray-500 mb-2">{t('blog.post3.excerpt')}</p>
            <span className="text-xs text-gray-400">{t('blog.post3.date')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
