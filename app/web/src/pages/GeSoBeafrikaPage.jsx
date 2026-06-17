import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import {
  Target, Users, Heart, Globe, Image as ImageIcon,
  Music, Coffee, Beer, Mic2, Star, ArrowRight
} from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { Link } from 'react-router-dom';

function GeSoBeafrikaPage() {
  const { t } = useLanguage();

  const spaces = [
    {
      id: 'gallery',
      icon: ImageIcon,
      title: t('geSo_page.gallery_title'),
      description: t('geSo_page.gallery_text')
    },
    {
      id: 'sanctuary',
      icon: Heart,
      title: t('geSo_page.sanctuary_title'),
      description: t('geSo_page.sanctuary_text')
    },
    {
      id: 'palaver',
      icon: Coffee,
      title: t('geSo_page.palaver_title'),
      description: t('geSo_page.palaver_text')
    },
    {
      id: 'courtyard',
      icon: Users,
      title: t('geSo_page.courtyard_title'),
      description: t('geSo_page.courtyard_text')
    },
    {
      id: 'bar',
      icon: Beer,
      title: t('geSo_page.bar_title'),
      description: t('geSo_page.bar_text')
    },
    {
      id: 'stage',
      icon: Mic2,
      title: t('geSo_page.stage_title'),
      description: t('geSo_page.stage_text')
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{t('nav.geSo')} - ESPACE LINGA TERE</title>
      </Helmet>
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 bg-accent text-accent-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6 max-w-4xl mx-auto"
            >
              <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold uppercase tracking-widest">
                {t('geSo_page.hero_tag')}
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                {t('geSo_page.hero_title')}
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                {t('geSo_page.hero_subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Summary & Intention */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold flex items-center text-primary">
                    <Target className="mr-3 h-6 w-6" /> {t('geSo_page.summary_title')}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t('geSo_page.summary_text')}
                  </p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold flex items-center text-primary">
                    <Star className="mr-3 h-6 w-6" /> {t('geSo_page.intent_title')}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed italic">
                    {t('geSo_page.intent_text')}
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-muted rounded-[2rem] overflow-hidden border-2 border-dashed border-primary/30 flex items-center justify-center">
                   <p className="text-muted-foreground font-serif italic text-lg px-8 text-center">
                     "Et si un lieu pouvait transformer une génération ?"
                   </p>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-2xl shadow-xl hidden md:block">
                  <p className="text-primary-foreground font-bold text-sm">République Centrafricaine</p>
                  <p className="text-primary-foreground/80 text-xs">Bangui, Galabadja</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Discovery Sections */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-4xl font-extrabold">{t('geSo_page.spaces_title')}</h2>
              <p className="text-xl text-muted-foreground">{t('geSo_page.spaces_subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {spaces.map((space, idx) => (
                <Link
                  key={space.id}
                  to={`/ge-so-beafrika/${space.id}`}
                  className="block group"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="h-full bg-card border rounded-[2.5rem] p-10 hover:shadow-2xl transition-all duration-300 border-primary/10 hover:border-primary/30 flex flex-col"
                  >
                    <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <space.icon className="h-8 w-8" />
                    </div>
                    <div className="space-y-4 flex-grow">
                      <h3 className="text-xl font-extrabold leading-tight">{space.title}</h3>
                      <p className="text-muted-foreground leading-relaxed line-clamp-3">{space.description}</p>
                    </div>
                    <div className="mt-8 pt-6 border-t flex items-center text-primary font-bold text-sm group-hover:translate-x-1 transition-transform">
                      Découvrir cet espace <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final Pitch CTA */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-20">
             <Globe className="w-[30rem] h-[30rem] -mr-20 -mt-20 rotate-12" />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
                Investissez dans la jeunesse, la culture et la transformation durable.
              </h2>
              <p className="text-xl opacity-90">
                Le projet “GE SÔ BÊAFRIKÂ” représente une opportunité unique de valoriser la culture centrafricaine tout en répondant aux enjeux sociaux actuels.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-10 py-8 rounded-2xl">
                  {t('geSo_page.cta_partner')}
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 font-bold px-10 py-8 rounded-2xl">
                  {t('geSo_page.cta_donate')}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default GeSoBeafrikaPage;