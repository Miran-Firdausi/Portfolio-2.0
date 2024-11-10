import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          © {new Date().getFullYear()} Miran. All rights reserved.
        </p>

        <div className="footer__social">
          <a
            href="https://github.com/Miran-Firdausi"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/miran-firdausi"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://instagram.com/mirvn.27"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
