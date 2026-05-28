import React from 'react';

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaPhp,
  FaLaravel,
  FaVuejs,
  FaAngular,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaFigma,
  FaWordpress,
  FaAws,
  FaNpm,
  FaCode,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiNestjs,
  SiExpress,
  SiTailwindcss,
  SiVite,
  SiRedux,
  SiFramer,
  SiStyledcomponents,
  SiSass,
  SiMui,
  SiAntdesign,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiPrisma,
  SiFirebase,
  SiSupabase,
  SiGraphql,
  SiC,
  SiCplusplus,
  SiGo,
  SiRust,
  SiKotlin,
  SiSwift,
  SiDart,
  SiFlutter,
  SiSpringboot,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiRuby,
  SiRubyonrails,
  SiLinux,
  SiVercel,
  SiNetlify,
  SiRailway,
  SiRender,
  SiCloudflare,
  SiJest,
  SiVitest,
  SiCypress,
  SiStorybook,
  SiPostman,
  SiInsomnia,
  SiJira,
  SiTrello,
  SiNotion,
} from "react-icons/si";

const IconBox = ({ children, color }) => (
  <div
    className="w-full h-full flex items-center justify-center"
    style={{ color }}
  >
    {React.cloneElement(children, {
      className: "w-full h-full",
    })}
  </div>
);

