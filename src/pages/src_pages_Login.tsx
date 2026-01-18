import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../src_translations';

export default function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulation eines Logins
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f8f8f8] -skew-x-12 translate-x-32 z-0 pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-12">
          <div className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-[#D4AF37]">Owona Media</div>
          <h1 className="text-3xl font-light text-black mb-2">{t('login.title')}</h1>
          <p className="text-gray-400 text-sm">{t('login.desc')}</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6 bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 rounded-2xl">
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">{t('login.email')}</label>
            <input 
              type="email" 
              required 
              className="w-full bg-gray-50 border border-gray-200 p-4 text-black focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all rounded-lg"
              placeholder="client@example.com"
            />
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-[10px] uppercase tracking-widest text-gray-400">{t('login.password')}</label>
              <a href="#" className="text-[10px] text-[#D4AF37] hover:underline">{t('login.forgot')}</a>
            </div>
            <input 
              type="password" 
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
            {loading ? '...' : t('login.btn')}
          </button>
        </form>
        
        <div className="text-center mt-8">
          <a href="/" className="text-xs text-gray-300 hover:text-black transition-colors">← {t('brand')} Home</a>
        </div>
      </div>
    </div>
  );
}
