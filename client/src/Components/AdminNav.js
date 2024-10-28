import React from "react";
import { Link } from "react-router-dom";
import AdminHome from "./AdminHome";
import img9 from "../img/logo.jpg";


function AdminNav() {
  return (
    <div>
      {/* <AdminHome/> */}
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
            <Link to="/admin_home" className="nav-item nav-link">
                Home
              </Link>
            <Link to="/admin_users" className="nav-item nav-link">
                Users
              </Link>
              <div className="nav-item dropdown">
                <Link
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Hotels
                </Link>
                <div className="dropdown-menu m-0">
                  <Link to="/admin/adminpage" className="dropdown-item">
                    Requests
                  </Link>
                  <Link to="/admin_view_hotels" className="dropdown-item">
                    View Hotels
                  </Link>
                </div>
              </div>
              <div className="nav-item dropdown">
                <Link
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Restaurants
                </Link>
                <div className="dropdown-menu m-0">
                  <Link to="/admin_view_rest_req" className="dropdown-item">
                    Requests
                  </Link>
                  <Link to="/admin_view_rest" className="dropdown-item">
                    View Restaurants
                  </Link>
                </div>
              </div>
              {/* <Link to="/admin/adminpage" className="nav-item nav-link">
                Hotel
              </Link> */}
              
              <div className="nav-item dropdown">
                <Link
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Agency
                </Link>
                <div className="dropdown-menu m-0">
                  <Link to="/admin/adminPack" className="dropdown-item">
                    Requests
                  </Link>
                  <Link to="/admin_view_agencies" className="dropdown-item">
                    View Agencies
                  </Link>
                  
                  
                </div>
                
               
              </div>
              <div className="nav-item dropdown">
                <Link
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Place
                </Link>
                <div className="dropdown-menu m-0">
                  <Link to="/AdminAddPlace" className="dropdown-item">
                    Place
                  </Link>
                  <Link to="/ViewAdminPlace" className="dropdown-item">
                    View Place
                  </Link>
                  <Link to="/admin_view_place_req" className="dropdown-item">
                    Requests
                  </Link>
                  
                </div>
                
               
              </div>
              <Link to="/admin_view_taxi" className="nav-item nav-link">
                Taxi
              </Link>
              <Link to="/" onClick={()=>{localStorage.clear();window.location.reload(false)}} className="nav-item nav-link">
                Logout
              </Link>
              
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default AdminNav;
