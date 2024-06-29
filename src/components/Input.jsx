import React, { useId } from "react";
import PropTypes from "prop-types";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", error, ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full dark:text-white">
      {label && (
        <label className="inline-block pl-1 mb-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border w-full ${className} ${error ? 'border-red-500' : 'border-gray-200'}`}
        ref={ref}
        {...props}
        id={id}
      />
      {error && <p className="mt-1 text-red-600">{error}</p>}
    </div>
  );
});

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  className: "",
};

export default Input;
