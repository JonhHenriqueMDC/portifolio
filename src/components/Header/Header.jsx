import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo">
          <span>&lt;</span> JHM <span>/&gt;</span>
        </div>
        
        <nav className="desktop-nav">
          <a href="#about" className="nav-link">Sobre</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projetos</a>
          <a href="#timeline" className="nav-link">Timeline</a>
          <a href="#contact" className="nav-link">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
