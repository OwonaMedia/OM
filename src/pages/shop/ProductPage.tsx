
import { useParams, useNavigate } from 'react-router-dom';
import { shopProducts } from './products';
import { useTranslation } from '../../TranslationContext';
import { useCart } from './CartContext';

export default function ProductPage() {
  const { id } = useParams();
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const product = shopProducts.find((p) => p.id === id);
  if (!product) return <div className="p-8">{t('shop.notfound')}</div>;
  const handleAdd = () => {
    addToCart(product.id);
    navigate('/cart');
  };
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <img src={product.image} alt={t(product.key + '.title')} className="rounded mb-6 w-full h-64 object-cover" />
      <h1 className="text-3xl font-bold mb-4">{t(product.key + '.title')}</h1>
      <p className="mb-4 text-gray-600">{t(product.key + '.desc')}</p>
      <div className="font-bold text-2xl mb-6">{t('shop.price', { price: product.price })}</div>
      <button className="bg-[#D4AF37] text-white px-6 py-3 rounded hover:bg-[#bfa14b]" onClick={handleAdd}>{t('shop.addToCart')}</button>
    </div>
  );
}
