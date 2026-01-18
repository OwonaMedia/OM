import { useState, useEffect } from 'react';

// --- Types ---
type Language = 'de' | 'en' | 'fr' | 'sw';
type Translations = typeof de;

// --- Dictionary ---

const de = {
    // Neue Seiten
    "products.title": "Unsere Produkte",
    "products.desc": "Entdecken Sie unsere digitalen Lösungen für Unternehmen: Websites, Webapps und Automatisierung. Maßgeschneidert für Ihren Erfolg.",
    "subs.title": "Abo-Modelle",
    "subs.desc": "Unsere flexiblen Wartungs- und Service-Abos sorgen für Sicherheit, Wachstum und sorgenfreie IT.",
    "about.more": "Mit über 5 Jahren Erfahrung und mehr als 50 Projekten bieten wir individuelle Lösungen für Unternehmen, die keine Kompromisse machen wollen. Unser Fokus liegt auf Automatisierung, Performance und exklusivem Design.",
    "contact.desc": "Sie haben Fragen oder möchten ein Projekt starten? Kontaktieren Sie uns – wir freuen uns auf Ihre Nachricht!",
  brand: "Owona Media",
  
  // Menu
  "menu.products": "Produkte",
  "menu.subscriptions": "Abo",
  "menu.about": "Über",
  "menu.contact": "Kontakt",
  "menu.login": "Login",
  "menu.dashboard": "Kundenportal",

  // Footer
  "footer.impressum": "Impressum",
  "footer.privacy": "Datenschutz",
  "footer.terms": "AGB",
  
  // Cookie
  "cookie.text": "Wir nutzen Cookies, um Ihr Erlebnis zu verbessern. Einige sind essenziell, andere helfen uns bei der Optimierung.",
  "cookie.accept": "Akzeptieren",
  "cookie.decline": "Ablehnen",

  // Hero
  "hero.title": "High-End Digital Agency",
  "hero.desc": "Boutique Webentwicklung für Marken, die keine Kompromisse machen. Exklusive Lösungen von der ersten Zeile Code bis zum automatisierten Aftersales-Workflow.",
  
  // Products
  "products.label": "Lösungen / Einmalig",
  "product.starter.badge": "01 / LITE",
  "product.starter.title": "Starter",
  "product.starter.subtitle": "Das digitale Fundament für moderne Marken.",
  "product.starter.price": "€999",
  "product.pro.badge": "02 / CORE",
  "product.pro.title": "Professional",
  "product.pro.subtitle": "Skalierbares Ökosystem mit Automation.",
  "product.pro.price": "€2.499",
  "product.enterprise.badge": "03 / APPS",
  "product.enterprise.title": "Enterprise",
  "product.enterprise.subtitle": "Maßgeschneiderte Web‑Apps & Infrastruktur.",
  "product.enterprise.price": "Custom",
  "cta.details": "Details ansehen +",
  "price.fixed": "fix",

  // Subscriptions
  "subs.label": "Ecosystem / Monatlich",
  "subs.basic.title": "Basis Wartung",
  "subs.basic.desc": "Essenzielle Sicherheit & Geschwindigkeit.",
  "subs.basic.price": "€9,90",
  "subs.pro.title": "Pro Wachstum",
  "subs.pro.desc": "Skaliere deine digitale Reichweite.",
  "subs.pro.price": "€29,90",
  "subs.full.title": "Vollmanagement",
  "subs.full.desc": "Deine ausgelagerte IT-Abteilung.",
  "subs.full.price": "€49,90",
  "most.popular": "Beliebt",

  // About
  "about.title": "Salomon Owona",
  "about.desc": "Digital Architect & Gründer. Wir bauen hochautomatisierte digitale Ökosysteme.",
  "about.projects": "Projekte",
  "about.years": "Jahre Erfahrung",

  // Contact
  "contact.label": "Kontakt",
  "contact.address": "Ahornstrasse 52, 68542 Heddesheim, DE",
  "contact.send": "Senden",
  "contact.form.name": "Name",
  "contact.form.email": "Email",
  "contact.form.details": "Projektbeschreibung",

  // Dashboard / Login
  "login.title": "Kunden Login",
  "login.desc": "Greifen Sie auf Ihr Dashboard, Rechnungen und Projektstatus zu.",
  "login.email": "E-Mail Adresse",
  "login.password": "Passwort",
  "login.btn": "Anmelden",
  "login.forgot": "Passwort vergessen?",
  "dash.welcome": "Willkommen zurück",
  "dash.projects": "Meine Projekte",
  "dash.invoices": "Rechnungen",
  "dash.files": "Dateien",
  "dash.settings": "Einstellungen",
};

