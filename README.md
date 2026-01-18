# Owona Media - Digital Ecosystem

Diese Webanwendung ist eine vollständige React-Applikation (Vite), die für Skalierbarkeit und High-End Performance entwickelt wurde.

## 🚀 Schnellstart

1. **Abhängigkeiten installieren:**
   ```bash
   npm install
   ```

2. **Entwicklungsserver starten:**
   ```bash
   npm run dev
   ```

3. **Build für Produktion:**
   ```bash
   npm run build
   ```

---

## 🛠 Was Sie noch anpassen müssen (To-Dos)

Hier ist Ihre Checkliste, um die Platzhalter mit echter Funktionalität zu füllen:

### 1. Stripe Integration (Zahlungen)
Aktuell sind die Zahlungsdaten im Dashboard (`Dashboard.tsx`) und auf der Homepage nur visuelle Platzhalter.
*   **Schritt:** Registrieren Sie sich bei [Stripe](https://stripe.com).
*   **Frontend:** Nutzen Sie `stripe-react-js` oder Links zu Stripe Payment Links für die "Kaufen"-Buttons.
*   **Backend:** Für echte Abos benötigen Sie ein kleines Backend (z.B. Node.js/Express oder Firebase Functions), um Webhooks von Stripe zu empfangen und den Status des Nutzers zu aktualisieren.

### 2. Kontaktformular
Das Kontaktformular auf der Startseite (`Home.tsx`) sendet aktuell keine E-Mails.
*   **Empfehlung:** Nutzen Sie [EmailJS](https://www.emailjs.com/) oder [Formspree](https://formspree.io/).
*   **Integration:** Binden Sie den Dienst direkt im `onSubmit`-Handler des Formulars ein.

### 3. Datei-Upload (Dashboard)
Der Upload-Bereich im Dashboard ist aktuell nur ein UI-Element.
*   **Lösung:** Nutzen Sie einen Cloud-Storage wie **AWS S3**, **Supabase Storage** oder **Firebase Storage**.
*   **Umsetzung:** Implementieren Sie die `onDrop`-Logik im `Dashboard.tsx`, um die Dateien an Ihren Storage-Bucket zu senden.

### 4. Authentifizierung (Login)
Der Login (`Login.tsx`) ist simuliert (jedes Passwort funktioniert).
*   **Lösung:** Integrieren Sie **Supabase Auth**, **Firebase Auth** oder **Auth0**.
*   **Schutz:** Wickeln Sie die Dashboard-Route in `App.tsx` in eine "Protected Route" Komponente, die prüft, ob ein User eingeloggt ist.

### 5. Rechtstexte
Die Dateien `Impressum.tsx`, `Datenschutz.tsx` und `AGB.tsx` enthalten Platzhaltertexte.
*   **Wichtig:** Fügen Sie Ihre echten, anwaltlich geprüften Texte ein.
*   **Übersetzung:** Wenn Sie die Rechtstexte auch in anderen Sprachen benötigen, fügen Sie die entsprechenden Keys in `src/translations.ts` hinzu oder hardcoden Sie den englischen Text bedingt.

---

## 🌍 Übersetzungen anpassen

Alle Texte befinden sich zentral in `src/translations.ts`.
Um Texte zu ändern:
1. Datei öffnen.
2. Nach dem entsprechenden Key suchen (z.B. `hero.title`).
3. Text für `de`, `en`, `fr` und `sw` anpassen.

## 🎨 Design Anpassungen

Das Design basiert auf **Tailwind CSS**.
*   **Farben:** Goldene Akzente sind oft als `#D4AF37` hardcodet.
*   **Schriften:** Die Schriftart "Space Grotesk" wird über Google Fonts in `index.html` geladen.

---

© 2025 Owona Media
