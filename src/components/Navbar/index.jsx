/* eslint-disable */
import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-sm navbar-light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="home" className="nav-link" smooth={true} duration={1000}>
              <span className="material-icons">home</span>
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="about" className="nav-link" smooth={true} duration={1000}>
              <span className="material-icons">perm_identity</span>
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to="skills"
              className="nav-link"
              smooth={true}
              duration={1000}
            >
              <span className="material-icons">code</span>
              Skills
            </Link>
          </li>
          <li class="nav-item dropdown">
            <Link
              to="contact"
              className="nav-link"
              smooth={true}
              duration={1000}
            >
              <span className="material-icons">email</span>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
