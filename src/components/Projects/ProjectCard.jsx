import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  const baseUrl = import.meta.env.BASE_URL;

  // Build image path using BASE_URL
  const imageSrc = project.image.startsWith('http')
    ? project.image
    : `${baseUrl}${project.image.startsWith('/') ? project.image.slice(1) : project.image}`;

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const handleCardClick = () => {
    if (project.demo) {
      window.open(project.demo, '_blank', 'noopener,noreferrer');
    } else if (project.github) {
      window.open(project.github, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      className="project-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
    >
      {/* Glow overlay on hover */}
      <div className="project-card__glow" />

      {/* Image */}
      <div className="project-card__image-wrapper">
        <img
          src={imageSrc}
          alt={project.title}
          className="project-card__image"
          loading="lazy"
        />
        <div className="project-card__image-overlay" />
      </div>

      {/* Content */}
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        {/* Tech badges */}
        <div className="project-card__techs">
          {project.technologies.map((tech, i) => (
            <span key={i} className="project-card__tech-badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="project-card__actions">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__btn project-card__btn--github"
              onClick={(e) => e.stopPropagation()}
              aria-label={`GitHub - ${project.title}`}
            >
              <FiGithub />
              <span>GitHub</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__btn project-card__btn--demo"
              onClick={(e) => e.stopPropagation()}
              aria-label={`Ver projeto - ${project.title}`}
            >
              <FiExternalLink />
              <span>Ver Projeto</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
