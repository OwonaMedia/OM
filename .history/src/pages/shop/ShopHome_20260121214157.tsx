
import { shopProducts } from './products';
import { useTranslation } from '../../TranslationContext';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export default function ShopHome() {
  const { t } = useTranslation();
  const trustpilotRef = useRef(null);

  useEffect(() => {
    const scriptId = 'trustpilot-widget-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
      script.async = true;
      script.onload = () => {
        if (window.Trustpilot) {
          window.Trustpilot.loadFromElement(trustpilotRef.current, true);
        }
      };
      document.body.appendChild(script);
    } else {
      if (window.Trustpilot) {
        window.Trustpilot.loadFromElement(trustpilotRef.current, true);
      }
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">{t('shop.title')}</h1>
      <p className="mb-10 text-gray-500 text-lg">{t('shop.intro')}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {shopProducts.map((p) => (
          <div key={p.id} className="bg-white rounded-xl shadow p-4 flex flex-col">
            <img src={p.image} alt={t(p.key + '.title')} className="rounded mb-4 h-48 object-cover" />
            <h2 className="text-xl font-semibold mb-2">{t(p.key + '.title')}</h2>
            <p className="mb-2 text-gray-600">{t(p.key + '.desc')}</p>
            <div className="font-bold text-lg mb-4">{t('shop.price', { price: p.price })}</div>
            <Link to={`/shop/${p.id}`} className="mt-auto bg-[#D4AF37] text-white px-4 py-2 rounded hover:bg-[#bfa14b] text-center">{t('shop.details')}</Link>
          </div>
        ))}
      </div>
      {/* Trustpilot TrustBox Widget */}
      <div className="mt-16 flex justify-center">
        <div
          ref={trustpilotRef}
          className="trustpilot-widget"
          data-locale="de-DE"
          data-template-id="53aa8807dec7e10d38f59f32"
          data-businessunit-id="37w5KOx8wSlzxmqU"
          data-style-height="52px"
          data-style-width="100%"
          data-theme="light"
        >
          <a href="https://de.trustpilot.com/review/owona.de" target="_blank" rel="noopener noreferrer">
            Bewertungen auf Trustpilot
          </a>
        </div>
      </div>
    </div>
  );
}
