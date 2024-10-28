import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../BaseUrl";
import GuideNav from "./GuideNav";
import Navbar from "../LandingNavbar/LandingNavbar";
import gif3 from "../../img/Agency.gif";

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
      <body id="signup">
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
            {/* <span className="copyright">Photo by
    <a href="https://unsplash.com/@filipz" target="_blank" title="Photographer">Filip Zrnzević</a>
    on
    <a href="https://unsplash.com/photos/QsWG0kjPQRY" target="_blank" title="Background Photo">Unsplash</a></span> */}
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
                    type="text"
                    name="city"
                    value={register.city}
                    onChange={changehandleSubmit}
                    placeholder="City"
                    required
                  />
                </div>
                <div className="inputWrapper">
                  <input
                    type="text"
                    name="country"
                    value={register.country}
                    onChange={changehandleSubmit}
                    placeholder="Country"
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
                    type="number"
                    name="pincode"
                    value={register.pincode}
                    onChange={changehandleSubmit}
                    min="000000"
                    max="999999"
                    style={{ width: "210px" }}
                    placeholder="Pincode"
                    required
                  />
                </div>

                <div className="inputWrapper">
                  <input
                    type="num"
                    name="regNo"
                    value={register.regNo}
                    onChange={changehandleSubmit}
                    placeholder="Reg Number"
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
                {/* <div className="inputWrapper">
            <input type="password" name="c_password"  value={register.cpassword}
                  onChange={changehandleSubmit} required />
            <label for="c_password">Confirm Password</label>
          </div> */}
                <input
                  type="submit"
                  name="register"
                  id="register"
                  value="REGISTER"
                  style={{ height: "60px", marginLeft: "15px" }}
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
      </body>
    </div>
  );
}

export default Register;