const en: Translations = {
    // Neue Seiten
    "products.title": "Our Products",
    "products.desc": "Discover our digital solutions for businesses: websites, web apps, and automation. Tailored for your success.",
    "subs.title": "Subscription Models",
    "subs.desc": "Our flexible maintenance and service subscriptions ensure security, growth, and worry-free IT.",
    "about.more": "With over 5 years of experience and more than 50 projects, we offer custom solutions for companies that want no compromises. Our focus: automation, performance, exclusive design.",
    "contact.desc": "Questions or want to start a project? Contact us – we look forward to your message!",
  ...de,
  "menu.products": "Products",
  "menu.subscriptions": "Subscription",
  "menu.about": "About",
  "menu.contact": "Contact",
  "menu.dashboard": "Client Portal",
  "footer.impressum": "Imprint",
  "footer.privacy": "Privacy",
  "footer.terms": "Terms",
  "cookie.text": "We use cookies to improve your experience. Some are essential, others help us optimize this website.",
  "cookie.accept": "Accept",
  "cookie.decline": "Decline",
  "hero.title": "High-End Digital Agency",
  "hero.desc": "Boutique web development for brands that don't compromise. Exclusive solutions from the first line of code to automated workflows.",
  "products.label": "Solutions / One-Time",
  "product.starter.subtitle": "The digital foundation for modern brands.",
  "product.pro.subtitle": "Scalable ecosystem with automation.",
  "product.enterprise.subtitle": "Bespoke web applications & infrastructure.",
  "cta.details": "View details +",
  "price.fixed": "fixed",
  "subs.label": "Ecosystem / Monthly",
  "subs.basic.title": "Basic Maintenance",
  "subs.basic.desc": "Essential security & speed.",
  "subs.pro.title": "Pro Growth",
  "subs.pro.desc": "Scaling your digital reach.",
  "subs.full.title": "Full Management",
  "subs.full.desc": "Your outsourced IT department.",
  "most.popular": "Popular",
  "about.desc": "Digital Architect & Founder. We build highly automated digital ecosystems.",
  "about.projects": "Projects",
  "about.years": "Years Exp",
  "contact.label": "Contact",
  "contact.send": "Send",
  "contact.form.details": "Project Details",
  "login.title": "Client Login",
  "login.desc": "Access your dashboard, invoices, and project status.",
  "login.email": "Email Address",
  "login.password": "Password",
  "login.btn": "Sign In",
  "login.forgot": "Forgot Password?",
  "dash.welcome": "Welcome back",
  "dash.projects": "My Projects",
  "dash.invoices": "Invoices",
  "dash.files": "Files",
  "dash.settings": "Settings",
};

const fr: Translations = {
    // Neue Seiten
    "products.title": "Nos Produits",
    "products.desc": "Découvrez nos solutions digitales pour les entreprises : sites web, applications et automatisation. Sur mesure pour votre succès.",
    "subs.title": "Modèles d'abonnement",
    "subs.desc": "Nos abonnements flexibles assurent sécurité, croissance et sérénité IT.",
    "about.more": "Avec plus de 5 ans d'expérience et plus de 50 projets, nous proposons des solutions sur mesure pour les entreprises exigeantes. Notre focus : automatisation, performance, design exclusif.",
    "contact.desc": "Des questions ou un projet ? Contactez-nous – nous sommes impatients de vous lire !",
  ...de,
  "menu.products": "Produits",
  "menu.subscriptions": "Abonnement",
  "menu.about": "À propos",
  "menu.contact": "Contact",
  "menu.dashboard": "Portail Client",
  "footer.impressum": "Mentions légales",
  "footer.privacy": "Confidentialité",
  "footer.terms": "CGV",
  "cookie.text": "Nous utilisons des cookies pour améliorer votre expérience. Certains sont essentiels, d'autres nous aident à optimiser.",
  "cookie.accept": "Accepter",
  "cookie.decline": "Refuser",
  "hero.title": "Agence digitale premium",
  "hero.desc": "Développement web boutique pour les marques exigeantes. Solutions exclusives et workflows automatisés.",
  "products.label": "Solutions / Unique",
  "product.starter.subtitle": "La base digitale pour les marques modernes.",
  "product.pro.subtitle": "Écosystème évolutif avec automatisation.",
  "product.enterprise.subtitle": "Applications web sur-mesure & infrastructure.",
  "cta.details": "Voir détails +",
  "price.fixed": "fixe",
  "subs.label": "Écosystème / Mensuel",
  "subs.basic.title": "Maintenance base",
  "subs.basic.desc": "Sécurité et rapidité essentielles.",
  "subs.pro.title": "Croissance Pro",
  "subs.pro.desc": "Développez votre portée digitale.",
  "subs.full.title": "Gestion complète",
  "subs.full.desc": "Votre département IT externalisé.",
  "most.popular": "Populaire",
  "about.desc": "Architecte digital & Fondateur. Nous construisons des écosystèmes digitaux automatisés.",
  "about.projects": "Projets",
  "about.years": "Ans d'exp",
  "contact.label": "Contact",
  "contact.send": "Envoyer",
  "contact.form.name": "Nom",
  "contact.form.details": "Détails du projet",
  "login.title": "Espace Client",
  "login.desc": "Accédez à votre tableau de bord, factures et statut de projet.",
  "login.email": "Adresse Email",
  "login.password": "Mot de passe",
  "login.btn": "Se connecter",
  "login.forgot": "Mot de passe oublié ?",
  "dash.welcome": "Bon retour",
  "dash.projects": "Mes Projets",
  "dash.invoices": "Factures",
  "dash.files": "Fichiers",
  "dash.settings": "Paramètres",
};

