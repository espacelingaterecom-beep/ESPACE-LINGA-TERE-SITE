import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Radio, Globe, Heart, GraduationCap, Music,
  Mail, Phone, ShieldCheck
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/LanguageContext';

function RadioPage() {
  const { t } = useLanguage();

  const missions = [
    { icon: Globe, title: "Informer", text: "Diffuser des informations fiables et accessibles." },
    { icon: Heart, title: "Éduquer", text: "Sensibilisation sur la santé et la citoyenneté." },
    { icon: Music, title: "Divertir", text: "Valoriser les musiques locales et internationales." },
    { icon: GraduationCap, title: "Former", text: "Studio école : former aux métiers des médias." }
  ];

  const gridData = [
    { time: "06h – 09h", content: "Réveil, info, musique", example: "Le Réveil de Linga" },
    { time: "09h – 12h", content: "Débats, société", example: "Débat Citoyen" },
    { time: "12h – 15h", content: "Musique, détente", example: "Linga Midi" },
    { time: "15h – 18h", content: "Culture, jeunesse, sports", example: "Klutur Rap" },
    { time: "18h – 22h", content: "Magazine, grands débats", example: "Ambiance Linga" }
  ];

  return (
    <>
      <Helmet>
        <title>{t('nav.radio')} - Espace Linga Tere</title>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Radio className="absolute -right-20 -top-20 w-96 h-96 rotate-12" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center space-y-6"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold uppercase tracking-wider">
                {t('radio_page.tag')}
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">{t('radio_page.title')}</h1>
              <p className="text-2xl md:text-3xl font-medium italic opacity-90">
                {t('radio_page.slogan')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Presentation */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">{t('radio_page.pres_title')}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('radio_page.pres_text')}
                </p>
                <div className="p-6 bg-card rounded-2xl border-l-4 border-primary shadow-sm">
                  <p className="text-lg font-medium">
                    Nouvel aspect : <strong>{t('radio_page.studio_school')}</strong>. {t('radio_page.studio_text')}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {missions.map((m, i) => (
                  <div key={i} className="bg-card p-6 rounded-2xl border hover:border-primary transition-colors shadow-sm text-center md:text-left">
                    <m.icon className="h-8 w-8 text-primary mb-4 mx-auto md:mx-0" />
                    <h3 className="font-bold text-lg mb-2">{m.title}</h3>
                    <p className="text-sm text-muted-foreground">{m.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Programming Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">{t('radio_page.grid_title')}</h2>
            </div>

            <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl border shadow-lg bg-card">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-8 py-6 font-bold uppercase text-sm">Heure</th>
                      <th className="px-8 py-6 font-bold uppercase text-sm">Contenu</th>
                      <th className="px-8 py-6 font-bold uppercase text-sm">Émission</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y text-sm md:text-base">
                    {gridData.map((row, i) => (
                      <tr key={i}>
                        <td className="px-8 py-6 font-bold text-primary">{row.time}</td>
                        <td className="px-8 py-6">{row.content}</td>
                        <td className="px-8 py-6 font-medium italic">{row.example}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Partners & Contact */}
        <section className="py-24 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-8 text-center md:text-left">
                <h2 className="text-3xl font-bold">Partenaires & Offres</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Ministère de la Jeunesse", "Mairie de Bangui", "UNFPA & UNICEF", "Orange, Moov, Telecel"].map((partner, i) => (
                    <div key={i} className="bg-white/10 p-4 rounded-xl flex items-center justify-center md:justify-start">
                      <ShieldCheck className="h-5 w-5 mr-3 text-primary" />
                      <span className="font-medium">{partner}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card text-card-foreground p-8 rounded-3xl shadow-2xl space-y-8">
                <h2 className="text-3xl font-bold">{t('radio_page.contact_title')}</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground font-bold uppercase">E-mail</p>
                      <p className="font-medium">radiolingafm96.5@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground font-bold uppercase">WhatsApp / Téléphone</p>
                      <p className="font-medium">+236 74 50 81 93</p>
                    </div>
                  </div>
                </div>
                <Button asChild className="w-full py-8 text-xl font-bold bg-primary hover:bg-primary/90">
                  <Link to="/donate">Soutenir le Studio École</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default RadioPage;