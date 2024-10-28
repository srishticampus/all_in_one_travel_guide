import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import gif from "../../../img/custlog.jpeg";
import Navbar from "../../LandingNavbar/LandingNavbar";
import Footer from "../../Footer";
import { useForm } from "react-hook-form";
export default function TouristSignup() {
  const {
    register,
    handleSubmit,
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log("data => .", data);
  };
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <main
          className="container row"
          style={{ boxShadow: " 0 10px 1rem #0004" }}
        >
          {/* <div className="back"></div> */}
          <div className="brand col-6">
            <h1>
              <span className="name">
                <span>ADVENTURE</span>
                <span> </span>
              </span>
              IS OUT THERE
            </h1>

            <img
              src={gif}
              height={690}
              style={{ objectFit: "cover" }}
              alt="Panda Logo"
            />
          </div>
          <div
            className="formWrapper col-6"
            style={{ backgroundColor: "white" }}
          >
            <div className="form">
              <h2>New member card</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="inputWrapper">
                  <input
                    type="text"
                    name="name"
                    {...register("name", { required: true })}
                    placeholder="Full Name"
                  />
                  {/* <label>Name</label> */}
                </div>
                <div className="inputWrapper">
                  <input type="email" name="email" placeholder="E-mail" />
                  {/* <label>Email</label> */}
                </div>
                <div className="inputWrapper">
                  <input
                    type="text"
                    name="country"
                    placeholder="Country of residence"
                    minLength="10"
                  />
                </div>
                <div className="inputWrapper">
                  <input
                    type="number"
                    name="contact"
                    placeholder="Contact"
                    style={{ width: "210px" }}
                  />
                </div>
                <div className="inputWrapper">
                  <input type="text" name="idType" placeholder="ID Type" />
                </div>
                <div className="inputWrapper">
                  <select
                    id="dropdown"
                    className="col-sm-4"
                    name="gender"
                    style={{ border: "1px solid grey" }}
                  >
                    <option>Select Gender</option>
                    <option value="Male"> Male </option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="inputWrapper">
                  <input type="text" name="idnumb" placeholder="ID Number" />
                </div>

                <div className="inputWrapper">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                  {/* <label for="password">Password</label> */}
                </div>

                <input
                  type="submit"
                  name="touristData"
                  id="touristData"
                  value="REGISTER"
                  className="btn btn-dark"
                  style={{ height: "60px", width: "13rem" }}
                />
              </form>

              <span id="login1" style={{ color: "black" }}>
                Already have an account?{" "}
                <Link to="/Login" title="Login" style={{ color: "darkblue" }}>
                  Log in!
                </Link>
              </span>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
