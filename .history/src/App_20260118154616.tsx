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
import Produkte from './pages/Produkte';
import Abo from './pages/Abo';
import Ueber from './pages/Ueber';
import Kontakt from './pages/Kontakt';

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

      {showStandardLayout && <Header />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/agb" element={<AGB />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/produkte" element={<Produkte />} />
        <Route path="/abo" element={<Abo />} />
        <Route path="/ueber" element={<Ueber />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>

      {showStandardLayout && <Footer />}
      <CookieBanner />
    </>
  );
}