export const icons = {
  html: <IconBox color="#E34F26"><FaHtml5 /></IconBox>,
  css: <IconBox color="#1572B6"><FaCss3Alt /></IconBox>,
  javascript: <IconBox color="#F7DF1E"><FaJs /></IconBox>,
  typescript: <IconBox color="#3178C6"><SiTypescript /></IconBox>,
  react: <IconBox color="#61DAFB"><FaReact /></IconBox>,
  nextjs: <IconBox color="#ffffff"><SiNextdotjs /></IconBox>,
  vue: <IconBox color="#4FC08D"><FaVuejs /></IconBox>,
  angular: <IconBox color="#DD0031"><FaAngular /></IconBox>,
  tailwind: <IconBox color="#38BDF8"><SiTailwindcss /></IconBox>,
  bootstrap: <IconBox color="#7952B3"><FaBootstrap /></IconBox>,
  sass: <IconBox color="#CC6699"><SiSass /></IconBox>,
  mui: <IconBox color="#007FFF"><SiMui /></IconBox>,
  antDesign: <IconBox color="#1677FF"><SiAntdesign /></IconBox>,
  styledComponents: <IconBox color="#DB7093"><SiStyledcomponents /></IconBox>,
  redux: <IconBox color="#764ABC"><SiRedux /></IconBox>,
  framerMotion: <IconBox color="#ffffff"><SiFramer /></IconBox>,
  vite: <IconBox color="#646CFF"><SiVite /></IconBox>,

  nodejs: <IconBox color="#339933"><FaNodeJs /></IconBox>,
  express: <IconBox color="#ffffff"><SiExpress /></IconBox>,
  nestjs: <IconBox color="#E0234E"><SiNestjs /></IconBox>,
  python: <IconBox color="#3776AB"><FaPython /></IconBox>,
  django: <IconBox color="#092E20"><SiDjango /></IconBox>,
  flask: <IconBox color="#ffffff"><SiFlask /></IconBox>,
  fastapi: <IconBox color="#009688"><SiFastapi /></IconBox>,
  java: <IconBox color="#F89820"><FaJava /></IconBox>,
  springboot: <IconBox color="#6DB33F"><SiSpringboot /></IconBox>,
  php: <IconBox color="#777BB4"><FaPhp /></IconBox>,
  laravel: <IconBox color="#FF2D20"><FaLaravel /></IconBox>,
  ruby: <IconBox color="#CC342D"><SiRuby /></IconBox>,
  rails: <IconBox color="#CC0000"><SiRubyonrails /></IconBox>,
  c: <IconBox color="#A8B9CC"><SiC /></IconBox>,
  cpp: <IconBox color="#00599C"><SiCplusplus /></IconBox>,
  csharp: <IconBox color="#512BD4"><FaCode /></IconBox>,
  go: <IconBox color="#00ADD8"><SiGo /></IconBox>,
  rust: <IconBox color="#DEA584"><SiRust /></IconBox>,

  kotlin: <IconBox color="#7F52FF"><SiKotlin /></IconBox>,
  swift: <IconBox color="#F05138"><SiSwift /></IconBox>,
  dart: <IconBox color="#0175C2"><SiDart /></IconBox>,
  flutter: <IconBox color="#02569B"><SiFlutter /></IconBox>,
  reactNative: <IconBox color="#61DAFB"><FaReact /></IconBox>,

  mysql: <IconBox color="#4479A1"><SiMysql /></IconBox>,
  postgres: <IconBox color="#4169E1"><SiPostgresql /></IconBox>,
  mongodb: <IconBox color="#47A248"><SiMongodb /></IconBox>,
  sqlite: <IconBox color="#003B57"><SiSqlite /></IconBox>,
  prisma: <IconBox color="#ffffff"><SiPrisma /></IconBox>,
  firebase: <IconBox color="#FFCA28"><SiFirebase /></IconBox>,
  supabase: <IconBox color="#3ECF8E"><SiSupabase /></IconBox>,
  graphql: <IconBox color="#E10098"><SiGraphql /></IconBox>,

  git: <IconBox color="#F05032"><FaGitAlt /></IconBox>,
  github: <IconBox color="#ffffff"><FaGithub /></IconBox>,
  docker: <IconBox color="#2496ED"><FaDocker /></IconBox>,
  linux: <IconBox color="#FCC624"><SiLinux /></IconBox>,
  aws: <IconBox color="#FF9900"><FaAws /></IconBox>,
  vercel: <IconBox color="#ffffff"><SiVercel /></IconBox>,
  netlify: <IconBox color="#00C7B7"><SiNetlify /></IconBox>,
  railway: <IconBox color="#ffffff"><SiRailway /></IconBox>,
  render: <IconBox color="#46E3B7"><SiRender /></IconBox>,
  cloudflare: <IconBox color="#F38020"><SiCloudflare /></IconBox>,

  jest: <IconBox color="#C21325"><SiJest /></IconBox>,
  vitest: <IconBox color="#6E9F18"><SiVitest /></IconBox>,
  cypress: <IconBox color="#69D3A7"><SiCypress /></IconBox>,
  storybook: <IconBox color="#FF4785"><SiStorybook /></IconBox>,
  postman: <IconBox color="#FF6C37"><SiPostman /></IconBox>,
  insomnia: <IconBox color="#4000BF"><SiInsomnia /></IconBox>,

  figma: <IconBox color="#F24E1E"><FaFigma /></IconBox>,
  wordpress: <IconBox color="#21759B"><FaWordpress /></IconBox>,
  npm: <IconBox color="#CB3837"><FaNpm /></IconBox>,
  jira: <IconBox color="#0052CC"><SiJira /></IconBox>,
  trello: <IconBox color="#0052CC"><SiTrello /></IconBox>,
  notion: <IconBox color="#ffffff"><SiNotion /></IconBox>,
};

