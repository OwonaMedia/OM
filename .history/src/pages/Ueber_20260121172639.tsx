import { useTranslation } from '../TranslationContext';

export default function Ueber() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-white via-[#f8f8f8] to-white shadow-[0_8px_32px_rgba(0,0,0,0.07)] rounded-3xl border border-[#ececec] py-16">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-[#D4AF37]">Owona Media</div>
          <h1 className="text-4xl font-light text-black mb-4">{t('about.title')}</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t('about.desc')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Gründer Kachel */}
          <div className="bg-white border border-[#D4AF37]/30 rounded-2xl shadow-lg p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all group">
            <div className="w-20 h-20 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-4">
              <span className="text-4xl">👨🏾‍💻</span>
            </div>
            <h2 className="text-xl font-semibold mb-2 font-serif tracking-tight text-black group-hover:text-[#D4AF37] transition-colors">{t('about.title')}</h2>
            <div className="text-gray-500 mb-4 text-sm">{t('about.role')}</div>
            <ul className="text-left text-xs text-gray-600 mb-6 space-y-1">
              <li>✓ {t('about.years')} 5+</li>
              <li>✓ {t('about.projects')} 50+</li>
              <li>✓ {t('about.feature1')}</li>
              <li>✓ {t('about.feature2')}</li>
            </ul>
          </div>
          {/* Mission Kachel */}
          <div className="bg-white border border-[#D4AF37]/30 rounded-2xl shadow-lg p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all group">
            <div className="w-20 h-20 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-4">
              <span className="text-4xl">🚀</span>
            </div>
            <h2 className="text-xl font-semibold mb-2 font-serif tracking-tight text-black group-hover:text-[#D4AF37] transition-colors">{t('about.mission')}</h2>
            <div className="text-gray-500 mb-4 text-sm">{t('about.more')}</div>
            <ul className="text-left text-xs text-gray-600 mb-6 space-y-1">
              <li>✓ {t('about.mission.list1')}</li>
              <li>✓ {t('about.mission.list2')}</li>
              <li>✓ {t('about.mission.list3')}</li>
              <li>✓ {t('about.mission.list4')}</li>
            </ul>
          </div>
          {/* Werte Kachel */}
          <div className="bg-white border border-[#D4AF37]/30 rounded-2xl shadow-lg p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all group">
            <div className="w-20 h-20 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-4">
              <span className="text-4xl">🌱</span>
            </div>
            <h2 className="text-xl font-semibold mb-2 font-serif tracking-tight text-black group-hover:text-[#D4AF37] transition-colors">{t('about.values')}</h2>
            <div className="text-gray-500 mb-4 text-sm">{t('about.values.text')}</div>
            <ul className="text-left text-xs text-gray-600 mb-6 space-y-1">
              <li>✓ {t('about.values.list1')}</li>
              <li>✓ {t('about.values.list2')}</li>
              <li>✓ {t('about.values.list3')}</li>
              <li>✓ {t('about.values.list4')}</li>
            </ul>
          </div>
        </div>
        <div className="text-xs text-gray-400 text-center mt-12 max-w-2xl mx-auto">
          <b>{t('about.hint.label')}</b> {t('about.hint')}
        </div>
      </div>
    </div>
  );
}
