
import { useTranslation } from '../../TranslationContext';

export default function Invoices() {
  const { t } = useTranslation();
  // Dummy-Rechnungen
  const invoices = [
    { number: '2026-001', amount: '€1200', status: t('dashboard.invoices.status.paid'), date: '17.01.2026' },
    { number: '2026-002', amount: '€350', status: t('dashboard.invoices.status.open'), date: '10.01.2026' },
    { number: '2025-012', amount: '€800', status: t('dashboard.invoices.status.paid'), date: '22.12.2025' },
  ];
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">{t('dash.invoices')}</h2>
      <p className="text-gray-500 mb-6">{t('dashboard.invoices.desc') || 'Ihre Rechnungen und Zahlungen.'}</p>
      <table className="w-full bg-white rounded-xl shadow overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-4 py-2">{t('dashboard.invoices.table.number')}</th>
            <th className="text-left px-4 py-2">{t('dashboard.invoices.table.amount')}</th>
            <th className="text-left px-4 py-2">{t('dashboard.invoices.table.status')}</th>
            <th className="text-left px-4 py-2">{t('dashboard.invoices.table.date')}</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((inv, i) => (
            <tr key={i} className="border-t">
              <td className="px-4 py-2 font-medium">{inv.number}</td>
              <td className="px-4 py-2">{inv.amount}</td>
              <td className="px-4 py-2">{inv.status}</td>
              <td className="px-4 py-2 text-gray-500">{inv.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
