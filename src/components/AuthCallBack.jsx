import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import { login } from "../store/authSlice";
import SkeletonLoader from "./loaders/SkeletonLoader";

function AuthCallback () {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(async () => {
    try {
      const userData = await authService.getCurrentUser();
      if (userData) {
        dispatch(login(userData));
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log("AuthCallBack :: useEffect :: error :: ", error);
    }
  }, [dispatch, navigate]);

  return (
    <div>
      <h1>
        <SkeletonLoader />
      </h1>
    </div>
  );
};

export default AuthCallback;