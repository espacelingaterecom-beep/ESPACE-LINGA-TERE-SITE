import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

function ContactPage() {
  const contactInfo = [
    {
      id: 'address',
      icon: MapPin,
      title: 'Adresse',
      content: (
        <>
          Avenu Mbaîkoua<br />
          rue ecole Galabadja 2<br />
          Bangui RCA
        </>
      )
    },
    {
      id: 'phone',
      icon: Phone,
      title: 'Telephone',
      content: (
        <div className="flex flex-col space-y-1">
          <a href="tel:+23675000579" className="hover:text-primary transition-colors">+236 75 00 05 79</a>
          <a href="tel:+23670508193" className="hover:text-primary transition-colors">+236 70 50 81 93</a>
        </div>
      )
    },
    {
      id: 'hours',
      icon: Clock,
      title: 'Horaires',
      content: (
        <>
          Lundi - Samedi<br />
          08:00 - 16:00
        </>
      )
    }
  ];

  const socialLinks = [
    { id: 'facebook', icon: Facebook, href: 'https://facebook.com/espacelinga', label: 'Facebook' },
    { id: 'instagram', icon: Instagram, href: 'https://instagram.com/espacelinga', label: 'Instagram' },
    { id: 'youtube', icon: Youtube, href: 'https://youtube.com/@espacelinga', label: 'YouTube' }
  ];

  return (
    <>
      <Helmet>
        <title>Nous Contacter - ESPACE LINGA TERE</title>
        <meta name="description" content="Contactez ESPACE LINGA TERE pour des demandes de renseignements concernant nos programmes, les opportunites de partenariat ou nos initiatives culturelles. Nous accueillons la collaboration et l'engagement communautaire." />
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
                Nous Contacter
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Nous accueillons favorablement les demandes concernant nos programmes, les opportunites de partenariat et nos initiatives culturelles
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug" style={{letterSpacing: '-0.02em'}}>
                    Envoyez-nous un message
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Remplissez le formulaire ci-dessous et nous vous repondrons des que possible.
                  </p>
                </div>
                <ContactForm />
              </motion.div>

              {/* Contact Information Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug" style={{letterSpacing: '-0.02em'}}>
                    Coordonnees de Contact
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Nous joindre par l'un des canaux suivants.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-5 rounded-xl bg-muted hover:bg-muted/80 transition-all duration-200"
                    >
                      <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 text-primary">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <div className="text-sm text-muted-foreground leading-relaxed">{info.content}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links in Sidebar */}
                <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Connectez-vous avec nous</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.id}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="p-3 rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-primary text-primary-foreground">
                  <h3 className="text-xl font-semibold mb-3">Opportunites de partenariat</h3>
                  <p className="leading-relaxed opacity-90">
                    Nous recherchons toujours des partenaires qui partagent notre engagement en faveur de la preservation et la promotion de la culture centrafricaine. Que vous soyez une organisation, un artiste ou une institution culturelle, nous serions ravis d'explorer les opportunites de collaboration.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default ContactPage;