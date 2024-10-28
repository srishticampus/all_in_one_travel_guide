import React, { useEffect, useState } from "react";
import axiosInstance from "./BaseUrl";
import CustNav from "../CustProf/CustNav";
import { Link } from "react-router-dom";

function ViewFoodCust({ baseurl }) {
  const [custhotel, setcusthotel] = useState([{ image: {} }]);
  useEffect(() => {
    console.log("base", baseurl);
    axiosInstance
      .post(`/viewAprvdHotels`)
      .then((res) => {
        console.log(res, "view hotel");
        if (res.data.data != undefined) {
          setcusthotel(res.data.data);
        } else {
          setcusthotel([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <CustNav />

      {/* <div style={{ marginTop: "20px" }}>
        <div className="container text-center">
          <div className="row">
            {custhotel.length ? (
              custhotel.map((a) => {
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
                      {a.image ? (
                        <img
                          src={`${baseurl}/${a.image.filename}`}
                          className="card-img-top"
                          alt={a.image.filename}
                          height="240px"
                        />
                      ) : (
                        ""
                      )}
                      
                      <div className="card-body">
                        <h4 className="card-title" style={{ color: "Green" }}>
                          Hotel Name: {a.hotelName}
                        </h4>
                        <p className="card-text">Contact: {a.contact}</p>
                        <p className="card-text">City: {a.city}</p>
                        <Link
                          to={`/ViewSingleHot/${a._id}`}
                          className="btn btn-danger"
                        >
                          choose
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
                    <h5 className="card-title">No Restaurant Available</h5>
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
              Hotels
            </h6>
            <h1 className="mb-5">Awesome Hotels</h1>
          </div>
          <div className="row">
            {custhotel.length ? (
              custhotel.map((a) => {
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
                        <h2>{a.hotelName}</h2>
                        <h6 className="card-title">{a.contact}</h6>
                        {/* <p className="card-text text-success" style={{ color: "black" }}>
                        <b>₹ {a.cost}</b>
                        </p> */}
                        <p className="card-text" style={{ color: "black" }}>
                          {a.city}, {a.country}
                        </p>
                      </div>
                      <div>
                        {" "}
                        <Link
                          to={`/ViewSingleHot/${a._id}`}
                          className="btn btn-success mb-4"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>No Hotels Available</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewFoodCust;
