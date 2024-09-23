import React, {useEffect, useRef, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import videoLogo from '../Img/TafiliAnimation1.mp4';
import trustCompany from '../Img/TrustCompany.png';
import yetooVideo from '../Img/YetooLogoGarph.mp4';
import powerbiVideo from '../Img/powerBIHD.mp4';
import mbcVideo from '../Img/mbcHD.mp4';
import icon1 from '../Img/icon-finance.png';
import icon2 from '../Img/icon-finance2.png';
import icon3 from '../Img/icon-finance3.png';
import './Home.css';
import {Link} from "react-router-dom";

function Home() {
    const yetooVideoRef = useRef(null);
    const powerbiVideoRef = useRef(null);
    const mbcVideoRef = useRef(null);
    const [showIntroVideo, setShowIntroVideo] = useState(true);
    const [fadeOut, setFadeOut] = useState(false); // État pour gérer l'animation de fondu

    useEffect(() => {
        const handleScroll = () => {
            const handleVideoPlayPause = (videoRef) => {
                if (videoRef.current) {
                    const rect = videoRef.current.getBoundingClientRect();
                    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

                    if (isVisible && videoRef.current.paused) {
                        videoRef.current.play().catch(error => console.log(error));
                    } else if (!isVisible && !videoRef.current.paused) {
                        videoRef.current.pause();
                    }
                }
            };

            handleVideoPlayPause(yetooVideoRef);
            handleVideoPlayPause(powerbiVideoRef);
            handleVideoPlayPause(mbcVideoRef);
        };

        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                handleScroll();
            } else {
                if (yetooVideoRef.current) yetooVideoRef.current.pause();
                if (powerbiVideoRef.current) powerbiVideoRef.current.pause();
                if (mbcVideoRef.current) mbcVideoRef.current.pause();
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('visibilitychange', handleVisibilityChange);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    // Fonction pour lancer l'animation de fondu et masquer la vidéo d'intro
    const handleIntroVideoEnd = () => {
        setFadeOut(true); // Déclenche l'animation de fondu
        setTimeout(() => setShowIntroVideo(false), 1000); // Cache la vidéo après l'animation de fondu (1s)
    };

    return (
        <div className="Home">
            {showIntroVideo && (
                <div className={`intro-video-container ${fadeOut ? 'fade-out' : ''}`}>
                    <video
                        className="intro-video"
                        autoPlay
                        muted
                        onEnded={handleIntroVideoEnd}
                        playsInline
                    >
                        <source src={videoLogo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}

            {!showIntroVideo && (
                <>
                    <div className="first-section">
                        <div className="text-overlay">
                            <h1>Smart insights, tailored solutions and measurable impact</h1>
                            <Link to="/about" className="learn-more-button-0">READ MORE</Link>
                        </div>
                    </div>
                    <div className="second-section">
                        <div className="second-section-container">
                            <div className="info-box info-box1">
                            <img src={icon3} alt="Finance Icon" className="info-icon"/>
                                <h2>What is Tafili Consulting?</h2>
                                <p>
                                    Tafili Consulting, founded in 2021, is dedicated to transforming and innovating business operations. Our mission is to provide expert consultants in finance and IT who drive growth and efficiency. We help optimize financial processes, improve profitability, and support strategic decision-making. Our IT consultants, skilled in JavaScript, Java, Python, SQL, and ETL, develop dashboards and reports that turn data into actionable insights, tailored to meet client needs.
                                </p>
                                <Link to="/about" className="learn-more-link">Read more</Link>
                            </div>
                            <div className="info-box info-box2">
                            <img src={icon1} alt="Data Management Icon" className="info-icon"/>
                                <h2>What is YETOO?</h2>
                                <p>
                                    Yetoo is a platform that enhances financial and operational data management. It offers tools for stock forecasting, detailed profit & loss analysis, and category-based stock management. With Yetoo, you can monitor stock levels, predict future inventory needs, and gain valuable financial insights. Our advanced forecasting algorithms ensure you stay ahead of stockouts and make informed decisions.
                                </p>
                                <Link to="/yetoo" className="learn-more-link">Read more</Link>
                            </div>
                            <div className="info-box info-box3">
                            <img src={icon2} alt="Members Role Icon" className="info-icon"/>
                                <h2>What are the members role?</h2>
                                <p>
                                    Drilon Tafili, founder and finance expert, guides our strategic vision. Alexandre Touat uses his development and data analysis skills to create optimized solutions. Maxime Van Rechem leverages his technical expertise to develop innovative data management solutions. Together, they ensure our clients receive comprehensive, integrated solutions in technology and finance.
                                </p>
                                <Link to="/about" className="learn-more-link">Read more</Link>
                            </div>
                        </div>
                    </div>

                    

                    <div className="video-container" id="yetoo">
                        <video ref={yetooVideoRef} className="background-video" muted playsInline>
                            <source src={yetooVideo} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <div className="overlay-text-2">
                            <h1>
                                Real-time data analysis and decision-making. Offering dashboards, financial reporting,
                                and tools for performance monitoring and optimization. Flexible and user-friendly, Yetoo
                                integrates with existing systems. Try it now for data-driven decisions.
                            </h1>
                            <Link to="/yetoo" className="learn-more-button-2">Read more</Link>
                        </div>
                    </div>

                    <div className="video-container" id="powerbi">
                        <video ref={powerbiVideoRef} className="background-video" muted playsInline>
                            <source src={powerbiVideo} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <div className="overlay-text">
                            <h1>
                                Power BI helps visualize and share insights from large datasets with interactive
                                dashboards and reports. Seamlessly integrates with Microsoft tools for comprehensive
                                data
                                analysis and decision-making.
                            </h1>
                            <Link to="/powerbi" className="learn-more-button-1">Read more</Link>
                        </div>
                    </div>

                    <div className="video-container">
                        <video ref={mbcVideoRef} className="background-video" muted playsInline>
                            <source src={mbcVideo} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <div className="overlay-text-2">
                            <h1>
                                Business Central offers ERP solutions with tools like Microsoft Flow and PowerApps. It
                                centralizes goods, customers, sales, and financials, driving digital transformation.
                            </h1>
                            <Link to="/mbc" className="learn-more-button-2">Read more</Link>
                        </div>
                    </div>


                    <br/><br/> <br/><br/> <br/><br/>

                    <br/><br/> <br/><br/><br/>
                    <span className="trust-text-span">Top company trust us<br/><br/></span>
                    <img className="trustCompany-image" src={trustCompany} alt={"trusted Companies"}></img>
                    <br/><br/> <br/><br/><br/>
                </>
            )}
        </div>
    );

}

export default Home;