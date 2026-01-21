
import { useEffect } from 'react';
import { useTranslation } from '../TranslationContext';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    // Reveal Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { 
        if (entry.isIntersecting) entry.target.classList.add('visible'); 
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black text-white selection:bg-[#D4AF37] selection:text-black">
      {/* Stars Background */}
      <div className="stars fixed inset-0 pointer-events-none opacity-50 z-0"></div>

      {/* Hero */}
      <section className="min-h-[90vh] flex flex-col justify-center px-8 relative z-10 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="reveal text-white/5 text-[15vw] leading-none font-extralight select-none mb-[-4vw]">OWONA</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <h1 className="reveal text-5xl md:text-8xl font-light tracking-tighter max-w-4xl">
              {t('hero.title')}
            </h1>
            <div className="reveal max-w-sm text-white/30 text-sm leading-relaxed mb-4">
              <p>{t('hero.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-32 px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="reveal text-white/10 text-xs tracking-[0.5em] uppercase mb-24">
            {t('products.label')}
          </h2>

          <div className="grid md:grid-cols-3 gap-1px bg-white/5 border border-white/5">
            {/* Starter */}
            <Link to="/produkte" className="reveal product-card p-12 md:p-16 h-full flex flex-col cursor-pointer hover:bg-white/[0.02] transition-colors group">
              <span className="text-white/10 text-xs mb-8">{t('product.starter.badge')}</span>
              <h3 className="text-4xl font-light mb-6">{t('product.starter.title')}</h3>
              <p className="text-white/40 text-sm mb-12 h-12">{t('product.starter.subtitle')}</p>
              <div className="mt-auto">
                <div className="price-tag mb-8 text-3xl font-light">
                  {t('product.starter.price')} <span className="text-sm opacity-20 ml-2">{t('price.fixed')}</span>
                </div>
                <button className="text-white/20 text-[10px] tracking-widest uppercase group-hover:text-white transition-colors">
                  {t('cta.details')}
                </button>
              </div>
            </Link>

            {/* Pro */}
            <Link to="/produkte" className="reveal product-card p-12 md:p-16 h-full flex flex-col border-x border-white/5 cursor-pointer hover:bg-white/[0.02] transition-colors group">
              <span className="text-[#D4AF37] text-xs mb-8 opacity-50">{t('product.pro.badge')}</span>
              <h3 className="text-4xl font-light mb-6">{t('product.pro.title')}</h3>
              <p className="text-white/40 text-sm mb-12 h-12">{t('product.pro.subtitle')}</p>
              <div className="mt-auto">
                <div className="price-tag text-[#D4AF37] mb-8 text-3xl font-light">
                  {t('product.pro.price')} <span className="text-sm opacity-20 ml-2 text-white">{t('price.fixed')}</span>
                </div>
                <button className="text-white/20 text-[10px] tracking-widest uppercase group-hover:text-white transition-colors">
                  {t('cta.details')}
                </button>
              </div>
            </Link>

            {/* Enterprise */}
            <Link to="/produkte" className="reveal product-card p-12 md:p-16 h-full flex flex-col cursor-pointer hover:bg-white/[0.02] transition-colors group">
              <span className="text-white/10 text-xs mb-8">{t('product.enterprise.badge')}</span>
              <h3 className="text-4xl font-light mb-6">{t('product.enterprise.title')}</h3>
              <p className="text-white/40 text-sm mb-12 h-12">{t('product.enterprise.subtitle')}</p>
              <div className="mt-auto">
                <div className="price-tag mb-8 text-white/40 text-3xl font-light">
                  {t('product.enterprise.price')}
                </div>
                <button className="text-white/20 text-[10px] tracking-widest uppercase group-hover:text-white transition-colors">
                  {t('cta.details')}
                </button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Subscriptions */}
      <section id="subscriptions" className="py-32 px-8 bg-white/[0.01] relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="reveal text-white/10 text-xs tracking-[0.5em] uppercase mb-24">
            {t('subs.label')}
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Basic */}
            <div className="reveal p-10 border border-white/5 hover:border-white/10 transition-all rounded-lg">
              <h4 className="text-xl font-light mb-2">{t('subs.basic.title')}</h4>
              <p className="text-white/30 text-sm mb-12 h-10">{t('subs.basic.desc')}</p>
              <div className="text-3xl font-light mb-8">{t('subs.basic.price')} <span className="text-xs opacity-30">/mo</span></div>
            </div>

            {/* Pro */}
            <div className="reveal p-10 border border-[#D4AF37]/20 rounded-lg relative overflow-hidden bg-[#D4AF37]/[0.02]">
              <div className="absolute top-0 right-0 bg-[#D4AF37]/20 text-[#D4AF37] text-[8px] px-3 py-1 uppercase tracking-widest">
                {t('most.popular')}
              </div>
              <h4 className="text-xl font-light mb-2">{t('subs.pro.title')}</h4>
              <p className="text-white/30 text-sm mb-12 h-10">{t('subs.pro.desc')}</p>
              <div className="text-3xl font-light mb-8 text-[#D4AF37]">{t('subs.pro.price')} <span className="text-xs opacity-30 text-white">/mo</span></div>
            </div>

            {/* Full */}
            <div className="reveal p-10 border border-white/5 hover:border-white/10 transition-all rounded-lg">
              <h4 className="text-xl font-light mb-2">{t('subs.full.title')}</h4>
              <p className="text-white/30 text-sm mb-12 h-10">{t('subs.full.desc')}</p>
              <div className="text-3xl font-light mb-8">{t('subs.full.price')} <span className="text-xs opacity-30">/mo</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="min-h-screen px-8 py-32 flex items-center relative z-10">
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="reveal text-white/5 text-[25vw] leading-none font-extralight select-none">S</div>
            <div>
              <h2 className="reveal text-4xl font-light mb-8 text-[#D4AF37]">{t('about.title')}</h2>
              <p className="reveal text-white/40 text-lg leading-relaxed mb-12">
                {t('about.desc')}
              </p>
              <div className="reveal flex gap-16">
                <div>
                  <div className="text-2xl font-light">50+</div>
                  <div className="text-[10px] text-white/20 uppercase tracking-widest mt-2">{t('about.projects')}</div>
                </div>
                <div>
                  <div className="text-2xl font-light">5+</div>
                  <div className="text-[10px] text-white/20 uppercase tracking-widest mt-2">{t('about.years')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
