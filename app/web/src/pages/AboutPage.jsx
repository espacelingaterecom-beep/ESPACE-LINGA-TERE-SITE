import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { useLanguage } from '@/lib/LanguageContext';

function AboutPage() {
  const { t } = useLanguage();

  const partners = [
    { name: 'Ministère de la Culture', logo: 'https://placehold.co/200x100?text=Ministere' },
    { name: 'Institut Français', logo: 'https://placehold.co/200x100?text=IF' },
    { name: 'UNESCO', logo: 'https://placehold.co/200x100?text=UNESCO' },
    { name: 'Union Européenne', logo: 'https://placehold.co/200x100?text=UE' },
    { name: 'Alliance Française', logo: 'https://placehold.co/200x100?text=AF' }
  ];

  return (
    <>
      <Helmet>
        <title>{t('nav.about')} - ESPACE LINGA TERE (ELTAD)</title>
        <meta name="description" content="Découvrez l'histoire, la mission et l'équipe de l'Espace Linga Tere Arts et Développement (ELTAD), pilier culturel de la RCA." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {t('about.hero_title')}
              </h1>
              <p className="text-xl opacity-90 leading-relaxed max-w-2xl mx-auto">
                {t('about.hero_subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold">{t('about.history_title')}</h2>
                </div>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>{t('about.history_text1')}</p>
                  <p>{t('about.history_text2')}</p>
                  <div className="p-6 bg-muted rounded-2xl border-l-4 border-primary italic">
                    "{t('about.quote')}"
                  </div>
                </div>
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                 <img
                  src="https://horizons-cdn.hostinger.com/09c951e7-3780-4cbb-b319-1263b936e067/853c85a5edd39bab2ca6bf16e27dc8b1.jpg"
                  alt="Fondateur ELTAD"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">{t('about.team_title')}</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Vincent MAMBACHAKA', role: 'Président ELTAD', img: 'https://placehold.co/400x400?text=VM' },
                { name: 'Coordination', role: 'Direction Opérationnelle', img: 'https://placehold.co/400x400?text=Coord' },
                { name: 'Responsable Radio', role: 'Direction Radio Linga FM', img: 'https://placehold.co/400x400?text=Radio' }
              ].map((member, i) => (
                <div key={i} className="bg-card border rounded-2xl p-6 text-center space-y-4">
                  <div className="w-32 h-32 mx-auto rounded-full bg-muted overflow-hidden border-4 border-primary/20">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-muted-foreground uppercase tracking-widest">{t('about.partners_title')}</h2>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              {partners.map((partner, i) => (
                <img key={i} src={partner.logo} alt={partner.name} className="h-12 md:h-16 w-auto" />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default AboutPage;