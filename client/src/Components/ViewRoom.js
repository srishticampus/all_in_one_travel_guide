import React, { useEffect, useState } from "react";
import axiosInstance from "./BaseUrl";
import HotelNav from "./HotelProf/HotelNav";
import { Link } from "react-router-dom";

function ViewRoom() {
  const [room, setroom] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`/viewRoomsByHotelId/${localStorage.getItem("hotellogid")}`)
      .then((res) => {
        console.log(res, "viewroom");
        if (res.data.data) {
          setroom(res.data.data);
        } else {
          setroom([]);
        }
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);
  const handleDelete = (id) => {
    axiosInstance
      .post(`/deleteRoomById/${id}`)
      .then((res) => {
        if (res.data.status == 200) {
          window.location.reload(false);
          console.log(res, "dltroom");
          alert("Removed");
        }
        if (res.data.status == 400) {
          alert(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (localStorage.getItem("hotellogid") != null)
    return (
      <div>
        <>
          <HotelNav />
          {/* <div style={{ minHeight: "300px" }}>
            <div className="container text-center">
              <div className="row">
                {room.length ? (
                  room.map((a) => {
                    return (
                      <div className="col-4">
                        <div
                          className="card"
                          style={{
                            width: "300px",
                            margin: "auto",
                            marginTop: "2rem",
                          }}
                        >
                          <div
                            className="card-body"
                            style={{ boxShadow: "1px 1px 2px 2px black" }}
                          >
                            <h5 className="card-title" style={{ color: "blue" }}>
                              Hotel No: {a.roomNo}
                            </h5>
                            <p className="card-text" style={{ color: "black" }}>
                              Ac /Non-Ac: {a.ac}
                            </p>
                            <p className="card-text" style={{ color: "black" }}>
                              Hotel Type: {a.type}
                            </p>
                            <p className="card-text" style={{ color: "black" }}>
                              Price: {a.price}
                            </p>

                            <div>
                              <div>
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  onClick={() => handleDelete(a._id)}
                                  style={{ width: "50%" }}
                                  href=""
                                >
                                  Delete Room
                                </button>
                                <Link
                                  to={`/EditRoom/${a._id}`}
                                  className="btn btn-success"
                                  style={{ margin: "10px 10px" }}
                                >
                                  Edit Room
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <h1 style={{ padding: "40px" }}>No rooms Available</h1>
                )}
              </div>
            </div>
          </div> */}
          <div
            style={{ minHeight: "300px", margin: "15px 0px", padding: "100px" }}
          >
            <div className="container text-center">
              <div className="row">
                {room.length ? (
                  room.map((a) => {
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
                            <h2>Room No {a.roomNo}</h2>
                            <h6 className="card-title">{a.ac}</h6>
                            <p className="card-text" style={{ color: "black" }}>
                              {a.type}
                            </p>
                            <p
                              className="card-text text-success"
                              style={{ color: "black" }}
                            >
                              <b>₹ {a.price}</b>
                            </p>
                          </div>
                          <div>
                            <div>
                              <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => handleDelete(a._id)}
                                style={{ width: "50%", borderRadius: "30px" }}
                                href=""
                              >
                                Delete Room
                              </button>
                              <Link
                                to={`/EditRoom/${a._id}`}
                                className="btn btn-success"
                                style={{
                                  margin: "10px 10px",
                                  borderRadius: "30px",
                                }}
                              >
                                Edit Room
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <h1>No Rooms Available</h1>
                )}
              </div>
            </div>
          </div>
        </>
      </div>
    );
}

export default ViewRoom;
