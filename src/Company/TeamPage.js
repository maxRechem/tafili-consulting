import React from 'react';
import EmployeeCard from './EmployeeCard';
import DrilonImage from '../Img/Drilon.jpeg';
import AlexandreImage from '../Img/Alexandre.jpg';
import MaximeImage from '../Img/MaximeVR.jpg';

const TeamPage = () => {
    return (
        <div className="team-page">
            <br/>
            <h1>Meet Our Team</h1>
            <br/>
            <EmployeeCard
                name="Drilon Tafili"
                title="Freelance in Sr Business Controller, Data Manager, CFO ad interim"
                description="Expert en finance, Drilon est le directeur et fondateur de la société. Son expertise en finance guide notre vision stratégique."
                image={DrilonImage}
                linkedin="https://www.linkedin.com/in/drilon-tafili-5a4599161/"
                email="d.tafili@tafiliconsulting.be"
            />
            <br/>
            <EmployeeCard
                name="Alexandre Touat"
                title="Senior Data Engineer | BI specialist | SQL | ETL"
                description="Développeur informatique spécialisé en gestion de données, Alexandre combine compétences en développement informatique et analyse de données pour offrir des solutions optimisées."
                image={AlexandreImage}
                linkedin="https://www.linkedin.com/in/alexandre-touat-532097325/"
                email="ato@tafiliconsulting.be"
            />
            <br/>
            <EmployeeCard
                name="Maxime Van Rechem"
                title="Medior Data Analyst | BI specialist | SQL | ETL"
                description="Maxime est un développeur axé sur l'informatique. Il met son expertise technique au service du développement de solutions innovantes."
                image={MaximeImage}
                linkedin="https://www.linkedin.com/in/maxime-van-rechem-464050259/"
                email="mvr@tafiliconsulting.be"
            />
            <br/>
        </div>
    );
};

export default TeamPage;
