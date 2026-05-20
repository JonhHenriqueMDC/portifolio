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
    github: "https://github.com/JonhHenriqueMDC/projeto",
    demo: "",
    technologies: ["React", "Node", "PostgreSQL"],
    featured: true,
  },
  {
    title: "Lollapalooza Brasil",
    description:
      "O app oficial do #LollaBR dos anos de 2024 e 2025!",
    image: "/projects/lollapalooza.png",
    github: "https://github.com/JonhHenriqueMDC",
    demo: "",
    technologies: ["Flutter", "Dart", "SQLite"],
    featured: true,
  },
  {
    title: "E-Commerce Premium",
    description:
      "Plataforma de vendas com alto desempenho e design moderno.",
    image: "/projects/ecommerce.png",
    github: "https://github.com/JonhHenriqueMDC",
    demo: "",
    technologies: ["React", "Node.js", "MongoDB"],
    featured: true,
  },
];

export default projectsData;
