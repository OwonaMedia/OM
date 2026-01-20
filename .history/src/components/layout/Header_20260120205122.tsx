
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../TranslationContext';
import LogoO from '../LogoO';

export default function Header() {
  const { t, lang, setLang } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/5' : 'py-8'}`}>
        <div className="max-w-[1800px] mx-auto px-8 flex justify-between items-center">
          <Link to="/" className="text-white hover:text-white/80 transition-all text-xl md:text-2xl font-light tracking-[0.4em] z-[120] flex items-center gap-1" onClick={closeMenu}>
            <span className="inline-block align-middle" style={{ width: '1.5em', height: '1.5em' }}>
              <LogoO className="w-[1.5em] h-[1.5em] object-contain inline-block align-middle" style={{ minWidth: 37, minHeight: 37, maxWidth: 48, maxHeight: 48, transform: 'scale(1.5)' }} />
            </span>
            <span className="inline-block align-middle ml-3 tracking-[0.4em] text-[1.5em]">MEDIA</span>
          </Link>
          {/* Hamburger Icon */}
          <div 
            id="hamburger" 
            onClick={toggleMenu}
            className={`z-[120] flex flex-col justify-between w-8 h-6 cursor-pointer group ${isOpen ? 'active' : ''}`}
          >
            <span className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ${isOpen ? 'translate-y-[11px] rotate-45' : 'group-hover:w-2/3 ml-auto'}`}></span>
            <span className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ${isOpen ? '-translate-y-[11px] -rotate-45' : 'group-hover:w-1/2 ml-auto'}`}></span>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/90 backdrop-blur-sm z-[110] transition-opacity duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={closeMenu}
      />

      {/* Sidebar Menu */}
      <nav 
        className={`fixed top-0 right-0 w-full md:max-w-md h-full bg-[#0a0a0a] z-[115] flex flex-col p-12 md:p-20 gap-8 transition-transform duration-500 border-l border-white/10 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="mt-20 flex flex-col gap-6">
          {/* Hauptnavigation */}
          <div className="flex flex-col gap-4 mb-4 border-b border-white/10 pb-8">
              <Link to="/produkte" onClick={closeMenu} className="text-white/80 text-lg tracking-widest transition-colors hover:text-[#D4AF37]">{t('menu.products')}</Link>
              <Link to="/abo" onClick={closeMenu} className="text-white/80 text-lg tracking-widest transition-colors hover:text-[#D4AF37]">{t('menu.subscriptions')}</Link>
              <Link to="/ueber" onClick={closeMenu} className="text-white/80 text-lg tracking-widest transition-colors hover:text-[#D4AF37]">{t('menu.about')}</Link>
              <Link to="/kontakt" onClick={closeMenu} className="text-white/80 text-lg tracking-widest transition-colors hover:text-[#D4AF37]">{t('menu.contact')}</Link>
          </div>

          {/* Dezente Schließen-Schaltfläche über dem Sprachwechsler */}
          <button onClick={closeMenu} className="mb-4 text-center text-white/40 hover:text-white text-sm tracking-widest px-2 py-2 bg-transparent">
            {t('menu.close')}
          </button>

          {/* Language Switcher */}
          <div className="mb-8">
            <div className="text-[10px] text-white/30 uppercase tracking-widest mb-4">Sprache / Language</div>
            <div className="flex flex-wrap gap-2">
              {['sw', 'de', 'en', 'fr'].map((l) => (
                <button 
                  key={l}
                  onClick={() => setLang(l as any)}
                  className={`px-4 py-2 text-xs border rounded transition-all uppercase ${
                    lang === l 
                      ? 'border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10' 
                      : 'border-white/20 text-white/60 hover:border-white hover:text-white'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-8">
            <Link to="/login" onClick={closeMenu} className="inline-flex items-center gap-2 text-sm tracking-widest text-white/50 hover:text-white transition-colors border border-white/10 px-6 py-3 rounded hover:border-[#D4AF37]">
              <span>🔒</span> {t('menu.dashboard')}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
