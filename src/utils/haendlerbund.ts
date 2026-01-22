// Utility to fetch Händlerbund Rechtstexte
// Access-Token: 363a7944-7871-40aa-ad41-b1d29580db11

export async function fetchHaendlerbundText(type: 'agb' | 'impressum' | 'datenschutz') {
  const endpointMap = {
    agb: 'general-terms-and-conditions',
    impressum: 'imprint',
    datenschutz: 'privacy-policy',
  };
  const endpoint = endpointMap[type];
  const url = `https://api.haendlerbund.de/legal/texts/v1/${endpoint}`;
  const res = await fetch(url, {
    headers: {
      'Authorization': 'Bearer 363a7944-7871-40aa-ad41-b1d29580db11',
      'Accept': 'application/json',
    },
  });
  if (!res.ok) throw new Error('Fehler beim Laden der Rechtstexte');
  const data = await res.json();
  // Annahme: Text ist in data.text oder data.html
  return data.html || data.text || '';
}
