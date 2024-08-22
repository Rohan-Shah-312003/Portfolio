import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";
import profile from "../assets/profile.jpg";
import webdev from "../assets/webdev.jpg";
import machinelearning from "../assets/machinelearning.jpg";
import android from "../assets/android.jpg";
import datascience from "../assets/dataanalysis.jpg";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <div className="home container-fluid  p-0">
      <div className="section1">
        <div className="row m-5">
          <div className="col" data-aos="fade-right">
            <img src={profile} alt="" className="profile"></img>
          </div>
          <div className="col m-1 v-center mt-4" data-aos="fade-left">
            <h1 className="mt-5">Hello! I'm Rohan Shah</h1>
            <br />
            <h3>A Computer Science Student based in Andhra Pradesh, India</h3>
            <p className="text-secondary">
              Creating and Learning about technology a little more every day
              with passion and dedication.
            </p>

            <Link to="/about" className="btn btn-dark m-1">
              More About Me
            </Link>
            <Link to="/about" className="btn btn-light m-1">
              Resume
            </Link>
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="row  mt-5  p-3 d-flex justify-content-center">
          <div className="row justify-content-center m-3 " data-aos="fade-down">
            <h3 className="text-center">I Can Help You With</h3>
            <div
              className="col card mt-3 m-3"
              style={{ width: "18rem" }}
              data-aos="fade-right">
              <img src={webdev} className="card-img-top" alt="" />
              <div className="col card-body">
                <h5 className="card-title">Web Development</h5>
                <p className="card-text">
                  Confident and experienced in Full Stack MERN development.
                </p>

                <Link to="/about" className="btn btn-dark">
                  Learn In Detail
                </Link>
              </div>
            </div>
            <div
              className=" col card mt-3 m-3"
              style={{ width: "18rem" }}
              data-aos="fade-right">
              <img src={android} className="card-img-top" alt="" />
              <div className="col card-body">
                <h5 className="card-title">App Development</h5>
                <p className="card-text">
                  Acquainted with Android development using Kotlin and Flutter
                </p>
                <Link to="/about" className="btn btn-dark">
                  Learn In Detail
                </Link>
              </div>
            </div>
            <div
              className="col card mt-3 m-3"
              style={{ width: "18rem" }}
              data-aos="fade-left">
              <img src={machinelearning} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Machine Learning</h5>
                <p className="card-text">
                  Experienced with implementing ML models and learning about
                  creating ML models
                </p>
                <Link to="/about" className="btn btn-dark">
                  Learn In Detail
                </Link>
              </div>
            </div>
            <div
              className="card mt-3 m-3"
              style={{ width: "18rem" }}
              data-aos="fade-left">
              <img src={datascience} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Data Analysis</h5>
                <p className="card-text">
                  Specialist in data science using Python and R programming
                </p>
                <Link to="/about" className="btn btn-dark">
                  Learn In Detail
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <hr></hr>
      <div
        className="row d-flex justify-content-center text-center mt-4"
        data-aos="fade-up">
        <h2>Know More About Me</h2>
        <Link to="/about">
          <button class="custom-btn btn-3">
            <span>
              <h2 className="btn-text ">About Me</h2>
            </span>
          </button>
        </Link>
        <br></br>
        <hr></hr>
      </div>
    </div>
  );
}
