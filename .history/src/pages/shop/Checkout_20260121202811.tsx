import { useTranslation } from '../../TranslationContext';
import { useCart } from './CartContext';
import { shopProducts } from './products';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

export default function Checkout() {
  const { t } = useTranslation();
  const { cart, clearCart } = useCart();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [zip, setZip] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [acceptAGB, setAcceptAGB] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [acceptRevocation, setAcceptRevocation] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
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
        <h1 className="text-3xl font-bold mb-6">{t('shop.checkout.title')}</h1>
        <p className="mb-4 text-gray-600">{t('shop.cart.empty')}</p>
        <button className="text-[#D4AF37] underline" onClick={() => navigate('/shop')}>{t('shop.cart.backToShop')}</button>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !street.trim() || !houseNumber.trim() || !zip.trim() || !city.trim() || !country.trim()) {
      setError(t('shop.checkout.error.required'));
      return;
    }
    if (!acceptAGB) {
      setError(t('shop.checkout.error.agb'));
      return;
    }
    if (!acceptPrivacy) {
      setError(t('shop.checkout.error.privacy'));
      return;
    }
    if (!acceptRevocation) {
      setError(t('shop.checkout.error.revocation'));
      return;
    }
    setError('');
    // Stripe Checkout Session erstellen
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map(p => ({
            title: t(p.key + '.title'),
            price: p.price,
            quantity: p.quantity,
          })),
          customer: {
            firstName,
            lastName,
            email,
            phone,
            street,
            houseNumber,
            zip,
            city,
            country,
            newsletter,
          },
        }),
      });
      const data = await response.json();
      if (!data.id) throw new Error(data.error || 'Stripe error');
      window.location.href = data.url;
    } catch (err: any) {
      setError(err.message || 'Stripe error');
    }
  };

  if (success) {
    return (
      <div className="max-w-2xl mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl font-bold mb-6">{t('shop.checkout.successTitle')}</h1>
        <p className="mb-4 text-gray-600">{t('shop.checkout.successMsg')}</p>
        <button className="mt-6 bg-[#D4AF37] text-white px-6 py-3 rounded hover:bg-[#bfa14b]" onClick={() => navigate('/shop')}>{t('shop.cart.backToShop')}</button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">{t('shop.checkout.title')}</h1>
      <p className="mb-4 text-gray-600">{t('shop.checkout.info')}</p>
      <ul className="divide-y divide-gray-200 mb-6">
        {items.map((p) => (
          <li key={p.id} className="flex items-center py-3">
            <img src={p.image} alt={t(p.key + '.title')} className="w-12 h-12 rounded object-cover mr-3" />
            <div className="flex-1">
              <div className="font-semibold">{t(p.key + '.title')}</div>
              <div className="text-gray-500 text-sm">x{p.quantity}</div>
            </div>
            <div className="font-bold">{t('shop.price', { price: (p.price * p.quantity).toFixed(2) })}</div>
          </li>
        ))}
      </ul>
      <div className="font-bold text-xl mb-6">{t('shop.cart.total')}: {t('shop.price', { price: total.toFixed(2) })}</div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">{t('shop.checkout.firstName')}</label>
            <input type="text" className="w-full border rounded px-3 py-2" value={firstName} onChange={e => setFirstName(e.target.value)} required />
          </div>
          <div>
            <label className="block mb-1 font-medium">{t('shop.checkout.lastName')}</label>
            <input type="text" className="w-full border rounded px-3 py-2" value={lastName} onChange={e => setLastName(e.target.value)} required />
          </div>
        </div>
        <div>
          <label className="block mb-1 font-medium">{t('shop.checkout.email')}</label>
          <input type="email" className="w-full border rounded px-3 py-2" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div>
          <label className="block mb-1 font-medium">{t('shop.checkout.phone')}</label>
          <input type="tel" className="w-full border rounded px-3 py-2" value={phone} onChange={e => setPhone(e.target.value)} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">{t('shop.checkout.street')}</label>
            <input type="text" className="w-full border rounded px-3 py-2" value={street} onChange={e => setStreet(e.target.value)} required />
          </div>
          <div>
            <label className="block mb-1 font-medium">{t('shop.checkout.houseNumber')}</label>
            <input type="text" className="w-full border rounded px-3 py-2" value={houseNumber} onChange={e => setHouseNumber(e.target.value)} required />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1 font-medium">{t('shop.checkout.zip')}</label>
            <input type="text" className="w-full border rounded px-3 py-2" value={zip} onChange={e => setZip(e.target.value)} required />
          </div>
          <div>
            <label className="block mb-1 font-medium">{t('shop.checkout.city')}</label>
            <input type="text" className="w-full border rounded px-3 py-2" value={city} onChange={e => setCity(e.target.value)} required />
          </div>
          <div>
            <label className="block mb-1 font-medium">{t('shop.checkout.country')}</label>
            <input type="text" className="w-full border rounded px-3 py-2" value={country} onChange={e => setCountry(e.target.value)} required />
          </div>
        </div>
        <div className="space-y-2 mt-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" checked={acceptAGB} onChange={e => setAcceptAGB(e.target.checked)} required />
            <span>{t('shop.checkout.acceptAGB')} <a href="/agb" target="_blank" className="underline">{t('shop.checkout.agbLink')}</a></span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" checked={acceptPrivacy} onChange={e => setAcceptPrivacy(e.target.checked)} required />
            <span>{t('shop.checkout.acceptPrivacy')} <a href="/datenschutz" target="_blank" className="underline">{t('shop.checkout.privacyLink')}</a></span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" checked={acceptRevocation} onChange={e => setAcceptRevocation(e.target.checked)} required />
            <span>{t('shop.checkout.acceptRevocation')} <a href="/widerruf" target="_blank" className="underline">{t('shop.checkout.revocationLink')}</a></span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" checked={newsletter} onChange={e => setNewsletter(e.target.checked)} />
            <span>{t('shop.checkout.newsletterOptin')}</span>
          </label>
        </div>
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <button type="submit" className="w-full bg-[#D4AF37] text-white px-6 py-3 rounded hover:bg-[#bfa14b] disabled:opacity-50" disabled={!(acceptAGB && acceptPrivacy && acceptRevocation)}>
          {t('shop.checkout.submit')}
        </button>
      </form>
    </div>
  );
}
