import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import CookieBanner from './CookieBanner';
import CustomCursor from '../ui/CustomCursor';

interface LayoutProps {
  children: ReactNode;
  darkBg?: boolean; // true = schwarzer Hintergrund (Hauptseite), false = weißer Hintergrund
}


import { useLocation } from 'react-router-dom';

export default function Layout({ children, darkBg = true }: LayoutProps) {
  const location = typeof window !== 'undefined' ? window.location : { pathname: '/' };
  // Hauptseite: / (index)
  const isIndex = location.pathname === '/';
  const whiteBgClass = !darkBg && !isIndex
    ? 'bg-gradient-to-br from-white via-[#f8f8f8] to-white shadow-[0_8px_32px_rgba(0,0,0,0.07)] rounded-3xl border border-[#ececec] text-black'
    : darkBg
      ? 'bg-black text-white'
      : 'bg-white text-black';

  return (
    <div className={whiteBgClass}>
      {/* Sterne-Hintergrund nur auf dunklen Seiten */}
      {darkBg && <div className="stars" />}

      <Header />
      <CustomCursor />

      <main className="min-h-screen pt-24">
        {children}
      </main>

      <footer className="px-8 py-12 border-t border-white/5 bg-[#050505] text-white text-xs text-center">
        <div className="mb-2 font-bold tracking-widest uppercase">Owona Media</div>
        <div className="mb-4 text-white/40 tracking-widest uppercase">© {new Date().getFullYear()} Owona Media</div>
        <div className="flex flex-wrap justify-center gap-8 text-[10px] tracking-widest uppercase text-white/60 mb-4">
          <a href="/impressum" className="hover:text-[#D4AF37] transition-colors">Impressum</a>
          <a href="/datenschutz" className="hover:text-[#D4AF37] transition-colors">Datenschutz</a>
          <a href="/agb" className="hover:text-[#D4AF37] transition-colors">AGB</a>
          <a href="/faq" className="hover:text-[#D4AF37] transition-colors">FAQ</a>
        </div>
        <div className="text-white/30">Ahornstrasse 52, 68542 Heddesheim · salomon@owona.de</div>
      </footer>
      <CookieBanner />
    </div>
  );
}
