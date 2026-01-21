import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../TranslationContext';
import { supabase } from '../supabaseClient';
import Layout from '../components/layout/Layout';

export default function Register() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setSuccess(t('register.success'));
    }
  };

  return (
    <Layout darkBg={false}>
      <div className="bg-white min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="w-full max-w-md relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-light text-black mb-2">{t('register.title')}</h1>
            <p className="text-gray-400 text-sm">{t('register.desc')}</p>
          </div>
          {error && <div className="mb-4 text-xs text-red-500 text-center">{error}</div>}
          {success && <div className="mb-4 text-xs text-green-500 text-center">{success}</div>}
          <form onSubmit={handleRegister} className="space-y-6 bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 rounded-2xl">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">{t('register.email')}</label>
              <input 
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required 
                className="w-full bg-gray-50 border border-gray-200 p-4 text-black focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all rounded-lg"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">{t('register.password')}</label>
              <input 
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required 
                className="w-full bg-gray-50 border border-gray-200 p-4 text-black focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all rounded-lg"
                placeholder="••••••••"
              />
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-black text-white py-4 rounded-lg uppercase tracking-widest text-xs hover:bg-[#D4AF37] hover:text-white transition-all disabled:opacity-50"
            >
              {loading ? '...' : t('register.btn')}
            </button>
          </form>
          <div className="text-center mt-8">
            <a href="/login" className="text-xs text-gray-300 hover:text-black transition-colors">← {t('login.title')}</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
