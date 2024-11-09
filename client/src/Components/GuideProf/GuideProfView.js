import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../../img/user-verification-symbol-for-interface.png";
import axiosInstance from "../BaseUrl";
import GuideNav from "../Guide/GuideNav";
import GuideProfNav from "./GuideProfNav";

function GuideViewProf() {

  const navigate=useNavigate();


  const [gset, setgset] = useState({});
  useEffect(() => {
    // const storedUser = localStorage.getItem("users");
    const id = localStorage.getItem("guidelogid");
    console.log(id);

    axiosInstance.post(`/viewAgencyById/${id}`)
    .then((res) => {
      console.log(res);
      setgset(res.data.data);
    })
    .catch((err)=>{
      console.log(err);
    })
    
  }, []);
  return (
    <div>
      {/* <GuideNav /> */}
      <GuideProfNav/>

      <section className="">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3" style={{ borderRadius: ".5rem;" }}>
                <div className="row g-0">
                  {/* <div
                    className="col-md-4 gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: " .5rem;",
                      borderBottomLeftRadius: ".5rem;",
                    }}
                  >
                    <img
                      src={img1}
                      alt="Avatar"
                      className="img-fluid my-5"
                      style={{ width: "80px;" }}
                    />
                    <h5 style={{ color: "Red" }}>{gset.Name}</h5>
                    <i className="far fa-edit mb-5"></i>
                  </div> */}
                  <div className="col-md-12">
                    <div className="card-body p-4">
                      <h2>{gset.Name}</h2>

                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Email:</h6>
                          <p className="text-muted">{gset.email}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>RegNo:</h6>
                          <p className="text-muted">{gset.regNo}</p>
                        </div>
                      </div>
                      {/* <h6>Projects</h6> */}
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>City:</h6>
                          <p className="text-muted">{gset.city}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Country:</h6>
                          <p className="text-muted">{gset.country}</p>
                        </div>
                        <hr className="mt-0 mb-4" />
                        <div className="col-6 mb-3">
                          <h6>Contact:</h6>
                          <p className="text-muted">{gset.contact}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Pincode:</h6>
                          <p className="text-muted">{gset.pincode}</p>
                        </div>
                        <hr className="mt-0 mb-4" />

                      </div>
                      
                      <Link to="/GuideProfEdit">
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
                          Logout
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

export default GuideViewProf;
