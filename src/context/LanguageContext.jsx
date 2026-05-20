import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
  pt: {
    nav: {
      hero: 'INÍCIO',
      sobre: 'SOBRE',
      skills: 'SKILLS',
      projetos: 'PROJETOS',
      timeline: 'TIMELINE',
      contato: 'CONTATO'
    },
    hero: {
      subtitle: 'dev Backend'
    },
    about: {
      title: 'Sobre mim',
      subtitle: 'Desenvolvedor em formação, focado em back-end, automações e construção de sistemas reais.',
      cards: [
        {
          title: 'Quem sou',
          text: 'Me chamo Jonh Henrique, tenho 24 anos e sou estudante de Ciência da Computação pela UNIFOR, com passagem anterior por Engenharia de Software na UFC.',
          subtext: 'Tenho interesse em entender como sistemas são construídos na prática, buscando evoluir não só no código, mas também na forma como penso soluções.'
        },
        {
          title: 'Meu foco',
          text: 'Tenho maior afinidade com o desenvolvimento back-end, trabalhando com lógica, estrutura e construção de sistemas.',
          subtext: 'Gosto especialmente de lidar com regras de negócio, organização de código e comunicação entre serviços, focando sempre em soluções bem estruturadas.'
        },
        {
          title: 'Experiência prática',
          text: 'Minha experiência vem principalmente de projetos pessoais e automações que desenvolvo para serviços próprios.',
          subtext: 'Isso me permite lidar com cenários reais, aplicar conceitos de arquitetura e tomar decisões práticas durante o desenvolvimento.'
        },
        {
          title: 'Objetivo',
          text: 'Busco evoluir constantemente como desenvolvedor, aprimorando tanto a parte técnica quanto a forma como estruturo sistemas.',
          subtext: 'Meu objetivo é construir soluções cada vez mais organizadas, eficientes e com qualidade real de uso.'
        }
      ]
    },
    skills: {
      title: 'SKILLS',
      tabs: {
        frontend: 'FRONTEND',
        backend: 'BACKEND',
        outros: 'OUTROS'
      }
    },
    projects: {
      title: 'MEUS PROJETOS',
      subtitle: 'Alguns dos meus trabalhos recentes',
      github: 'Minhas Contribuições'
    },
    timeline: {
      title: 'TIMELINE',
      expTitle: 'Experiências',
      eduTitle: 'Educação',
      experiences: [
        {
          date: '2020 - 2021',
          title: 'Estágio de Desenvolvimento Web – CERTI Amazônia',
          desc: 'Atuei como desenvolvedor front-end (em React e Angular), e auxiliei como back-end (em Django), em aplicações web voltadas para empresas da Zona Franca de Manaus.'
        },
        {
          date: '2021 - 2022',
          title: 'Desenvolvedor Web Júnior – CITS AMAZONAS',
          desc: 'Desenvolvi projetos em React e Node, como sistemas de gestões interna tanto em front e back para algumas empresas do Distrito de Manaus.'
        },
        {
          date: '2022 - Presente',
          title: 'Desenvolvedor Pleno – Stark',
          desc: 'Primeiro investment banking digital do Brasil. Usamos tecnologia de ponta para oferecer soluções de captação de recursos, fusões e aquisições adaptadas para médias empresas e startups.'
        }
      ],
      education: [
              {
                date: '2018 - 2021',
                title: 'Ensino Médio / Técnico em Eletromecânica - Escola Estadual de Educação Profissional Eusébio de Queiroz',
                desc: 'Formação integrada ao ensino médio, com habilitação técnica em Eletromecânica e base em manutenção, automação, sistemas elétricos, mecânicos e projetos técnicos.'
              },
              {
                date: '2021 - 2023',
                title: 'Engenharia de Software - Universidade Federal do Ceará',
                desc: 'Formação com foco em desenvolvimento de software, banco de dados, sistemas operacionais, arquitetura de computadores, engenharia de requisitos e gerência de projetos.'
              },
              {
                date: '2024 - Presente',
                title: 'Ciência da Computação - Universidade de Fortaleza',
                desc: 'Graduação em andamento, com estudos em banco de dados, sistemas operacionais, arquitetura e organização de computadores, programação, estruturas de dados e projetos de software.'
              }
      ]
    },
    contact: {
      title: 'CONTATO',
      resume: 'RESUMO (CURRICULO)',
      download: 'BAIXE AGORA',
      addMe: 'ADICIONE ME',
      footerDev: 'JHM DEV',
      footerRole: 'DESENVOLVEDOR BACKEND',
      contactsTitle: 'CONTATOS'
    }
  },
  en: {
    nav: {
      hero: 'HOME',
      sobre: 'ABOUT',
      skills: 'SKILLS',
      projetos: 'PROJECTS',
      timeline: 'TIMELINE',
      contato: 'CONTACT'
    },
    hero: {
      subtitle: 'Backend dev'
    },
    about: {
      title: 'About me',
      subtitle: 'Developer in training, focused on back-end, automation, and building real-world systems.',
      cards: [
        {
          title: 'Who I am',
          text: "My name is Jonh Henrique, I'm 24 years old and a Computer Science student at UNIFOR, with a previous stint in Software Engineering at UFC.",
          subtext: 'I am interested in understanding how systems are built in practice, seeking to evolve not only in code but also in how I think about solutions.'
        },
        {
          title: 'My focus',
          text: 'I have a greater affinity for back-end development, working with logic, structure, and system construction.',
          subtext: 'I especially enjoy dealing with business rules, code organization, and communication between services, always focusing on well-structured solutions.'
        },
        {
          title: 'Practical experience',
          text: 'My experience comes mainly from personal projects and automations I develop for my own services.',
          subtext: 'This allows me to deal with real scenarios, apply architectural concepts, and make practical decisions during development.'
        },
        {
          title: 'Goal',
          text: 'I constantly seek to evolve as a developer, improving both the technical side and how I structure systems.',
          subtext: 'My goal is to build solutions that are increasingly organized, efficient, and of high quality for actual use.'
        }
      ]
    },
    skills: {
      title: 'SKILLS',
      tabs: {
        frontend: 'FRONTEND',
        backend: 'BACKEND',
        outros: 'OTHERS'
      }
    },
    projects: {
      title: 'MY PROJECTS',
      subtitle: 'Some of my recent work',
      github: 'My Contributions'
    },
    timeline: {
      title: 'TIMELINE',
      expTitle: 'Experiences',
      eduTitle: 'Education',
      experiences: [
        {
          date: '2020 - 2021',
          title: 'Web Development Intern - CERTI Amazônia',
          desc: 'Acted as a front-end developer (React and Angular) and assisted in the back-end (Django), in web applications for companies in the Manaus Free Trade Zone.'
        },
        {
          date: '2021 - 2022',
          title: 'Junior Web Developer - CITS AMAZONAS',
          desc: 'Developed projects in React and Node, such as internal management systems for both front and back end for companies in the Manaus District.'
        },
        {
          date: '2022 - Present',
          title: 'Mid-level Developer - Stark',
          desc: 'First digital investment banking in Brazil. We use state-of-the-art technology to offer fundraising, mergers, and acquisitions solutions for medium-sized companies and startups.'
        }
      ],
      education: [
        {
          date: '2017 - 2019',
          title: 'High School / Technician - Fundação Matias Machline',
          desc: 'Academic course recognized by MEC with technical specialization in informatics (support, development, and project).'
        },
        {
          date: '2023 - Present',
          title: 'Computer Science - Uninorte',
          desc: 'Database, Operating Systems, Architecture and Computer Organization, and Project Management are some of the subjects I practice in the professional field.'
        }
      ]
    },
    contact: {
      title: 'CONTACT',
      resume: 'RESUME (CURRICULUM)',
      download: 'DOWNLOAD NOW',
      addMe: 'ADD ME',
      footerDev: 'JHM DEV',
      footerRole: 'BACKEND DEVELOPER',
      contactsTitle: 'CONTACTS'
    }
  },
  es: {
    nav: {
      hero: 'INICIO',
      sobre: 'SOBRE',
      skills: 'SKILLS',
      projetos: 'PROYECTOS',
      timeline: 'CRONOLOGÍA',
      contato: 'CONTACTO'
    },
    hero: {
      subtitle: 'dev Backend'
    },
    about: {
      title: 'Sobre mí',
      subtitle: 'Desarrollador em formación, enfocado en back-end, automatización y construcción de sistemas reales.',
      cards: [
        {
          title: 'Quién soy',
          text: 'Me llamo Jonh Henrique, tengo 24 años y soy estudiante de Ciencias de la Computación en la UNIFOR, con un paso anterior por Ingeniería de Software en la UFC.',
          subtext: 'Tengo interés en entender cómo se construyen os sistemas en la práctica, buscando evolucionar no solo en el código, sino también en la forma en que pienso las soluciones.'
        },
        {
          title: 'Mi enfoque',
          text: 'Tengo mayor afinidad con el desarrollo back-end, trabajando con lógica, estructura y construcción de sistemas.',
          subtext: 'Disfruto especialmente tratando con reglas de negocio, organización de código e comunicación entre servicios, enfocándome siempre en soluciones bien estructuradas.'
        },
        {
          title: 'Experiencia práctica',
          text: 'Mi experiencia proviene principalmente de proyectos personales y automatizaciones que desarrollo para mis propios servicios.',
          subtext: 'Esto me permite lidiar con escenarios reales, aplicar conceptos de arquitectura y tomar decisiones prácticas durante el desarrollo.'
        },
        {
          title: 'Objetivo',
          text: 'Busco evolucionar constantemente como desarrollador, melhorando tanto la parte técnica como la forma en que estructuro los sistemas.',
          subtext: 'Mi objetivo es construir soluciones cada vez más organizadas, eficientes y con calidad real de uso.'
        }
      ]
    },
    skills: {
      title: 'SKILLS',
      tabs: {
        frontend: 'FRONTEND',
        backend: 'BACKEND',
        outros: 'OTROS'
      }
    },
    projects: {
      title: 'MIS PROYECTOS',
      subtitle: 'Algunos de mis trabajos recientes',
      github: 'Mis Contribuciones'
    },
    timeline: {
      title: 'LÍNEA DE TIEMPO',
      expTitle: 'Experiencias',
      eduTitle: 'Educación',
      experiences: [
        {
          date: '2020 - 2021',
          title: 'Pasante de Desarrollo Web - CERTI Amazônia',
          desc: 'Actué como desarrollador front-end (React y Angular) y asistí en el back-end (Django), en aplicaciones web para empresas de la Zona Franca de Manaus.'
        },
        {
          date: '2021 - 2022',
          title: 'Desarrollador Web Junior - CITS AMAZONAS',
          desc: 'Desarrollé proyectos en React y Node, como sistemas de gestión interna tanto para front como para back end para empresas del Distrito de Manaus.'
        },
        {
          date: '2022 - Presente',
          title: 'Desarrollador Pleno - Stark',
          desc: 'Primer banca de inversión digital en Brasil. Usamos tecnología de punta para ofrecer soluciones de captación de recursos, fusiones y adquisiciones para medianas empresas y startups.'
        }
      ],
      education: [
        {
          date: '2017 - 2019',
          title: 'Bachillerato / Técnico - Fundação Matias Machline',
          desc: 'Curso académico reconocido por el MEC con especialización técnica en informática (soporte, desarrollo y proyecto).'
        },
        {
          date: '2023 - Presente',
          title: 'Ciencias de la Computación - Uninorte',
          desc: 'Base de Datos, Sistemas Operativos, Arquitectura y Organización de Computadoras, y Gestión de Proyectos son algunas de las materias que practico en el ámbito profesional.'
        }
      ]
    },
    contact: {
      title: 'CONTACTO',
      resume: 'RESUMEN (CURRICULUM)',
      download: 'DESCARGAR AHORA',
      addMe: 'AGRÉGAME',
      footerDev: 'JHM DEV',
      footerRole: 'DESARROLLADOR BACKEND',
      contactsTitle: 'CONTACTOS'
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
