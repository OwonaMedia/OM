import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/src_components_Header';
import Footer from './components/src_components_Footer';
import CookieBanner from './components/src_components_CookieBanner';
import CustomCursor from './components/ui/src_components_ui_CustomCursor';
import Home from './pages/src_pages_Home';
import Impressum from './pages/src_pages_Impressum';
import Datenschutz from './pages/src_pages_Datenschutz';
import AGB from './pages/src_pages_AGB';
import Layout from './components/layout/src_components_layout_Layout';
import Login from './pages/src_pages_Login';
import Dashboard from './pages/src_pages_Dashboard';

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
