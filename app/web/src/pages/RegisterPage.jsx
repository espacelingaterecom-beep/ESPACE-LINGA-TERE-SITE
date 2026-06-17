import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Lock, UserPlus, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/AuthContext';
import { useLanguage } from '@/lib/LanguageContext';
import { toast } from 'sonner';

function RegisterPage() {
  const { register } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Les mots de passe ne correspondent pas');
      return;
    }
    if (email && password) {
      register(email, password);
      toast.success(t('auth.register_title'));
      navigate('/');
    } else {
      toast.error('Veuillez remplir tous les champs');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{t('nav.register')} - ESPACE LINGA TERE</title>
      </Helmet>
      <Header />

      <main className="flex-grow flex items-center justify-center py-20 bg-muted/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md px-4"
        >
          <div className="bg-card border rounded-[2.5rem] p-8 md:p-12 shadow-xl space-y-8">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-extrabold">{t('auth.register_title')}</h1>
              <p className="text-muted-foreground">{t('auth.register_subtitle')}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider">{t('auth.email')}</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3 h-5 w-5 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-muted/30"
                    placeholder="exemple@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider">{t('auth.password')}</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-3 h-5 w-5 text-muted-foreground" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-muted/30"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider">{t('auth.confirm_password')}</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-3 h-5 w-5 text-muted-foreground" />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-muted/30"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full py-6 text-lg font-bold rounded-2xl">
                <UserPlus className="mr-2 h-5 w-5" /> {t('auth.register_button')}
              </Button>
            </form>

            <div className="text-center pt-4">
              <p className="text-muted-foreground">
                {t('auth.has_account')}{' '}
                <Link to="/login" className="text-primary font-bold hover:underline">
                  {t('nav.login')}
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default RegisterPage;