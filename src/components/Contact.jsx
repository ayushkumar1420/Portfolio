import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "db826db4-40e4-4f63-84ae-50fa78a02e60");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <section id="contact" className="contact-section container">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container glass-panel">
        <form className="contact-form" onSubmit={onSubmit}>
          
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="John Khan" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="john@example.com" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Write message here...."></textarea>
          </div>

          <button type="submit" className="btn btn-primary submit-btn">
            Send Message
          </button>

          {result && <p>{result}</p>}
        </form>

        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>
            I'm currently looking for new opportunities. Whether you have a question 
            or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="contact-details">
            <p><strong>Email:</strong> ayushmaurya496@gmail.com</p>
            <p><strong>Location:</strong> Gorakhpur, UP</p>
          </div>
        </div>
      </div>
    </section>
  );
}