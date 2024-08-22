import React from "react";
import "../styles/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
      <div className="section3 p-4 ">
        <div className="row text-center">
          <div className="col">
            <h3>Also Visit:</h3>
            <br />
            <Link to="/about" className="btn btn-outline-light">
              About Me
            </Link>
            <br />
            <Link to="/resume" className="btn btn-outline-light mt-3">
              Resume
            </Link>
          </div>
          <div className="col">
            <h3>Follow Me On:</h3>
            <br />
            <a
              href="https://github.com/Rohan-Shah-312003"
              target="_blank"
              className="text-decoration-none text-light">
              <img src={github} alt="" className="github m-1"></img> Github
            </a>

            <br />

            <a
              href="https://www.linkedin.com/in/aokira31/"
              target="_blank"
              className="text-decoration-none text-light">
              <img src={linkedin} alt="" className="linkedin m-1"></img>{" "}
              LinkedIn
            </a>
            <br />
          </div>
        </div>
      </div>
  );
}
