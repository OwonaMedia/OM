// Übersetzungs-Cache für Rechtstexte (LocalStorage)
// Key: rechtstext_{type}_{lang}, Value: { text: string, timestamp: number }

const CACHE_TTL = 24 * 60 * 60 * 1000; // 24h

export function getCachedTranslation(type: string, lang: string): string | null {
  const key = `rechtstext_${type}_${lang}`;
  const item = localStorage.getItem(key);
  if (!item) return null;
  try {
    const { text, timestamp } = JSON.parse(item);
    if (Date.now() - timestamp < CACHE_TTL) {
      return text;
    }
    localStorage.removeItem(key);
    return null;
  } catch {
    localStorage.removeItem(key);
    return null;
  }
}

export function setCachedTranslation(type: string, lang: string, text: string) {
  const key = `rechtstext_${type}_${lang}`;
  localStorage.setItem(key, JSON.stringify({ text, timestamp: Date.now() }));
}
