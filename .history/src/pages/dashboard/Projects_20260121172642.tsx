
import { useTranslation } from '../../TranslationContext';

export default function Projects() {
  const { t } = useTranslation();
  // Dummy-Projekte
  const projects = [
    { name: 'Website Relaunch', status: t('dashboard.projects.status.active'), members: 2, updated: 'vor 2 Tagen' },
    { name: 'Branding', status: t('dashboard.projects.status.completed'), members: 1, updated: 'vor 1 Woche' },
    { name: 'Kampagne 2026', status: t('dashboard.projects.status.active'), members: 3, updated: 'vor 3 Stunden' },
  ];
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">{t('dash.projects')}</h2>
      <p className="text-gray-500 mb-6">{t('dashboard.projects.desc') || 'Hier sehen Sie Ihre Projekte.'}</p>
      <table className="w-full bg-white rounded-xl shadow overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-4 py-2">{t('dashboard.projects.table.name')}</th>
            <th className="text-left px-4 py-2">{t('dashboard.projects.table.status')}</th>
            <th className="text-left px-4 py-2">{t('dashboard.projects.table.members')}</th>
            <th className="text-left px-4 py-2">{t('dashboard.projects.table.updated')}</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p, i) => (
            <tr key={i} className="border-t">
              <td className="px-4 py-2 font-medium">{p.name}</td>
              <td className="px-4 py-2">{p.status}</td>
              <td className="px-4 py-2">{p.members}</td>
              <td className="px-4 py-2 text-gray-500">{p.updated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
