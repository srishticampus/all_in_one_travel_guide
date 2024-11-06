import touristImg from "../../../Asset/images/tourist-login.png";
import Navbar from "../../LandingNavbar/LandingNavbar";
import Footer from "../../Footer";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import styles from "./login.module.css";
function Login() {
  const {
    register,
    formState: { errors },
    watch,
    handleSubit,
  } = useForm();

  const handleSubmit = (credentials) => {
    console.log("cred", credentials);
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
              <h2>Login</h2>
              <form
                className="px-5 d-flex flex-column justify-content-between"
                style={{
                  height: "200px",
                }}
                onSubmit={handleSubmit(handleSubmit)}
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
                    <ErrorMessage errors={errors} name="email" />
                  </p>
                </div>

                <input type="submit" className={`${styles.loginBtn} p-0`} />
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
