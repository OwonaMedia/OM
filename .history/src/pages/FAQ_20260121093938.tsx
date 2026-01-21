import Layout from '../components/layout/Layout';

const faqs = [
  {
    category: 'Allgemein',
    qas: [
      {
        question: 'Was unterscheidet Owona Media von anderen Agenturen?',
        answer: 'Wir bieten individuelle, rechtssichere und hochautomatisierte Weblösungen mit persönlicher Beratung und Fokus auf Performance, Design und DSGVO-Konformität.'
      },
      {
        question: 'Für welche Branchen arbeitet ihr?',
        answer: 'Unsere Kunden kommen aus verschiedensten Branchen – vom Startup bis zum Mittelstand. Wir passen unsere Lösungen individuell an.'
      },
      {
        question: 'Bietet ihr auch Beratung vor Projektstart an?',
        answer: 'Ja, wir beraten Sie ausführlich und unverbindlich zu allen digitalen Themen und finden gemeinsam die beste Lösung.'
      }
    ]
  },
  {
    category: 'Leistungen',
    qas: [
      {
        question: 'Welche Leistungen bietet ihr an?',
        answer: 'Webdesign, Webentwicklung, E-Commerce, Automatisierung, SEO, Hosting, Wartung, Branding, Beratung und mehr.'
      },
      {
        question: 'Entwickelt ihr auch Onlineshops?',
        answer: 'Ja, wir realisieren individuelle E-Commerce-Lösungen – von der kleinen Shop-Erweiterung bis zum komplexen System.'
      },
      {
        question: 'Übernehmt ihr auch die Wartung nach dem Launch?',
        answer: 'Wir bieten flexible Wartungs- und Service-Abos für Sicherheit, Updates und Support.'
      }
    ]
  },
  {
    category: 'Ablauf & Zusammenarbeit',
    qas: [
      {
        question: 'Wie läuft ein typisches Webprojekt ab?',
        answer: 'Von der Beratung über Konzeption, Design, Entwicklung, Testing bis zum Launch – alles aus einer Hand, transparent und agil.'
      },
      {
        question: 'Wie lange dauert die Umsetzung einer Website?',
        answer: 'Je nach Umfang meist 4–8 Wochen. Bei komplexen Projekten stimmen wir die Timeline individuell ab.'
      },
      {
        question: 'Wie ist die Kommunikation während des Projekts?',
        answer: 'Sie haben einen festen Ansprechpartner und regelmäßige Updates – per Mail, Telefon oder Videocall.'
      }
    ]
  },
  {
    category: 'Technik',
    qas: [
      {
        question: 'Mit welchen Systemen/CMS arbeitet ihr?',
        answer: 'Wir setzen auf moderne Technologien wie React, Vite, Headless CMS und individuelle Lösungen – immer passend zum Projekt.'
      },
      {
        question: 'Ist die Website mobil optimiert (responsive)?',
        answer: 'Ja, alle unsere Websites sind für alle Endgeräte optimiert.'
      },
      {
        question: 'Kann ich die Inhalte später selbst pflegen?',
        answer: 'Ja, wir bieten intuitive CMS-Lösungen und auf Wunsch eine Einweisung.'
      }
    ]
  },
  {
    category: 'Preise & Angebote',
    qas: [
      {
        question: 'Was kostet eine Website bei euch?',
        answer: 'Jedes Projekt ist individuell. Nach einem Erstgespräch erhalten Sie ein transparentes, faires Angebot.'
      },
      {
        question: 'Gibt es Festpreise oder individuelle Angebote?',
        answer: 'Wir bieten beides – je nach Projektumfang und Anforderungen.'
      },
      {
        question: 'Welche Zahlungsmodelle bietet ihr an?',
        answer: 'In der Regel 50% Anzahlung, 50% nach Fertigstellung. Bei größeren Projekten sind individuelle Modelle möglich.'
      }
    ]
  },
  {
    category: 'Support & Service',
    qas: [
      {
        question: 'Gibt es nach dem Launch Support?',
        answer: 'Ja, wir lassen Sie nicht allein. Unser Support ist per Mail und Telefon erreichbar.'
      },
      {
        question: 'Wie kann ich bei Problemen Kontakt aufnehmen?',
        answer: 'Über unser Kontaktformular, per E-Mail oder telefonisch – wir reagieren schnell und zuverlässig.'
      },
      {
        question: 'Bietet ihr Schulungen für das CMS an?',
        answer: 'Ja, wir bieten individuelle Einweisungen und Schulungen für Sie und Ihr Team.'
      }
    ]
  }
];

export default function FAQ() {
  return (
    <Layout darkBg={false}>
      <div className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6">Häufige Fragen (FAQ)</h1>
        <p className="mb-10 text-gray-500">Hier finden Sie Antworten auf die wichtigsten Fragen rund um unsere Leistungen, Preise und den Ablauf. Ihre Frage fehlt? <a href="/kontakt" className="text-[#D4AF37] underline">Kontaktieren Sie uns!</a></p>
        {faqs.map(({ category, qas }) => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{category}</h2>
            <div className="space-y-4">
              {qas.map(({ question, answer }) => (
                <details key={question} className="bg-white border border-gray-200 rounded-lg p-4">
                  <summary className="font-medium cursor-pointer text-lg">{question}</summary>
                  <div className="mt-2 text-gray-700 text-base">{answer}</div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
