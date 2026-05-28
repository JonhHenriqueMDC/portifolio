// ============================================================
// projectsData.js — Dados manuais dos projetos do portfólio
// Cada projeto é controlado manualmente: imagem, descrição,
// tecnologias e links. Adicione ou remova projetos aqui.
// ============================================================

const projectsData = [
  {
    title: {
      pt: "Sistema Biblioteca",
      en: "Library System",
      es: "Sistema Biblioteca",
    },
    description: {
      pt: "Sistema desenvolvido seguindo SRP, DIP, GRASP e arquitetura MVC + Ports/Adapters.",
      en: "System developed following SRP, DIP, GRASP principles and MVC + Ports/Adapters architecture.",
      es: "Sistema desarrollado siguiendo SRP, DIP, GRASP y arquitectura MVC + Ports/Adapters.",
    },
    image: "/projects/biblioteca.png",
    github: "https://github.com/JonhHenriqueMDC",
    demo: "",
    technologies: ["React", "Node", "PostgreSQL"],
    featured: true,
  },
  {
    title: {
      pt: "Sistema de Monitoria",
      en: "Tutoring System",
      es: "Sistema de Tutoría",
    },
    description: {
      pt: "Sistema desenvolvido durante atividades acadêmicas da Universidade de Fortaleza (UNIFOR), aplicando conceitos de arquitetura de software, organização em camadas, boas práticas de desenvolvimento e foco na resolução de problemas reais do ambiente universitário.",
      en: "System developed during academic activities at the University of Fortaleza (UNIFOR), applying software architecture concepts, layered organization, development best practices, and focusing on solving real university environment problems.",
      es: "Sistema desarrollado durante actividades académicas de la Universidad de Fortaleza (UNIFOR), aplicando conceptos de arquitectura de software, organización en capas, buenas prácticas de desarrollo y enfoque en la resolución de problemas reales del entorno universitario.",
    },
    image: "/projects/monitoria.png",
    github: "https://github.com/JonhHenriqueMDC",
    demo: "",
    technologies: ["Reactv", "Node", "PostgreSQL"],
    featured: true,
  },

];

/**
 * Returns projectsData with title and description resolved for the given language.
 * Falls back to PT if the language key doesn't exist.
 */
export const getProjectsData = (lang = 'pt') => {
  return projectsData.map((project) => ({
    ...project,
    title: typeof project.title === 'object'
      ? (project.title[lang] || project.title.pt)
      : project.title,
    description: typeof project.description === 'object'
      ? (project.description[lang] || project.description.pt)
      : project.description,
  }));
};

export default projectsData;
