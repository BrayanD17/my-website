import React from 'react';
import '../styles/Home.css';
import profileImage from '../images/Yo.png';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <img src={profileImage} alt="Brayan" className="profile-image" />
        <h1>Hi, I'm Brayan!</h1>
        <p>
          I'm a computer Engineer! Welcome to my web site, where innovation and problem solving come to life. Ready to explore the future of technology?
        </p>
      </div>
    </section>
  );
};

export default Home;
