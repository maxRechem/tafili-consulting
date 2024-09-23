import React from 'react';
import './About.css'; // Pour styliser cette page spécifique

const About = () => {
  return (
    <div className="about-page-container">
      <section className="about-page-section">
        <h1 className="about-page-title">About Us</h1>
        <p className="about-page-text">
          <strong>In 2021, a vision was born.</strong> A vision of transformation, innovation, and strategic support for businesses seeking growth and efficiency. This is how our company came into existence, with a clear mission: to provide expert consultants in finance and IT, capable of propelling our clients to new heights.
        </p>
        <p className="about-page-text">
          We know that finance is the beating heart of any business. That’s why our financial consultants, true right hands to CFOs and Senior Business Controllers, bring their expertise to optimize financial processes, improve profitability, and support strategic decision-making. Their experience and vision enable confident navigation through the sometimes turbulent waters of financial management.
        </p>
        <p className="about-page-text">
          From the outset, we also understood the importance of data and its analysis. Our IT consultants, armed with advanced skills in JavaScript, Java, Python, SQL, and ETL creation, develop dashboards and reports in PowerBI or Board that transform raw numbers into actionable insights. With their certifications in ERP such as Microsoft Business Central, SAP, or Oracle, they bring invaluable added value, ensuring robust solutions tailored to the specific needs of each client.
        </p>
        <p className="about-page-text">
          In just a few years, our company has established itself as a trusted partner, combining technology and finance to offer comprehensive and integrated solutions. We are proud of our journey and the positive impact we have on our clients, and we look forward to continuing to innovate and grow together.
        </p>
      </section>

      <section className="about-page-industries">
        <h2 className="about-page-subtitle">Industries We Serve</h2>
        <ul className="about-page-list">
          <li><strong>Healthcare:</strong> Offering strategic advice and operational improvements.</li>
          <li><strong>Finance:</strong> Providing financial management and advisory services.</li>
          <li><strong>Technology:</strong> Assisting with IT strategy and digital transformation.</li>
          <li><strong>Retail:</strong> Helping with market analysis and business development.</li>
          <li><strong>Manufacturing:</strong> Streamlining processes and enhancing productivity.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
