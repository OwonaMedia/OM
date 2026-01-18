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
            <h1 className="text-3xl font-light text-black mb-2">{t('products.title')}</h1>
            <p className="text-gray-400 text-sm">{t('products.desc')}</p>
          </div>
          <ul className="space-y-6 bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 rounded-2xl">
            <li>
              <b>{t('product.starter.title')}</b>: {t('product.starter.subtitle')}
            </li>
            <li>
              <b>{t('product.pro.title')}</b>: {t('product.pro.subtitle')}
            </li>
            <li>
              <b>{t('product.enterprise.title')}</b>: {t('product.enterprise.subtitle')}
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
