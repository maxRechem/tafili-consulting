import React from 'react';
import About from '../About/About';
import TeamPage from '../Company/TeamPage';
import './AboutAndTeam.css'; // Ajout du fichier CSS personnalisé

const AboutAndTeam = () => {
  return (
    <div className="about-and-team-container">
        <div className="team-column">
        <TeamPage />
      </div>
      <div className="about-column">
        <About />
      </div>
    </div>
  );
};

export default AboutAndTeam;
