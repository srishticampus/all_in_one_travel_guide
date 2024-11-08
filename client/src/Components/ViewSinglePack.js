import React, { useEffect, useState } from "react";
import axiosInstance from "./BaseUrl";
import CustNav from "../CustProf/CustNav";
import { Link, useParams } from "react-router-dom";

function ViewSinglePack({ baseurl }) {
  const { id } = useParams();

  const [pack, setpackage] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`/viewAllApprovedPackagesByAgencyId/${id}`)
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
                        {a.title}
                      </h4>

                      <h6 className="card-text">{a.destination}</h6>
                      <h3 className="card-text">Price:₹ {a.cost}</h3>

                      <p className="card-text">
                        {a.days}days and {a.nights}nights Tour
                      </p>
                      <Link
                    to={`/AddBooking/${a.aid}/${a._id}`}
                    className="btn btn-danger"
                  >
                    Book
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
                  <h5 className="card-title">No Packages Available</h5>
                </div>
              </div>
            </div>
          )}
        </div>
      </div> */}

      <div style={{ minHeight: "300px", margin: "15px 0px", padding: "50px" }}>
        <div className="container text-center">
          <div className="row">
            {pack.length ? (
              pack.map((a) => {
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
                        <h2>{a.title}</h2>
                        <h6 className="card-title">{a.destination}</h6>
                        <p
                          className="card-text text-success"
                          style={{ color: "black" }}
                        >
                          <b>₹ {a.cost}</b>
                        </p>
                        <p className="card-text" style={{ color: "black" }}>
                          {a.days}days and {a.nights}nights
                        </p>
                        <p className="card-text" style={{ color: "black" }}>
                          Accomodation : {a.accomodation}
                          <br />
                          Food : {a.food} <br />
                          Travel Mode : {a.travelmode}
                        </p>
                      </div>
                      <div>
                        {" "}
                        <Link
                          to={`/AddBooking/${a.aid}/${a._id}`}
                          className="btn btn-danger mb-4"
                        >
                          Book
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

export default ViewSinglePack;
