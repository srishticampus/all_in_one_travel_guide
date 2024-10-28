import React, { useEffect, useState } from "react";
import CustNav from "../CustProf/CustNav";
import axiosInstance from "./BaseUrl";
import { Link } from "react-router-dom";

function CustomerViewTaxi() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`/viewTaxis`)
      .then((res) => {
        console.log(res, "view hotel");
        if (res.data.data != undefined) {
          setData(res.data.data);
        } else {
          setData([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <CustNav />
      {/* <div style={{marginTop:"20px"}}>
          <div className="container text-center">
                      <div className="row">
                        {data.length ? (
                          data.map((a) => {
                            return (
                              <div className="col" style={{margin:"10px 0px"}}>
                                <div className="card" style={{ width: '18rem' ,backgroundColor:"white",boxShadow: '1px 2px 2px 2px grey' }}>
                                  <div className="card-body">
                                    <h4 className="card-title" style={{color:'Green'}}>{a.driverName}</h4>
                                    <p className="card-text">
                                   {a.email}
                                    </p>
                                    <p className="card-text">
                                    RegNo: {a.regNo}
                                    </p>
                                    <p className="card-text">
                                    Brand: {a.brand}<br/>Model: {a.model}({a.ac})<br/>Seat Capacity: {a.sc}
                                    </p>
                                    <p className="card-text">
                                    Contact: {a.contact}
                                    </p>
                                    <p className="card-text">
                                    City: {a.city}
                                    </p>
                                   <Link to={`/cust_book_taxi/${a._id}`} className="btn btn-danger">
                                    Book Now
                                   </Link>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <div className="col">
                            <div className="card" style={{ width: "18rem;" }}>
                              <div className="card-body">
                                <h5 className="card-title">No Taxi Services Available</h5>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
          </div> */}
      <div style={{ minHeight: "300px", margin: "15px 0px", padding: "50px" }}>
        <div className="container text-center">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Taxi
            </h6>
            <h1 className="mb-5">Taxi Services</h1>
          </div>
          <div className="row">
            {data.length ? (
              data.map((a) => {
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
                        style={{objectFit:'cover'}}
                      /> */}
                      <div className="card-body">
                        <h2>{a.driverName}</h2>
                        <h6 className="card-title">{a.contact}</h6>
                        {/* <p className="card-text text-success" style={{ color: "black" }}>
                        <b>₹ {a.cost}</b>
                        </p> */}
                        <p className="card-text" style={{ color: "black" }}>
                          Brand: {a.brand}
                          <br />
                          Model: {a.model}({a.ac})<br />
                          Seat Capacity: {a.sc}
                        </p>
                      </div>
                      <div>
                        {" "}
                        <Link
                          to={`/cust_book_taxi/${a._id}`}
                          className="btn btn-success mb-4"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>No Taxi Services Available</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerViewTaxi;
