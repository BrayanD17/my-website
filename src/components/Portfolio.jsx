import React from 'react';
import '../styles/Portfolio.css'; // Asegúrate de tener el CSS necesario

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <h1>My Projects</h1>
      
      {/* Snake Game */}
      <div className="project">
        <img src={require('../images/snakeIcon.jpg')} alt="Snake Game Icon" className="project-icon" />
        <div className="project-details">
          <h2>Snake Game</h2>
          <p>The snake game was a project made to compare two algorithms in two different programming languages: DrRacket and Python.</p>
          <h3>Technologies:</h3>
          <div className="tech-icons">
            <img src={require('../images/PythonIcon.png')} alt="Python" />
            <img src={require('../images/PycharmIcon.png')} alt="Pycharm" />
            <img src={require('../images/DrRacketIcon.png')} alt="DrRacket" />
          </div>
          <a href="https://github.com/BrayanD17/Snake-game" className="github-button">View on GitHub</a>
        </div>
      </div>

      {/* Postcard Generator */}
      <div className="project">
        <img src={require('../images/postcardIcon.jpg')} alt="Postcard Generator Icon" className="project-icon" />
        <div className="project-details">
          <h2>Postcard Generator</h2>
          <p>The postcard generator project was made with the objective of learning about the imperative paradigm and memory management in different languages.</p>
          <h3>Technologies:</h3>
          <div className="tech-icons">
            <img src={require('../images/GolandIcon.png')} alt="Goland" />
            <img src={require('../images/goIcon.png')} alt="Go" />
            <img src={require('../images/VisualStudioIcon.png')} alt="Visual Studio" />
            <img src={require('../images/ReactIcon.png')} alt="React" />
          </div>
          <a href="https://github.com/BrayanD17/post-card-generator" className="github-button">View on GitHub</a>
        </div>
      </div>

      {/* Gym Hub */}
      <div className="project">
        <img src={require('../images/GymHubIcon.png')} alt="Gym Hub Icon" className="project-icon" />
        <div className="project-details">
          <h2>Gym Hub</h2>
          <p>This project is an administrative system for gyms. It manages users, training plans, and several other functionalities. <strong>Currently under development as a final course project with my teammates Olman Acuña Quesada and Cristian Corella Reyes.</strong></p>
          <h3>Technologies:</h3>
          <div className="tech-icons">
            <img src={require('../images/FireBaseIcon.png')} alt="Firebase" />
            <img src={require('../images/VisualStudioIcon.png')} alt="Visual Studio" />
            <img src={require('../images/ReactIcon.png')} alt="React" />
          </div>
          <a href="https://github.com/OlmanAQ/Gymhub-Project" className="github-button">View on GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
