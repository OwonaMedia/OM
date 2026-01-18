import type { ReactNode } from 'react';
import Header from '../src_components_Header';
import Footer from '../src_components_Footer';
import CookieBanner from '../src_components_CookieBanner';

interface LayoutProps {
  children: ReactNode;
  darkBg?: boolean; // true = schwarzer Hintergrund (Hauptseite), false = weißer Hintergrund
}

export default function Layout({ children, darkBg = true }: LayoutProps) {
  return (
    <div className={darkBg ? 'bg-black text-white' : 'bg-white text-black'}>
      {/* Sterne-Hintergrund nur auf dunklen Seiten */}
      {darkBg && <div className="stars" />}
      
      {/* Custom Cursor */}
      <div id="cursor" />
      
      <Header />
      
      <main className="min-h-screen pt-24">
        {children}
      </main>
      
      <Footer />
      <CookieBanner />
    </div>
  );
}
