import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function TermsPage() {
  const sections = [
    {
      id: 'intro',
      title: 'Introduction',
      content: 'Ces conditions generales ecrites sur cette page web regissent votre utilisation de notre site web, ESPACE LINGA TERE. Ces conditions generales peuvent etre modifiees a tout moment par nous. Votre utilisation continue de ce site web implique votre acceptation de ces conditions generales.'
    },
    {
      id: 'license',
      title: 'Licence d\'Utilisation',
      content: 'Sauf indication contraire, ESPACE LINGA TERE et/ou ses concedants de licence possedent les droits de propriete intellectuelle pour tout le materiel de ce site web. Tous les droits de propriete intellectuelle sont reserves. Vous pouvez consulter et imprimer les pages du site web a des fins personnelles, sous reserve des restrictions enoncees dans ces conditions generales.\n\nVous ne devez pas:\n\n• Republier le materiel de ce site web sans un credit ou une attribution appropriee\n• Vendre, louer ou sous-licencier le materiel du site web\n• Reproduire, dupliquer ou copier le materiel de ce site web a des fins commerciales\n• Redistribuer le contenu d\'ESPACE LINGA TERE sauf si le contenu est specifiquement prevu pour la redistribution'
    },
    {
      id: 'disclaimer',
      title: 'Clause de Non-Responsabilite',
      content: 'Les informations de ce site web sont fournies en l\'etat. ESPACE LINGA TERE ne donne aucune representation ou garantie concernant ce site web ou les informations, produits ou services qu\'il contient.\n\nDans toute la mesure permise par la loi applicable, ESPACE LINGA TERE decline toutes les garanties, explicites ou implicites, y compris mais sans s\'y limiter les garanties implicites de commercialite et d\'adequation a un usage particulier. ESPACE LINGA TERE ne sera pas responsable envers vous en ce qui concerne le contenu, l\'utilisation ou la connexion avec ce site web pour toute perte indirecte, speciale ou consecutive, ou pour toute perte commerciale, perte de revenus, revenus, benefices ou economies anticipees.'
    },
    {
      id: 'limitations',
      title: 'Limitations de Responsabilite',
      content: 'Les informations de ce site web sont fournies gratuitement. En consequence, sauf dans la mesure requise par la loi, ESPACE LINGA TERE ne sera pas responsable envers vous en ce qui concerne le contenu, l\'utilisation ou la connexion avec ce site web:\n\n• Pour toute perte indirecte, speciale ou consecutive\n• Pour toute perte commerciale, perte de revenus, revenus, benefices ou economies anticipees\n• Pour perte de contrats ou de relations commerciales\n• Pour dommage a la reputation ou perte d\'opportunite'
    },
    {
      id: 'accuracy',
      title: 'Exactitude des Materiaux',
      content: 'Les materiaux presentant sur ce site web pourraient inclure des erreurs techniques, typographiques ou photographiques. ESPACE LINGA TERE ne garantit pas que l\'un des materiaux sur son site web est exact, complet ou actuel. ESPACE LINGA TERE peut apporter des modifications aux materiaux contenus sur son site web a tout moment sans preavis.'
    },
    {
      id: 'materials',
      title: 'Materiaux sur ce Site Web',
      content: 'ESPACE LINGA TERE n\'a pas examine tous les sites lies a son site web et n\'est pas responsable du contenu d\'aucun site lie. L\'inclusion de tout lien n\'implique pas une approbation par ESPACE LINGA TERE du site. L\'utilisation de tout site web lie est a vos risques et perils.\n\nSi vous croyez que votre travail a ete copie d\'une maniere qui constitue une violation de droit d\'auteur, ou si vos droits de propriete intellectuelle ont ete autrement violes, veuillez fournir une notification avec les informations suivantes a notre agent de droit d\'auteur.'
    },
    {
      id: 'modifications',
      title: 'Modifications',
      content: 'ESPACE LINGA TERE peut reviser ces conditions generales de son site web a tout moment sans preavis. En utilisant ce site web, vous acceptez d\'etre lie par la version actuellement en vigueur de ces conditions generales.\n\nCes conditions generales ont ete creees avec l\'aide de generateurs de conditions generales. Veuillez consulter cette page de temps en temps pour vous assurer que vous connaissez les modifications apportees.'
    },
    {
      id: 'governing',
      title: 'Loi Applicable',
      content: 'Ces conditions generales sont regies par et interpretees conformement aux lois de la Republique Centrafricaine, et vous acceptez irrrevocablement la juridiction exclusive des tribunaux situes a Bangui, Republique Centrafricaine.'
    },
    {
      id: 'contact',
      title: 'Nous contacter',
      content: 'Si vous avez des questions sur ces conditions generales, veuillez nous contacter a:\n\nESPACE LINGA TERE\nAvenue Mbaîkoua\nrue ecole Galabadja 2\nBangui RCA\n\nTelephone: +236 75 00 05 79\nE-mail: contact@espacelinga.org'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Conditions d'Utilisation - ESPACE LINGA TERE</title>
        <meta name="description" content="Conditions d'Utilisation d'ESPACE LINGA TERE - Conditions generales d'utilisation de notre site web." />
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
                Conditions d'Utilisation
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Derniere mise a jour: 1er juin 2026
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <h2 className="text-2xl md:text-3xl font-bold" style={{letterSpacing: '-0.02em'}}>
                    {section.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default TermsPage;
