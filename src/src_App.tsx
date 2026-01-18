import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import CustomCursor from './components/ui/CustomCursor';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import AGB from './pages/AGB';
import Layout from './components/layout/Layout';
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
        {/* Custom Cursor React-Komponente */}
        <CustomCursor />

      {showStandardLayout && <Header />}
      
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/impressum" element={<Layout darkBg={false}><Impressum /></Layout>} />
        <Route path="/datenschutz" element={<Layout darkBg={false}><Datenschutz /></Layout>} />
        <Route path="/agb" element={<Layout darkBg={false}><AGB /></Layout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {showStandardLayout && <Footer />}
      <CookieBanner />
    </>
  );
}
