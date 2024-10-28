import React, { useEffect, useState } from "react";
import axiosInstance from "./BaseUrl";
import CustNav from "../CustProf/CustNav";
import { Link } from "react-router-dom";

function ViewFoodCust({ baseurl }) {
  const [custrest, setcustrest] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`/viewRestaurants`)
      .then((res) => {
        console.log(res, "view Rest");
        if (res.data.data != undefined) {
          setcustrest(res.data.data);
        } else {
          setcustrest([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <CustNav />

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Restaurants
            </h6>
            <h1 className="">Awesome Restaurants</h1>
          </div>
          {/* <div className="row g-4 justify-content-center">
            {custrest.length ? (
              custrest.map((a) => {
                return (
                  <div className="col-4  wow fadeInUp" data-wow-delay="0.1s" style={{width:'350px'}}>
                    <div className="">
                      <div className="overflow-hidden">
                        <img
                          className="img-fluid"
                          src={`${baseurl}/${a.image.filename}`}
                          alt=""
                        />
                      </div>
                      <div className="d-flex border-bottom">
                        <small className="flex-fill text-center border-end py-2">
                          <i className="fa fa-map-marker-alt text-primary me-2"></i>
                          {a.email}
                        </small>
                        <small className="flex-fill text-center border-end py-2">
                          <i className="fa fa-calendar-alt text-primary me-2"></i>
                          {a.contact}
                        </small>
                      </div>
                      <div className="text-center p-4">
                        <h3 className="mb-3">{a.name}</h3>

                        <p>{a.type}</p>
                        <p>
                          {a.city},{a.country}
                        </p>
                        <div className="d-flex justify-content-center mb-2">
                          <Link
                            to={`/ViewSingleres/${a._id}`}
                            href="#"
                            className="btn btn-sm btn-primary px-3 border-end"
                            style={{ borderRadius: "30px" }}
                          >
                            View Dishes
                          </Link>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>No Restaurants Found</h1>
            )}
          </div> */}
        </div>
      </div>
      <div
        style={{ minHeight: "300px", margin: "15px 0px", padding: "0 50px" }}
      >
        <div className="container text-center">
          <div className="row">
            {custrest.length ? (
              custrest.map((a) => {
                return (
                  <div className="col-3 mb-5">
                    <div
                      className="card"
                      style={{ width: "300px", margin: "auto" }}
                    >
                      <img
                        src={`${baseurl}/${a.image.originalname}`}
                        className="card-img-top"
                        alt={a.image.filename}
                        height="240px"
                        style={{ objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <h2>{a.name}</h2>
                        <h6 className="card-title">{a.contact}</h6>
                        <p className="card-text" style={{ color: "black" }}>
                          {a.type}
                        </p>
                        <p className="card-text" style={{ color: "black" }}>
                          {a.city}, {a.country}
                        </p>
                      </div>
                      <div>
                        <Link
                          to={`/ViewSingleres/${a._id}`}
                          href="#"
                          className="btn btn-sm btn-success px-3 border-end mb-4"
                          style={{ borderRadius: "30px" }}
                        >
                          View Dishes
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>No Restaurants Available</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewFoodCust;
