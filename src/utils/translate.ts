// DeepL Übersetzungs-Utility
// https://www.deepl.com/docs-api
// Achtung: DeepL API-Key muss in .env hinterlegt werden

const DEEPL_API_KEY = import.meta.env.VITE_DEEPL_API_KEY;

export async function translateText(text: string, targetLang: string): Promise<string> {
  const url = 'https://api-free.deepl.com/v2/translate';
  const params = new URLSearchParams();
  params.append('auth_key', DEEPL_API_KEY);
  params.append('text', text);
  params.append('target_lang', targetLang);
  params.append('tag_handling', 'html');
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });
  if (!res.ok) throw new Error('DeepL Übersetzungsfehler');
  const data = await res.json();
  return data.translations?.[0]?.text || '';
}
