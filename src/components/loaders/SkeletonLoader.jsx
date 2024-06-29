import React from "react";

function SkeletonLoader () {
  return (
    <div className="w-1/3 p-3 animate-pulse">
          <div className="w-full h-64 mb-4 bg-gray-300 rounded dark:bg-gray-700 dark:bg-opacity-50"></div>
          <div className="w-1/2 h-4 mb-2 bg-gray-300 rounded dark:bg-gray-700 dark:bg-opacity-50"></div>
    </div>
  );
};

export default SkeletonLoader;
