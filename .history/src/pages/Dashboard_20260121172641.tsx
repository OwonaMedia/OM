

import { useState, useEffect } from 'react';
import { useTranslation } from '../TranslationContext';
import { Link, useNavigate, Routes, Route, useLocation } from 'react-router-dom';

// Import der neuen Seiten
import Overview from './dashboard/Overview';
import Projects from './dashboard/Projects';
import Invoices from './dashboard/Invoices';
import Files from './dashboard/Files';
import Settings from './dashboard/Settings';

function Dashboard() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem('isTestUser') !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  // Sidebar links
  const links = [
    { to: '/dashboard', icon: 'GRID', label: t('dash.welcome') },
    { to: '/dashboard/projects', icon: 'LAY', label: t('dash.projects') },
    { to: '/dashboard/invoices', icon: 'DOC', label: t('dash.invoices') },
    { to: '/dashboard/files', icon: 'FLD', label: t('dash.files') },
    { to: '/dashboard/settings', icon: 'COG', label: t('dash.settings') },
  ];

  return (
    <div className="flex min-h-screen bg-[#f9f9f9] font-sans text-black">
      {/* Sidebar */}
      <aside className="w-20 lg:w-64 bg-black text-white flex-shrink-0 flex flex-col justify-between fixed h-full z-50 transition-all duration-300">
        <div className="p-6 lg:p-8">
          <Link to="/" className="text-white font-bold tracking-widest text-xl mb-12 block">OM.</Link>
          <nav className="space-y-2">
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-4 transition-all ${
                  location.pathname === link.to
                    ? 'bg-[#D4AF37] text-black font-medium'
                    : 'text-white/40 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-[10px] font-mono opacity-50 w-6">{link.icon}</span>
                <span className="hidden lg:block text-sm tracking-wide">{link.label}</span>
              </Link>
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
        <Routes>
          <Route index element={<Overview />} />
          <Route path="projects" element={<Projects />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="files" element={<Files />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

export default Dashboard;
