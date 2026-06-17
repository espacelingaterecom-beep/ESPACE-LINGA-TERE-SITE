import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Music, GraduationCap, Theater, Film, Radio, Globe,
  CheckCircle2, Camera, Mic, Smartphone,
  Briefcase, Award, Zap, Heart, ArrowRight
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/LanguageContext';

function ProgramsPage() {
  const { t } = useLanguage();

  const filieres = [
    {
      id: 'e-photo',
      icon: Camera,
      title: 'E-Photographie',
      duration: '3 mois',
      description: 'Formation intensive en photographie professionnelle et ambulante.',
      details: 'Maîtrise des techniques de prise de vue, traitement d\'image numérique.'
    },
    {
      id: 'e-dj',
      icon: Mic,
      title: 'E-Disc-Jockey (DJ)',
      duration: '3 mois',
      description: 'Animation musicale moderne et techniques de mixage.',
      details: 'Sonorisation, mixage numérique, Musique Assistée par Ordinateur (MAO).'
    },
    {
      id: 'cinema',
      icon: Film,
      title: 'Cinéma & Audiovisuel',
      duration: 'Cycle long',
      description: 'Production cinématographique et réalisation.',
      details: 'Réalisation, image, montage, écriture de scénario.'
    },
    {
      id: 'theatre',
      icon: Theater,
      title: 'Théâtre',
      duration: 'Cycle long',
      description: 'Art dramatique combinant traditions de conte et jeu moderne.',
      details: 'Interprétation, mise en scène, scénographie.'
    },
    {
      id: 'danse',
      icon: Music,
      title: 'Danse',
      duration: 'Cycle long',
      description: 'Danses traditionnelles et chorégraphie contemporaine.',
      details: 'Techniques corporelles, rythmique, création chorégraphique.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('nav.formations')} - Espace Linga Tere</title>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <GraduationCap className="absolute -right-10 -top-10 w-64 h-64 rotate-12" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center space-y-6"
            >
              <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold uppercase tracking-wider">
                {t('programs.hero_tag')}
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                {t('programs.hero_title')}
              </h1>
              <p className="text-xl opacity-90 leading-relaxed max-w-3xl mx-auto">
                {t('programs.hero_subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="bg-card border rounded-3xl p-8 md:p-12 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center justify-center md:justify-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary" /> Durée
                  </h3>
                  <p className="text-muted-foreground">{t('programs.info_duration')}</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center justify-center md:justify-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary" /> Prérequis
                  </h3>
                  <p className="text-muted-foreground">{t('programs.info_prereq')}</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center justify-center md:justify-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary" /> Débouchés
                  </h3>
                  <p className="text-muted-foreground">{t('programs.info_outlets')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filières Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filieres.map((filiere, index) => (
                <Link
                  key={filiere.id}
                  to={`/programs/${filiere.id}`}
                  className="block group"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="h-full bg-card border rounded-3xl p-8 hover:shadow-2xl hover:border-primary/50 transition-all duration-300 flex flex-col"
                  >
                    <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <filiere.icon className="h-8 w-8" />
                    </div>
                    <div className="space-y-4 flex-grow">
                      <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-bold">{filiere.title}</h3>
                        <span className="text-xs font-bold px-2 py-1 bg-muted rounded-full">{filiere.duration}</span>
                      </div>
                      <p className="font-medium text-foreground/80">{filiere.description}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{filiere.details}</p>
                    </div>
                    <div className="mt-6 pt-6 border-t flex items-center text-primary font-bold text-sm group-hover:translate-x-1 transition-transform">
                      Voir les détails <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">{t('programs.cta_title')}</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              {t('programs.cta_subtitle')}
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="/donate?tab=inscription">{t('programs.cta_button')}</a>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default ProgramsPage;