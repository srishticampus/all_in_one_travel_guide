import React, { useEffect, useState } from "react";
import TaxiNav from "./TaxiNav";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./BaseUrl";
import pic1 from "../img/user (1).png";

function TaxiEditProf() {
  const [value, setValue] = useState({});
  const navigate = useNavigate();

  const id = localStorage.getItem("taxiid");

  useEffect(() => {
    axiosInstance.post(`/viewTaxiById/${id}`).then((res) => {
      console.log(res);
      setValue(res.data.data);
    });
  }, []);

  const updatefcn = (e) => {
    e.preventDefault();

    axiosInstance
      .post(`/editTaxiById/${id}`, value)
      .then((response) => {
        console.log(response);
        if (response.data.status == 200) {
          alert("Profile Updated");
          navigate("/taxi_view_profile");
        } else {
          alert("Updation Failed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changefn = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <TaxiNav />
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img className="rounded-circle mt-5" width="150px" src={pic1} />
              <span className="font-weight-bold">{value.Name}</span>
              <span className="text-black-50">{value.email}</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Taxi Profile Edit</h4>
              </div>
              <form onSubmit={updatefcn}>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={value.driverName}
                      name="driverName"
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
                    <label className="labels">Brand</label>
                    <input
                      type="text"
                      name="brand"
                      className="form-control"
                      value={value.brand}
                      onChange={changefn}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Model</label>
                    <input
                      type="text"
                      name="model"
                      className="form-control"
                      value={value.model}
                      onChange={changefn}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Seat Capacity</label>
                    <input
                      type="number"
                      name="sc"
                      className="form-control"
                      value={value.sc}
                      onChange={changefn}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Ac / Non-Ac</label>
                    <select
                      id="dropdown"
                      className="col-sm-4 form-control"
                      name="ac"
                      value={value.ac}
                      onChange={changefn}
                      style={{ border: "1px solid #dee2e6" }}
                    >
                      <option>Select</option>
                      <option value="Ac"> Ac </option>
                      <option value="Non-Ac">Non-Ac</option>
                    </select>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
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
                    <label className="labels">Register No</label>
                    <input
                      type="text"
                      className="form-control"
                      value={value.regNo}
                      name="regNo"
                      onChange={changefn}
                    />
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

export default TaxiEditProf;
