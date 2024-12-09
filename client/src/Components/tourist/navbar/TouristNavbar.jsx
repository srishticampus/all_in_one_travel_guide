import React from "react";
import { Link } from "react-router-dom";
import appLogo from "../../../Asset/images/logo.jpg";

export default function TouristNavbar() {
  return (
    <div>
      <div className="container-fluid bg-dark px-9 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0"></div>
          <div className="col-lg-4 text-center text-lg-end"></div>
        </div>
      </div>
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <Link to="/" className="navbar-brand p-0">
            <h5 className="text-primary m-0">
              <img src={appLogo} alt="logo" className="w-25" />
              Travel Guide
            </h5>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to="/tourist/home" className="fs-6 nav-item nav-link ">
                Home
              </Link>
              <Link to="/tourist/hotels" className="fs-6 nav-item nav-link">
                Hotels
              </Link>
              <Link to="/tourist/restaurants" className="fs-6 nav-item nav-link">
                Restaurant
              </Link>
              <Link
                to="/tourist/view-packages"
                className="fs-6 nav-item nav-link"
              >
                Packages
              </Link>
              <Link to="/tourist/profile" className="fs-6 nav-item nav-link">
                Profile
              </Link>
              <Link
                to="/login"
                style={{color: "red"}}
                className="fs-6 nav-item nav-link tw-text-red-800 "
              >
                Logout
              </Link> 
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
