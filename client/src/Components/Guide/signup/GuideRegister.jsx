import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../../LandingNavbar/LandingNavbar";
import gif3 from "../../../img/Agency.gif";
import axiosInstance from "../../../apis/axiosInstance";
import { ErrorMessage } from "@hookform/error-message";
import Footer from "../../Footer";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
function Register() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { name, email, password, phoneNumber, address } = data;

    if (!name || !email || !password || !phoneNumber || !address) {
      console.log("missing", data);
      return;
    }
  };

  const togglePassword = () => setPasswordShown(!passwordShown);

  const toggleConfirmPassword = () =>
    setConfirmPasswordShown(!confirmPasswordShown);

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="inputWrapper">
                <input
                  type="text"
                  name="agencyName"
                  {...register("agencyName", {
                    required: "Agency name is required.",
                    minLength: {
                      value: 2,
                      message: "Min. 2 characters required.",
                    },
                    pattern: {
                      value: /^[a-zA-Z\s]*$/,
                      message: "Only letters are allowed",
                    },
                    maxLength: {
                      value: 30,
                      message: "Max. 30 characters allowed.",
                    },
                  })}
                  placeholder="Agency Name"
                />
                <p className="text-danger">
                  <ErrorMessage errors={errors} name="agencyName" />
                </p>
              </div>
              <div className="inputWrapper">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  {...register("email", {
                    required: "Email is required.",

                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Email format is incorrect.",
                    },
                  })}
                />

                <p className="text-danger">
                  <ErrorMessage errors={errors} name="email" />
                </p>
              </div>

              <div className="inputWrapper password-box">
                <div className="password-box">
                  <input
                    type={`${passwordShown ? "text" : "password"}`}
                    placeholder="Password"
                    name="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Min. 8 characters required.",
                      },
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

              <div className="inputWrapper">
                <div className="password-box">
                  <input
                    type={`${confirmPasswordShown ? "text" : "password"}`}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    {...register("confirmPassword", {
                      required: "Confirm password is required.",
                      validate: (value) => {
                        if (watch("password") !== value) {
                          return "Your passwords do not match.";
                        }
                      },
                    })}
                  />
                  <i onClick={toggleConfirmPassword}>
                    {confirmPasswordShown ? <FaEyeSlash /> : <FaEye />}
                  </i>
                </div>

                <p className="text-danger">
                  <ErrorMessage errors={errors} name="confirmPassword" />
                </p>
              </div>
              
              <div className="inputWrapper">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      name="phoneNumber"
                      {...register("phoneNumber", {
                        required: "Phone Number is required.",
                        pattern: {
                          value: /^\d{10}$/,
                          message: "Invalid phone number",
                        },
                      })}
                    />

                    <p className="text-danger">
                      <ErrorMessage errors={errors} name="phoneNumber" />
                    </p>
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
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
}

export default Register;
