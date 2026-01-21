

import { useTranslation } from '../TranslationContext';

export default function ProductStarter() {
  const { t } = useTranslation();
  return (
    <div className="max-w-3xl mx-auto py-24 px-6 bg-gradient-to-br from-white via-[#f8f8f8] to-white shadow-[0_8px_32px_rgba(0,0,0,0.07)] rounded-3xl border border-[#ececec]">
      <h1 className="text-5xl font-light mb-8 text-[#D4AF37] text-center tracking-tight">{t('product.starter.detail.title')}</h1>
      <div className="flex justify-center mb-12">
        <div className="h-0.5 w-32 bg-[#D4AF37] rounded-full" />
      </div>
      <div className="space-y-10 text-gray-900 text-xl leading-relaxed font-light">
        <p>{t('product.starter.detail.target')}</p>
        <p>{t('product.starter.detail.features')}</p>
        <p>{t('product.starter.detail.benefits')}</p>
        <p>{t('product.starter.detail.tech')}</p>
        <p>{t('product.starter.detail.service')}</p>
        <p>{t('product.starter.detail.addons')}</p>
      </div>
      <div className="flex justify-center mt-16">
        <a href="/kontakt" className="px-8 py-3 rounded-full bg-[#D4AF37] text-white font-semibold uppercase tracking-widest text-lg shadow hover:bg-black hover:text-[#D4AF37] border border-[#D4AF37] transition">Beratung</a>
      </div>
    </div>
  );
}
