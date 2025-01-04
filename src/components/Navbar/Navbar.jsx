import React from "react";
import style from "./navbar.module.css";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top py-4" id="navbar">
  <div className="container-fluid container">
    <Link className="navbar-brand text-uppercase text-white fw-bolder fs-2" to="">
      Start Framework
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-3">
          <NavLink className="nav-link text-uppercase text-white fw-bold mt-3 mt-md-0 px-2" aria-current="page" to="about">
            about
          </NavLink>
        </li>
        <li className="nav-item me-3">
          <NavLink className="nav-link text-uppercase text-white fw-bold mt-3 mt-md-0 px-2" to="portfolio">
            portfolio
          </NavLink>
        </li>
        <li className="nav-item me-3">
          <NavLink className="nav-link text-uppercase text-white fw-bold mt-3 mt-md-0 px-2" to="contact">
            contact
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
}
