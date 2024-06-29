import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Loader, Logo } from "./index";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async (data) => {
    setError("");
    setLoading(true);
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message || "An error occurred during login.");
    } finally {
      setLoading(false);
    }
  };

  const handleOAuthLogin = async (provider) => {
    setError("");
    setLoading(true);
    try {
      await authService.login({ provider });
    } catch (error) {
      setError(error.message || "An error occurred during OAuth login.");
    } finally {
      setLoading(false);
    }
  };

  const matchPattern = (value) => {
    const regexPattern =
      /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:\\[\x20-\x7f]|\\x[\x20-\x7f])+")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,63}|\[(?:(?:[01]?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\.){3}(?:[01]?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\])$/;
    return regexPattern.test(value) || "Email address must be a valid address";
  };

  return (
    <div className="flex items-center justify-center w-full max-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-lg p-8 mx-auto bg-white shadow-md rounded-xl dark:bg-gray-800 dark:text-gray-300">
        <div className="flex justify-center mb-4">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-2xl font-bold leading-tight text-center text-gray-900 dark:text-white">
          Sign in to your account
        </h2>
        <p className="mt-2 text-base text-center text-gray-600 dark:text-gray-400">
          Don&apos;t have an account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary hover:underline dark:text-primary-light"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="mt-4 text-center text-red-600">{error}</p>}

        <form onSubmit={handleSubmit(login)} className="mt-4 space-y-4">
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
          >
            {loading ? <Loader /> : "Sign In"}
          </Button>
        </form>
{/* 
        <div className="mt-6 text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-800 dark:text-gray-400">
                Or
              </span>
            </div>
          </div>
          <Button
            type="button"
            className="flex items-center justify-center w-full mt-4 text-white bg-blue-500 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-800"
            onClick={() => handleOAuthLogin("google")}
            disabled={loading}
          >
            <img
              src="/google-logo.png"
              alt="Google"
              className="w-6 h-6 mr-2"
            />
            Continue with Google
          </Button>
        </div> */}
      </div>
    </div>
  );
}

export default Login;
