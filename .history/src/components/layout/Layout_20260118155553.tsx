import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import CookieBanner from './CookieBanner';
import CustomCursor from '../ui/CustomCursor';

interface LayoutProps {
  children: ReactNode;
  darkBg?: boolean; // true = schwarzer Hintergrund (Hauptseite), false = weißer Hintergrund
}

export default function Layout({ children, darkBg = true }: LayoutProps) {
  return (
    <div className={darkBg ? 'bg-black text-white' : 'bg-white text-black'}>
      {/* Sterne-Hintergrund nur auf dunklen Seiten */}
      {darkBg && <div className="stars" />}

      <Header />
      <CustomCursor />

      <main className="min-h-screen pt-24">
        {children}
      </main>

      <CookieBanner />
    </div>
  );
}
