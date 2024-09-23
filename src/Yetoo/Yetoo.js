import React, { useEffect, useRef } from 'react';
import './Yetoo.css';
import yetooLogo from '../Img/yetoo-logoV1-rbg.png';
import yetooStock from '../Img/YetooStock.png';
import yetooPL from '../Img/YetooPL.png';
import yetooStockCategory from '../Img/YetooStockCategory.png';

function Yetoo() {
    // Create a reference for each feature
    const featureRefs = useRef([]);

    useEffect(() => {
        // IntersectionObserver callback
        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                } else {
                    entry.target.classList.remove('fade-in'); // Remove class to fade out when out of view
                }
            });
        };

        // Set up IntersectionObserver
        const observer = new IntersectionObserver(callback, {
            threshold: 0.1, // Trigger when 10% of the element is visible
        });

        // Observe each feature item
        featureRefs.current.forEach((feature) => {
            if (feature) observer.observe(feature);
        });

        return () => {
            // Clean up the observer on component unmount
            featureRefs.current.forEach((feature) => {
                if (feature) observer.unobserve(feature);
            });
        };
    }, []);

    return (
        <div className="yetoo-page">
            {/* Header Section */}
            <header className="yetoo-header">
                <img src={yetooLogo} alt="Yetoo Logo" className="yetoo-logo" />
                <div className="header-text">
                    <h1>Welcome to Yetoo</h1>
                    <p>Your platform for advanced financial and operational data management. Manage your data effectively with forecasts, inventory tracking, and real-time financial insights.</p>
                </div>
            </header>

            <hr className="section-divider" />

            {/* Features Section */}
            <section className="features-section-yetoo">
                <div
                    className="feature"
                    ref={(el) => (featureRefs.current[0] = el)} // Reference for first feature
                >
                    <img src={yetooStock} alt="Yetoo Stock Forecast" className="feature-image" />
                    <div className="feature-text">
                        <h2>Stock Forecasting</h2>
                        <p>
                            Yetoo helps you keep track of your current stock levels with a focus on future inventory needs.
                            Using advanced forecasting algorithms, you can predict when to restock items based on their
                            importance and sales trends. Stay ahead of potential stockouts, set limits, and ensure that
                            critical items are always available without overstocking.
                        </p>
                    </div>
                </div>

                <div
                    className="feature"
                    ref={(el) => (featureRefs.current[1] = el)} // Reference for second feature
                >
                    <img src={yetooPL} alt="Yetoo Profit & Loss" className="feature-image" />
                    <div className="feature-text">
                        <h2>Profit & Loss Analysis</h2>
                        <p>
                            With Yetoo’s Profit & Loss analysis, you can get a detailed view of your company’s financial performance.
                            Track revenue, costs, and profitability month by month, helping you identify key trends and areas
                            for improvement. By leveraging this data, you can make more informed business decisions,
                            optimize your budget, and drive sustainable growth.
                        </p>
                    </div>
                </div>

                <div
                    className="feature"
                    ref={(el) => (featureRefs.current[2] = el)} // Reference for third feature
                >
                    <img src={yetooStockCategory} alt="Yetoo Stock by Category" className="feature-image" />
                    <div className="feature-text">
                        <h2>Category-Based Stock Management</h2>
                        <p>
                            Gain detailed insights into the performance of your stock by category. Yetoo allows you to compare
                            different product categories, analyze stock levels, and optimize your inventory based on demand.
                            Understand which categories are driving your sales, and ensure that you allocate resources efficiently
                            to maximize profits while keeping inventory lean.
                        </p>
                    </div>
                </div>
            </section>

            <hr className="section-divider" />

            {/* Conclusion Section */}
            <section className="yetoo-conclusion">
                <h2>Explore Yetoo</h2>
                <p>Take control of your operational and financial data with Yetoo’s advanced forecasting tools and real-time insights. Start optimizing your data today and make better, more informed decisions.</p>
            </section>
        </div>
    );
}

export default Yetoo;
