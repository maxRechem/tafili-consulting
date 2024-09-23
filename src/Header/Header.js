import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../Img/TafiliLogo2.png';

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
                            <li><a href="/about">About us</a></li>
                            <li><a href="/financial">Financial</a></li>
                            <li className="navbar-logo">
                                <a href="/">
                                    <img src={logo} alt="Logo"/>
                                </a>
                            </li>
                            <li><a href="/dataanalyst">Data analyst & IT</a></li>
                            <li><a href="/contact">Contact us</a></li>
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
                    style={{transform: isMenuOpen ? 'translateX(0%)' : 'translateX(-100%)'}}
                >
                    <ul id="menu">
                        <li><a href="/yetoo">Yetoo</a></li>
                        <li><a href="/powerbi">Power BI</a></li>
                        <li><a href="/team">Meet Us</a></li>
                        <li><a href="/contact">Contact us</a></li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Header;
