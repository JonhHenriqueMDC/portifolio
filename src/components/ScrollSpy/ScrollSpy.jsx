import React, { useEffect, useState } from 'react';
import './ScrollSpy.css';

const ScrollSpy = ({ activeSection }) => {
  const sections = ['hero', 'sobre', 'skills', 'projetos', 'timeline', 'contato'];

  return (
    <div className="scroll-spy">
      {sections.map((section) => (
        <a 
          key={section}
          href={`#${section}`}
          className={`spy-line ${activeSection === section ? 'active' : ''}`}
          aria-label={section}
          onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById(section);
            if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        ></a>
      ))}
    </div>
  );
};

export default ScrollSpy;
