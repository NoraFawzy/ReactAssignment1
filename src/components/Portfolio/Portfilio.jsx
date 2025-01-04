import React, { useState } from "react";
import style from "./portfolio.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../assets/img4.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";

export default function Portfilio() {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openModal = (img) => {
    setCurrentImage(img);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const images = [img1, img2, img3, img1, img2, img3];

  return (
    <div className={`portfolio ${style.portfolio}`}>
      <div className="text-center mb-3">
        <h2
          className={`text-uppercase mb-3 fs-1 fw-bolder ${style.portfolio_h2}`}
        >
          about component
        </h2>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div
            className="line me-3"
            style={{
              backgroundColor: "var(--second-color)",
              height: "4px",
              width: "80px",
            }}
          ></div>
          <FontAwesomeIcon icon={faStar} className={style.portfolio_h2} />
          <div
            className="line ms-3"
            style={{
              backgroundColor: "var(--second-color)",
              height: "4px",
              width: "80px",
            }}
          ></div>
        </div>
      </div>

      <div className="container">
        <div className="row g-5">
          {images.map((img, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="rounded-3 overflow-hidden position-relative">
                <img
                  className="w-100 rounded-3"
                  src={img}
                  alt={`portfolio-${index}`}
                />
                <div
                  className={`layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ${style.layer}`}
                  onClick={() => openModal(img)}
                >
                  <FontAwesomeIcon icon={faPlus} className="fa-6x text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div
          className="modal-overlay position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "hsla(221, 75.70%, 42.00%, 0.20)",
            zIndex: 1050,
          }}
          onClick={closeModal}
        >
          <div
            className="modal-content position-relative"
            style={{ maxWidth: "40%", maxHeight: "40%" }}
          >
            <img src={currentImage} alt="Modal" className="w-100 h-100" />
          </div>
        </div>
      )}
    </div>
  );
}
