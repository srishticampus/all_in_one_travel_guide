import touristImg from "../../../Asset/images/tourist-login.png";
import Navbar from "../../authNavbar/authNavbar";
import Footer from "../../Footer/Footer";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import styles from "./login.module.css";
import axiosInstance from "../../../apis/axiosInstance";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
function Login() {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (credentials) => {
    const { email, password } = credentials;
    if (!email || !password) {
      return;
    }
    sendDataToServer(credentials);
  };

  const sendDataToServer = async (data) => {
    try {
      const res = await axiosInstance.post("/auth/login", data);
      if (res.status === 200) {
        console.log("rss", res);
        const userType = res.data?.role || "TOURIST";
        if (userType === "TOURIST") {
          navigate("/tourist/home");
        } else if (userType === "AGENCY") {
          navigate("/agency/home");
        }else if (userType === "HOTEL") {
          navigate('/hotel/dashboard')
        }
      }
    } catch (error) {
      const status = error?.response?.status;
      const msg = error?.response?.data?.message || "Something went wrong.";
      toast.error(msg);
      console.log("error on login", error);
    }
  };
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => setPasswordShown(!passwordShown);

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
              src={touristImg}
              alt="Tourist Login"
              //   style={{ objectFit: "cover" }}
            />
          </div>

          <div className="formWrapper col-6">
            <div className="form">
              {/* <h3 className="text-center">Log In</h3> */}
              <h2>Log in to Travel Guide</h2>
              <form
                className="px-5 d-flex flex-column justify-content-between"
                style={{
                  height: "250px",
                }}
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="inputWrapper">
                  <input
                    type="email"
                    name="email"
                    placeholder="E mail"
                    {...register("email", {
                      required: "Email is required.",
                      pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "Email format is incorrect",
                      },
                    })}
                  />
                  <p className="text-danger">
                    <ErrorMessage errors={errors} name="email" />
                  </p>
                </div>

                <div className="inputWrapper">
                  <div className="password-box">
                    <input
                      type={`${passwordShown ? "text" : "password"}`}
                      name="password"
                      placeholder="Password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    <i onClick={togglePassword}>
                      {passwordShown ? <FaEyeSlash /> : <FaEye />}
                    </i>
                  </div>
                  <p className="text-danger">
                    <ErrorMessage errors={errors} name="password" />
                  </p>
                </div>

                <div className="d-flex justify-content-end w-100">
                  <Link to="/forgot-password" className="m-0">
                    Forgot Password?
                  </Link>
                </div>

                <input
                  type="submit"
                  value="Log In"
                  className={`${styles.loginBtn} p-0`}
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
