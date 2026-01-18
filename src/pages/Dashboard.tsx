import { useState } from 'react';
import { useTranslation } from '../translations';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex min-h-screen bg-[#f9f9f9] font-sans text-black">
      {/* Sidebar */}
      <aside className="w-20 lg:w-64 bg-black text-white flex-shrink-0 flex flex-col justify-between fixed h-full z-50 transition-all duration-300">
        <div className="p-6 lg:p-8">
          <Link to="/" className="text-white font-bold tracking-widest text-xl mb-12 block">OM.</Link>
          
          <nav className="space-y-2">
            {[
              { id: 'overview', icon: 'GRID', label: t('dash.welcome') },
              { id: 'projects', icon: 'LAY', label: t('dash.projects') },
              { id: 'invoices', icon: 'DOC', label: t('dash.invoices') },
              { id: 'files', icon: 'FLD', label: t('dash.files') },
              { id: 'settings', icon: 'COG', label: t('dash.settings') },
            ].map(item => (
              <button 
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-4 transition-all ${
                  activeTab === item.id 
                    ? 'bg-[#D4AF37] text-black font-medium' 
                    : 'text-white/40 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-[10px] font-mono opacity-50 w-6">{item.icon}</span>
                <span className="hidden lg:block text-sm tracking-wide">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6 lg:p-8 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#D4AF37] to-amber-700"></div>
            <div className="hidden lg:block">
              <div className="text-xs font-medium">Salomon Owona</div>
              <div className="text-[10px] text-white/40">Admin</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-20 lg:ml-64 p-8 lg:p-16 overflow-y-auto">
        <header className="flex justify-between items-center mb-16">
          <div>
            <h1 className="text-3xl font-light mb-2">{t('dash.welcome')}, Client</h1>
            <p className="text-gray-400 text-sm">Here is what's happening with your digital ecosystem.</p>
          </div>
          <button className="bg-black text-white px-6 py-2 rounded text-xs uppercase tracking-widest hover:bg-[#D4AF37] transition-colors shadow-lg">
            + New Request
          </button>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Active Plan Card (Stripe Placeholder) */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-9xl -mt-4 -mr-4 select-none">PRO</div>
            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-4">Active Subscription</h3>
            <div className="flex items-baseline gap-4 mb-6 relative z-10">
              <span className="text-4xl font-light">Pro Growth</span>
              <span className="text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-1 rounded text-xs font-medium">Active</span>
            </div>
            <p className="text-gray-500 text-sm mb-8 max-w-md relative z-10">
              Your ecosystem is running smoothly. Next billing cycle via Stripe on <span className="text-black font-medium">Nov 24, 2024</span>.
            </p>
            <div className="flex gap-4 relative z-10">
              <button className="px-4 py-2 border border-gray-200 rounded text-xs hover:border-black transition-colors">Manage Subscription</button>
              <button className="px-4 py-2 text-[#D4AF37] text-xs hover:underline">Download Invoices</button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-black text-white p-8 rounded-2xl shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-white/40 mb-4">Project Health</h3>
              <div className="text-4xl font-light text-[#D4AF37] mb-2">98%</div>
              <p className="text-white/40 text-xs">Uptime & Performance Score</p>
            </div>
            <div className="mt-8">
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#D4AF37] w-[98%]"></div>
              </div>
            </div>
          </div>

          {/* Upload Area */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-6">File Transfer</h3>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-12 text-center hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all cursor-pointer group">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4AF37] group-hover:text-white transition-colors">↑</div>
              <p className="text-sm font-medium mb-1">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-400">Assets, Brand Guides, Content Documents (Max 50MB)</p>
            </div>
          </div>

          {/* Recent Invoices (Stripe Mockup) */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-6">Recent Billing</h3>
            <div className="space-y-4">
              {[
                { date: 'Oct 01, 2024', amount: '€29.90', status: 'Paid' },
                { date: 'Sep 01, 2024', amount: '€29.90', status: 'Paid' },
                { date: 'Aug 01, 2024', amount: '€999.00', status: 'One-time' },
              ].map((inv, i) => (
                <div key={i} className="flex justify-between items-center text-sm pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                  <div>
                    <div className="font-medium">{inv.date}</div>
                    <div className="text-gray-400 text-xs">Stripe Invoice #{4092 + i}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono">{inv.amount}</div>
                    <div className="text-[10px] text-green-600 bg-green-50 px-2 rounded inline-block">{inv.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
