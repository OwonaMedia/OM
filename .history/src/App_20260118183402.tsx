import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/layout/Layout';
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
  // Dashboard gets its own layout, all others use Layout
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* All main pages wrapped in Layout for consistent Header/Footer/CookieBanner */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/impressum" element={<Layout darkBg={false}><Impressum /></Layout>} />
        <Route path="/datenschutz" element={<Layout darkBg={false}><Datenschutz /></Layout>} />
        <Route path="/agb" element={<Layout darkBg={false}><AGB /></Layout>} />
        <Route path="/produkte" element={<Layout darkBg={false}><Produkte /></Layout>} />
        <Route path="/abo" element={<Layout darkBg={false}><Abo /></Layout>} />
        <Route path="/ueber" element={<Layout darkBg={false}><Ueber /></Layout>} />
        <Route path="/kontakt" element={<Layout darkBg={false}><Kontakt /></Layout>} />
        {/* Login and Dashboard can use their own layout or be standalone */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
