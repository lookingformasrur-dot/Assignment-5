import "./Navbar.css";
import logo from "../assets/logo-text.png";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <IoClose /> : <IoMenu />}
      </button>

      <div className="navbar-logo">
        <img src={logo} alt="Dev Stack Logo" />
      </div>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <a href="#">Home</a>
        <a href="#">Technologies</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <div className="navbar-buttons">
        <button className="sign-in">Sign in</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
