
import { useState, useEffect } from 'react';
import { useTranslation } from '../../translations';

export default function CookieBanner() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Kurze Verzögerung für nice UX
      const timer = setTimeout(() => setShow(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] p-4 md:p-6 bg-[#111] border-t border-white/10 shadow-2xl animate-in slide-in-from-bottom-10 fade-in duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-xs text-white/60 leading-relaxed max-w-3xl">
          <p>
            {t('cookie.text') || "Wir nutzen Cookies, um Ihr Erlebnis auf unserer Website zu verbessern. Einige sind essenziell, andere helfen uns, diese Website und Ihre Erfahrung zu optimieren."}
          </p>
          <div className="mt-1">
            <a href="/datenschutz" className="text-[#D4AF37] hover:underline mr-4">{t('footer.privacy')}</a>
            <a href="/impressum" className="text-[#D4AF37] hover:underline">{t('footer.impressum')}</a>
          </div>
        </div>
        <div className="flex gap-4 shrink-0">
          <button 
            onClick={handleDecline}
            className="px-6 py-2 border border-white/20 rounded text-xs text-white hover:bg-white/5 transition-colors uppercase tracking-wider"
          >
            {t('cookie.decline') || "Ablehnen"}
          </button>
          <button 
            onClick={handleAccept}
            className="px-6 py-2 bg-[#D4AF37] text-black font-medium rounded text-xs hover:bg-[#b5952f] transition-colors uppercase tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          >
            {t('cookie.accept') || "Akzeptieren"}
          </button>
        </div>
      </div>
    </div>
  );
}
