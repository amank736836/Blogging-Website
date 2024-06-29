import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../appwrite/auth.js";
import { logout } from "../../store/authSlice.js";
import Loader from "../loaders/Loader.jsx";

function LogoutBtn() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    setLoading(true);
    authService
      .logout()
      .then(() => {
        dispatch(logout());
        navigate("/login");
      })
      .catch((error) => {
        console.log("LogoutBtn :: logoutHandler :: error :: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Link to="/login">
      <button
        className={`inline-block px-6 py-2 duration-200 rounded-full dark:bg-green-700 dark:hover:bg-green-500 ${
          loading
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
        onClick={logoutHandler}
        disabled={loading}
      >
        {loading ? <Loader /> : "Logout"}
      </button>
    </Link>
  );
}

export default LogoutBtn;
