import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { getProjectsData } from '../../data/projectsData';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const { t, language } = useLanguage();

  // Filter featured projects (or show all if none are featured)
  const allProjects = getProjectsData(language);
  const featured = allProjects.filter((p) => p.featured);
  const displayProjects = featured.length > 0 ? featured : allProjects;

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="projetos" className="projects-section">
      <div className="container">
        {/* Section header */}
        <motion.div
          className="section-header"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="section-title">
            {t.projects.title.split(' ')[0]}{' '}
            <span className="highlight">
              {t.projects.title.split(' ').slice(1).join(' ')}
            </span>
          </h2>
          <p className="section-subtitle">{t.projects.subtitle}</p>
        </motion.div>

        {/* Projects grid */}
        <div className="projects-grid">
          {displayProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* GitHub contribution calendar */}
        <motion.div
          className="github-calendar-container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="github-title">{t.projects.github}</h3>
          <div className="calendar-wrapper">
            <img
              src="https://ghchart.rshah.org/FF263C/JonhHenriqueMDC"
              alt="GitHub Contributions"
              style={{ width: '100%', maxWidth: '800px', filter: 'brightness(0.9)' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
