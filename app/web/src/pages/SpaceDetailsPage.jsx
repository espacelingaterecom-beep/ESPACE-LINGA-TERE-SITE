import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  ArrowLeft, ImageIcon, Heart, Coffee, Users,
  Beer, Mic2, Star, Target, Info, Sparkles
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/LanguageContext';

const spacesData = {
  'gallery': {
    icon: ImageIcon,
    titleKey: 'geSo_page.gallery_title',
    descKey: 'geSo_page.gallery_text',
    details: [
      "Une galerie de portraits de personnalités (hommes et femmes) qui constituent des repères pour la Centrafrique.",
      "Couvre les domaines de l'Art, de la Science, de l'Économie, du Social et de la Politique.",
      "Un livre vivant d'hommage à ceux qui ont contribué par leur talent et leur engagement au rayonnement de la RCA.",
      "Expérience immersive : possibilité de découvrir leur parcours munis d'un casque audio."
    ]
  },
  'sanctuary': {
    icon: Heart,
    titleKey: 'geSo_page.sanctuary_title',
    descKey: 'geSo_page.sanctuary_text',
    details: [
      "Espace dédié à la contemplation des objets de divinités centrafricaines.",
      "Lieu de connexion avec les racines spirituelles et l'imaginaire collectif.",
      "Préservation du patrimoine immatériel et des symboles ancestraux.",
      "Ambiance calme et propice à la méditation et à la réflexion."
    ]
  },
  'palaver': {
    icon: Coffee,
    titleKey: 'geSo_page.palaver_title',
    descKey: 'geSo_page.palaver_text',
    details: [
      "Architecture inspirée des cases traditionnelles centrafricaines.",
      "Posée sur une scène moderne ronde.",
      "Dédiée aux débats, discussions et cafés littéraires.",
      "Lieu privilégié pour les soirées de contes et la transmission orale."
    ]
  },
  'courtyard': {
    icon: Users,
    titleKey: 'geSo_page.courtyard_title',
    descKey: 'geSo_page.courtyard_text',
    details: [
      "Espace de rassemblement pour toutes les générations.",
      "Mobilier artistique : tables sculptées dans du bois par des designers centrafricains de renom.",
      "Tables en fût illustrant l'histoire à travers des portraits de figures féminines emblématiques.",
      "Lieu de découverte ludique de la culture et de l'histoire locale."
    ]
  },
  'bar': {
    icon: Beer,
    titleKey: 'geSo_page.bar_title',
    descKey: 'geSo_page.bar_text',
    details: [
      "Structure entièrement réalisée en bambou par des ébénistes locaux.",
      "Dégustation et vente de boissons locales traditionnelles.",
      "Mise en valeur de l'art de la gastronomie centrafricaine.",
      "Immersion dans les saveurs authentiques du pays."
    ]
  },
  'stage': {
    icon: Mic2,
    titleKey: 'geSo_page.stage_title',
    descKey: 'geSo_page.stage_text',
    details: [
      "Scène principale de GE SÔ BÊAFRÎKA.",
      "Cocktail de talents : musiciens, chanteurs et jeunes pépites.",
      "Focus sur les grands classiques de la musique centrafricaine d'hier et d'aujourd'hui.",
      "Format privilégié : Live acoustique pour une ambiance purement culturelle."
    ]
  }
};

function SpaceDetailsPage() {
  const { id } = useParams();
  const { t } = useLanguage();
  const space = spacesData[id];

  if (!space) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Espace non trouvé</h1>
          <Button asChild variant="outline">
            <Link to="/ge-so-beafrika">Retour au projet</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{t(space.titleKey)} - GE SÔ BÊAFRIKÂ</title>
      </Helmet>
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <Link to="/ge-so-beafrika" className="inline-flex items-center text-sm font-bold uppercase tracking-wider mb-8 hover:opacity-80 transition-opacity">
              <ArrowLeft className="mr-2 h-4 w-4" /> Retour au projet
            </Link>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white/20 p-6 rounded-3xl h-fit">
                <space.icon className="h-16 w-16" />
              </div>
              <div className="space-y-4 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-extrabold">{t(space.titleKey)}</h1>
                <p className="text-xl opacity-90 max-w-2xl">{t(space.descKey)}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold flex items-center text-primary">
                    <Info className="mr-3 h-6 w-6" /> Ce que vous y découvrirez
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    {space.details.map((detail, i) => (
                      <div key={i} className="flex items-start space-x-4 bg-muted p-6 rounded-2xl border border-primary/10">
                        <div className="bg-primary/20 p-1.5 rounded-full shrink-0 mt-1 text-primary">
                          <Sparkles className="h-4 w-4" />
                        </div>
                        <p className="text-lg leading-relaxed">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square bg-muted rounded-[3rem] border-4 border-primary/20 overflow-hidden flex items-center justify-center">
                  <space.icon className="w-32 h-32 text-primary/20" />
                  <p className="absolute text-muted-foreground italic">Illustration de l'espace à venir</p>
                </div>
                <div className="absolute -top-6 -right-6 bg-accent p-8 rounded-full shadow-xl animate-bounce-slow">
                   <Target className="h-8 w-8 text-accent-foreground" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center space-y-8">
            <h2 className="text-3xl font-bold">Vivez l'expérience GE SÔ BÊAFRIKÂ</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Chaque recoin de ce centre est une invitation au voyage, à la mémoire et à la création.
            </p>
            <div className="flex justify-center gap-4">
               <Button asChild size="lg" className="rounded-2xl px-10">
                  <Link to="/contact">Planifier une visite</Link>
               </Button>
               <Button asChild variant="outline" size="lg" className="rounded-2xl px-10">
                  <Link to="/ge-so-beafrika">Découvrir d'autres espaces</Link>
               </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SpaceDetailsPage;