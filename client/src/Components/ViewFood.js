import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import RestNav from "./RestProf/RestNav";
import axiosInstance from "./BaseUrl";

function ViewFood({ baseurl }) {
  const [food, setfood] = useState([]);
  const id = localStorage.getItem("restlogid");
  useEffect(() => {
    axiosInstance
      .post(`/viewFoodByRest/${id}`)
      .then((res) => {
        console.log(res);
        setfood(res.data.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);
  const handleDelete = (id) => {
    console.log(id);
    axiosInstance
      .post(`/deleteFoodById/${id}`)
      .then((res) => {
        console.log(res, "food delete");
        if (res.data.status == 200) {
          alert("Deleted Food Sucessfully");
          window.location.reload();
        } else {
          alert("Failed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (localStorage.getItem("restlogid") != null)
    return (
      <>
        <RestNav />
        <div style={{ minHeight: "300px", margin: "15px 0px" }}>
          <div className="container text-center">
            <div className="row">
              {food.length ? (
                food.map((a) => {
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
                          style={{ objectFit: "cover" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">Food Name:{a.foodname}</h5>
                          <h6 className="card-title">{a.type}</h6>

                          <p className="card-text" style={{ color: "black" }}>
                            {a.description}
                          </p>
                          <p className="card-text" style={{ color: "black" }}>
                            Veg/Not : {a.vegornon}
                          </p>
                          <p className="card-text" style={{ color: "black" }}>
                            Price:{a.price}{" "}
                          </p>
                        </div>
                        <div>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleDelete(a._id)}
                            style={{ width: "50%" }}
                          >
                            Delete food
                          </button>
                          <Link
                            to={`/EditFood/${a._id}`}
                            className="btn btn-success"
                            style={{ margin: "10px 10px" }}
                          >
                            Edit food
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h1>No Food Added</h1>
              )}
            </div>
          </div>
        </div>
      </>
    );
}

export default ViewFood;
