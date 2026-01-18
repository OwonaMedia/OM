import { useEffect } from 'react';
import { useTranslation } from '../src_translations';

export default function Home() {
	const { t } = useTranslation();

	useEffect(() => {
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
						<div className="reveal product-card p-12 md:p-16 h-full flex flex-col cursor-none hover:bg-white/[0.02] transition-colors group">
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
						</div>
						{/* ...weitere Produkte... */}
					</div>
				</div>
			</section>
		</div>
	);
}