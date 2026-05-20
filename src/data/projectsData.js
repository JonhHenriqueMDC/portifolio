// ============================================================
// projectsData.js — Dados manuais dos projetos do portfólio
// Cada projeto é controlado manualmente: imagem, descrição,
// tecnologias e links. Adicione ou remova projetos aqui.
// ============================================================

const projectsData = [
  {
    title: "Sistema Biblioteca",
    description:
      "Sistema desenvolvido seguindo SRP, DIP, GRASP e arquitetura MVC + Ports/Adapters.",
    image: "/projects/biblioteca.png",
    github: "https://github.com/JonhHenriqueMDC",
    demo: "",
    technologies: ["React", "Node", "PostgreSQL"],
    featured: true,
  },
  {
    title: "Sistema de Monitoria",
    description:
      "Sistema desenvolvido durante atividades acadêmicas da Universidade de Fortaleza (UNIFOR), aplicando conceitos de arquitetura de software, organização em camadas, boas práticas de desenvolvimento e foco na resolução de problemas reais do ambiente universitário.",
    image: "/projects/monitoria.png",
    github: "https://github.com/JonhHenriqueMDC",
    demo: "",
    technologies: ["Reactv", "Node", "PostgreSQL"],
    featured: true,
  },

];

export default projectsData;
