import React from "react";
import useTheme from "../hooks/useTheme.js";

export default function ThemeBtn() {
  const { themeMode, toggleTheme } = useTheme();

  const onChangeBtn = () => {
    toggleTheme();
  };

  return (
    <label className="relative inline-flex items-center justify-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
      />
      <div className="h-6 bg-gray-200 rounded-full shadow-inner w-11 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-green-800 dark:bg-gray-700 peer-checked:after:bg-blue-600 peer-checked:after:translate-x-full"></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
        Switch Theme
      </span>
    </label>
  );
}