// Raw data with descriptions per language
const rawSkillsData = {
  frontend: [
    {
      id: 'react',
      name: 'React',
      desc: {
        pt: 'Biblioteca JavaScript para construção de interfaces dinâmicas e componentizadas.',
        en: 'JavaScript library for building dynamic and component-based interfaces.',
        es: 'Biblioteca JavaScript para construir interfaces dinámicas y basadas en componentes.',
      },
      stars: 4,
      color: '#61DAFB',
      icon: icons.react,
    },
    {
      id: 'angular',
      name: 'Angular',
      desc: {
        pt: 'Framework completo para desenvolvimento de aplicações web robustas utilizando TypeScript.',
        en: 'Full-featured framework for building robust web applications using TypeScript.',
        es: 'Framework completo para el desarrollo de aplicaciones web robustas con TypeScript.',
      },
      stars: 3,
      color: '#DD0031',
      icon: icons.angular,
    },
    {
      id: 'framerMotion',
      name: 'Framer Motion',
      desc: {
        pt: 'Biblioteca de animação para React que permite criar interfaces fluidas e interativas.',
        en: 'Animation library for React that enables fluid and interactive interfaces.',
        es: 'Biblioteca de animación para React que permite crear interfaces fluidas e interactivas.',
      },
      stars: 3,
      color: '#E40037',
      icon: icons.framerMotion,
    },
    {
      id: 'bootstrap',
      name: 'Bootstrap',
      desc: {
        pt: 'Framework CSS para criação rápida de layouts responsivos e padronizados.',
        en: 'CSS framework for quickly creating responsive and standardized layouts.',
        es: 'Framework CSS para crear rápidamente layouts responsivos y estandarizados.',
      },
      stars: 3,
      color: '#7952B3',
      icon: icons.bootstrap,
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      desc: {
        pt: 'Framework utilitário que permite estilização rápida e altamente customizável.',
        en: 'Utility-first framework that enables fast and highly customizable styling.',
        es: 'Framework de utilidades que permite una estilización rápida y altamente personalizable.',
      },
      stars: 4,
      color: '#38B2AC',
      icon: icons.tailwind,
    },
    {
      id: 'antDesign',
      name: 'Ant Design',
      desc: {
        pt: 'Biblioteca de componentes UI voltada para aplicações empresariais e sistemas complexos.',
        en: 'UI component library aimed at enterprise applications and complex systems.',
        es: 'Biblioteca de componentes UI orientada a aplicaciones empresariales y sistemas complejos.',
      },
      stars: 2,
      color: '#1890FF',
      icon: icons.antDesign,
    },
  ],

  backend: [
    {
      id: 'nodejs',
      name: 'Node.js',
      desc: {
        pt: 'Ambiente de execução JavaScript para construção de aplicações back-end e APIs.',
        en: 'JavaScript runtime environment for building back-end applications and APIs.',
        es: 'Entorno de ejecución JavaScript para construir aplicaciones back-end y APIs.',
      },
      stars: 5,
      color: '#339933',
      icon: icons.nodejs,
    },
    {
      id: 'express',
      name: 'Express',
      desc: {
        pt: 'Framework minimalista para criação de APIs e servidores com Node.js.',
        en: 'Minimalist framework for creating APIs and servers with Node.js.',
        es: 'Framework minimalista para crear APIs y servidores con Node.js.',
      },
      stars: 5,
      color: '#ffffff',
      icon: icons.express,
    },
    {
      id: 'python',
      name: 'Python',
      desc: {
        pt: 'Linguagem versátil utilizada em automação, back-end e análise de dados.',
        en: 'Versatile language used in automation, back-end development, and data analysis.',
        es: 'Lenguaje versátil utilizado en automatización, back-end y análisis de datos.',
      },
      stars: 4,
      color: '#FFD43B',
      icon: icons.python,
    },
    {
      id: 'java',
      name: 'Java',
      desc: {
        pt: 'Linguagem robusta amplamente utilizada no desenvolvimento de sistemas corporativos.',
        en: 'Robust language widely used in the development of corporate systems.',
        es: 'Lenguaje robusto ampliamente utilizado en el desarrollo de sistemas corporativos.',
      },
      stars: 4,
      color: '#F89820',
      icon: icons.java,
    },
    {
      id: 'c',
      name: 'C',
      desc: {
        pt: 'Linguagem de baixo nível utilizada para desenvolvimento de sistemas e alto desempenho.',
        en: 'Low-level language used for systems development and high-performance applications.',
        es: 'Lenguaje de bajo nivel utilizado para el desarrollo de sistemas y alto rendimiento.',
      },
      stars: 3,
      color: '#A8B9CC',
      icon: icons.c,
    },
    {
      id: 'mysql',
      name: 'MySQL',
      desc: {
        pt: 'Sistema de gerenciamento de banco de dados relacional amplamente utilizado.',
        en: 'Widely used relational database management system.',
        es: 'Sistema de gestión de bases de datos relacionales ampliamente utilizado.',
      },
      stars: 3,
      color: '#4479A1',
      icon: icons.mysql,
    },
    {
      id: 'postgres',
      name: 'PostgreSQL',
      desc: {
        pt: 'Banco de dados relacional avançado, robusto e focado em consistência e performance.',
        en: 'Advanced, robust relational database focused on consistency and performance.',
        es: 'Base de datos relacional avanzada y robusta, centrada en consistencia y rendimiento.',
      },
      stars: 4,
      color: '#4169E1',
      icon: icons.postgres,
    },
  ],

  outros: [
    {
      id: 'git',
      name: 'Git',
      desc: {
        pt: 'Sistema de controle de versão essencial para gerenciamento de código.',
        en: 'Essential version control system for code management.',
        es: 'Sistema de control de versiones esencial para la gestión del código.',
      },
      stars: 4,
      color: '#F05032',
      icon: icons.git,
    },
    {
      id: 'github',
      name: 'GitHub',
      desc: {
        pt: 'Plataforma para hospedagem, colaboração e versionamento de projetos.',
        en: 'Platform for project hosting, collaboration, and versioning.',
        es: 'Plataforma para hospedaje, colaboración y versionado de proyectos.',
      },
      stars: 5,
      color: '#ffffff',
      icon: icons.github,
    },
    {
      id: 'docker',
      name: 'Docker',
      desc: {
        pt: 'Ferramenta para criação e execução de aplicações em containers isolados.',
        en: 'Tool for building and running applications in isolated containers.',
        es: 'Herramienta para crear y ejecutar aplicaciones en contenedores aislados.',
      },
      stars: 3,
      color: '#2496ED',
      icon: icons.docker,
    },
    {
      id: 'insomnia',
      name: 'Insomnia',
      desc: {
        pt: 'Cliente para testes e desenvolvimento de APIs REST.',
        en: 'Client for testing and developing REST APIs.',
        es: 'Cliente para pruebas y desarrollo de APIs REST.',
      },
      stars: 4,
      color: '#4000BF',
      icon: icons.insomnia,
    },
    {
      id: 'vercel',
      name: 'Vercel',
      desc: {
        pt: 'Plataforma para deploy de aplicações front-end e serverless.',
        en: 'Platform for deploying front-end and serverless applications.',
        es: 'Plataforma para desplegar aplicaciones front-end y serverless.',
      },
      stars: 4,
      color: '#ffffff',
      icon: icons.vercel,
    },
    {
      id: 'aws',
      name: 'AWS',
      desc: {
        pt: 'Plataforma de computação em nuvem com diversos serviços para aplicações escaláveis.',
        en: 'Cloud computing platform with various services for scalable applications.',
        es: 'Plataforma de computación en la nube con diversos servicios para aplicaciones escalables.',
      },
      stars: 2,
      color: '#FF9900',
      icon: icons.aws,
    },
    {
      id: 'railway',
      name: 'Railway',
      desc: {
        pt: 'Plataforma simplificada para deploy e gerenciamento de aplicações e bancos de dados.',
        en: 'Simplified platform for deploying and managing applications and databases.',
        es: 'Plataforma simplificada para desplegar y gestionar aplicaciones y bases de datos.',
      },
      stars: 4,
      color: '#ffffff',
      icon: icons.railway,
    },
    {
      id: 'figma',
      name: 'Figma',
      desc: {
        pt: 'Ferramenta de design e prototipação de interfaces digitais.',
        en: 'Design and prototyping tool for digital interfaces.',
        es: 'Herramienta de diseño y prototipado de interfaces digitales.',
      },
      stars: 3,
      color: '#F24E1E',
      icon: icons.figma,
    },
  ],
};

/**
 * Returns skillsData with descriptions resolved for the given language.
 * Falls back to PT if the language key doesn't exist.
 */
export const getSkillsData = (lang = 'pt') => {
  const resolved = {};
  for (const category of Object.keys(rawSkillsData)) {
    resolved[category] = rawSkillsData[category].map((skill) => ({
      ...skill,
      desc: skill.desc[lang] || skill.desc.pt,
    }));
  }
  return resolved;
};

// Default export kept for backward compatibility (uses PT)
export const skillsData = getSkillsData('pt');