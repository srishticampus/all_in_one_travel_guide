import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import img1 from "../../img/user-verification-symbol-for-interface.png";
import RestNav from "./RestNav";
import axiosInstance from "../BaseUrl";

function ResttViewProf({ baseurl }) {
  const [rset, setrset] = useState({ image: {} });

  const navigate=useNavigate();
  useEffect(() => {
    if(localStorage.getItem('restlogid')==null){
      navigate('/')
    }
  });

  useEffect(() => {
    // const storedUser = localStorage.getItem("users");
    const id = localStorage.getItem("restlogid");
    console.log(id);

    axiosInstance.post(`/viewRestaurantById/${id}`).then((res) => {
      setrset(res.data.data);
      console.log(res);
    });
  }, []);
  return (
    <div>
      <RestNav />
      <section className="vh-100" style={{ backgroundColor: "#f4f5f7;" }}>
        <div className="container3 py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div
                className="card mb-3"
                style={{ borderRadius: ".5rem;", padding: "20px" }}
              >
                <div className="row g-0">
                  <div
                    className="col-md-4 gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: " .5rem;",
                      borderBottomLeftRadius: ".5rem;",
                    }}
                  >
                    
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                      <img
                        className="rounded-circle "
                        width="200px"
                        height="200px"
                        style={{ objectFit: "cover" }}
                        src={`${baseurl}/${rset.image.originalname}`}
                      />
                      <span className="font-weight-bold"></span>
                      <span className="text-black-50 mt-3">{rset.name}</span>
                      <span> </span>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h2>{rset.name}</h2>

                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Email:</h6>
                          <p className="text-muted">{rset.email}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Contact:</h6>
                          <p className="text-muted">{rset.contact}</p>
                        </div>
                      </div>
                      {/* <h6>Projects</h6> */}
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        {/* <div className="col-6 mb-3">
                          <h6>Password:</h6>
                          <p className="text-muted">{rset.password}</p>
                        </div> */}
                        {/* <hr className="mt-0 mb-4" /> */}
                        <div className="col-6 mb-3">
                          <h6>Food Type:</h6>
                          <p className="text-muted">{rset.type}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>City:</h6>
                          <p className="text-muted">{rset.city}</p>
                        </div>
                        <hr className="mt-0 mb-4" />
                        <div className="col-6 mb-3">
                          <h6>Country:</h6>
                          <p className="text-muted">{rset.country}</p>
                        </div>
                        <div className="col-6 mb-3"></div>
                        <hr className="mt-0 mb-4" />
                      </div>
                      {/* <div className="d-flex justify-content-start">
                        <a href="#!">
                          <i className="fab fa-facebook-f fa-lg me-3"></i>
                        </a>
                        <a href="#!">
                          <i className="fab fa-twitter fa-lg me-3"></i>
                        </a>
                        <a href="#!">
                          <i className="fab fa-instagram fa-lg"></i>
                        </a>
                      </div> */}
                      <Link to="/RestEditProf">
                        <button
                          type="submit"
                          className="btn btn-success h-23 w-50 py-2 "
                        >
                          Edit
                        </button>
                      </Link>
                      <Link to="/">
                        <button
                          type="submit"
                          className="btn btn-danger h-23 w-50 py-2"
                          onClick={()=>{localStorage.clear();window.location.reload(false)}}
                        >
                          Log out
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResttViewProf;
