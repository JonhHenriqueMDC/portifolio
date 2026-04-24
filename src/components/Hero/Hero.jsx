import React from 'react';
import './Hero.css';
import { InstagramLogo, LinkedinLogo, GithubLogo, DiscordLogo } from 'phosphor-react';



const Hero = () => {
  return (
    <section className="hero" id="start">
      <div className="container hero-container">
        <div className="hero-content">

          {/* LADO ESQUERDO — Logo JHM (arquivo estático na pasta public) */}
          <div className="hero-logo-side animate-fade-in">
            <img src="/jhm-logo.svg" alt="JHM Logo" className="jhm-logo" />
          </div>

          {/* LADO DIREITO — Nome + subtítulo + sociais */}
          <div className="hero-text-side">
            <div className="hero-branding animate-fade-in">
              <h1 className="title-first">Jonh</h1>
              <h1 className="title-last">Moreira</h1>
            </div>

            <div className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="dev-text">
                dev <span className="highlight">Backend</span>
              </h2>
            </div>

            <div className="social-links glass animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a href="https://www.instagram.com/jonh_moreiradc/" target="_blank" rel="noreferrer" className="social-icon">
                <InstagramLogo size={32} weight="fill" />
              </a>
              <a href="https://www.linkedin.com/in/jonhmoreira/" target="_blank" rel="noreferrer" className="social-icon highlight-icon">
                <LinkedinLogo size={32} weight="fill" />
              </a>
              <a href="http://discordapp.com/users/1097684546163576972" target="_blank" rel="noreferrer" className="social-icon">
                <DiscordLogo size={32} weight="fill" />
              </a>
              <a href="https://github.com/JonhHenriqueMDC" target="_blank" rel="noreferrer" className="social-icon highlight-icon">
                 <GithubLogo size={32} weight="fill" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
