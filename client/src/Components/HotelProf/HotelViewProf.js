import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import img1 from "../../img/user-verification-symbol-for-interface.png";

import axiosInstance from "../BaseUrl";
import HotelNav from "./HotelNav";

function HotelViewProf({ baseurl }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("hotellogid") == null) {
      navigate("/");
    }
  });

  const [rset, setrset] = useState({ image: {} });
  useEffect(() => {
    // const storedUser = localStorage.getItem("users");
    const id = localStorage.getItem("hotellogid");
    console.log(id);

    axiosInstance.post(`/viewHotelById/${id}`).then((res) => {
      console.log(res);
      setrset(res.data.data);
    });
  }, []);
  return (
    <div>
      <HotelNav />
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
                      <span className="text-black-50 mt-3">{rset.hotelName}</span>
                      <span> </span>
                    </div>
                  </div>
                  {/* <div
                    className="col-md-4 gradient-custom text-center text-white"
                    style={{borderTopLeftRadius:" .5rem;", borderBottomLeftRadius: ".5rem;"}}
                  >
                    <img
                      src={img1}
                      alt="Avatar"
                      className="img-fluid my-5"
                      style={{width: "80px;"}}
                    />
                    <h5 style={{color:'Red'}}>{rset.hotelName}</h5>
                    <i className="far fa-edit mb-5"></i>
                  </div> */}
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h2>{rset.hotelName}</h2>

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
                        <div className="col-6 mb-3">
                          <h6>City:</h6>
                          <p className="text-muted">{rset.city}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Country:</h6>
                          <p className="text-muted">{rset.country}</p>
                        </div>
                        <hr className="mt-0 mb-4" />
                        <div className="col-6 mb-3"></div>
                      </div>
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Reg No:</h6>
                          <p className="text-muted">{rset.regNo}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Pincode:</h6>
                          <p className="text-muted">{rset.pincode}</p>
                        </div>
                        <hr className="mt-0 mb-4" />
                        <div className="col-6 mb-3"></div>
                      </div>
                     
                      <Link to="/HotelEditProf">
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
                          onClick={() => {
                            localStorage.clear();
                            window.location.reload(false);
                          }}
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

export default HotelViewProf;
