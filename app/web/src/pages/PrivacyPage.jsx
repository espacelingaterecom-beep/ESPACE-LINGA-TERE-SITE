import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function PrivacyPage() {
  const sections = [
    {
      id: 'intro',
      title: 'Introduction',
      content: 'Chez ESPACE LINGA TERE, nous nous engageons a proteger votre vie privee et a vous assurer une experience positive sur notre site web. Cette Politique de confidentialite explique comment nous collectons, utilisons, divulguons et sauvegardons vos informations lorsque vous visitez notre site web.'
    },
    {
      id: 'collection',
      title: 'Informations que nous collectons',
      content: 'Nous pouvons collecter des informations a votre sujet de diverses manieres. Les informations que nous pouvons collecter sur le Site incluent:\n\n• Donnees personnelles: Informations personnellement identifiables, telles que votre nom, adresse de livraison, adresse e-mail et numero de telephone, ainsi que des informations demographiques, telles que votre age, sexe, ville d\'origine et interets, que vous nous fournissez volontairement lorsque vous vous inscrivez sur le Site ou lorsque vous choisissez de participer a diverses activites liees au Site.\n\n• Informations financieres: Informations financieres, telles que les donnees relatives a votre methode de paiement (par exemple, numero de carte de credit valide, marque de la carte, date d\'expiration) que nous pouvons collecter lorsque vous achetez des produits ou des services sur le Site.'
    },
    {
      id: 'use',
      title: 'Utilisation de vos informations',
      content: 'Avoir des informations precises a votre sujet nous permet de vous offrir une experience fluide, efficace et personnalisee. Plus precisement, nous pouvons utiliser les informations collectees a votre sujet via le Site pour:\n\n• Vous envoyer des e-mails concernant les mises a jour, les actualites et les informations generales sur nos programmes et services.\n\n• Traiter et gerer les achats, les commandes, les paiements et autres transactions liees au Site.\n\n• Generer un profil personnel a votre sujet afin que les visites futures sur le Site soient adaptees a vos preferences.\n\n• Ameliorer le Site pour mieux vous servir et augmenter l\'utilite du Site pour vous.'
    },
    {
      id: 'disclosure',
      title: 'Divulgation de vos informations',
      content: 'Nous pouvons partager les informations que nous avons collectees a votre sujet dans certaines situations:\n\n• Par la loi ou pour proteger les droits: Si nous croyons que la divulgation d\'informations est necessaire pour respecter la loi, appliquer nos politiques de Site ou proteger nos droits ou ceux d\'autrui, nos biens ou notre securite.\n\n• Prestataires tiers: Nous pouvons partager vos informations avec des tiers qui fournissent des services pour nous, y compris le traitement des paiements, l\'analyse des donnees, la livraison de courriels, les services d\'hebergement, le service a la clientele et l\'assistance au marketing.\n\n• Transfert commercial: Si ESPACE LINGA TERE est impliquee dans une fusion, une acquisition ou une vente d\'actifs, vos informations peuvent etre transferees dans le cadre de cette transaction.'
    },
    {
      id: 'security',
      title: 'Securite de vos informations',
      content: 'Nous utilisons des mesures de securite administratives, techniques et physiques pour proteger vos informations personnelles. Cependant, aucune methode de transmission sur Internet ou methode de stockage electronique n\'est 100% securisee. Par consequent, nous ne pouvons pas garantir sa securite absolue.'
    },
    {
      id: 'contact',
      title: 'Nous contacter',
      content: 'Si vous avez des questions ou des commentaires sur cette Politique de confidentialite, veuillez nous contacter a:\n\nESPACE LINGA TERE\nAvenue Mbaîkoua\nrue ecole Galabadja 2\nBangui RCA\n\nTelephone: +236 75 00 05 79\nE-mail: contact@espacelinga.org'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Politique de Confidentialite - ESPACE LINGA TERE</title>
        <meta name="description" content="Politique de Confidentialite d'ESPACE LINGA TERE - Decouvrez comment nous collectons, utilisons et protegeon vos informations personnelles." />
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
                Politique de Confidentialite
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

export default PrivacyPage;
