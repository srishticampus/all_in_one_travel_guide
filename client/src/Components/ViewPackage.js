import React, { useEffect, useState } from "react";
import axiosInstance from "./BaseUrl";
import CustNav from "../CustProf/CustNav";
import { Link } from "react-router-dom";

function ViewPackage({ baseurl }) {
  const [pack, setpackage] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`/viewApprovedAgencies`)
      .then((res) => {
        console.log(res, "view Package");
        if (res.data.data != undefined) {
          setpackage(res.data.data);
        } else {
          setpackage([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <CustNav />

      {/* <div className="container text-center">
        <div className="row">
          {pack.length ? (
            pack.map((a) => {
              return (
                <div className="col" style={{ margin: "10px 0px" }}>
                  <div
                    className="card"
                    style={{
                      width: "18rem",
                      backgroundColor: "white",
                      boxShadow: "1px 2px 2px 2px grey",
                    }}
                  >
                   
                    <div className="card-body">
                      <h2 className="card-title" style={{ color: "Green" }}>
                        {a.Name}
                      </h2>

                      <h6 className="card-text">Reg No: {a.regNo}</h6>
                      <h6 className="card-text">Contact {a.contact}</h6>

                      <p className="card-text">
                        {a.city}, {a.country}
                      </p>
                      
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col">
              <div className="card" style={{ width: "18rem;" }}>
                <div className="card-body">
                  <h5 className="card-title">No Packages Available</h5>
                </div>
              </div>
            </div>
          )}
        </div>
      </div> */}
      <div style={{ minHeight: "300px", margin: "15px 0px", padding: "50px" }}>
        <div className="container text-center">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Packages
            </h6>
            <h1 className="mb-5">Our Packages</h1>
          </div>
          <div className="row">
            {pack.length ? (
              pack.map((a) => {
                return (
                  <div className="col-3 mb-5">
                    <div
                      className="card"
                      style={{ width: "300px", margin: "auto" }}
                    >
                      {/* <img
                        src={`${baseurl}/${a.image.originalname}`}
                        className="card-img-top"
                        alt={a.image.filename}
                        height="240px"
                      /> */}
                      <div className="card-body">
                        <h2>{a.Name}</h2>
                        <h6 className="card-title">Reg No {a.regNo}</h6>
                        <p className="card-text" style={{ color: "black" }}>
                          {a.contact}
                        </p>
                        <p className="card-text" style={{ color: "black" }}>
                          {a.city}, {a.country}
                        </p>
                      </div>
                      <div>
                        <Link
                          to={`/ViewSinglePack/${a._id}`}
                          className="btn btn-success mb-4"
                        >
                          choose
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>No Packages Available</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPackage;
