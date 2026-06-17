import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Radio, GraduationCap, Globe, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProgramCard from '@/components/ProgramCard.jsx';
import { useLanguage } from '@/lib/LanguageContext';
import { useAuth } from '@/lib/AuthContext';
import { Settings, Edit2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const { t } = useLanguage();
  const { isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleQuickEdit = (e) => {
    e.preventDefault();
    navigate('/admin');
  };

  const featuredPrograms = [
    {
      id: 'cfp-asa',
      icon: GraduationCap,
      title: t('pilars.cfp.title'),
      description: t('pilars.cfp.desc')
    },
    {
      id: 'radio-linga',
      icon: Radio,
      title: t('pilars.radio.title'),
      description: t('pilars.radio.desc')
    },
    {
      id: 'ge-so-beafrika',
      icon: Globe,
      title: t('pilars.geSo.title'),
      description: t('pilars.geSo.desc')
    }
  ];

  const stats = [
    { label: t('stats.years'), value: '30+' },
    { label: t('stats.trained'), value: '5000+' },
    { label: t('stats.listeners'), value: '10k+' },
    { label: t('stats.partners'), value: '25+' }
  ];

  return (
    <>
      <Helmet>
        <title>ESPACE LINGA TERE - Art et Développement en Centrafrique</title>
        <meta name="description" content="Espace Linga Tere (ELTAD) est une ONG dédiée à la valorisation de la culture, la formation professionnelle artistique et la diffusion médiatique via Radio Linga FM." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://horizons-cdn.hostinger.com/09c951e7-3780-4cbb-b319-1263b936e067/whatsapp-image-2025-12-19-at-12.20.03-OAHKq.jpeg"
              alt="Performance culturelle Espace Linga Tere"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl space-y-6"
            >
              <div className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-primary font-bold text-sm uppercase tracking-wider">
                {t('hero.tag')}
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1]" style={{ letterSpacing: '-0.02em' }}>
                {t('hero.title')}
                {isAdmin && (
                  <button
                    onClick={handleQuickEdit}
                    className="ml-4 p-2 bg-primary/20 hover:bg-primary/40 rounded-full transition-colors inline-flex"
                    title="Modifier le contenu"
                  >
                    <Edit2 className="h-6 w-6 text-white" />
                  </button>
                )}
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-6">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link to="/programs">
                    {t('hero.cta_primary')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                  <Link to="/radio">{t('hero.cta_secondary')}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-card border-y">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center space-y-2">
                  <div className="text-4xl md:text-5xl font-extrabold text-primary">{stat.value}</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://horizons-cdn.hostinger.com/09c951e7-3780-4cbb-b319-1263b936e067/whatsapp-image-2025-12-19-at-12.20.03-OAHKq.jpeg"
                  alt="Ateliers Espace Linga Tere"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">{t('mission.title')}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('mission.text')}
                </p>
                <Button asChild variant="link" className="text-primary p-0 text-lg font-bold">
                  <Link to="/about" className="flex items-center">
                    {t('mission.more')} <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Actions */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">{t('pilars.title')}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('pilars.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPrograms.map((program, index) => (
                <ProgramCard
                  key={program.id}
                  icon={program.icon}
                  title={program.title}
                  description={program.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-card text-card-foreground p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-4">
                <div className="bg-primary/10 p-3 rounded-2xl w-fit">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">{t('newsletter.title')}</h2>
                <p className="text-muted-foreground">{t('newsletter.desc')}</p>
              </div>
              <div className="w-full md:w-auto flex-1">
                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder={t('newsletter.placeholder')}
                    className="flex-grow px-6 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  />
                  <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">{t('newsletter.button')}</Button>
                </form>
                <p className="text-xs text-muted-foreground mt-4 text-center sm:text-left">{t('newsletter.privacy')}</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;