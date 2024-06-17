import React from "react";
import Rectangle8 from "../images/Rectangle 8.png";
import Rectangle9 from "../images/Rectangle 9.png";
import Rectangle10 from "../images/Rectangle 10.png";

export default function Stage2() {
  return (
    <div className="flex pb-10 flex-row">
      <div className="pl-40 flexbox gap-4 pr-40">
        <div className="flex gap-6">
          <img src={Rectangle8} alt="Rectangle8" />
          <img src={Rectangle9} alt="Rectangle9" />
        </div>
        <img src={Rectangle10} alt="Rectangle10" className="justify-center" />
      </div>
      <div className="flexbox justify-end pl-40 ">
        <h3 className="text-5xl text-gray-400 pb-10">About</h3>
        <p className="text-1xl pr-40">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <h3 className="text-2xl text-gray-400 pt-10">READ MORE </h3>
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
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
    </div>
  );
}
