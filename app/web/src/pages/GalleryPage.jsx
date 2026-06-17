import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import GalleryImage from '@/components/GalleryImage.jsx';

function GalleryPage() {
  const galleryImages = [
    {
      id: 'dance-performance',
      src: 'https://horizons-cdn.hostinger.com/09c951e7-3780-4cbb-b319-1263b936e067/853c85a5edd39bab2ca6bf16e27dc8b1.jpg',
      alt: 'Performance de danse centrafricaine traditionnelle avec costumes vibrants',
      title: 'Performance de Danse Traditionnelle'
    },
    {
      id: 'community-event',
      src: 'https://horizons-cdn.hostinger.com/09c951e7-3780-4cbb-b319-1263b936e067/00c615bdabf13bde94544f04221ad2b1.jpg',
      alt: 'Rassemblement communautaire lors d\'un evenement culturel d\'ESPACE LINGA TERE',
      title: 'Evenement Culturel Communautaire'
    },
    {
      id: 'music-session',
      src: 'https://horizons-cdn.hostinger.com/09c951e7-3780-4cbb-b319-1263b936e067/a3021ea98a5ca9c88eeba92a2f2dfbc0.jpg',
      alt: 'Performance musicale mettant en vedette les instruments traditionnels centrafricains',
      title: 'Session de Musique Traditionnelle'
    },
    {
      id: 'theater-workshop',
      src: 'https://horizons-cdn.hostinger.com/09c951e7-3780-4cbb-b319-1263b936e067/d649ccca946d5a8250e1d3ca343c0f37.jpg',
      alt: 'Atelier de theatre avec des etudiants apprenant les arts dramatiques',
      title: 'Atelier de Theatre'
    },
    {
      id: 'arts-exhibition',
      src: 'https://horizons-cdn.hostinger.com/09c951e7-3780-4cbb-b319-1263b936e067/5e6b667b3b0ad09c69470a5c94a9055f.jpg',
      alt: 'Exposition d\'arts visuels mettant en vedette les peintures centrafricaines',
      title: 'Exposition d\'Arts Visuels'
    },
    {
      id: 'photography-training',
      src: 'https://horizons-cdn.hostinger.com/09c951e7-3780-4cbb-b319-1263b936e067/90bfe038ab5fce826b5725e8295eff5b.jpg',
      alt: 'Cours de photographie capturant les moments culturels',
      title: 'Formation en Photographie'
    },
    {
      id: 'radio-studio',
      src: 'https://horizons-cdn.hostinger.com/09c951e7-3780-4cbb-b319-1263b936e067/2a37d368b74a3a6954638b0ec1470356.jpg',
      alt: 'Session de radiodiffusion RADIO LINGA FM avec des animateurs',
      title: 'Studio RADIO LINGA FM'
    },
    {
      id: 'cultural-exchange',
      src: 'https://horizons-cdn.hostinger.com/09c951e7-3780-4cbb-b319-1263b936e067/39260b50a36eb58cd98f30df79862dbc.jpg',
      alt: 'Participants du programme d\'echange culturel partageant les traditions',
      title: 'Programme d\'Echange Culturel'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Galerie - ESPACE LINGA TERE</title>
        <meta name="description" content="Explorez les photos des programmes culturels, performances, ateliers et evenements communautaires d'ESPACE LINGA TERE celebrant le patrimoine centrafricain." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{letterSpacing: '-0.02em'}}>
                Galerie
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Moments captures de nos programmes culturels, performances et evenements communautaires
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {galleryImages.map((image, index) => (
                <GalleryImage
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  title={image.title}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default GalleryPage;