import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import authService from "../appwrite/auth";
import { Button, Container } from "./index.js";

function EmailVerification () {
  const location = useLocation();
  const navigate = useNavigate();
  const [verificationStatus, setVerificationStatus] = useState("Verifying...");
  const [isVerified, setIsVerified] = useState(false);

  useEffect(async () => {
    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get("userId");
    const secret = searchParams.get("secret");

    if (!userId || !secret) {
      setVerificationStatus("Invalid Verification Link");
      return;
      // navigate("/login");
    }

    try {
      const result = await authService.verification(userId, secret);
      if (result.success) {
        setVerificationStatus("Email Verified Successfully");
        setIsVerified(true);
      } else {
        setVerificationStatus("Invalid Verification Link");
      }
    } catch (error) {
      console.log("EmailVerification :: useEffect :: error :: ", error);
      setVerificationStatus("Something went wrong");
    }
  }, [location]);

  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="mb-4 text-2xl font-bold text-center">Email Verification</h2>
        <h1 className="mb-4 text-3xl font-bold text-center">{verificationStatus}</h1>
        {isVerified && (
          <Button onClick={() => navigate("/login")}>Login</Button>
        )}
      </div>
    </Container>
  );
};

export default EmailVerification;