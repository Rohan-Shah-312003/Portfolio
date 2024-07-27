import React from "react";
import "../styles/Resume.css";
import resume from "../assets/Resume_PDF.pdf";
import { Link } from "react-router-dom";

export default function Resume() {
  const getResolution = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const resolution = [width, height];
    return resolution;
  };

  const resolution = getResolution();
  return (
    <div className="container text-center row d-flex">
      {resolution[0] < 1080 && resolution[1] < 1920 ? (
        <div className="alert alert-info m-0" data-aos="fade-up">
          Please switch to a desktop device to view the resume on the website.
        </div>
      ) : (
        <div>
          <iframe
            src={resume}
            className="resume-pdf-embed mb-5"
            title="View Resume"
            data-aos="fade-up"
          />
        </div>
      )}
      <div className="row">
        <div className="col" data-aos="fade-up">
          <h4 className="mt-5">Download Resume</h4>
          <a href={resume} download>
            <button className="custom-btn btn-3">
              <span>
                <h2 className="btn-text ">Download</h2>
              </span>
            </button>
          </a>
        </div>
        <div className="col" data-aos="fade-up">
          <h4 className="mt-5">Go Back To Home</h4>
          <Link to="/">
            <button class="custom-btn btn-3">
              <span>
                <h2 className="btn-text ">Home</h2>{" "}
              </span>
            </button>
          </Link>
        </div>
      </div>

      <br></br>

      <br></br>

      <hr />
    </div>
  );
}
