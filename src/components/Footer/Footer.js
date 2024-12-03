import React from "react";
import "./Footer.css";
import r from "../../data/resume.pdf";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="contact">
      <a className="resume-link" href={r} download>
        Download Resume
      </a>
      <div className="links-container">
        <a
          href="https://www.linkedin.com/in/dilyara-tulegenova/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin-in icon-size icon-linked-in"></i>
        </a>
        <a href="https://github.com/dilyarakz" target="_blank" rel="noreferrer">
          <i className="fab fa-github icon-size icon-git"></i>
        </a>
      </div>
    </footer>
  );
}
