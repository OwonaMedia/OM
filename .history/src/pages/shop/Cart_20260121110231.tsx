import { useTranslation } from '../../TranslationContext';

export default function Cart() {
  const { t } = useTranslation();
  // Platzhalter für Warenkorb-Logik
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">{t('shop.cart.title')}</h1>
      <p className="mb-4 text-gray-600">{t('shop.cart.empty')}</p>
      {/* Hier später Warenkorb-Items, Gesamtpreis, Checkout-Button */}
    </div>
  );
}
