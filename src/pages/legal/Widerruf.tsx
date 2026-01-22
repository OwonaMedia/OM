import Layout from '../../components/layout/Layout';
import { useTranslation } from 'react-i18next';

export default function Widerruf() {
  const { t } = useTranslation();
  return (
    <Layout darkBg={false}>
      <section className="min-h-screen py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl mb-8">{t('legal.widerrufTitle', 'Widerrufsrecht')}</h1>
          <div className="prose max-w-none whitespace-pre-line">{t('legal.widerruf')}</div>
        </div>
      </section>
    </Layout>
  );
}
