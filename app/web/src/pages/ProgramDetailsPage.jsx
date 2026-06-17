import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  ArrowLeft, CheckCircle2, Clock, Award,
  Target, Zap, Briefcase, Camera, Mic,
  Film, Theater, Music, Heart
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

const programsData = {
  'e-photo': {
    title: 'E-Photographie',
    icon: Camera,
    duration: '3 mois (70% pratique)',
    fullDescription: 'Une formation innovante répondant aux besoins croissants en services audiovisuels et production d\'images en RCA. Ce programme vise à former des auto-entrepreneurs capables de capturer et de valoriser la réalité centrafricaine.',
    objectives: [
      'Maîtriser les techniques de prise de vue professionnelles',
      'Apprendre le traitement d\'image numérique (Post-production)',
      'Gérer une activité de photographie ambulante et événementielle',
      'Créer des contenus visuels pour les institutions et les réseaux sociaux'
    ],
    outlets: [
      'Photographe Freelance / Indépendant',
      'Créateur de contenu digital',
      'Photographe pour ONG et institutions',
      'Photographe de presse / Médias en ligne',
      'Vente d\'images sur banques numériques'
    ],
    curriculum: [
      'Théorie de l\'image et composition (1.5 mois)',
      'Pratique terrain et reportage (1.5 mois)',
      'Ateliers intensifs et Showcases',
      'Gestion de micro-entreprise culturelle'
    ]
  },
  'e-dj': {
    title: 'E-Disc-Jockey (DJ)',
    icon: Mic,
    duration: '3 mois (70% pratique)',
    fullDescription: 'Le métier de DJ évolue avec le numérique. Cette formation prépare les jeunes aux techniques modernes d\'animation musicale et de production sonore, un secteur en pleine explosion dans les centres urbains centrafricains.',
    objectives: [
      'Maîtriser la sonorisation et le mixage numérique',
      'Utiliser les logiciels de Musique Assistée par Ordinateur (MAO)',
      'Conduire une animation artistique et musicale professionnelle',
      'Gérer le matériel technique et sa maintenance'
    ],
    outlets: [
      'DJ événementiel (mariages, concerts, festivals)',
      'Producteur de mixtapes et contenus sonores',
      'Animateur musical radio / web',
      'Entrepreneur dans l\'événementiel culturel',
      'Formateur en techniques de mixage'
    ],
    curriculum: [
      'Techniques de mixage et rythmique',
      'MAO et production de jingles',
      'Animation de foule et psychologie du public',
      'Gestion logistique d\'événements'
    ]
  },
  'cinema': {
    title: 'Cinéma & Audiovisuel',
    icon: Film,
    duration: 'Cycle long (2-3 ans)',
    fullDescription: 'Le CFP-ASA forme les futurs cinéastes de la RCA. Ce programme complet couvre toute la chaîne de production, de l\'écriture du scénario à la diffusion, pour permettre aux jeunes de raconter les histoires de leur pays avec un regard professionnel.',
    objectives: [
      'Maîtriser les étapes de la réalisation cinématographique',
      'Apprendre les techniques de cadrage et d\'éclairage',
      'Maîtriser le montage vidéo professionnel',
      'Développer des capacités d\'écriture scénaristique'
    ],
    outlets: [
      'Réalisateur / Assistant réalisateur',
      'Cadreur / Chef opérateur',
      'Monteur vidéo',
      'Scénariste',
      'Producteur audiovisuel indépendant'
    ],
    curriculum: [
      'Histoire du cinéma et analyse de films',
      'Ateliers d\'écriture de scénario',
      'Pratique caméra et lumière',
      'Montage sur stations professionnelles',
      'Réalisation d\'un court-métrage de fin d\'étude'
    ]
  },
  'theatre': {
    title: 'Théâtre',
    icon: Theater,
    duration: 'Cycle long (2 ans)',
    fullDescription: 'Fidèle à l\'héritage de Vincent Mambachaka, cette filière allie la tradition orale (conte) et les techniques dramatiques modernes. Le théâtre est ici enseigné comme un outil de dialogue, de réconciliation et de développement social.',
    objectives: [
      'Développer ses capacités d\'expression corporelle et vocale',
      'Apprendre les techniques d\'interprétation dramatique',
      'S\'initier à la mise en scène et à la scénographie',
      'Utiliser le théâtre comme vecteur de messages sociaux'
    ],
    outlets: [
      'Comédien professionnel',
      'Metteur en scène',
      'Animateur de théâtre communautaire',
      'Scénographe / Décorateur',
      'Auteur dramatique'
    ],
    curriculum: [
      'Jeu de l\'acteur et improvisation',
      'Techniques du conte et tradition orale',
      'Mise en scène et direction d\'acteurs',
      'Création de spectacles en conditions réelles'
    ]
  },
  'danse': {
    title: 'Danse',
    icon: Music,
    duration: 'Cycle long (2 ans)',
    fullDescription: 'Une formation qui célèbre la diversité des 80 groupes ethniques de la RCA. Les élèves apprennent à préserver les danses traditionnelles tout en explorant les langages de la danse contemporaine pour créer une identité artistique unique.',
    objectives: [
      'Maîtriser les danses traditionnelles centrafricaines',
      'S\'initier aux techniques de danse contemporaine',
      'Développer des capacités de création chorégraphique',
      'Comprendre la rythmique et la relation musique-mouvement'
    ],
    outlets: [
      'Danseur professionnel / Interprète',
      'Chorégraphe',
      'Professeur de danse',
      'Animateur culturel spécialisé',
      'Directeur de compagnie'
    ],
    curriculum: [
      'Répertoire des danses traditionnelles de RCA',
      'Techniques contemporaines et improvisation',
      'Composition chorégraphique',
      'Rythmique et percussions'
    ]
  }
};

