import React from 'react';
import '../styles/NavBar.css';
import CV from '../docs/CV English Brayan Gutiérrez Dinarte.pdf'; // Importa el CV

const NavBar = ({ setView }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => setView('home')}>
        <span className="navbar-name">
          &lt;Brayan Gutiérrez /&gt;
        </span>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <button onClick={() => setView('home')} className="navbar-link">Home</button>
        </li>
        <li className="navbar-item">
          <button onClick={() => setView('portfolio')} className="navbar-link">Portfolio</button>
        </li>
        <li className="navbar-item">
          <button onClick={() => setView('about')} className="navbar-link">About me</button>
        </li>
        <li className="navbar-item">
          <button onClick={() => setView('contact')} className="navbar-link">Contact</button>
        </li>
      </ul>

      <div className='bottom-cv'>
        {/* Enlace para descargar el CV */}
        <a href={CV} download="CV_Brayan_Gutierrez.pdf">
          <button className="cv-button">Download CV</button>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
