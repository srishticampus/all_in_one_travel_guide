import React, { useEffect, useState } from "react";
import Navbar from "./LandingNavbar/LandingNavbar";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./BaseUrl";

function TaxiLogin() {
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
      .post("/loginTaxi", login)
      .then((result) => {
        console.log("data entered", result);
        if (result.status == 200) {
          alert("login Successfully");
          navigate("/taxi_home");
          localStorage.setItem("taxiid", result.data.user._id);
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
      <body id="signup">
        <main className="container1">
          <div className="back"></div>
          <div className="brand" style={{ backgroundColor: "grey" }}>
            <div className="logo">
              <img
                height="64"
                src="https://i.imgur.com/E3uTxXY.png"
                alt="Panda Logo"
              />
              <h1>
                <span className="name">
                  <span>ADVENTURE</span>
                  <span> </span>
                </span>
                IS OUT THERE
              </h1>
            </div>
            {/* <span className="copyright">Photo by
        <a href="https://unsplash.com/@filipz" target="_blank" title="Photographer">Filip Zrnzević</a>
        on
        <a href="https://unsplash.com/photos/QsWG0kjPQRY" target="_blank" title="Background Photo">Unsplash</a></span> */}
          </div>
          <div className="formWrapper">
            <div className="form">
              <h2>Taxi LOGIN</h2>
              <form onSubmit={submitt}>
                <div className="inputWrapper">
                  <input
                    type="email"
                    name="email"
                    value={login.email}
                    onChange={changehandleSubmit}
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="inputWrapper">
                  <input
                    type="password"
                    name="password"
                    value={login.password}
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
                  id="login"
                  style={{
                    height: "60px",
                    width: "213px",
                    marginLeft: "15px",
                    marginTop: ".5px",
                  }}
                />
              </form>

              {/* <span style={{ color: "black" }}>
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

export default TaxiLogin;
