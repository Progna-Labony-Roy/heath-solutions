import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import './Login.css'

const Login = () => {
  const [error, setError] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleSignup = (data) => console.log(data);

  return (
    <div className="inner-div">
      <div className="justify-center">
        <p className="text-xl font-semibold mb-5 text-blue-300">LOG IN</p>
        <form
          className="login-div rounded-md pt-5"
          onSubmit={handleSubmit(handleSignup)}
        >
          <div className="form-control w-full px-6 mt-4">
            <input
              {...register("email", { required: "Enter your email" })}
              type="text"
              placeholder="Email"
              className="user-input rounded-md w-full my-2"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
            <input
              {...register("password", { required: "Wrong password" })}
              type="password"
              placeholder="password"
              className="user-input rounded-md w-full mt-2"
            />
            {errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password.message}
              </span>
            )}
          </div>
          <input
            type="submit"
            value="LOG IN"
            className="all-btn rounded text-orange-500 text-xs font-semibold py-2.5 px-36 mt-5 mb-5  my-6"
          />
          <p className="text-danger">{error}</p>
        </form>
        <div className="create-account mt-6 flex">
          <p className="text-blue-300 text-xs font-semibold">
            Don't have an account yet?
          </p>
          <Link to="/signin" className=" all-btn rounded-full text-xs text-orange-500 font-semibold px-3 py-2 mt-2">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
