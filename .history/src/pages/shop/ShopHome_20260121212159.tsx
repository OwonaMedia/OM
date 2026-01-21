import { shopProducts } from './products';
import { useTranslation } from '../../TranslationContext';
import { Link } from 'react-router-dom';

export default function ShopHome() {
  const { t } = useTranslation();
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
      {/* Trustpilot Widget */}
      <div className="mt-16 flex justify-center">
        <div id="trustpilot-widget"></div>
      </div>
      <script dangerouslySetInnerHTML={{__html: `
        (function(w,d,s,r,n){w.TrustpilotObject=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)};
            a=d.createElement(s);a.async=1;a.src=r;a.type='text/java'+s;f=d.getElementsByTagName(s)[0];
            f.parentNode.insertBefore(a,f)})(window,document,'script', 'https://invitejs.trustpilot.com/tp.min.js', 'tp');
            tp('register', '37w5KOx8wSlzxmqU');
      `}} />
    </div>
  );
}
