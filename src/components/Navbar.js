import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-p">
      <div className="container-fluid">
        <Link className="navbar-brand " to="/">
          Rohan's Portfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={navbarOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            navbarOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item  nav-link-p">
              <Link className="nav-link " to="/">
                Home
              </Link>
            </li>
            <li className="nav-item nav-link-p">
              <Link className="nav-link " to="/about">
                About
              </Link>
            </li>
            <li className="nav-item nav-link-p">
              <Link className="nav-link " to="/resume">
                Resume
              </Link>
            </li>
            <li className="nav-item nav-link-p">
              <a
                className="nav-link"
                href="https://github.com/Rohan-Shah-312003"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="" className="github"></img>
              </a>
            </li>
            <li className="nav-item nav-link-p">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/aokira31/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="" className="linkedin"></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