function ProgramDetailsPage() {
  const { id } = useParams();
  const program = programsData[id];

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Formation non trouvée</h1>
          <Link to="/programs" className="text-primary hover:underline flex items-center justify-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux programmes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{program.title} - CFP-ASA | Espace Linga Tere</title>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <Link to="/programs" className="inline-flex items-center text-sm font-bold uppercase tracking-wider mb-8 hover:opacity-80 transition-opacity">
              <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux formations
            </Link>
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="bg-white/20 p-6 rounded-3xl h-fit">
                <program.icon className="h-16 w-16" />
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-extrabold">{program.title}</h1>
                <div className="flex items-center text-xl opacity-90">
                  <Clock className="mr-2 h-6 w-6" /> {program.duration}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Left Column: Description & Curriculum */}
              <div className="lg:col-span-2 space-y-12">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Aperçu de la formation</h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {program.fullDescription}
                  </p>
                </div>

                <div className="bg-muted p-8 md:p-12 rounded-[2.5rem] space-y-8">
                  <h3 className="text-2xl font-bold flex items-center">
                    <Award className="mr-3 h-6 w-6 text-primary" /> Programme Pédagogique
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {program.curriculum.map((item, i) => (
                      <div key={i} className="flex items-start space-x-3 bg-card p-6 rounded-2xl border">
                        <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">
                          {i + 1}
                        </div>
                        <p className="font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Objectives & Outlets */}
              <div className="space-y-8">
                <div className="bg-card border rounded-3xl p-8 shadow-sm space-y-6">
                  <h3 className="text-xl font-bold flex items-center">
                    <Target className="mr-2 h-5 w-5 text-primary" /> Objectifs Clés
                  </h3>
                  <div className="space-y-4">
                    {program.objectives.map((obj, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                        <p className="text-sm font-medium text-muted-foreground">{obj}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 space-y-6">
                  <h3 className="text-xl font-bold flex items-center">
                    <Briefcase className="mr-2 h-5 w-5 text-primary" /> Débouchés Métiers
                  </h3>
                  <div className="space-y-3">
                    {program.outlets.map((outlet, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        <span className="font-bold text-sm">{outlet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-accent text-accent-foreground rounded-3xl p-8 text-center space-y-6">
                  <Heart className="h-12 w-12 mx-auto" />
                  <h4 className="text-xl font-bold">Prêt à nous rejoindre ?</h4>
                  <p className="text-sm opacity-90">
                    Les inscriptions sont ouvertes pour la prochaine session.
                  </p>
                  <Button asChild className="w-full py-6 font-bold rounded-xl bg-white text-accent hover:bg-white/90">
                    <Link to="/donate?tab=inscription">S'inscrire maintenant</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default ProgramDetailsPage;