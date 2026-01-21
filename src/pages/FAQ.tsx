
import { useTranslation } from '../TranslationContext.tsx';
import Layout from '../components/layout/Layout';

const faqKeys = [
  {
    category: 'faq.general',
    qas: [
      { q: 'faq.general.q1', a: 'faq.general.a1' },
      { q: 'faq.general.q2', a: 'faq.general.a2' },
      { q: 'faq.general.q3', a: 'faq.general.a3' },
    ]
  },
  {
    category: 'faq.services',
    qas: [
      { q: 'faq.services.q1', a: 'faq.services.a1' },
      { q: 'faq.services.q2', a: 'faq.services.a2' },
      { q: 'faq.services.q3', a: 'faq.services.a3' },
    ]
  },
  {
    category: 'faq.process',
    qas: [
      { q: 'faq.process.q1', a: 'faq.process.a1' },
      { q: 'faq.process.q2', a: 'faq.process.a2' },
      { q: 'faq.process.q3', a: 'faq.process.a3' },
    ]
  },
  {
    category: 'faq.tech',
    qas: [
      { q: 'faq.tech.q1', a: 'faq.tech.a1' },
      { q: 'faq.tech.q2', a: 'faq.tech.a2' },
      { q: 'faq.tech.q3', a: 'faq.tech.a3' },
    ]
  },
  {
    category: 'faq.pricing',
    qas: [
      { q: 'faq.pricing.q1', a: 'faq.pricing.a1' },
      { q: 'faq.pricing.q2', a: 'faq.pricing.a2' },
      { q: 'faq.pricing.q3', a: 'faq.pricing.a3' },
    ]
  },
  {
    category: 'faq.support',
    qas: [
      { q: 'faq.support.q1', a: 'faq.support.a1' },
      { q: 'faq.support.q2', a: 'faq.support.a2' },
      { q: 'faq.support.q3', a: 'faq.support.a3' },
    ]
  },
];


export default function FAQ() {
  const { t } = useTranslation();
  return (
    <Layout darkBg={false}>
      <div className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6">{t('faq.title')}</h1>
        <p className="mb-10 text-gray-500">
          {t('faq.intro')}
          <a href="/kontakt" className="text-[#D4AF37] underline">{t('faq.contactLink')}</a>
        </p>
        {faqKeys.map(({ category, qas }) => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t(category)}</h2>
            <div className="space-y-4">
              {qas.map(({ q, a }) => (
                <details key={q} className="bg-white border border-gray-200 rounded-lg p-4">
                  <summary className="font-medium cursor-pointer text-lg">{t(q)}</summary>
                  <div className="mt-2 text-gray-700 text-base">{t(a)}</div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
