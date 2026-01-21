
import { useTranslation } from '../../TranslationContext';

export default function Files() {
  const { t } = useTranslation();
  // Dummy-Dateien
  const files = [
    { name: 'Logo.png', size: '2.1 MB', type: 'Bild', uploaded: 'vor 2 Stunden' },
    { name: 'Rechnung_2026-001.pdf', size: '0.3 MB', type: 'PDF', uploaded: 'vor 1 Tag' },
    { name: 'Präsentation.pptx', size: '5.8 MB', type: 'PowerPoint', uploaded: 'vor 3 Tagen' },
  ];
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">{t('dash.files')}</h2>
      <p className="text-gray-500 mb-6">{t('dashboard.files.desc') || 'Ihre Dateien und Uploads.'}</p>
      <table className="w-full bg-white rounded-xl shadow overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-4 py-2">{t('dashboard.files.table.name')}</th>
            <th className="text-left px-4 py-2">{t('dashboard.files.table.size')}</th>
            <th className="text-left px-4 py-2">{t('dashboard.files.table.type')}</th>
            <th className="text-left px-4 py-2">{t('dashboard.files.table.uploaded')}</th>
          </tr>
        </thead>
        <tbody>
          {files.map((f, i) => (
            <tr key={i} className="border-t">
              <td className="px-4 py-2 font-medium">{f.name}</td>
              <td className="px-4 py-2">{f.size}</td>
              <td className="px-4 py-2">{f.type}</td>
              <td className="px-4 py-2 text-gray-500">{f.uploaded}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
