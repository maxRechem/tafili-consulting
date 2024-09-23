import React from 'react';
import './Footer.css';
import contact from '../Img/footerFinal.png';

function Footer() {
    return (
        <div className="Footer">
            <footer className="App-footer">
                <div className="footer-1">
                    <div className="logo-footer"></div>
                    <div className='footer-part2'>
                        <br/><br/><br/><br/>
                        <img className="contact-image" src={contact} alt="contact us"/>
                        <br/><br/><br/><br/>
                    </div>
                </div>
            </footer>
        </div>
    );
}


export default Footer;
