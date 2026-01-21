
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

        {/* All Main Links, grouped */}
        <div className="flex flex-col gap-4 text-[10px] tracking-widest uppercase text-white/60">
          {/* Hauptnavigation */}
          <div className="flex flex-wrap gap-6">
            <Link to="/" className="hover:text-[#D4AF37] transition-colors">{t('menu.home') || 'Home'}</Link>
            <Link to="/produkte" className="hover:text-[#D4AF37] transition-colors">{t('menu.products')}</Link>
            <Link to="/abo" className="hover:text-[#D4AF37] transition-colors">{t('menu.subscriptions')}</Link>
            <Link to="/shop" className="hover:text-[#D4AF37] transition-colors">{t('menu.shop')}</Link>
            <Link to="/blog" className="hover:text-[#D4AF37] transition-colors">{t('menu.blog')}</Link>
            <Link to="/ueber" className="hover:text-[#D4AF37] transition-colors">{t('menu.about')}</Link>
            <Link to="/kontakt" className="hover:text-[#D4AF37] transition-colors">{t('menu.contact')}</Link>
            <Link to="/faq" className="hover:text-[#D4AF37] transition-colors">FAQ</Link>
          </div>
          {/* Shop Unterseiten */}
          <div className="flex flex-wrap gap-6">
            <Link to="/cart" className="hover:text-[#D4AF37] transition-colors">{t('shop.cart.title')}</Link>
            <Link to="/checkout" className="hover:text-[#D4AF37] transition-colors">{t('shop.checkout.title')}</Link>
          </div>
          {/* Rechtliches */}
          <div className="flex flex-wrap gap-6">
            <Link to="/impressum" className="hover:text-[#D4AF37] transition-colors">{t('footer.impressum')}</Link>
            <Link to="/datenschutz" className="hover:text-[#D4AF37] transition-colors">{t('footer.privacy')}</Link>
            <Link to="/agb" className="hover:text-[#D4AF37] transition-colors">{t('footer.terms')}</Link>
          </div>
          {/* Account */}
          <div className="flex flex-wrap gap-6">
            <Link to="/login" className="hover:text-[#D4AF37] transition-colors">{t('menu.login')}</Link>
            <Link to="/register" className="hover:text-[#D4AF37] transition-colors">{t('register.title')}</Link>
            <Link to="/dashboard" className="hover:text-[#D4AF37] transition-colors">{t('menu.dashboard')}</Link>
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
