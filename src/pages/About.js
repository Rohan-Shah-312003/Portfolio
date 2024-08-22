import React from "react";
import "../styles/About.css";
import aboutImage from "../assets/about.jpg";
import { Link } from "react-router-dom";

export default function About() {
  var Languages = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Java",
    "C++",
    "R",
    "Python",
    "Kotlin",
    "Flutter",
  ];

  return (
    <div className="about mb-5">
      <div className="container text-center">
        <h1 className="display-4 " data-aos="fade-up">
          About
        </h1>
        <hr />
        <div className="about-me">
          <div className="row d-flex justify-content-center">
            <div className="col">
              <img
                src={aboutImage}
                className="about-image"
                alt=""
                data-aos="fade-right"></img>
            </div>
            <div className="col" data-aos="fade-left">
              <h1>About Me</h1>
              <p>
                Born and brought up in Kolkata, West Bengal, India, I am a
                Computer Science Student, currently pursuing my degree in
                Computer Science and Engineering, from Velllore Institute Of
                Technology University - Andhra Pradesh in Amaravathi, Andhra
                Pradesh, India.
              </p>

              <br></br>

              <p>
                I started my journey in coding in 2019, where I was first
                introduced to coding with my debut language being Java.
              </p>

              <br></br>

              <p>
                Currently well-versed in HTML, CSS, Javascript, React, Node.js,
                Express, MongoDB, Git, GitHub, Java, C++, R and Python, I focus
                mainly on Full Stack MERN Web Development, Machine Learning and
                Data Analysis.
              </p>
            </div>
          </div>

          <br></br>
          <hr />
          <div className="row d-flex justify-content-center mt-5">
            <div className="col">
              <h1 data-aos="fade-up">My Skills</h1>

              <br></br>

              <h3 data-aos="fade-up">Languages I am familiar with:</h3>
              <div className="row d-flex justify-content-center">
                {Languages.map((lang) => (
                  <div className="col card m-1 p-0 card1" data-aos="fade-up">
                    <div className="card-body">
                      <p className="card-text">{lang}</p>
                    </div>
                  </div>
                ))}
              </div>

              <br></br>

              <h3 data-aos="fade-up">
                Skills I am confident in and experienced with:
              </h3>
              <div className="row d-flex justify-content-center">
                <div className="col card m-1 p-0 card1" data-aos="fade-left">
                  <div className="card-body">
                    <h3 className="card-title">Full Stack Web Development</h3>
                    <p className="card-text">
                      Building full stack CRUD web applications using MERN
                      Stack.
                    </p>
                  </div>
                </div>
                <div className="col card m-1 p-0 card1" data-aos="fade-up">
                  <div className="card-body">
                    <h3 className="card-title">Machine Learning</h3>
                    <p className="card-text">
                      Familiar with the following python libraries:
                      <ul className="card-text list list-unstyled">
                        <li>Scikit-learn</li>
                        <li>TensorFlow</li>
                        <li>Numpy</li>
                        <li>Pandas</li>
                      </ul>
                    </p>
                  </div>
                </div>
                <div className="col card m-1 p-0 card1" data-aos="fade-right">
                  <div className="card-body">
                    <h3 className="card-title">Data Analytics</h3>
                    <p className="card-text">
                      Proficient in using R programming and Python libraries
                      (pandas, numpy, etc). for data analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
        </div>
        <div
          className="row d-flex justify-content-center mt-4"
          data-aos="fade-up">
          <h2>Read My Resume</h2>
          <hr></hr>
          <Link to="/resume">
            <button class="custom-btn btn-3">
              <span>
                <h2 className="btn-text ">Resume</h2>{" "}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
