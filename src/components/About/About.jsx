import React from "react";
import style from "./about.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className={`about ${style.about}`}>
      <div className="text-center mb-3 text-white">
        <h2 className="text-uppercase mb-3 fs-1 fw-bolder">about component</h2>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div
            className="line me-3"
            style={{ backgroundColor: "white", height: "4px", width: "80px" }}
          ></div>
          <FontAwesomeIcon icon={faStar} />
          <div
            className="line ms-3"
            style={{ backgroundColor: "white", height: "4px", width: "80px" }}
          ></div>
        </div>
        <div className="row px-5 mx-5 align-items-center ">
          <p className={`col-md-6 text-justify ${style.p_about}`}>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className={`col-md-6 text-justify ${style.p_about}`}>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </div>
  );
}
