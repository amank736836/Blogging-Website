import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loader } from "./index.js";

function AuthLayout ({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => {
    // console.log(state);
    return state.status;
  });

  useEffect(() => {
    // TODO : make it more easy to understand

    // if(authStatus === true){
    //     navigate('/')
    // }
    // else if(authStatus === false){
    //     navigate('/login')
    // }

    // let authValue = authStatus === true ? true : false

    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, authentication, navigate]);

  return loader ? (
    <div>
      <Loader />
    </div>
  ) : (
    <>{children}</>
  );
};

export default AuthLayout;