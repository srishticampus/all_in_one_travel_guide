import React, { useEffect, useState } from "react";
import axiosInstance from "./BaseUrl";
import AdminNav from "./AdminNav";
import { useParams } from "react-router-dom";

function ViewTouristPlace() {
  const { id } = useParams();
  const [place, setplace] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`/viewTouristPlaceById/${id}`)
      .then((res) => {
        console.log(res, "view toursit place ");
        if (res.data.data != undefined) {
          setplace(res.data.data);
        } else {
          setplace([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <AdminNav />

      <div style={{ marginTop: "20px" }}>
        <div className="container text-center">
          <div className="row">
            {place.length ? (
              place.map((a) => {
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
                        <h4 className="card-title" style={{ color: "Green" }}>
                          Room Number: {a.roomNo}
                        </h4>
                        <h3 className="card-text">Price: ₹{a.price}</h3>
                        <p className="card-text">Type: {a.type}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col">
                <div className="card" style={{ width: "18rem;" }}>
                  <div className="card-body">
                    <h5 className="card-title">No Details Available</h5>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewTouristPlace;
