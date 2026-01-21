# Expertenwissen: Debugging von Platzhalter-Keys im React-i18n-System (Vite, TypeScript, Tailwind)

## Problemstellung

In modernen React-Projekten mit Internationalisierung (i18n) kann es vorkommen, dass im UI statt der übersetzten Texte die Platzhalter-Keys (z.B. `menu.products`, `hero.title`) angezeigt werden. Dies ist ein häufiges Problem, das verschiedene Ursachen haben kann. Diese Datei bietet eine systematische Analyse und Best-Practices zur Fehlerbehebung.

---

## Typische Ursachen

1. **Falsche Struktur der Übersetzungsdatei**
   - Flat vs. Nested: Die Übersetzungsfunktion (`t()`) muss zur Struktur der Übersetzungsdatei passen (flaches Objekt vs. verschachteltes Objekt).
   - Beispiel Flat:
     ```js
     export const translations = {
       'menu.products': 'Produkte',
       'hero.title': 'Willkommen',
     };
     ```
   - Beispiel Nested:
     ```js
     export const translations = {
       menu: { products: 'Produkte' },
       hero: { title: 'Willkommen' },
     };
     ```

2. **Fehlerhafte t()-Funktion**
   - Die Lookup-Logik muss exakt zur Struktur passen:
     - Flat: `dict[key]`
     - Nested: Key splitten und rekursiv auflösen
   - Fallback: Wenn Key nicht gefunden, sollte ein Fallback (z.B. Key selbst oder ein Platzhalter) angezeigt werden.

3. **TranslationProvider nicht global eingebunden**
   - Der Context-Provider muss die gesamte App umschließen (z.B. in `main.tsx`).

4. **Falsche oder fehlende Spracheinstellung**
   - Die aktuelle Sprache (`lang`) muss korrekt gesetzt und im Context verfügbar sein.
   - Prüfen: `localStorage.getItem('lang')` und Default-Wert im Provider.

5. **Fehlende oder falsch benannte Keys**
   - Übersetzungsdatei muss alle verwendeten Keys enthalten.
   - Tipp: Automatisierte Tools oder Linter können fehlende Keys erkennen.

---

## Debugging-Strategie

1. **Struktur prüfen**
   - Ist die Übersetzungsdatei flat oder nested?
   - Passt die t()-Funktion zur Struktur?

2. **Provider-Placement prüfen**
   - Wird der TranslationProvider in `main.tsx` um die gesamte App gelegt?

3. **Spracheinstellung prüfen**
   - Ist die gewünschte Sprache aktiv? (z.B. per localStorage, URL, User-Setting)

4. **Key-Existenz prüfen**
   - Sind alle Keys in der Übersetzungsdatei vorhanden?
   - Tipp: Temporär in t() ein Logging einbauen, um fehlende Keys zu erkennen.

5. **Fallback-Logik prüfen**
   - Was passiert, wenn ein Key fehlt? Wird der Key angezeigt oder ein Platzhalter?

---

## Best Practices

- **Konsistente Key-Benennung**: Einheitliches Schema für alle Keys (z.B. `menu.products`)
- **Automatisierte Tests**: Unit-Tests für die t()-Funktion und die Übersetzungsdatei
- **Editor-Plugins**: VSCode-Extensions für i18n-Management
- **Fallback-Sprache**: Immer eine Fallback-Sprache definieren
- **CI-Checks**: Automatisierte Checks für fehlende Übersetzungen im Build-Prozess

---

## Beispiel: Flat Lookup

```ts
// translations.ts
export const translations = {
  'menu.products': 'Produkte',
  'hero.title': 'Willkommen',
};

// TranslationContext.tsx
function t(key: string) {
  return translations[key] || key;
}
```

---

## Beispiel: Nested Lookup

```ts
// translations.ts
export const translations = {
  menu: { products: 'Produkte' },
  hero: { title: 'Willkommen' },
};

// TranslationContext.tsx
function t(key: string) {
  return key.split('.').reduce((obj, k) => (obj ? obj[k] : undefined), translations) || key;
}
```

---

## Troubleshooting-Checkliste

- [ ] Übersetzungsdatei: Struktur und Inhalt korrekt?
- [ ] t()-Funktion: Passend zur Struktur?
- [ ] Provider: Global eingebunden?
- [ ] Sprache: Richtig gesetzt?
- [ ] Keys: Alle vorhanden?
- [ ] Fallback: Sinnvoll implementiert?

---

## Weiterführende Links
- [react-i18next Doku](https://react.i18next.com/)
- [Vite + React + i18n Guide](https://vitejs.dev/guide/features.html#internationalization)
- [Best Practices für i18n in React](https://www.smashingmagazine.com/2020/06/internationalization-react/)

---

*Letzte Aktualisierung: 20.01.2026*
