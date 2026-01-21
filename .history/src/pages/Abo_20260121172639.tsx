import { useTranslation } from '../TranslationContext';

export default function Abo() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-white via-[#f8f8f8] to-white shadow-[0_8px_32px_rgba(0,0,0,0.07)] rounded-3xl border border-[#ececec] py-16">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-[#D4AF37]">Owona Media</div>
          <h1 className="text-4xl font-light text-black mb-4">{t('subs.title')}</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t('subs.desc')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Abo Kachel */}
          <div className="bg-white border border-[#D4AF37]/30 rounded-2xl shadow-lg p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all group">
            <span className="text-[#D4AF37] text-xs font-bold tracking-widest mb-2">{t('subs.basic.badge')}</span>
            <h2 className="text-2xl font-semibold mb-2 font-serif tracking-tight text-black group-hover:text-[#D4AF37] transition-colors">{t('subs.basic.title')}</h2>
            <div className="text-gray-500 mb-4 text-sm">{t('subs.basic.desc')}</div>
            <ul className="text-left text-xs text-gray-600 mb-6 space-y-1">
              <li>✓ {t('subs.basic.feature1')}</li>
              <li>✓ {t('subs.basic.feature2')}</li>
              <li>✓ {t('subs.basic.feature3')}</li>
              <li>✓ {t('subs.basic.feature4')}</li>
            </ul>
            <div className="mt-auto">
              <div className="price-tag mb-4 text-2xl font-light text-black">{t('subs.basic.price')} <span className="text-xs opacity-40 ml-2">{t('price.fixed')}</span></div>
              <button className="px-6 py-2 rounded bg-[#D4AF37] text-white font-semibold uppercase tracking-widest text-xs hover:bg-black hover:text-[#D4AF37] border border-[#D4AF37] transition">{t('cta.details')}</button>
            </div>
          </div>
          {/* Pro Abo Kachel */}
          <div className="bg-white border border-[#D4AF37]/30 rounded-2xl shadow-lg p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all group">
            <span className="text-[#D4AF37] text-xs font-bold tracking-widest mb-2">{t('subs.pro.badge')}</span>
            <h2 className="text-2xl font-semibold mb-2 font-serif tracking-tight text-black group-hover:text-[#D4AF37] transition-colors">{t('subs.pro.title')}</h2>
            <div className="text-gray-500 mb-4 text-sm">{t('subs.pro.desc')}</div>
            <ul className="text-left text-xs text-gray-600 mb-6 space-y-1">
              <li>✓ {t('subs.pro.feature1')}</li>
              <li>✓ {t('subs.pro.feature2')}</li>
              <li>✓ {t('subs.pro.feature3')}</li>
              <li>✓ {t('subs.pro.feature4')}</li>
            </ul>
            <div className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold px-3 py-1 rounded mb-2">{t('most.popular')}</div>
            <div className="mt-auto">
              <div className="price-tag mb-4 text-2xl font-light text-black">{t('subs.pro.price')} <span className="text-xs opacity-40 ml-2">{t('price.fixed')}</span></div>
              <button className="px-6 py-2 rounded bg-[#D4AF37] text-white font-semibold uppercase tracking-widest text-xs hover:bg-black hover:text-[#D4AF37] border border-[#D4AF37] transition">{t('cta.details')}</button>
            </div>
          </div>
          {/* Full Abo Kachel */}
          <div className="bg-white border border-[#D4AF37]/30 rounded-2xl shadow-lg p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all group">
            <span className="text-[#D4AF37] text-xs font-bold tracking-widest mb-2">{t('subs.full.badge')}</span>
            <h2 className="text-2xl font-semibold mb-2 font-serif tracking-tight text-black group-hover:text-[#D4AF37] transition-colors">{t('subs.full.title')}</h2>
            <div className="text-gray-500 mb-4 text-sm">{t('subs.full.desc')}</div>
            <ul className="text-left text-xs text-gray-600 mb-6 space-y-1">
              <li>✓ {t('subs.full.feature1')}</li>
              <li>✓ {t('subs.full.feature2')}</li>
              <li>✓ {t('subs.full.feature3')}</li>
              <li>✓ {t('subs.full.feature4')}</li>
            </ul>
            <div className="mt-auto">
              <div className="price-tag mb-4 text-2xl font-light text-black">{t('subs.full.price')} <span className="text-xs opacity-40 ml-2">{t('price.fixed')}</span></div>
              <button className="px-6 py-2 rounded bg-[#D4AF37] text-white font-semibold uppercase tracking-widest text-xs hover:bg-black hover:text-[#D4AF37] border border-[#D4AF37] transition">{t('cta.details')}</button>
            </div>
          </div>
        </div>
        <div className="text-xs text-gray-400 text-center mt-12 max-w-2xl mx-auto">
          <b>{t('subs.note.label')}</b> {t('subs.note')}
        </div>
      </div>
    </div>
  );
}
