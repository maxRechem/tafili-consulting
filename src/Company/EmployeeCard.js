import React from 'react';
import './EmployeeCard.css';

const EmployeeCard = ({ name, title, description, image, linkedin, email }) => {
    return (
        <div className="employee-card">
            <img src={image} alt={`${name}`} className="employee-image" />
            <h2>{name}</h2>
            <h4>{title}</h4>
            <p>{description}</p>
            <div className="employee-links">
                <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href={`mailto:${email}`}>Email</a>
            </div>
        </div>
    );
};

export default EmployeeCard;
