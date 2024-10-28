import React, { useEffect, useState } from "react";
import axiosInstance from "./BaseUrl";
import { Link, useNavigate } from "react-router-dom";
import gif2 from "../img/restaurant.gif";
import gif1 from "../img/custlog.jpeg";
import Navbar from "./LandingNavbar/LandingNavbar";
import Footer from "./Footer";

function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const changehandleSubmit = (a) => {
    setLogin({ ...login, [a.target.name]: a.target.value });
  };
  useEffect(() => {
    console.log(login);
  });
  const navigate = useNavigate();
  const submitt = (b) => {
    // alert('submitted')

    b.preventDefault();
    axiosInstance
      .post("/loginUser", login)
      .then((result) => {
        console.log("data entered", result);
        if (result.status == 200) {
          alert("login Successfully");
          navigate("/CustHome");
          localStorage.setItem("userlogid", result.data.user._id);
        } else {
          alert("Login Failed");
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert("Login Failed");
      });
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
            <img
              height={690}
              src={gif1}
              alt="Panda Logo"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="formWrapper col-6">
            <div className="form">
              <h2>LOGIN</h2>
              <form onSubmit={submitt}>
                <div className="inputWrapper">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={login.email}
                    onChange={changehandleSubmit}
                    required
                  />
                  {/* <label for="">Email</label> */}
                </div>

                <div className="inputWrapper">
                  <input
                    type="password"
                    name="password"
                    value={login.password}
                    placeholder="Password"
                    onChange={changehandleSubmit}
                    required
                  />
                  {/* <label for="password">Password</label> */}
                </div>

                <input
                  type="submit"
                  id="login"
                  style={{
                    height: "60px",
                    width: "213px",
                    marginLeft: "15px",
                    marginTop: ".5px",
                  }}
                />
              </form>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
