// AGB Seite
// TODO: In Schritt 4 implementieren


import Layout from '../../components/layout/Layout';
import { useEffect, useState } from 'react';
import { fetchHaendlerbundText } from '../../utils/haendlerbund';
import { translateText } from '../../utils/translate';
import { useTranslation } from 'react-i18next';

export default function AGB() {
  const [text, setText] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isMachineTranslated, setIsMachineTranslated] = useState(false);
  const { i18n } = useTranslation();
  useEffect(() => {
    fetchHaendlerbundText('agb')
      .then(async (deText) => {
        if (i18n.language === 'de') {
          setText(deText);
          setIsMachineTranslated(false);
        } else {
          try {
            const translated = await translateText(deText, i18n.language.toUpperCase());
            setText(translated);
            setIsMachineTranslated(true);
          } catch {
            setText(deText);
            setIsMachineTranslated(false);
          }
        }
      })
      .catch(() => setError('Fehler beim Laden der AGB.'));
    // eslint-disable-next-line
  }, [i18n.language]);
  return (
    <Layout darkBg={false}>
      <section className="min-h-screen py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          {isMachineTranslated && (
            <div className="text-yellow-600 text-sm mb-4">
              Hinweis: Diese Übersetzung wurde maschinell erstellt. Verbindlich ist nur die deutsche Version.
            </div>
          )}
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </section>
    </Layout>
  );
}
