import React, { useState } from "react";
import style from "./contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [formValues, setFormValues] = useState({
    userName: "",
    userAge: "",
    userEmail: "",
    userPassword: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className={`${style.contact}`}>
      <div className="text-center mb-3">
        <h2
          className={`text-uppercase mb-3 fs-1 fw-bolder ${style.contact_h2}`}
        >
          Contact Section
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
          <FontAwesomeIcon icon={faStar} className={style.contact_h2} />
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
      <form action="" className="w-50 p-3 mx-auto mt-5">
        <div className="position-relative mb-4">
          <label
            htmlFor="userName"
            className={`${style.label_text} position-absolute`}
            style={{
              top: formValues.userName || document.activeElement.name === "userName" ? "-30px" : "5px",
              left: "10px",
              transition: "0.6s",
              opacity: formValues.userName || document.activeElement.name === "userName" ? 1 : 0,
            }}
          >
            UserName:
          </label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={formValues.userName}
            onChange={handleChange}
            className="form-control border-0 border-bottom py-3"
            placeholder="UserName"
          />
        </div>
        <div className="position-relative mb-4">
          <label
            htmlFor="userAge"
            className={`${style.label_text} position-absolute`}
            style={{
              top: formValues.userAge || document.activeElement.name === "userAge" ? "-30px" : "15px",
              left: "10px",
              transition: "0.6s",
              opacity: formValues.userAge || document.activeElement.name === "userAge" ? 1 : 0,
            }}
          >
            UserAge:
          </label>
          <input
            type="text"
            name="userAge"
            id="userAge"
            value={formValues.userAge}
            onChange={handleChange}
            className="form-control border-0 border-bottom py-3"
            placeholder="UserAge"
          />
        </div>
        <div className="position-relative mb-4">
          <label
            htmlFor="userEmail"
            className={`${style.label_text} position-absolute`}
            style={{
              top: formValues.userEmail || document.activeElement.name === "userEmail" ? "-30px" : "15px",
              left: "10px",
              transition: "0.6s",
              opacity: formValues.userEmail || document.activeElement.name === "userEmail" ? 1 : 0,
            }}
          >
            UserEmail:
          </label>
          <input
            type="text"
            name="userEmail"
            id="userEmail"
            value={formValues.userEmail}
            onChange={handleChange}
            className="form-control border-0 border-bottom py-3"
            placeholder="UserEmail"
          />
        </div>
        <div className="position-relative mb-4">
          <label
            htmlFor="userPassword"
            className={`${style.label_text} position-absolute`}
            style={{
              top: formValues.userPassword || document.activeElement.name === "userPassword" ? "-30px" : "15px",
              left: "10px",
              transition: "0.6s",
              opacity: formValues.userPassword || document.activeElement.name === "userPassword" ? 1 : 0,
            }}
          >
            UserPassword:
          </label>
          <input
            type="text"
            name="userPassword"
            id="userPassword"
            value={formValues.userPassword}
            onChange={handleChange}
            className="form-control border-0 border-bottom py-3"
            placeholder="UserPassword"
          />
        </div>

        <button
          className={`${style.label_btn} rounded p-2 px-3 text-white`}
          style={{ border: "none" }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
