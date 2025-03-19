import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'devGuardSolution',          // Service ID
        'template_um3u4go',          // Template ID
        form.current,
        '7hpwENqH2HzH1Exqr'          // Public Key (User ID)
      )
      .then(
        (result) => {
          console.log('✅ Message sent successfully:', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('❌ Failed to send message:', error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contact Us</h2>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="contact-left">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Email Account" required />
          <input type="text" name="user_subject" placeholder="Subject" required />
        </div>
        <div className="contact-right">
          <textarea name="user_message" placeholder="Message" required></textarea>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
