
import { Link } from 'react-router-dom';
import { useTranslation } from '../../TranslationContext';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="px-8 py-16 border-t border-white/5 opacity-80 hover:opacity-100 transition-opacity bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Copyright & Brand */}
        <div className="flex flex-col gap-2">
          <div className="text-sm font-bold tracking-widest uppercase">Owona Media</div>
          <div className="text-[10px] text-white/40 tracking-widest uppercase">
            © {year} {t('brand')}
          </div>
        </div>

        {/* All Main Links, grouped as lists */}
        <div className="flex flex-col gap-6 text-[10px] tracking-widest uppercase text-white/60">
          {/* Hauptnavigation */}
          <div>
            <div className="font-bold mb-2 text-white/80">{t('menu.home') || 'Navigation'}</div>
            <ul className="flex flex-col gap-1">
              <li><Link to="/" className="hover:text-[#D4AF37] transition-colors">{t('menu.home') || 'Home'}</Link></li>
              <li><Link to="/produkte" className="hover:text-[#D4AF37] transition-colors">{t('menu.products')}</Link></li>
              <li><Link to="/abo" className="hover:text-[#D4AF37] transition-colors">{t('menu.subscriptions')}</Link></li>
              <li><Link to="/shop" className="hover:text-[#D4AF37] transition-colors">{t('menu.shop')}</Link></li>
              <li><Link to="/blog" className="hover:text-[#D4AF37] transition-colors">{t('menu.blog')}</Link></li>
              <li><Link to="/ueber" className="hover:text-[#D4AF37] transition-colors">{t('menu.about')}</Link></li>
              <li><Link to="/kontakt" className="hover:text-[#D4AF37] transition-colors">{t('menu.contact')}</Link></li>
              <li><Link to="/faq" className="hover:text-[#D4AF37] transition-colors">FAQ</Link></li>
            </ul>
          </div>
          {/* Shop Unterseiten */}
          <div>
            <div className="font-bold mb-2 text-white/80">Shop</div>
            <ul className="flex flex-col gap-1">
              <li><Link to="/cart" className="hover:text-[#D4AF37] transition-colors">{t('shop.cart.title')}</Link></li>
              <li><Link to="/checkout" className="hover:text-[#D4AF37] transition-colors">{t('shop.checkout.title')}</Link></li>
            </ul>
          </div>
          {/* Rechtliches */}
          <div>
            <div className="font-bold mb-2 text-white/80">{t('footer.impressum') || 'Rechtliches'}</div>
            <ul className="flex flex-col gap-1">
              <li><Link to="/impressum" className="hover:text-[#D4AF37] transition-colors">{t('footer.impressum')}</Link></li>
              <li><Link to="/datenschutz" className="hover:text-[#D4AF37] transition-colors">{t('footer.privacy')}</Link></li>
              <li><Link to="/agb" className="hover:text-[#D4AF37] transition-colors">{t('footer.terms')}</Link></li>
            </ul>
          </div>
          {/* Account */}
          <div>
            <div className="font-bold mb-2 text-white/80">Account</div>
            <ul className="flex flex-col gap-1">
              <li><Link to="/login" className="hover:text-[#D4AF37] transition-colors">{t('menu.login')}</Link></li>
              <li><Link to="/register" className="hover:text-[#D4AF37] transition-colors">{t('register.title')}</Link></li>
              <li><Link to="/dashboard" className="hover:text-[#D4AF37] transition-colors">{t('menu.dashboard')}</Link></li>
            </ul>
          </div>
        </div>

        {/* Quick Contact (Optional small print) */}
        <div className="text-[10px] text-white/30 text-right hidden md:block">
          <p>Ahornstrasse 52, 68542 Heddesheim</p>
          <p>salomon@owona.de</p>
        </div>
      </div>
    </footer>
  );
}
