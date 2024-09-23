import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../Img/TafiliLogo2.png';
import { Link } from 'react-router-dom';


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1300);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to detect scroll and toggle navbar visibility
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

      // Function to detect window resize and toggle mobile view
      const handleResize = () => {
        if (window.innerWidth <= 1300) {
            setIsScrolled(true); // Trigger the overlay menu when in mobile view
            setIsMobileView(true);
        } else {
            setIsScrolled(false);
            setIsMobileView(false);
        }
    };

    // Add scroll event listener on component mount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        // Check the initial window size
        handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="Header">
        <header className={`App-header ${isScrolled ? 'scrolled' : ''}`}>
            {/* Navbar classique */}
            {!isMobileView && (
                <nav className={`navbar ${isScrolled ? 'hide' : ''}`}>
                    <ul className="navbar-menu">
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/financial">Financial</Link></li>
                        <li className="navbar-logo">
                            <Link to="/">
                                <img src={logo} alt="Logo" />
                            </Link>
                        </li>
                        <li><Link to="/dataanalyst">Data analyst & IT</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                    </ul>
                </nav>
            )}

            {/* Bouton Menu en Overlay */}
            <div className={`menuIcon ${isScrolled || isMobileView ? '' : 'hide'} ${isMenuOpen ? 'toggle' : ''}`}
                onClick={handleMenuToggle}>
                <span className="icon icon-bars"></span>
                <span className="icon icon-bars overlay"></span>
            </div>

            {/* Menu Overlay */}
            <div
                className="overlay-menu"
                style={{ transform: isMenuOpen ? 'translateX(0%)' : 'translateX(-100%)' }}
            >
                <ul id="menu">
                    <li><Link to="/yetoo">Yetoo</Link></li>
                    <li><Link to="/powerbi">Power BI</Link></li>
                    <li><Link to="/team">Meet Us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                </ul>
            </div>
        </header>
    </div>
    );
}

export default Header;
