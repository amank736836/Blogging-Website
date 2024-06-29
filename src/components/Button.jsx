import React from "react";

function Button ({
  children,
  type = "button",
  className = "",
  css = "bg-blue-700 dark:bg-green-700 dark:hover:bg-green-900 hover:bg-blue-600 dark:hover:text-black hover:text-white",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${css} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
