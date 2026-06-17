import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { User, Mail, Calendar, LogOut, ShieldCheck, Edit3 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/AuthContext';
import { useLanguage } from '@/lib/LanguageContext';

function ProfilePage() {
  const { user, logout, loading } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  if (loading) return null;
  if (!user) return <Navigate to="/login" replace />;

  const userName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Utilisateur';
  const userInitial = userName.charAt(0).toUpperCase();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{t('nav.profile')} - ESPACE LINGA TERE</title>
      </Helmet>
      <Header />

      <main className="flex-grow py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card border rounded-[2.5rem] overflow-hidden shadow-xl">
              {/* Header Cover */}
              <div className="h-48 bg-primary relative">
                <div className="absolute -bottom-16 left-12">
                  <div className="w-32 h-32 rounded-full border-4 border-card bg-primary/20 flex items-center justify-center text-white text-5xl font-bold">
                    {userInitial}
                  </div>
                </div>
              </div>

              <div className="pt-20 pb-12 px-12 space-y-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <h1 className="text-4xl font-extrabold">{userName}</h1>
                    <p className="text-muted-foreground text-lg">{t('profile.subtitle')}</p>
                  </div>
                  <Button variant="outline" className="rounded-xl flex items-center">
                    <Edit3 className="mr-2 h-4 w-4" /> {t('profile.save')}
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 p-6 bg-muted/30 rounded-2xl border">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <User className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">{t('profile.name')}</p>
                        <p className="font-bold text-lg">{userName}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-6 bg-muted/30 rounded-2xl border">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">{t('profile.email')}</p>
                        <p className="font-bold text-lg">{user.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 p-6 bg-muted/30 rounded-2xl border">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">{t('profile.joined')}</p>
                        <p className="font-bold text-lg">Août 2026</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-6 bg-green-500/5 rounded-2xl border border-green-500/10">
                      <div className="bg-green-500/10 p-3 rounded-full">
                        <ShieldCheck className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <p className="text-xs text-green-600 font-bold uppercase tracking-widest">Statut</p>
                        <p className="font-bold text-lg text-green-700">Compte Vérifié</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t">
                  <Button
                    variant="ghost"
                    onClick={handleLogout}
                    className="text-destructive hover:text-destructive hover:bg-destructive/10 px-8 py-6 rounded-xl font-bold"
                  >
                    <LogOut className="mr-2 h-5 w-5" /> {t('profile.logout')}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProfilePage;