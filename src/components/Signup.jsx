import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Logo, Loader } from "./index";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import validator from "validator";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [messageDisplay, setMessageDisplay] = useState(false);
  const dispatch = useDispatch();

  const matchPattern = (value) => {
    const regexPattern =
      /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:\\[\x20-\x7f]|\\x[\x20-\x7f])+")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,63}|\[(?:(?:[01]?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\.){3}(?:[01]?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\])$/;
    return regexPattern.test(value) || "Email address must be a valid address";
  };

  const SignUpUser = async (data) => {
    setError("");
    setLoading(true);
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        // await authService.sendVerificationEmail();
        // setMessageDisplay(true);
        const userDate = await authService.getCurrentUser();
        setLoading(false);
        // setTimeout(() => {
        //   navigate("/login");
        // }, 2000);
        if (userDate) {
          // console.log("userDate :: ", userDate);
          dispatch(login({ userData: userDate }));
        }
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-full max-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-lg p-8 mx-auto bg-white border border-gray-200 rounded-xl dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-center mb-2">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-2xl font-bold leading-tight text-center text-gray-900 dark:text-white">
          Sign up to create account
        </h2>
        <p className="mt-2 text-base text-center text-gray-600 dark:text-gray-400">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary hover:underline dark:text-primary-light"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="mt-8 text-center text-red-600 dark:text-red-400">{error}</p>}

        <form onSubmit={handleSubmit(SignUpUser)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Full Name:"
              placeholder="Enter your full name"
              {...register("name", { required: "Full name is required" })}
              error={errors.name?.message}
            />
            <Input
              label="Email:"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: "Email is required",
                validate: {
                  matchPattern: matchPattern,
                },
              })}
              error={errors.email?.message}
            />
            <Input
              label="Password:"
              placeholder="Enter your password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              error={errors.password?.message}
            />
            <Button
              type="submit"
              className="w-full text-white bg-blue-500 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-900"
              disabled={loading}
            >
              {loading ? <Loader /> : "Create Account"}
            </Button>
          </div>
        </form>
        <div>
          {messageDisplay && (
            <p className="mt-8 text-center text-gray-600 dark:text-gray-400">
              Please verify your email address to continue
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signup;
