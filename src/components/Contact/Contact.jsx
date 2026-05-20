import React from 'react';
import './Contact.css';
import { useLanguage } from '../../context/LanguageContext';
import { FaInstagram, FaGithub, FaLinkedin, FaDiscord, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contato" className="contact-section">
      <div className="container contact-container">
        
        {/* MAIN CARD */}
        <div className="contact-card animate-fade-in">
          <div className="logo-glow-wrapper">
            <img 
              src="./jhm-logo.svg" 
              alt="JHM Logo" 
              className="contact-logo" 
            />
            <div className="logo-led-glow"></div>
            <div className="profile-tag">V2026</div>
          </div>

          <div className="profile-info">
            <h2 className="profile-name">
              JONH MOREIRA - <span className="resume-label">{t.contact.resume}</span>
            </h2>
            
            <button className="download-btn">
              {t.contact.download}
            </button>

            <div className="add-me-section">
              <h3 className="add-me-title">{t.contact.addMe}</h3>
              <div className="social-links-grid">
                <a href="https://www.instagram.com/jonh_moreiradc/" className="social-link-item"><FaInstagram /> Instagram</a>
                <a href="https://github.com/JonhHenriqueMDC" className="social-link-item"><FaGithub /> GitHub</a>
                <a href="https://www.linkedin.com/in/jonhmoreira/" className="social-link-item"><FaLinkedin /> LinkedIn</a>
                <a href="http://discordapp.com/users/1097684546163576972" className="social-link-item"><FaDiscord /> Discord</a>
              </div>
            </div>

            <div className="hash-tags">
              <span>#backend</span>
              <span>#nodejs</span>
              <span>#systems</span>
            </div>
          </div>
        </div>

        {/* FOOTER PART */}
        <footer className="contact-footer">
          <div className="footer-left">
            <h2 className="footer-brand">{t.contact.footerDev}</h2>
            <p className="footer-role">{t.contact.footerRole}</p>
          </div>

          <div className="footer-center">
            <div className="footer-socials">
              <a href="https://www.instagram.com/jonh_moreiradc/"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/jonhmoreira/"><FaLinkedin /></a>
              <a href="http://discordapp.com/users/1097684546163576972"><FaDiscord /></a>
              <a href="https://github.com/JonhHenriqueMDC"><FaGithub /></a>
            </div>
            <p className="copyright">Copyright © 2026 JHM DEV</p>
          </div>

          <div className="footer-right">
            <h3 className="contacts-label">{t.contact.contactsTitle}</h3>
            <p className="contact-info-item">
              <FaEnvelope /> moreirajonh2@gmail.com
            </p>
            <p className="contact-info-item">
              <FaPhone /> (85) 99669-3612
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
