import "./footer.css";
import logo from "../assets/logo-text.png";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footerleft-all">
          <div className="footer-logo">
            <img src={logo} alt="Dev Stack Logo" />
          </div>

          <p>
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="footer-social">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        <div className="footer-link">
          <div className="footer-column">
            <h4>PRODUCT</h4>
            <a href="#">Home</a>
            <a href="#">Technologies</a>
            <a href="#">Projects</a>
          </div>

          <div className="footer-column">
            <h4>COMPANY</h4>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
          </div>

          <div className="footer-column">
            <h4>LEGAL</h4>
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <ul>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </ul>
        </div>
      </footer>
    </div>
  );
}
