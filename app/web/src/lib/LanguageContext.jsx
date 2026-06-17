import React, { createContext, useContext, useState, useEffect } from 'react';

export const translations = {
  FR: {
    nav: {
      home: "Accueil",
      about: "Qui sommes-nous",
      actions: "Nos Actions",
      formations: "Formations (CFP-ASA)",
      radio: "Radio Linga FM",
      geSo: "Projet GE SÔ BÊAFRIKÂ",
      news: "Actualités",
      gallery: "Galerie",
      donate: "Soutenir",
      contact: "Contact",
      login: "Connexion",
      register: "S'inscrire",
      logout: "Déconnexion",
      profile: "Profil"
    },
    auth: {
      login_title: "Bon retour",
      login_subtitle: "Connectez-vous pour accéder à votre espace.",
      register_title: "Créer un compte",
      register_subtitle: "Rejoignez la communauté Linga Tere.",
      email: "Adresse email",
      password: "Mot de passe",
      confirm_password: "Confirmer le mot de passe",
      no_account: "Pas encore de compte ?",
      has_account: "Déjà un compte ?",
      login_button: "Se connecter",
      register_button: "S'inscrire"
    },
    profile: {
      title: "Mon Profil",
      subtitle: "Gérez vos informations personnelles et vos activités.",
      name: "Nom d'utilisateur",
      email: "Adresse email",
      joined: "Membre depuis",
      save: "Enregistrer les modifications",
      logout: "Se déconnecter"
    },
    hero: {
      tag: "ONG Art et Développement",
      title: "Cultiver les Talents, Bâtir l'Avenir",
      subtitle: "L'Espace Linga Tere préserve le patrimoine centrafricain à travers la formation d'excellence, la radio citoyenne et l'innovation sociale.",
      cta_primary: "Nos Formations",
      cta_secondary: "Écouter Linga FM"
    },
    geSo_page: {
      hero_tag: "Centre culturel et créatif",
      hero_title: "GE SÔ BÊAFRIKÂ",
      hero_subtitle: "Réhabiliter et transformer l'espace Linga Tere en un écosystème artistique moderne au cœur de Bangui.",
      summary_title: "Résumé du projet",
      summary_text: "Le projet “GE SÔ BÊAFRIKÂ” vise à réhabiliter et transformer l’espace culturel LINGA TERE en un centre culturel multidisciplinaire moderne dédié à la formation, la création et la diffusion artistique.",
      intent_title: "Note d'intention artistique",
      intent_text: "Un espace vivant où l'art devient langage et reconstruction. Sous la direction de SOURAYA Adjiza, nous mêlons tradition et modernité pour une immersion sensorielle complète.",
      spaces_title: "Découvrez GE SÔ BÊAFRIKÂ",
      spaces_subtitle: "Chaque coin de GE SÔ BÊAFRÎKA est un voyage culturel et artistique.",
      gallery_title: "LA GALERIE PERMANENTE",
      gallery_text: "Hommage aux personnalités qui font la fierté de la Centrafrique (Art, Science, Politique).",
      sanctuary_title: "LE SANCTUAIRE DES DIEUX",
      sanctuary_text: "Espace dédié à la contemplation des objets de divinités centrafricaines et à l'imaginaire.",
      palaver_title: "LA CASE À PALABRE",
      palaver_text: "Architecture traditionnelle pour les débats, cafés littéraires et soirées de contes.",
      courtyard_title: "LA COUR DES GRANDS",
      courtyard_text: "Tables sculptées et portraits de figures féminines illustres de notre histoire.",
      bar_title: "LE BAR À BAMBOUS",
      bar_text: "Boissons locales et gastronomie centrafricaine dans un décor design en bambou.",
      stage_title: "LA SCÈNE BANGUI CHANTE",
      stage_text: "Atmosphère immersive : live acoustique et cocktails de talents chaque soir.",
      cta_partner: "Devenir Partenaire",
      cta_donate: "Faire un don au projet"
    },
    stats: {
      years: "Années d'existence",
      trained: "Jeunes formés",
      listeners: "Auditeurs quotidiens",
      partners: "Partenaires"
    },
    mission: {
      title: "Notre Engagement pour la Centrafrique",
      text: "Depuis plus de 30 ans, l'Espace Linga Tere est le cœur battant de la création artistique à Bangui. Notre mission est triple : Valoriser notre identité culturelle, Professionnaliser les jeunes talents via le CFP-ASA, et Éduquer par les ondes de Radio Linga FM.",
      more: "En savoir plus sur notre histoire"
    },
    pilars: {
      title: "Nos Piliers d'Action",
      subtitle: "Des initiatives concrètes pour transformer le paysage culturel et social.",
      cfp: {
        title: "Formations CFP-ASA",
        desc: "5 filières d'excellence : Danse, Musique, Théâtre, Cinéma et Audiovisuel pour professionnaliser les talents centrafricains."
      },
      radio: {
        title: "RADIO LINGA FM 96.5",
        desc: "La voix de la culture diffusant en continu des programmes éducatifs, citoyens et musicaux à Bangui et ses environs."
      },
      geSo: {
        title: "GE SÔ BÊAFRIKÂ",
        desc: "Projet d'innovation sociale et culturelle visant à renforcer l'impact des arts sur le développement durable."
      }
    },
    about: {
      hero_title: "Espace Linga Tere – ONG Art et Développement",
      hero_subtitle: "Un phare culturel dédié à la préservation et la célébration du riche patrimoine de l'Afrique Centrale.",
      history_title: "Notre Historique",
      history_text1: "L'Espace Linga Tere (ELTAD) est né d'une volonté farouche de valoriser les arts centrafricains comme leviers de développement social et humain.",
      history_text2: "Fondé par Vincent MAMBACHAKA, l'Espace est devenu au fil des décennies un lieu incontournable de formation, de création et de diffusion culturelle à Bangui.",
      quote: "Linga Tere signifie le tam-tam de vérité. Notre mission est de faire résonner cette vérité culturelle pour bâtir une nation forte.",
      team_title: "Notre Équipe",
      partners_title: "Nos Partenaires"
    },
    programs: {
      hero_tag: "CFP-ASA : L'Excellence Artistique",
      hero_title: "Nos Filières de Formation",
      hero_subtitle: "Le Centre de Formation Professionnelle aux Arts du Spectacle et de l'Audiovisuel prépare les créateurs de demain.",
      info_duration: "Cycles de 2 à 3 ans selon la filière, avec des stages pratiques obligatoires.",
      info_prereq: "Niveau Baccalauréat recommandé, test d'aptitude et entretien de motivation.",
      info_outlets: "Artiste professionnel, technicien de médias, producteur, formateur culturel.",
      cta_title: "Prêt à lancer votre carrière ?",
      cta_subtitle: "Les inscriptions pour la session 2026-2027 sont ouvertes. Rejoignez la communauté des artistes de l'Espace Linga Tere.",
      cta_button: "Télécharger le dossier (PDF)"
    },
    radio_page: {
      tag: "En direct sur 96.5 FM",
      title: "Linga FM 96.5",
      slogan: "« Le tambour qui raconte nos histoires »",
      pres_title: "Présentation Générale",
      pres_text: "Linga FM 96.5 est une radio communautaire culturelle basée à Bangui. Elle couvre l'ensemble de la capitale et ses périphéries.",
      studio_school: "Studio École",
      studio_text: "Linga FM devient un lieu de formation pratique aux métiers des médias et du numérique pour la jeunesse centrafricaine.",
      missions_title: "Nos Missions",
      grid_title: "Grille des Programmes",
      contact_title: "Contactez la Radio"
    },
    newsletter: {
      title: "Restez informé",
      desc: "Inscrivez-vous à notre newsletter pour recevoir les appels à candidatures, les actualités de la radio et l'agenda des événements.",
      placeholder: "Votre adresse email",
      button: "S'inscrire",
      privacy: "Nous respectons votre vie privée. Désinscription possible à tout moment."
    },
    footer: {
      desc: "Preservation et promotion de la culture centrafricaine par les arts, l'education et l'engagement communautaire.",
      quick: "Liens Rapides",
      contact: "Coordonnees de Contact",
      follow: "Suivez-Nous",
      rights: "Tous droits réservés.",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation"
    }
  },
  SG: {
    nav: {
      home: "Lango",
      about: "I yeke azo wa",
      actions: "Kusala ti e",
      formations: "Wango (CFP-ASA)",
      radio: "Radio Linga FM",
      geSo: "GE SÔ BÊAFRIKÂ",
      news: "Sango",
      gallery: "Danza",
      donate: "Mungue",
      contact: "Wara e",
      login: "Londo",
      register: "Sû nzinë",
      logout: "Zia ndo",
      profile: "Bibe ti mo"
    },
    auth: {
      login_title: "Ga biani",
      login_subtitle: "Londo ti wara ndo ti mo.",
      register_title: "Leké nzinë ti mo",
      register_subtitle: "Ga ti duti na yâ ti Linga Tere.",
      email: "Email ti mo",
      password: "Mbeti ti hondi",
      confirm_password: "Kiri mo sû mbeti ti hondi",
      no_account: "Mo de mo leké nzinë ape ?",
      has_account: "Mo leké nzinë awe ?",
      login_button: "Londo",
      register_button: "Sû nzinë"
    },
    profile: {
      title: "Bibe ti mo",
      subtitle: "Bata asango ti mo na akusala ti mo.",
      name: "Iri ti mo",
      email: "Email ti mo",
      joined: "Mo londo ge na ngu",
      save: "Bata aye so mo changé",
      logout: "Zia ndo"
    },
    hero: {
      tag: "ONG Kodro na Maïngo",
      title: "Leké Mayele, Leké RCA",
      subtitle: "Espace Linga Tere ayeke bata héritage ti e na lege ti formation, radio na innovation sociale.",
      cta_primary: "Formation ti e",
      cta_secondary: "Maï Linga FM"
    },
    geSo_page: {
      hero_tag: "Ndo ti mayele na lekengo kodro",
      hero_title: "GE SÔ BÊAFRIKÂ",
      hero_subtitle: "Leké Linga Tere ti changé kodro na Bangui kue.",
      summary_title: "Mbinda ti kusala so",
      summary_text: "Kusala ti “GE SÔ BÊAFRIKÂ” ayeke ti leké Linga Tere ti ga mbeni ndo ti wango, lekengo mayele na fango sango ti RCA.",
      intent_title: "Bibe ti mayele",
      intent_text: "Mbeni ndo so mayele ayeke fa lege ti fini. Souraya Adjiza si ayeke fa lege ti kusala so ti mélangé héritage na fini mayele.",
      spaces_title: "Hingä GE SÔ BÊAFRIKÂ",
      spaces_subtitle: "Ndo oko oko ti GE SÔ BÊAFRÎKA ayeke mbinda ti mayele.",
      gallery_title: "NDO TI AFOTO TI KODRO",
      gallery_text: "Gonda azo so asara kusala ti biani ti RCA (Science, Politique na Mayele).",
      sanctuary_title: "SANCTUAIRE TI ANZAPA TI KODRO",
      sanctuary_text: "Ndo ti batango aye ti nzapa ti RCA ti maïngi bibe ti e.",
      palaver_title: "DA TI PALABRE",
      palaver_text: "Ndo ti londo ti sara tënë, tiri na contes ti RCA.",
      courtyard_title: "LACUR TI AZO TI KOTA",
      courtyard_text: "A-table ti keke na afoto ti a-wali ti biani ti RCA.",
      bar_title: "BAR TI BAMBOU",
      bar_text: "Aye ti nyon ti RCA na décor ti bambou.",
      stage_title: "BANGUI CHANTE",
      stage_text: "Danza na musique live lakue na bï.",
      cta_partner: "Ga ti duti ndeko ti e",
      cta_donate: "Mû nginza ti maï kusala so"
    },
    stats: {
      years: "Ngu ti kusala",
      trained: "Amaseka so awara wango",
      listeners: "Azo so ama radio",
      partners: "Andeko ti kusala"
    },
    mission: {
      title: "Kusala ti e ti RCA",
      text: "Ngu 30 kue, Espace Linga Tere ayeke ndokua ti lekengo amaseka na Bangui. E yeke sara kusala ota: Bata kodro ti e, Mû mayele na amaseka, na Fa sango na lege ti Linga FM.",
      more: "Maï sango ti e"
    },
    pilars: {
      title: "A-ngu ti kusala ti e",
      subtitle: "Aye ti biani ti changé kodro.",
      cfp: {
        title: "Wango CFP-ASA",
        desc: "Leké amaseka na lege ti Danza, Musique, Théâtre, Cinéma na Audiovisuel ti maïngi ti RCA."
      },
      radio: {
        title: "RADIO LINGA FM 96.5",
        desc: "Tënë ti kodro so afa sango, wango na musique na Bangui kue."
      },
      geSo: {
        title: "GE SÔ BÊAFRIKÂ",
        desc: "Kusala ti fini mayele ti bata kodro na lekengo kodro ti e."
      }
    },
    about: {
      hero_title: "Espace Linga Tere – ONG Kodro na Maïngo",
      hero_subtitle: "Mbeni ndo ti mayele ti bata héritage ti e na RCA.",
      history_title: "Mbinda ti e",
      history_text1: "Espace Linga Tere (ELTAD) alondo na nzala ti bata mayele ti RCA ti maïngi azo kue.",
      history_text2: "Vincent MAMBACHAKA si aleké ndo so, ti mû lege na amaseka ti wara wango ti mayele na Bangui.",
      quote: "Linga Tere ayeke tambur ti tâ tënë. Kusala ti e ayeke ti mû lege na tâ tënë so ti leké kodro ti e.",
      team_title: "A-zo ti kusala",
      partners_title: "Andeko ti e"
    },
    programs: {
      hero_tag: "CFP-ASA : Mayele ti biani",
      hero_title: "Lege ti Wango ti e",
      hero_subtitle: "Ndokua ti CFP-ASA ayeke leké amaseka ti kekereke.",
      info_duration: "Ngu use wala ota ti wango, na kusala ti biani na yâ ti adokua.",
      info_prereq: "Niveau Bac wala mbeni mayele ti biani.",
      info_outlets: "Zo ti mayele, zo ti radio wala cinéma, maître ti mayele.",
      cta_title: "Mo yeke prêt ti changé fini ti mo ?",
      cta_subtitle: "Nzinë ti 2026-2027 ayeke ouver. Ga ti duti mbeni zo ti mayele na Espace Linga Tere.",
      cta_button: "Wara mbeti ti nzinë (PDF)"
    },
    radio_page: {
      tag: "Ge na 96.5 FM",
      title: "Linga FM 96.5",
      slogan: "« Linga so afa sango ti e »",
      pres_title: "Sango ti Radio",
      pres_text: "Linga FM 96.5 ayeke radio ti kodro na Bangui. A yeke fa sango na Bangui kue.",
      studio_school: "Studio ti Wango",
      studio_text: "Linga FM ayeke ndo ti wango ti amaseka ti RCA ti maïngi sango na informatique.",
      missions_title: "Kusala ti Radio",
      grid_title: "Lango ti aye ti radio",
      contact_title: "Wara Radio ge"
    },
    newsletter: {
      title: "Maï sango kue",
      desc: "Sû nzinë ti mo ti wara asango ti e, sango ti radio na aye so ayeke passé.",
      placeholder: "Email ti mo",
      button: "Sû nzinë",
      privacy: "E yeke bata nzinë ti mo biani."
    },
    footer: {
      desc: "Batango kodro ti RCA na lege ti mayele, wango na kusala ti communauté.",
      quick: "Lé ti kamba",
      contact: "Wara e ge",
      follow: "Maï e ge",
      rights: "Aye kue ayeke ti e.",
      privacy: "Ndïa ti e",
      terms: "Leké ti e"
    }
  },
  EN: {
    nav: {
      home: "Home",
      about: "Who we are",
      actions: "Our Actions",
      formations: "Training (CFP-ASA)",
      radio: "Radio Linga FM",
      geSo: "GE SÔ BÊAFRIKÂ Project",
      news: "News",
      gallery: "Gallery",
      donate: "Support",
      contact: "Contact",
      login: "Login",
      register: "Register",
      logout: "Logout",
      profile: "Profile"
    },
    auth: {
      login_title: "Welcome Back",
      login_subtitle: "Login to access your space.",
      register_title: "Create an Account",
      register_subtitle: "Join the Linga Tere community.",
      email: "Email address",
      password: "Password",
      confirm_password: "Confirm password",
      no_account: "Don't have an account?",
      has_account: "Already have an account?",
      login_button: "Login",
      register_button: "Register"
    },
    profile: {
      title: "My Profile",
      subtitle: "Manage your personal information and activities.",
      name: "Username",
      email: "Email address",
      joined: "Member since",
      save: "Save changes",
      logout: "Logout"
    },
    hero: {
      tag: "Art & Development NGO",
      title: "Nurturing Talent, Building the Future",
      subtitle: "Espace Linga Tere preserves Central African heritage through excellence in training, community radio, and social innovation.",
      cta_primary: "Our Training",
      cta_secondary: "Listen to Linga FM"
    },
    geSo_page: {
      hero_tag: "Cultural and Creative Hub",
      hero_title: "GE SÔ BÊAFRIKÂ",
      hero_subtitle: "Rehabilitating and transforming Linga Tere into a modern artistic ecosystem in the heart of Bangui.",
      summary_title: "Project Summary",
      summary_text: "The “GE SÔ BÊAFRIKÂ” project aims to transform Linga Tere into a multidisciplinary cultural center dedicated to training and creation.",
      intent_title: "Artistic Intention",
      intent_text: "A living space where art becomes language. Directed by SOURAYA Adjiza, we blend tradition and modernity for a sensory immersion.",
      spaces_title: "Explore GE SÔ BÊAFRIKÂ",
      spaces_subtitle: "Every corner of GE SÔ BÊAFRÎKA is a cultural and artistic journey.",
      gallery_title: "PERMANENT GALLERY",
      gallery_text: "Tribute to personalities who make Central Africa proud (Art, Science, Politics).",
      sanctuary_title: "SANCTUARY OF THE GODS",
      sanctuary_text: "Space dedicated to contemplating Central African deity objects and imagination.",
      palaver_title: "PALAVER HUT",
      palaver_text: "Traditional architecture for debates, literary cafes, and storytelling nights.",
      courtyard_title: "COURTYARD OF THE GREATS",
      courtyard_text: "Sculpted tables and portraits of illustrious female figures from our history.",
      bar_title: "BAMBOO BAR",
      bar_text: "Local drinks and Central African gastronomy in a designer bamboo setting.",
      stage_title: "BANGUI CHANTE STAGE",
      stage_text: "Immersive atmosphere: live acoustic and talent cocktails every evening.",
      cta_partner: "Become a Partner",
      cta_donate: "Donate to the project"
    },
    stats: {
      years: "Years of existence",
      trained: "Youth trained",
      listeners: "Daily listeners",
      partners: "Partners"
    },
    mission: {
      title: "Our Commitment to Central Africa",
      text: "For over 30 years, Espace Linga Tere has been the heartbeat of artistic creation in Bangui. Our mission is threefold: Valuing our cultural identity, Professionalizing youth through CFP-ASA, and Educating through Radio Linga FM waves.",
      more: "Learn more about our history"
    },
    pilars: {
      title: "Our Pillars of Action",
      subtitle: "Concrete initiatives to transform the cultural and social landscape.",
      cfp: {
        title: "CFP-ASA Training",
        desc: "5 centers of excellence: Dance, Music, Theater, Cinema, and Audiovisual to professionalize Central African talent."
      },
      radio: {
        title: "RADIO LINGA FM 96.5",
        desc: "The voice of culture broadcasting educational, civic, and musical programs across Bangui and its surroundings."
      },
      geSo: {
        title: "GE SÔ BÊAFRIKÂ",
        desc: "Social and cultural innovation project aiming to strengthen the impact of arts on sustainable development."
      }
    },
    about: {
      hero_title: "Espace Linga Tere – Art & Development NGO",
      hero_subtitle: "A cultural beacon dedicated to preserving and celebrating the rich heritage of Central Africa.",
      history_title: "Our History",
      history_text1: "Espace Linga Tere (ELTAD) was born from a fierce desire to value Central African arts as levers for social and human development.",
      history_text2: "Founded by Vincent MAMBACHAKA, the Space has become over decades an essential place for training, creation, and cultural broadcast in Bangui.",
      quote: "Linga Tere means the drum of truth. Our mission is to make this cultural truth resonate to build a strong nation.",
      team_title: "Our Team",
      partners_title: "Our Partners"
    },
    programs: {
      hero_tag: "CFP-ASA: Artistic Excellence",
      hero_title: "Our Training Courses",
      hero_subtitle: "The Vocational Training Center for Performing Arts and Audiovisual prepares the creators of tomorrow.",
      info_duration: "2 to 3-year cycles depending on the field, with mandatory internships.",
      info_prereq: "High school diploma recommended, aptitude test and motivation interview.",
      info_outlets: "Professional artist, media technician, producer, cultural trainer.",
      cta_title: "Ready to launch your career?",
      cta_subtitle: "Registrations for the 2026-2027 session are open. Join the artistic community of Espace Linga Tere.",
      cta_button: "Download application (PDF)"
    },
    radio_page: {
      tag: "Live on 96.5 FM",
      title: "Linga FM 96.5",
      slogan: "« The drum that tells our stories »",
      pres_title: "General Presentation",
      pres_text: "Linga FM 96.5 is a community cultural radio based in Bangui. It covers the entire capital and its outskirts.",
      studio_school: "Studio School",
      studio_text: "Linga FM is becoming a practical training ground for media and digital skills for Central African youth.",
      missions_title: "Our Missions",
      grid_title: "Program Schedule",
      contact_title: "Contact the Radio"
    },
    newsletter: {
      title: "Stay Informed",
      desc: "Sign up for our newsletter to receive calls for applications, radio news, and event schedules.",
      placeholder: "Your email address",
      button: "Subscribe",
      privacy: "We respect your privacy. Unsubscribe at any time."
    },
    footer: {
      desc: "Preservation and promotion of Central African culture through arts, education, and community engagement.",
      quick: "Quick Links",
      contact: "Contact Information",
      follow: "Follow Us",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Use"
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('app_lang') || 'FR');

  useEffect(() => {
    localStorage.setItem('app_lang', language);
  }, [language]);

  const t = (path) => {
    const keys = path.split('.');
    const currentLang = translations[language] ? language : 'FR';
    let result = translations[currentLang];

    for (const key of keys) {
      if (result && result[key]) {
        result = result[key];
      } else {
        return path;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);