import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, MapPin, Mail, Phone, Star, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function FounderPage() {
  const expertise = [
    { id: 'ingenierie', text: 'Ingénierie culturelle' },
    { id: 'mobilisation', text: 'Mobilisation financière & négociations' },
    { id: 'reseaux', text: 'Réseaux de programmation en Afrique/Europe/Asie/Amérique' },
    { id: 'partenariats', text: 'Partenariats institutionnels et privés' },
    { id: 'accompagnement', text: 'Accompagnement d\'artistes' }
  ];

  const experience = [
    {
      id: 'theatre-ville-paris',
      period: "2019 - Present",
      role: "Conseiller artistique",
      organization: "Theatre de la Ville de Paris",
      description: "Conseiller en programmation artistique et strategies culturelles, favorisant les collaborations internationales et apportant des performances diversifiees a un public mondial."
    },
    {
      id: 'cicasa',
      period: "2022",
      role: "Createur",
      organization: "CICASA",
      description: "Fondateur de CICASA pour promouvoir l'echange culturel et artistique, etablissant une nouvelle plateforme pour le developpement creatif."
    },
    {
      id: 'espace-linga-tere',
      period: "1990 - 2019",
      role: "Directeur",
      organization: "Espace Linga Tere",
      description: "A dirige la premiere institution culturelle de la Republique Centrafricaine, la transformant en centre d'arts, d'education et d'engagement communautaire pendant pres de trois decennies."
    }
  ];

  const creations = [
    { id: 'mbaye', title: 'MBAYE TI E' },
    { id: 'porte', title: 'LA PORTE QUI CHANTE' },
    { id: 'prophete', title: 'LE PROPHÈTE ET LE PRÉSIDENT' },
    { id: 'marmite', title: 'LA MARMITE KOKA MBALA' },
    { id: 'aubade', title: 'L\'AUBADE DU COQ' },
    { id: 'jadi', title: 'JADI TOUJOURS' },
    { id: 'enchaïne', title: 'VIVRE ENCHAÎNÉ' },
    { id: 'congo', title: 'CONGO LA RENCONTRE' }
  ];

  const honors = [
    { id: 'commandeur', title: 'Commandeur des Arts et des Lettres' },
    { id: 'officier', title: 'Officier de la Reconnaissance centrafricaine' },
    { id: 'chevalier', title: 'Chevalier de l\'Ordre de la Mérite Centrafricain' }
  ];

  const awards = [
    { id: 'rabot', title: 'Prix Héritage à Rabot' },
    { id: 'acteur', title: 'Prix de l\'acteur et du meilleur en scène' },
    { id: 'rfi', title: 'Prix RFI Théâtre' },
    { id: 'ebene', title: 'Prix Couronne Ebène' }
  ];

  const formations = [
    { id: 'sorbonne', title: 'Maîtrise, Sorbonne Nouvelle' },
    { id: 'leslee', title: 'Certificat, École Leslee' },
    { id: 'conservatoire', title: 'Diplôme, Conservatoire National' },
    { id: 'bordeaux', title: 'Formation, École Internationale de Bordeaux' }
  ];

  return (
    <>
      <Helmet>
        <title>Vincent Mambachaka - Fondateur d'ESPACE LINGA TERE</title>
        <meta name="description" content="Decouvrez la biographie et le parcours professionnel de Vincent Mambachaka, entrepreneur culturel et fondateur d'ESPACE LINGA TERE." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 space-y-8"
              >
                <div>
                  <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                    Fondateur et Visionnaire
                  </span>
                  <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-foreground" style={{letterSpacing: '-0.02em'}}>
                    Vincent<br />Mambachaka
                  </h1>
                </div>
                
                <div className="space-y-4 text-xl lg:text-2xl font-medium text-muted-foreground">
                  <p className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-secondary"></span>
                    Entrepreneur culturel
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-accent"></span>
                    Expert en ingénierie culturelle
                  </p>
                </div>

                <p className="text-lg leading-relaxed max-w-xl text-foreground/80">
                  Un leader culturel distingue reliant l'Afrique Centrale et la communaute artistique mondiale. Dedie a la preservation du patrimoine et a la promotion de l'expression artistique contemporaine.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:w-1/2 relative"
              >
                <div className="absolute inset-0 bg-primary/20 rounded-[2.5rem] transform translate-x-4 translate-y-4 -z-10"></div>
                <img 
                  src="https://horizons-cdn.hostinger.com/09c951e7-3780-4cbb-b319-1263b936e067/53fa31780712f23f65278aa476b7fcb5.jpg" 
                  alt="Vincent Mambachaka, founder of ESPACE LINGA TERE, in traditional African attire" 
                  className="w-full h-auto object-cover rounded-[2.5rem] shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-24 bg-muted border-y border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-12" style={{letterSpacing: '-0.02em'}}>
                Domaines d'expertise
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {expertise.map((item, index) => (
                  <span 
                    key={item.id} 
                    className="px-6 py-3 rounded-full bg-background border border-border shadow-sm text-foreground font-medium hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {item.text}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Timeline Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="flex items-center gap-4 mb-16">
              <div className="p-3 bg-accent/10 rounded-xl">
                <Briefcase className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold" style={{letterSpacing: '-0.02em'}}>
                Parcours professionnel
              </h2>
            </div>

            <div className="space-y-12 pl-4 md:pl-0">
              {experience.map((exp, index) => (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 md:pl-0"
                >
                  {/* Timeline Line */}
                  <div className="absolute left-0 top-2 bottom-[-3rem] w-px bg-border md:left-1/2 md:-ml-px hidden md:block"></div>
                  
                  <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-primary md:left-1/2 md:-ml-[5.5px] ring-4 ring-background z-10"></div>
                    
                    {/* Empty Space for alignment */}
                    <div className="hidden md:block w-[45%]"></div>
                    
                    {/* Content Card */}
                    <div className="md:w-[45%] bg-card p-6 md:p-8 rounded-2xl shadow-sm border border-border">
                      <span className="text-sm font-bold text-primary mb-2 block">{exp.period}</span>
                      <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                      <h4 className="text-lg font-medium text-muted-foreground mb-4">{exp.organization}</h4>
                      <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Artistic Creations Section */}
        <section className="py-24 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center" style={{letterSpacing: '-0.02em'}}>
                Créations artistiques & Mises en scène
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {creations.map((creation, index) => (
                  <motion.div 
                    key={creation.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="h-[2px] w-8 bg-accent-foreground/30 group-hover:bg-primary transition-colors"></div>
                    <h3 className="text-xl font-semibold tracking-wide">{creation.title}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Honors, Awards & Education Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 max-w-7xl mx-auto">
              
              {/* Distinctions Honorifiques */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4 border-b border-border pb-4">
                  <Star className="h-6 w-6 text-secondary" />
                  <h3 className="text-2xl font-bold">Distinctions honorifiques</h3>
                </div>
                <ul className="space-y-6">
                  {honors.map((honor, index) => (
                    <li key={honor.id} className="flex items-start gap-4">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <span className="text-lg leading-snug">{honor.title}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Prix */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4 border-b border-border pb-4">
                  <Award className="h-6 w-6 text-secondary" />
                  <h3 className="text-2xl font-bold">Prix & Récompenses</h3>
                </div>
                <ul className="space-y-6">
                  {awards.map((award, index) => (
                    <li key={award.id} className="flex items-start gap-4">
                      <div className="h-2 w-2 rounded-full bg-secondary shrink-0 mt-2.5"></div>
                      <span className="text-lg leading-snug">{award.title}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Formations */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4 border-b border-border pb-4">
                  <GraduationCap className="h-6 w-6 text-secondary" />
                  <h3 className="text-2xl font-bold">Formations & Diplômes</h3>
                </div>
                <ul className="space-y-6">
                  {formations.map((formation, index) => (
                    <li key={formation.id} className="flex items-start gap-4">
                      <div className="h-2 w-2 rounded bg-muted-foreground/40 shrink-0 mt-2.5"></div>
                      <span className="text-lg leading-snug text-muted-foreground">{formation.title}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 bg-muted border-t border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto bg-card p-10 md:p-16 rounded-3xl shadow-lg border border-border"
            >
              <h2 className="text-3xl font-bold mb-8" style={{letterSpacing: '-0.02em'}}>Contact & Collaboration</h2>
              <div className="grid sm:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground mb-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground uppercase tracking-wider text-sm">Téléphone</span>
                  </div>
                  <a href="tel:+33626214546" className="block text-lg hover:text-primary transition-colors">+33 6 26 21 45 46</a>
                  <a href="tel:+23672020579" className="block text-lg hover:text-primary transition-colors">+236 7 202 05 79</a>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground mb-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground uppercase tracking-wider text-sm">Email</span>
                  </div>
                  <a href="mailto:vmambachaka@theatredelaville.com" className="block text-lg hover:text-primary transition-colors break-all">
                    vmambachaka@theatredelaville.com
                  </a>
                  <a href="mailto:mambachaka@yahoo.fr" className="block text-lg hover:text-primary transition-colors break-all">
                    mambachaka@yahoo.fr
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FounderPage;