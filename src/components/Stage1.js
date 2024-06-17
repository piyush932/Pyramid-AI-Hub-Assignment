import React from "react";
import Rectangel6 from "../images/Rectangle 6.png";


export default function Stage1() {
  return (
    <div className="p-20 flex justify-center text-center ">
      <div className="p-20 mr-10 justify-start flex flex-col">
        <h1 className="text-5xl text-gray-400 ">PROJECT</h1>
        <h1 className="text-5xl text-gray1 font-semibold">Lorum</h1>
        <div className="flex pl-10 gap-5 pt-10 pr-10 p-10">
          <svg
            className="w-10 h-10 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M5 12l4-4m-4 4 4 4"
            />
          </svg>

          <svg
            className="w-10 h-10 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </div>
        <div>
          <h1 className="text-3xl">01 / 05</h1>
        </div>
      </div>
      <img src={Rectangel6} alt="rectangle-6" />
    </div>
  );
}
