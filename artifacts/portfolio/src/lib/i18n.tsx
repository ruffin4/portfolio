import { createContext, useContext, useState, ReactNode } from 'react';

export type Lang = 'fr' | 'en';

export const translations = {
  fr: {
    nav: {
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      services: 'Services',
      contact: 'Contact',
      downloadCV: 'Télécharger CV',
    },
    hero: {
      available: 'Disponible pour des projets freelance',
      downloadCV: 'Télécharger CV',
      contactMe: 'Me contacter',
      role: 'Développeur Web Fullstack Junior | DevOps',
      desc: 'Développeur web passionné, je conçois et réalise des applications web modernes et performantes en accompagnant mes clients de l\'idée initiale jusqu\'à la mise en ligne.',
      years: 'Années\nExpérience',
      projects: 'Projets\nLivrés',
    },
    about: {
      tag: '01 · Qui je suis',
      title: 'À propos de moi',
      p1: 'Développeur Web Fullstack Junior basé à Madagascar, je conçois et réalise des applications web modernes sur mesure. Avec un socle technique solide (Node.js, NestJS, React, TypeScript et autres…), j\'accompagne mes clients de l\'idée initiale jusqu\'à la mise en ligne.',
      p2: 'Mon approche est centrée sur le résultat et l\'expérience utilisateur. Qu\'il s\'agisse d\'un site vitrine élégant, d\'un e-commerce ou d\'une application métier, je mets au point des solutions fiables et parfaitement adaptées à vos besoins.',
      cta: 'En savoir plus sur mon parcours',
      ctaCard: 'Un projet en tête ?',
      ctaCardDesc: 'Je suis actuellement ouvert à de nouveaux projets stimulants, que ce soit en freelance pour construire l\'architecture de votre app, ou pour une plateforme ou autres !',
      ctaCardLink: 'Lancer une discussion',
    },
    skills: {
      tag: '02 · Technologies & outils maîtrisés',
      title: 'Compétences',
    },
    projects: {
      tag: '04 · Ce que j\'ai construit',
      title: 'Projets',
      screenshot: 'Capture d\'écran du projet',
      preview: 'Aperçu du projet',
    },
    services: {
      tag: '03 · Ce que je propose',
      title: 'Services',
      learnMore: 'En savoir plus',
    },
    devops: {
      title: 'DevOps Excellence',
      desc: 'Coder c\'est bien, livrer de façon sécurisée, fiable et efficace, c\'est là que réside le vrai génie de l\'ingénierie.',
      items: [
        { title: 'Containerisation', desc: 'Docker & Docker Compose pour des environnements isolés et cohérents.' },
        { title: 'Automatisation CI/CD', desc: 'GitHub Actions pour les tests, la compilation et le déploiement.' },
        { title: 'Infrastructure', desc: 'Provisionnement Linux VPS, reverse proxy Nginx et configuration SSL.' },
      ],
    },
    blog: {
      title: 'Engineering Insights',
    },
    testimonials: {
      title: 'Avis Clients',
    },
    contact: {
      tag: '06 · Travaillons ensemble',
      title: 'Contact',
      infoTitle: 'Informations de contact',
      phone: 'Téléphone',
      location: 'Localisation',
      responseTime: 'Réponse sous 24h',
      remote: 'Disponible en remote',
      nameFull: 'Nom complet',
      email: 'Adresse email',
      subject: 'Sujet',
      subjectPlaceholder: 'Choisir un sujet',
      subjects: [
        'Développement d\'une application web',
        'Création d\'un site vitrine',
        'Mise en place d\'une API',
        'DevOps & Infrastructure',
        'Maintenance & Support',
        'Autre demande',
      ],
      message: 'Message',
      messagePlaceholder: 'Décrivez votre projet ou votre demande...',
      send: 'Envoyer le message',
      sentTitle: 'Message envoyé !',
      sentDesc: 'Je vous répondrai dans les plus brefs délais.',
    },
    footer: {
      rights: 'Tous droits réservés.',
    },
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      services: 'Services',
      contact: 'Contact',
      downloadCV: 'Download CV',
    },
    hero: {
      available: 'Available for freelance projects',
      downloadCV: 'Download CV',
      contactMe: 'Contact Me',
      role: 'Junior Fullstack Web Developer | DevOps',
      desc: 'Passionate web developer, I design and build modern, high-performance web applications, guiding clients from the initial idea all the way to launch.',
      years: 'Years\nExperience',
      projects: 'Projects\nDelivered',
    },
    about: {
      tag: '01 · Who I am',
      title: 'About me',
      p1: 'Junior Fullstack Web Developer based in Madagascar, I design and build modern custom web applications. With a solid technical foundation (Node.js, NestJS, React, TypeScript and more…), I guide my clients from the initial idea all the way to deployment.',
      p2: 'My approach is focused on results and user experience. Whether it\'s an elegant showcase site, an e-commerce platform, or a business application, I deliver reliable, fast solutions perfectly tailored to your needs.',
      cta: 'Learn more about my journey',
      ctaCard: 'Have a project in mind?',
      ctaCardDesc: 'I\'m currently open to exciting new projects — whether freelance work to build your app\'s architecture, a platform, or something else entirely!',
      ctaCardLink: 'Start a conversation',
    },
    skills: {
      tag: '02 · Technologies & tools',
      title: 'Skills',
    },
    projects: {
      tag: '04 · What I\'ve built',
      title: 'Projects',
      screenshot: 'Project screenshot',
      preview: 'Project preview',
    },
    services: {
      tag: '03 · What I offer',
      title: 'Services',
      learnMore: 'Learn more',
    },
    devops: {
      title: 'DevOps Excellence',
      desc: 'Writing code is only half the battle. Delivering it securely, reliably, and efficiently is where true engineering shines.',
      items: [
        { title: 'Containerization', desc: 'Docker & Docker Compose for isolated, consistent environments.' },
        { title: 'CI/CD Automation', desc: 'GitHub Actions for testing, building, and deploying.' },
        { title: 'Infrastructure', desc: 'Linux VPS provisioning, Nginx reverse proxy, and SSL configuration.' },
      ],
    },
    blog: {
      title: 'Engineering Insights',
    },
    testimonials: {
      title: 'Client Feedback',
    },
    contact: {
      tag: '06 · Let\'s work together',
      title: 'Contact',
      infoTitle: 'Contact information',
      phone: 'Phone',
      location: 'Location',
      responseTime: 'Response within 24h',
      remote: 'Available remotely',
      nameFull: 'Full name',
      email: 'Email address',
      subject: 'Subject',
      subjectPlaceholder: 'Choose a subject',
      subjects: [
        'Web application development',
        'Showcase website creation',
        'API setup',
        'DevOps & Infrastructure',
        'Maintenance & Support',
        'Other request',
      ],
      message: 'Message',
      messagePlaceholder: 'Describe your project or request...',
      send: 'Send message',
      sentTitle: 'Message sent!',
      sentDesc: 'I will get back to you as soon as possible.',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
};

type Translations = typeof translations.fr;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'fr',
  setLang: () => {},
  t: translations.fr,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr');
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
