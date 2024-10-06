import React from 'react';
import { Linkedin, Github, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import '../styles/Contact.css';
import CV from '../docs/CV English Brayan Gutiérrez Dinarte.pdf';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <div className="contact-item">
          <a href="https://wa.me/50683340869" target="_blank" rel="noopener noreferrer">
            <Phone />
          </a>
          <span>+506 8334 0869</span>
        </div>
        <div className="contact-item">
          <Mail />
          <span>dinartebryan17@gmail.com</span>
        </div>
        <div className="contact-item">
          <MapPin />
          <span>San Carlos, Alajuela, Costa Rica</span>
        </div>
      </div>

      {/* Redes Sociales */}
      <div className="social-media">
        <a href="https://www.linkedin.com/in/brayan-josue-gutierrez-dinarte-280441165/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
        <a href="https://github.com/BrayanD17" target="_blank" rel="noopener noreferrer"><Github /></a>
        <a href="https://www.facebook.com/brayan.dinarte.1/photos_by?locale=es_LA" target="_blank" rel="noopener noreferrer"><Facebook /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram /></a>
      </div>

      {/* Vista previa del PDF */}
      <div className="cv-preview">
        <iframe src={CV} type="application/pdf" title="CV Preview"></iframe>
      </div>
    </section>
  );
};

export default Contact;
