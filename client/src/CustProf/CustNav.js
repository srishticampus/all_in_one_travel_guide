import React from "react";
import { Link } from "react-router-dom";
import img9 from "../img/logo.jpg";


function CustNav() {
  return (
    <div>
      <div
        className="container-fluid position-relative p-0"
      
      >
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href="" className="navbar-brand p-0">
            <h1 className="text-primary m-0">
              <i className="fa fa-map-marker-alt me-3"></i><img src={img9} />Tourist Guide
            </h1>
            {/* <img src alt="Logo"/> */}
          </a>
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
              <Link to="/CustHome" className="nav-item nav-link ">
                Home
              </Link>
              <div className="nav-item dropdown">
                <Link
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Place
                </Link>
                <div className="dropdown-menu m-0">
                  <Link to="/AddPlace" className="dropdown-item">
                    Add Place
                  </Link>
                  <Link to="/ViewPlaceCust" className="dropdown-item">
                    View Place
                  </Link>
                </div>
              </div>
              <div className="nav-item dropdown">
                <Link
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Packages
                </Link>
                <div className="dropdown-menu m-0">
                  <Link to="/ViewPackage" className="dropdown-item">
                    View Packages
                  </Link>
                  <Link to="/cust_view_package_booking" className="dropdown-item">
                    View Booking
                  </Link>
                </div>
              </div>
              <div className="nav-item dropdown">
                <Link
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Hotels
                </Link>
                <div className="dropdown-menu m-0">
                  <Link to="/ViewHotel" className="dropdown-item">
                    View Hotels
                  </Link>
                  <Link to="/cust_view_hotel_booking" className="dropdown-item">
                    View Booking
                  </Link>
                </div>
              </div>

              <div className="nav-item dropdown">
                <Link
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Taxi
                </Link>
                <div className="dropdown-menu m-0">
                  <Link to="/cust_view_taxi" className="dropdown-item">
                    View Taxi
                  </Link>
                  <Link to="/cust_view_booking" className="dropdown-item">
                    View Booking
                  </Link>
                </div>
              </div>

              <Link to="/ViewRest" className="nav-item nav-link ">
                Restaurant
              </Link>

              <div className="nav-item dropdown">
                <Link to="/CustViewProf" className="nav-item nav-link ">
                  Customer Profile
                </Link>
              </div>
              {/* <a href="contact.html" className="nav-item nav-link">Contact</a> */}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default CustNav;
