import React from 'react';
import './Finance.css';  // Le fichier CSS pour styliser cette page
import BusinessControllerImage from '../Img/Business-Control.png';
import CFOImage from '../Img/CFO.png';

const Finance = () => {
  return (
    <div className="finance-page">
      {/* En-tête */}
      <div className="finance-header">
        <h1 className="finance-title">Business Controller at Interim & CFO</h1>
        <p className="finance-subtitle">Explore the pivotal roles of financial leadership through the lenses of a Business Controller and CFO.</p>
      </div>

      {/* Section Business Controller at Interim */}
      <div className="finance-section">
        <div className="finance-text">
          <h2 className="section-title">Business Controller at Interim</h2>
          <div className="text-box">
            <p>
              A Business Controller at interim steps in during crucial transition periods to manage and improve a company's financial health. Whether during a temporary gap or organizational restructuring, these experts bring immediate value through their extensive experience.
            </p>
            <ul className="bullet-list">
              <li>Financial Planning and Analysis</li>
              <li>Budget Management</li>
              <li>Forecasting and Reporting</li>
              <li>Strategic Financial Insights</li>
              <li>Risk Management</li>
            </ul>
            <p>
              These responsibilities ensure that the business can continue running smoothly while aligning its financial goals with broader organizational strategies. An interim controller’s analytical approach also brings clear direction and clarity during uncertain times.
            </p>
          </div>
        </div>
        <div className="finance-image">
          <img src={BusinessControllerImage} alt="Business Controller at Interim" />
        </div>
      </div>

      {/* Section CFO */}
      <div className="finance-section">
        <div className="finance-image">
          <img src={CFOImage} alt="Chief Financial Officer" />
        </div>
        <div className="finance-text">
          <h2 className="section-title">Chief Financial Officer (CFO)</h2>
          <div className="text-box">
            <p>
              The CFO is responsible for overseeing all financial operations, ensuring that the company remains financially sound while driving long-term growth. As the financial strategist of the company, the CFO works hand-in-hand with the CEO and board members.
            </p>
            <ul className="bullet-list">
              <li>Financial Planning and Cash Flow Management</li>
              <li>Risk Management and Compliance</li>
              <li>Oversight of Financial Reporting</li>
              <li>Investment and M&A Decisions</li>
              <li>Digital Transformation in Finance</li>
            </ul>
            <p>
              By shaping the company’s financial strategy, the CFO enables leadership to make informed decisions, from cost-saving initiatives to major investments. Their ability to forecast future trends and manage risks is invaluable to maintaining financial stability.
            </p>
          </div>
        </div>
      </div>

      {/* Section Conclusion */}
      <div className="finance-conclusion">
        <h2 className="conclusion-title">Strategic Leadership for Financial Success</h2>
        <div className="conclusion-box">
          <p>
            Both Business Controllers at interim and CFOs play essential roles in securing a company’s financial success. While interim controllers provide flexibility and expertise in times of change, CFOs deliver long-term strategies and maintain financial stability. Together, these roles offer a complete solution to financial leadership.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Finance;
