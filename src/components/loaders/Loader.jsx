import React from "react";

function Loader() {
  return (
    <div className="flex items-center justify-center max-h-screen">
      <div className="animate-spin">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-blue-400 dark:text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v7m0 0v7m0-7h7m-7 0H5"
          />
        </svg>
      </div>
    </div>
  );
}

export default Loader;
