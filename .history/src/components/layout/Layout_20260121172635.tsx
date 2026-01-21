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

      <Footer />
      <CookieBanner />
    </div>
  );
}
