import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} Ayush Kumar. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/ayushkumar1420">GitHub</a>
          <a href="https://www.linkedin.com/in/ayush-kumar-83a969347?utm_source=share_via&utm_content=profile&utm_medium=member_android">LinkedIn</a>
          <a href="https://x.com/ayushkumar1420_">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
