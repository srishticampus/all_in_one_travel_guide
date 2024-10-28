import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gif from "../../../img/custlog.jpeg";
import Navbar from "../../LandingNavbar/LandingNavbar";

export default function TouristSignup() {
  const [touristData, setTouristData] = useState({
    name: "",
    email: "",
    country: "",
    gender: "",
    password: "",
    confirmPassword: "",
    idType: "",
    idPhoto: {},
    touristPhoto: {},
  });
  const handleChanges = (e) => {
    setTouristData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  console.log(" => td ", touristData);
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
              <form onSubmit={handleSubmit}>
                <div className="inputWrapper">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    value={touristData.name}
                    onChange={handleChanges}
                  />
                  {/* <label>Name</label> */}
                </div>
                <div className="inputWrapper">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={touristData.email}
                    onChange={handleChanges}
                    required
                  />
                  {/* <label>Email</label> */}
                </div>
                <div className="inputWrapper">
                  <input
                    type="text"
                    name="country"
                    placeholder="Country of residence"
                    value={touristData.country}
                    onChange={handleChanges}
                    required
                    minLength="10"
                  />
                </div>
                <div className="inputWrapper">
                  <input
                    type="number"
                    name="contact"
                    placeholder="Contact"
                    value={touristData.contact}
                    onChange={handleChanges}
                    min="0000000000"
                    max="9999999999"
                    style={{ width: "210px" }}
                    required
                  />
                </div>
                <div className="inputWrapper">
                  <input
                    type="text"
                    name="idType"
                    placeholder="ID Type"
                    value={touristData.idType}
                    onChange={handleChanges}
                    required
                  />
                </div>
                <div className="inputWrapper">
                  <select
                    id="dropdown"
                    className="col-sm-4"
                    name="gender"
                    value={touristData.gender}
                    onChange={handleChanges}
                    style={{ border: "1px solid grey" }}
                  >
                    <option>Select Gender</option>
                    <option value="Male"> Male </option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="inputWrapper">
                  <input
                    type="text"
                    name="idnumb"
                    placeholder="ID Number"
                    value={touristData.idnumb}
                    onChange={handleChanges}
                    required
                  />
                </div>

                <div className="inputWrapper">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={touristData.password}
                    onChange={handleChanges}
                    required
                  />
                  {/* <label for="password">Password</label> */}
                </div>
                {/* <div className="inputWrapper">
            <input type="password" name="c_password"  value={touristData.cpassword}
                  onChange={handleChanges} required />
            <label for="c_password">Confirm Password</label>
          </div> */}
                <input
                  type="submit"
                  name="touristData"
                  id="touristData"
                  value="REGISTER"
                  className="btn btn-dark"
                  style={{ height: "60px" }}
                />
              </form>

              {/* <span id="login1" style={{ color: "black" }}>
                Already a member?{" "}
                <Link
                  to="/Login"
                  title="Login"
                  style={{ color: "darkblue", fontSize: "2rem" }}
                >
                  Log in!
                </Link>
              </span> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
