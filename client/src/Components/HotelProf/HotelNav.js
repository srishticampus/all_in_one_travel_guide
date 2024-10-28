import React from 'react'
import { Link } from 'react-router-dom'
import img9 from "../../img/logo.jpg";


function HotelNav() {
  return (
    <div>
        <div className="container-fluid position-relative p-0" >
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="" className="navbar-brand p-0">
                <h1 className="text-primary m-0"><i className="fa fa-map-marker-alt me-3"></i><img src={img9} />Tourist Guide  </h1>
                {/* <img src alt="Logo"/> */}
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <Link to="/HotelHome" className="nav-item nav-link ">Home</Link>
                    <Link to="/AddRoom"  className="nav-item nav-link ">Add Rooms</Link>
                    <Link to="/ViewRoom" className="nav-item nav-link ">View Rooms</Link>
                    <Link to="/ViewBookings" className="nav-item nav-link ">View Bookings</Link>
                    
                    {/* <Link to="/About" className="nav-item nav-link">About</Link> */}
                    {/* <Link to="/Register" className="nav-item nav-link">Register</Link> */}
                    {/* <a href="package.html" className="nav-item nav-link">Packages</a> */}
                    <div className="nav-item dropdown">
                        <Link to='/HotelViewProf' className="nav-item nav-link ">Hotel Profile</Link>
                       
                  
                        </div>
                    {/* <a href="contact.html" className="nav-item nav-link">Contact</a> */}
                </div>
               
                
                
            </div>
        </nav>

      
    </div>
    </div>
  )
}

export default HotelNav