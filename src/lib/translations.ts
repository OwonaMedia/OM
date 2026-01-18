// Alle Übersetzungen für DE, EN, FR, SW
export type Language = 'de' | 'en' | 'fr' | 'sw';

export const translations = {
  de: {
    // Navigation
    brand: "Owona Media",
    "nav.home": "Startseite",
    "nav.products": "Produkte",
    "nav.subscriptions": "Abonnements",
    "nav.about": "Über uns",
    "nav.contact": "Kontakt",
    "nav.login": "Anmelden",
    "nav.dashboard": "Dashboard",
    "nav.logout": "Abmelden",
    
    // TODO: Weitere Übersetzungen hinzufügen
  },
  en: {
    brand: "Owona Media",
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.subscriptions": "Subscriptions",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.login": "Login",
    "nav.dashboard": "Dashboard",
    "nav.logout": "Logout",
  },
  fr: {
    brand: "Owona Media",
    "nav.home": "Accueil",
    "nav.products": "Produits",
    "nav.subscriptions": "Abonnements",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "nav.login": "Connexion",
    "nav.dashboard": "Tableau de bord",
    "nav.logout": "Déconnexion",
  },
  sw: {
    brand: "Owona Media",
    "nav.home": "Nyumbani",
    "nav.products": "Bidhaa",
    "nav.subscriptions": "Usajili",
    "nav.about": "Kuhusu",
    "nav.contact": "Mawasiliano",
    "nav.login": "Ingia",
    "nav.dashboard": "Dashibodi",
    "nav.logout": "Toka",
  }
};

export function t(key: string, lang: Language): string {
  return translations[lang]?.[key as keyof typeof translations.de] || key;
}
