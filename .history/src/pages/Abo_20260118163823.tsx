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
            <h1 className="text-3xl font-light text-black mb-2">{t('subs.title')}</h1>
            <p className="text-gray-400 text-sm">{t('subs.desc')}</p>
          </div>
          <ul className="space-y-6 bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 rounded-2xl">
            <li>
              <b>{t('subs.basic.title')}</b>: {t('subs.basic.desc')}
            </li>
            <li>
              <b>{t('subs.pro.title')}</b>: {t('subs.pro.desc')}
            </li>
            <li>
              <b>{t('subs.full.title')}</b>: {t('subs.full.desc')}
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
