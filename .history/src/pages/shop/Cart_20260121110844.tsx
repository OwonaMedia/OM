import { useTranslation } from '../../TranslationContext';
import { useCart } from './CartContext';
import { shopProducts } from './products';
import { Link, useNavigate } from 'react-router-dom';

export default function Cart() {
  const { t } = useTranslation();
  const { cart, removeFromCart, setQuantity, clearCart } = useCart();
  const navigate = useNavigate();
  const items = cart.map((item) => {
    const product = shopProducts.find((p) => p.id === item.id);
    if (!product) return null;
    return { ...product, quantity: item.quantity };
  }).filter(Boolean);
  const total = items.reduce((sum, p) => sum + (p.price * p.quantity), 0);

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-6">{t('shop.cart.title')}</h1>
        <p className="mb-4 text-gray-600">{t('shop.cart.empty')}</p>
        <Link to="/shop" className="text-[#D4AF37] underline">{t('shop.cart.backToShop')}</Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">{t('shop.cart.title')}</h1>
      <ul className="divide-y divide-gray-200 mb-6">
        {items.map((p) => (
          <li key={p.id} className="flex items-center py-4">
            <img src={p.image} alt={t(p.key + '.title')} className="w-16 h-16 rounded object-cover mr-4" />
            <div className="flex-1">
              <div className="font-semibold">{t(p.key + '.title')}</div>
              <div className="text-gray-500">{t('shop.price', { price: p.price })}</div>
            </div>
            <input type="number" min={1} value={p.quantity} onChange={e => setQuantity(p.id, Math.max(1, Number(e.target.value)))} className="w-16 border rounded px-2 py-1 mr-2" />
            <button onClick={() => removeFromCart(p.id)} className="text-red-500 hover:underline">{t('shop.cart.remove')}</button>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mb-6">
        <div className="font-bold text-xl">{t('shop.cart.total')}: {t('shop.price', { price: total.toFixed(2) })}</div>
        <button onClick={clearCart} className="text-gray-500 underline">{t('shop.cart.clear')}</button>
      </div>
      <button onClick={() => navigate('/checkout')} className="bg-[#D4AF37] text-white px-6 py-3 rounded hover:bg-[#bfa14b] w-full">{t('shop.cart.checkout')}</button>
    </div>
  );
}
