import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section container">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container glass-panel">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your message here..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
        </form>
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>
            I'm currently looking for new opportunities. Whether you have a question 
            or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="contact-details">
            <p><strong>Email:</strong> hello@example.com</p>
            <p><strong>Location:</strong> San Francisco, CA</p>
          </div>
        </div>
      </div>
    </section>
  );
}
