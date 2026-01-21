
import { useTranslation } from '../../TranslationContext';

export default function Overview() {
  const { t } = useTranslation();
  // Dummy-Daten für Statistiken und Aktivitäten
  const stats = [
    { label: t('dashboard.stats.projects'), value: 5 },
    { label: t('dashboard.stats.invoices'), value: 12 },
    { label: t('dashboard.stats.files'), value: 34 },
    { label: t('dashboard.stats.team'), value: 3 },
  ];
  const activities = [
    { user: 'Salomon', action: t('dashboard.activity.uploaded'), target: 'Logo.png', time: 'vor 2 Stunden' },
    { user: 'Anna', action: t('dashboard.activity.created'), target: t('dash.projects'), time: 'vor 1 Tag' },
    { user: 'Salomon', action: t('dashboard.activity.paid'), target: t('dash.invoices'), time: 'vor 3 Tagen' },
  ];
  const notifications = [
    { type: 'info', message: t('dashboard.notifications.welcome') },
    { type: 'alert', message: t('dashboard.notifications.invoice_due') },
  ];
  return (
    <div className="p-8 space-y-8">
      {/* Begrüßung */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#D4AF37] to-amber-700 flex items-center justify-center text-white font-bold text-xl">S</div>
        <div>
          <h2 className="text-2xl font-bold">{t('dashboard.greeting', { name: 'Salomon' })}</h2>
          <p className="text-gray-500">{t('dashboard.overview.desc') || 'Dashboard Übersicht.'}</p>
        </div>
      </div>

      {/* Statistiken */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map(stat => (
          <div key={stat.label} className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <div className="text-3xl font-bold text-[#D4AF37]">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-2">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Schnellaktionen */}
      <div className="flex gap-4">
        <button className="bg-[#D4AF37] text-black px-6 py-2 rounded-lg font-medium shadow">{t('dashboard.action.new_project')}</button>
        <button className="bg-black text-white px-6 py-2 rounded-lg font-medium shadow">{t('dashboard.action.upload_file')}</button>
        <button className="bg-white text-black border px-6 py-2 rounded-lg font-medium shadow">{t('dashboard.action.invite')}</button>
      </div>

      {/* Benachrichtigungen */}
      <div className="space-y-2">
        {notifications.map((n, i) => (
          <div key={i} className={`p-4 rounded-lg ${n.type === 'alert' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>{n.message}</div>
        ))}
      </div>

      {/* Aktivitäten */}
      <div>
        <h3 className="text-lg font-semibold mb-2">{t('dashboard.activity.title')}</h3>
        <ul className="divide-y divide-gray-200">
          {activities.map((a, i) => (
            <li key={i} className="py-2 flex justify-between items-center">
              <span className="font-medium text-black">{a.user}</span>
              <span className="text-gray-600">{a.action} <span className="font-semibold">{a.target}</span></span>
              <span className="text-xs text-gray-400">{a.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
