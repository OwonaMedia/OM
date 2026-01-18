import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import AGB from './pages/AGB';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();
  // Dashboard and Login generally don't use the standard Header/Footer
  const isDashboard = location.pathname.startsWith('/dashboard');
  const isLogin = location.pathname === '/login';
  const showStandardLayout = !isDashboard && !isLogin;

  return (
    <>
      <ScrollToTop />
      {/* Custom Cursor Element - Logic handled in CSS/JS in index.html usually, 
          but can be added here if needed. For now sticking to index.css implementation */}
      <div id="cursor" className="hidden md:block fixed w-5 h-5 border border-[#D4AF37]/50 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100" style={{ left: '-20px', top: '-20px' }}></div>

      {showStandardLayout && <Header />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/agb" element={<AGB />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {showStandardLayout && <Footer />}
      <CookieBanner />
    </>
  );
}
