import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Container } from "../components/index.js";

function Home() {
  const authStatus = useSelector((state) => state.status);

  return (
    <div className="flex items-center justify-center w-full max-h-screen bg-gray-100 dark:bg-gray-900">
      <Container>
        <div className="flex flex-wrap justify-center pt-56 pb-56">
          <div className="w-full text-center">
            <h1 className="text-6xl font-bold text-center text-gray-900 hover:text-green-700 dark:text-white dark:hover:text-blue-700">
              Welcome to{" "}
              <span className="text-blue-700 dark:text-green-900">Frame & Phrase!</span>
            </h1>
            <p className="mt-4 text-3xl text-center text-gray-500 dark:text-gray-300">
              -Where prose finds its tranquil home. Every snapshot has a story, and we're here to tell it.
            </p>
            <div className="w-full mt-12 text-center">
              {authStatus ? (
                <Link to="/all-posts">
                  <Button className="text-white transition-colors duration-300 bg-blue-500 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-900">
                    Deep dive!
                  </Button>
                </Link>
              ) : (
                <Link to="/login">
                  <Button className="text-white transition-colors duration-300 bg-blue-500 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-900">
                    Get Started
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
