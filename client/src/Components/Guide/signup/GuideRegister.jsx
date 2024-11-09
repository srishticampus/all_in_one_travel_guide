import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../../LandingNavbar/LandingNavbar";
import gif3 from "../../../img/Agency.gif";
import axiosInstance from "../../../apis/axiosInstance";

function Register() {
  const [register, setRegister] = useState({
    Name: "",
    regNo: "",
    city: "",
    country: "",
    pincode: "",
    contact: "",
    email: "",
    password: "",
  });
  const changehandleSubmit = (a) => {
    setRegister({ ...register, [a.target.name]: a.target.value });
  };
  useEffect(() => {
    console.log(register);
  });
  const navigate = useNavigate();
  const submitt = (b) => {
    alert("submitted");
    b.preventDefault();
    console.log(register);
    axiosInstance
      .post("/registerAgency", register)
      .then((result) => {
        console.log("data entered", result);
        if (result.status == 200) {
          alert("Register Sucessfully");
          navigate("/GuideLogin");
        } else {
          alert("Register Failed");
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert("Register Failed");
      });
  };
  return (
    <div>
      <Navbar />

      <main className="container1">
        <div className="back"></div>
        <div className="brand">
          <h1>
            <span className="name">
              <span>Jobs fill your pockets, adventures </span>
              <span> </span>
            </span>
            fill your soul.
          </h1>
          <div className="">
            <img height={380} src={gif3} alt="Panda Logo" />
          </div>
        </div>

        <div className="formWrapper">
          <div className="form">
            <h2>New member card</h2>
            <form onSubmit={submitt}>
              <div className="inputWrapper">
                <input
                  type="text"
                  name="Name"
                  required
                  value={register.Name}
                  onChange={changehandleSubmit}
                  placeholder="Name"
                />
              </div>
              <div className="inputWrapper">
                <input
                  type="email"
                  name="email"
                  value={register.email}
                  onChange={changehandleSubmit}
                  placeholder="Email"
                  required
                />
              </div>

              <div className="inputWrapper">
                <input
                  type="number"
                  name="contact"
                  value={register.contact}
                  onChange={changehandleSubmit}
                  min="0000000000"
                  max="9999999999"
                  style={{ width: "210px" }}
                  placeholder="Phone Number"
                  required
                />
              </div>

              <div className="inputWrapper">
                <input
                  type="password"
                  name="password"
                  value={register.password}
                  onChange={changehandleSubmit}
                  placeholder="Password"
                  required
                />
              </div>
              <input
                type="submit"
                name="register"
                id="register"
                value="REGISTER"
                style={{ height: "60px", marginLeft: "15px" }}
              />
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Register;
