import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
    useEffect(() => {
        // Initialisation EmailJS
        emailjs.init("Unj8iqUiNvHBW8Iij");
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Envoi du formulaire via EmailJS
        emailjs.sendForm('service_i787qvm', 'template_oqajaqs', e.target)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                // Réinitialisation du formulaire si nécessaire
                e.target.reset();
            }, (error) => {
                console.log('FAILED...', error);
            });
    };

  return (
    <div className="contact">

      <div className="contactPart1">
        <span className="touch">Get in touch.</span><br/>
        <span className="contact_text">Our team would be love to hear from you!</span>
      </div>
        <div className="contact_cadre">
            <form id="contact_form" onSubmit={handleSubmit}>
                <br/>
                <span className="contact_name">Your name</span><br/>
                <input className="name_input" name="name"></input>
                <br/>
                <span className="contact_email">Email address</span><br/>
                <input className="email_input" name="email"></input>
                <br/>
                <span className="contact_company">Company (optional)</span><br/>
                <input className="company_input" name="company"></input>
                <br/>
                <span className="contact_phone">Phone number (optional)</span><br/>
                <input className="phone_input" name="phone"></input>
                <br/>
                <span className="contact_subject">Subject</span><br/>
                <input className="subject_input" name="subject"></input>
                <br/>
                <span className="contact_message">Message</span><br/>
                <input className="message_input" name="message"></input>
                <br/> <br/> <br/>
                <button className="buttonSend" type="submit">Send</button>
            </form>

            <br/> <br/> <br/>
        </div>
        <div className="contactPart2">
            <br/>
        </div>
    </div>
  );
}

export default Contact;
