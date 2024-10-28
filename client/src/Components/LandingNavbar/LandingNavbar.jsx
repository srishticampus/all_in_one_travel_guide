import React from "react";
import { Link } from "react-router-dom";
import img9 from "../../img/logo.jpg";

function LandingNavbar() {
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
              <img src={img9} alt="logo" className="w-25" />
              Tourist Guide
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
              <Link to="/" className="fs-6 nav-item nav-link ">
                Home
              </Link>
              <Link to="/about" className="fs-6 nav-item nav-link">
                About
              </Link>
              <div className="nav-item dropdown">
                <Link
                  href="#"
                  className="nav-link dropdown-toggle fs-6"
                  data-bs-toggle="dropdown"
                >
                  Regsiter
                </Link>
                <div className="dropdown-menu m-0 fs-6">
                  <Link to="/tourist/signup" className="dropdown-item">
                    Tourist
                  </Link>
                  <Link to="/RestReg" className="dropdown-item">
                    Restaurant
                  </Link>
                  {/* <Link to="/HotelReg" className="dropdown-item">
                    Hotel
                  </Link> */}
                  <Link to="/GuideRegister" className="dropdown-item">
                    Agency
                  </Link>
                  <Link to="/taxi_register" className="dropdown-item">
                    Taxi
                  </Link>
                </div>
              </div>
              <div className="fs-6 align-self-center">
                <Link  to="/login" className="fw-bold fs6 dropdown-item">
                  Login
                </Link>

                {/* <h> Login</h 5> */}

                {/* <div className="dropdown-menu m-0">
                  <Link to="/login" className="dropdown-item">
                    {" "}
                    Tourist
                  </Link>
                  <Link to="/RestLogin" className="dropdown-item">
                    Restaurant
                  </Link>
                  <Link to="/HotelLogin" className="dropdown-item">
                    Hotel{" "}
                  </Link>
                  <Link to="/GuideLogin" className="dropdown-item">
                    Agency
                  </Link>
                  <Link to="/taxi_login" className="dropdown-item">
                    Taxi
                  </Link>
                </div> */}
              </div>

              {/* <a href="contact.html" className="nav-item nav-link">
                Contact
              </a> */}
            </div>
            {/* <div className="nav-item dropdown">
                        <Link  className="btn btn-primary rounded-pill py-2 px-4" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">login</Link>
                        <div className="dropdown-menu m-0">
                            
                            <Link to="/Login" className="dropdown-item" > Customer Login</Link>
                            <Link to="/RestLogin" className="dropdown-item">Restaurant Login</Link>
                             <Link to="/HotelLogin" className="dropdown-item">Hotel Login</Link>
                          
                        </div>
                    </div>
                 */}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default LandingNavbar;
