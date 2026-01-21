import { useTranslation } from '../../TranslationContext';

export default function Checkout() {
  const { t } = useTranslation();
  // Stripe-Integration folgt
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">{t('shop.checkout.title')}</h1>
      <p className="mb-4 text-gray-600">{t('shop.checkout.info')}</p>
      {/* Stripe-Checkout-Formular folgt */}
    </div>
  );
}
