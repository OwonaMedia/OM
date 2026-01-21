import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Impressum from './pages/legal/Impressum';
import Datenschutz from './pages/legal/Datenschutz';
import AGB from './pages/legal/AGB';
import Login from './pages/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Register from './pages/Register';
import ProtectedRoute from './pages/ProtectedRoute';
import Produkte from './pages/Produkte';
import ProductStarter from './pages/ProductStarter';
import ProductPro from './pages/ProductPro';
import ProductEnterprise from './pages/ProductEnterprise';
import Abo from './pages/Abo';
import Ueber from './pages/Ueber';
import Kontakt from './pages/Kontakt';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import { TranslationProvider } from './TranslationContext';

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
    <TranslationProvider>
      <ScrollToTop />
      <Routes>
        {/* All main pages wrapped in Layout for consistent Header/Footer/CookieBanner */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/agb" element={<AGB />} />
        <Route path="/produkte" element={<Layout darkBg={false}><Produkte /></Layout>} />
        <Route path="/produkte/starter" element={<Layout darkBg={false}><ProductStarter /></Layout>} />
        <Route path="/produkte/pro" element={<Layout darkBg={false}><ProductPro /></Layout>} />
        <Route path="/produkte/enterprise" element={<Layout darkBg={false}><ProductEnterprise /></Layout>} />
        <Route path="/abo" element={<Layout darkBg={false}><Abo /></Layout>} />
        <Route path="/ueber" element={<Layout darkBg={false}><Ueber /></Layout>} />
        <Route path="/kontakt" element={<Layout darkBg={false}><Kontakt /></Layout>} />
        <Route path="/blog" element={<Layout darkBg={false}><Blog /></Layout>} />
        {/* Login and Dashboard can use their own layout or be standalone */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/dashboard/*" element={<ProtectedRoute><Layout darkBg={false}><Dashboard /></Layout></ProtectedRoute>} />
      </Routes>
    </TranslationProvider>
  );
}
