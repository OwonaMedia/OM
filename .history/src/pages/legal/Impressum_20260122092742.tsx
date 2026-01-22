// Impressum Seite
// TODO: In Schritt 4 implementieren


import Layout from '../../components/layout/Layout';
import { useEffect, useState } from 'react';
import { fetchHaendlerbundText } from '../../utils/haendlerbund';

export default function Impressum() {
  const [text, setText] = useState<string>('');
  const [error, setError] = useState<string>('');
  useEffect(() => {
    fetchHaendlerbundText('impressum')
      .then(setText)
      .catch(() => setError('Fehler beim Laden des Impressums.'));
  }, []);
  return (
    <Layout darkBg={false}>
      <section className="min-h-screen py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl mb-8">Impressum</h1>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </section>
    </Layout>
  );
}
