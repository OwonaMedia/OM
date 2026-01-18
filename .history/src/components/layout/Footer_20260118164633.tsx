
import { Link } from 'react-router-dom';
import { useTranslation } from '../translations';

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

        {/* Legal Links */}
        <div className="flex flex-wrap gap-8 text-[10px] tracking-widest uppercase text-white/60">
          <Link to="/impressum" className="hover:text-[#D4AF37] transition-colors">
            {t('footer.impressum')}
          </Link>
          <Link to="/datenschutz" className="hover:text-[#D4AF37] transition-colors">
            {t('footer.privacy')}
          </Link>
          <Link to="/agb" className="hover:text-[#D4AF37] transition-colors">
            {t('footer.terms')}
          </Link>
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
