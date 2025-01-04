import React from "react";
import style from "./footer.module.css";
import {
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
    <div>
      
    </div>
      <footer className={` ${style.footer}`}>
        <div className="container">
          <div className="row">
            <div className=" row cards ">
              <div className="card-body col-md-4 col-sm-12 my-5 text-center  text-white">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
              <div className="card-body col-md-4 col-sm-12 my-5 text-center text-white">
                <h3>AROUND THE WEB</h3>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-white mx-2 p-2 icon border border-white rounded-circle"
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-white mx-2 p-2 icon border border-white rounded-circle"
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-white mx-2 p-2 icon border border-white rounded-circle"
                />
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="text-white mx-2 p-2 icon border border-white rounded-circle"
                />
              </div>
              <div className="card-body col-4 text-center mt-5 text-white">
                <h3>ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={`text-white text-center p-3 ${style.p_footer}`}>
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