const sw: Translations = {
    // Neue Seiten
    "products.title": "Bidhaa Zetu",
    "products.desc": "Gundua suluhisho zetu za kidijitali kwa biashara: tovuti, programu za wavuti, na otomatiki. Imetengenezwa kwa mafanikio yako.",
    "subs.title": "Aina za Usajili",
    "subs.desc": "Usajili wetu rahisi wa matengenezo na huduma huhakikisha usalama, ukuaji, na IT isiyo na wasiwasi.",
    "about.more": "Zaidi ya miaka 5 ya uzoefu na miradi 50+, tunatoa suluhisho maalum kwa kampuni zisizotaka maafikiano. Mtazamo wetu: otomatiki, utendaji, muundo wa kipekee.",
    "contact.desc": "Maswali au unataka kuanza mradi? Wasiliana nasi – tunasubiri ujumbe wako!",
  ...de,
  "menu.products": "Bidhaa",
  "menu.subscriptions": "Usajili",
  "menu.about": "Kuhusu",
  "menu.contact": "Mawasiliano",
  "menu.dashboard": "Tovuti ya Wateja",
  "footer.impressum": "Impressum",
  "footer.privacy": "Faragha",
  "footer.terms": "Masharti",
  "cookie.text": "Tunatumia kuki kuboresha matumizi yako. Baadhi ni muhimu, zingine zinatusaidia kuboresha tovuti hii.",
  "cookie.accept": "Kubali",
  "cookie.decline": "Kataa",
  "hero.title": "Wakala wa Kidijitali",
  "hero.desc": "Uundaji wa tovuti wa hali ya juu kwa chapa. Suluhisho za kipekee na mtiririko wa kazi otomatiki.",
  "products.label": "Suluhisho / Mara Moja",
  "product.starter.subtitle": "Msingi wa kidijitali kwa chapa za kisasa.",
  "product.pro.subtitle": "Mfumo unaoweza kupanuka kwa automation.",
  "product.enterprise.subtitle": "Programu za wavuti zilizotengenezwa maalum.",
  "cta.details": "Ona maelezo +",
  "price.fixed": "kamili",
  "subs.label": "Mfumo / Kila Mwezi",
  "subs.basic.title": "Matengenezo Msingi",
  "subs.basic.desc": "Usalama muhimu & kasi.",
  "subs.pro.title": "Ukuaji Pro",
  "subs.pro.desc": "Panua ufikiaji wako wa kidijitali.",
  "subs.full.title": "Usimamizi Kamili",
  "subs.full.desc": "Idara yako ya IT iliyokodishwa.",
  "most.popular": "Maarufu",
  "about.desc": "Mbunifu wa kidijitali & Mwanzilishi. Tunaunda mifumo ya kidijitali yenye otomatiki.",
  "about.projects": "Miradi",
  "about.years": "Miaka ya Uzoefu",
  "contact.label": "Mawasiliano",
  "contact.send": "Tuma",
  "contact.form.name": "Jina",
  "contact.form.details": "Maelezo ya Mradi",
  "login.title": "Ingia Mteja",
  "login.desc": "Fikia dashibodi yako, ankara, na hali ya mradi.",
  "login.email": "Barua pepe",
  "login.password": "Nenosiri",
  "login.btn": "Ingia",
  "login.forgot": "Umesahau nenosiri?",
  "dash.welcome": "Karibu tena",
  "dash.projects": "Miradi Yangu",
  "dash.invoices": "Ankara",
  "dash.files": "Faili",
  "dash.settings": "Mipangilio",
};

export const translations = { de, en, fr, sw };

// --- Hook ---
export function useTranslation() {
  // Simple state for demo. In real app, use Context.
  const [lang, setLangState] = useState<Language>(
    (localStorage.getItem('lang') as Language) || 'de'
  );

  useEffect(() => {
    const handler = () => {
      setLangState((localStorage.getItem('lang') as Language) || 'de');
    };
    window.addEventListener('storage', handler);
    // Custom event dispatch for in-app switching
    window.addEventListener('lang-change', handler);
    return () => {
      window.removeEventListener('storage', handler);
      window.removeEventListener('lang-change', handler);
    };
  }, []);

  const t = (key: keyof Translations) => {
    const dict = translations[lang] || translations.de;
    return dict[key] || key;
  };

  const setLang = (newLang: Language) => {
    localStorage.setItem('lang', newLang);
    setLangState(newLang);
    window.dispatchEvent(new Event('lang-change'));
  };

  return { t, lang, setLang };
}
