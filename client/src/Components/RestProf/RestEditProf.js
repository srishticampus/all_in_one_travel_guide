import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import pic5 from "../../img/user (1).png";

import axiosInstance from "../BaseUrl";
import CustNav from "../../CustProf/CustNav";
import RestNav from "./RestNav";

function RestEditProf({ baseurl }) {
  const [value, setValue] = useState({});
  const [img, setimg] = useState("");
  const navigate = useNavigate();

  const id = localStorage.getItem("restlogid");

  useEffect(() => {
    axiosInstance.post(`/viewRestaurantById/${id}`).then((res) => {
      console.log(res);
      setValue(res.data.data);
      setimg(res.data.data.image);
    });
  }, []);

  const updatefcn = (e) => {
    e.preventDefault();

    axiosInstance
      .post(`/editRestaurantById/${id}`, value, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response);
        if (response.data.status == 200) {
          alert("Profile Updated");
          navigate("/RestViewProf");
        } else {
          alert("Updation Failed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changefn = (e) => {
        if (e.target.name == "image") {
          setValue({ ...value, image: e.target.files[0] });
        } else {
          setValue({ ...value, [e.target.name]: e.target.value });
        }
  };

  useEffect(() => {
    console.log(value);
  });
  return (
    <div>
      <RestNav />
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            {/* <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="200px"
                height="200px"
                style={{ objectFit: "cover" }}
                src={`${baseurl}/${img.originalname}`}
              />
              <span className="font-weight-bold">{value.name}</span>
              <span className="text-black-50">{value.email}</span>
              <span> </span>
            </div> */}
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Restaurant Profile Edit</h4>
              </div>
              <form onSubmit={updatefcn}>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={value.name}
                      name="name"
                      onChange={changefn}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Contact</label>
                    <input
                      type="number"
                      name="contact"
                      className="form-control"
                      value={value.contact}
                      onChange={changefn}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">City</label>
                    <input
                      type="text"
                      name="city"
                      className="form-control"
                      value={value.city}
                      onChange={changefn}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Country</label>
                    <input
                      type="text"
                      name="country"
                      className="form-control"
                      value={value.country}
                      onChange={changefn}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12 mb-3">
                    <label className="labels">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={value.email}
                      name="email"
                      onChange={changefn}
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="file"
                      name="image"
                      onChange={changefn}
                      // required
                    />
                  </div>
                  <div className="col-md-12  mb-4">
                    <label className="labels">Type</label>
                    <select
                      id="dropdown"
                      className="col-sm-4 form-control"
                      name="type"
                      value={value.type}
                      onChange={changefn}
                      style={{ border: "1px solid #dee2e6" }}
                    >
                      <option>Select Type </option>
                      <option value="Veg"> Veg </option>
                      <option value="non-veg">Non-Veg</option>
                      <option value="Veg & Non-Veg">Veg & Non-Veg</option>
                    </select>
                    {/* <input
                    type="text"
                    className="form-control"
                   
                    value={value.gender}
                    onChange={changefn}
                    name="gender"
                  /> */}
                  </div>

                  <button type="submit" className="btn btn-primary h-23 w-100 py-2">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestEditProf;
