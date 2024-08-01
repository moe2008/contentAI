/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
const BackButton = (props) => {
  const navigate = useNavigate();
  return (
    <h1 className="m-3 text-3xl sm:text-4xl select-none dark:text-darkMode-text text-whiteMode-text scaleAnim cursor-none navItemAnim">
      <button
        type="button"
        onClick={() => navigate("/")}
        className="flex items-center justify-center w-auto px-5 py-2 text-xs text-gray-700 transition-colors duration-200 bg-accentColors-lila border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700 cursor-none"
      >
        <svg
          className="w-5 h-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <span className="hidden sm:block">Go back</span>
      </button>
    </h1>
  );
};

export default BackButton;
