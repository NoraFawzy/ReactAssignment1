import React from "react";
import style from "./home.module.css";
import img from "../../assets/img1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div
      className={`home justify-content-center align-items-center text-white ${style.home}`}
    >
      <div className="text-center">
        <img src={img} alt="" />
      </div>
      <div className="text-center mt-3">
        <h2 className="text-uppercase mb-3 fs-1 fw-bolder">start Framework</h2>
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
        <div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </div>
  );
}
