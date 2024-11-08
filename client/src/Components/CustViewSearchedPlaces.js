import React, { useEffect, useState } from "react";
import CustNav from "../CustProf/CustNav";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../apis/axiosInstance";

function CustViewSearchedPlaces({ baseurl }) {
  const { details } = useParams();
  const [place, setplace] = useState([]);

  const fulldetails = JSON.parse(details);
  const navigate = useNavigate();
  console.log(fulldetails);

  useEffect(() => {
    console.log(fulldetails.details.loc);

    if (fulldetails.details.loc) {
      axiosInstance
        .post(`/searchTouristPlaceByLoc`, { loc: fulldetails.details.loc })
        .then((res) => {
          console.log(res);
          setplace(res.data.data);
        })
        .catch((res) => {
          console.log(res);
        });
    }
    if (fulldetails.details.city && fulldetails.details.district) {
      axiosInstance
        .post(`/searchTouristPlaceByDistrictAndCity`, {
          city: fulldetails.details.city,
          district: fulldetails.details.district,
        })
        .then((res) => {
          console.log(res);
          setplace(res.data.data);
        })
        .catch((res) => {
          console.log(res);
        });
    }
    if (fulldetails.details.district) {
      axiosInstance
        .post(`/searchTouristPlaceByDistrict`, {
          district: fulldetails.details.district,
        })
        .then((res) => {
          console.log(res);
          setplace(res.data.data);
        })
        .catch((res) => {
          console.log(res);
        });
    }
  }, []);

  return (
    <div>
      <CustNav />
      <div style={{ minHeight: "300px", margin: "15px 0px" }}>
        <div className="container text-center">
          <div className="row">
            {place.length ? (
              place.map((a) => {
                return (
                  <div className="col-3" style={{ margin: "10px 30px" }}>
                    <div
                      className="card"
                      style={{ width: "300px", margin: "auto" }}
                    >
                      <img
                        src={`${baseurl}/${a.image.originalname}`}
                        className="card-img-top"
                        alt={a.image.filename}
                        height="240px"
                      />
                      <div className="card-body">
                        <h3 className="card-title">{a.loc}</h3>
                        <h6 className="card-title">{a.district}</h6>
                        <h6 className="card-title">{a.city}</h6>
                        <p className="card-text" style={{ color: "black" }}>
                          Distance : {a.distance}km
                        </p>
                        <p className="card-text" style={{ color: "black" }}>
                          TravelMode : {a.travelmode}
                        </p>
                        <p className="card-text" style={{ color: "black" }}>
                          Location Type:{a.locType}{" "}
                        </p>
                      </div>
                      <div>
                        <Link
                          to={`/customer_view_place_location/${a.lat}/${a.lon}`}
                        >
                          <button className="btn btn-success mb-3">
                            View Location
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>No Place Added</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustViewSearchedPlaces;
