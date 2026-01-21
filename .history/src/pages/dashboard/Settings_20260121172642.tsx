
import { useTranslation } from '../../TranslationContext';

export default function Settings() {
  const { t } = useTranslation();
  // Dummy-Accountdaten
  const user = {
    name: 'Salomon Owona',
    email: 'salomon@omedia.de',
    role: t('dashboard.settings.role.admin'),
    language: t('dashboard.settings.language.de'),
  };
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">{t('dash.settings')}</h2>
      <p className="text-gray-500 mb-6">{t('dashboard.settings.desc') || 'Ihre Einstellungen und Profil.'}</p>
      <div className="bg-white rounded-xl shadow p-6 w-full max-w-md">
        <div className="mb-4">
          <div className="font-semibold">{t('dashboard.settings.profile.name')}</div>
          <div className="text-gray-700">{user.name}</div>
        </div>
        <div className="mb-4">
          <div className="font-semibold">{t('dashboard.settings.profile.email')}</div>
          <div className="text-gray-700">{user.email}</div>
        </div>
        <div className="mb-4">
          <div className="font-semibold">{t('dashboard.settings.profile.role')}</div>
          <div className="text-gray-700">{user.role}</div>
        </div>
        <div>
          <div className="font-semibold">{t('dashboard.settings.profile.language')}</div>
          <div className="text-gray-700">{user.language}</div>
        </div>
      </div>
    </div>
  );
}
