// Impressum Seite
// TODO: In Schritt 4 implementieren


import Layout from '../../components/layout/Layout';
import { useTranslation } from 'react-i18next';

export default function Impressum() {
  const { t } = useTranslation();
  return (
    <Layout darkBg={false}>
      <section className="min-h-screen py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl mb-8">{t('legal.impressumTitle', 'Impressum')}</h1>
          <div className="prose max-w-none whitespace-pre-line">{t('legal.impressum')}</div>
        </div>
      </section>
    </Layout>
  );
}
