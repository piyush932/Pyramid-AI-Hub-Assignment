import React from "react";
import Image15 from "../images/image 15.png";
import Image16 from "../images/image 16.png";
import Image17 from "../images/image 17.png";
import Image18 from "../images/image 18.png";
import Rectangle12 from "../images/Rectangle 12.png";
import { Button } from "flowbite-react";

export default function Gallery() {
  return (
    <div className="flexbox p-20 pr-5">
      <div className="pl-20 pb-10">
        <h1 className="text-5xl text-gray1">Our Projects</h1>
      </div>
      <div className="flex gap-6 flex-row flex-wrap pl-20">
        <img src={Rectangle12} alt="Rectangle12" />
        <img src={Image15} alt="Image15" />
        <img src={Image16} alt="Image16" />
        <img src={Image17} alt="Image17" />
        <img src={Image18} alt="Image18" />
      </div>
      <div className="w-4/5 pt-10 flex justify-end ml-35" >
        <Button className="bg-black text-white rounded p-5 ">
          ALL PROJECTS{" "}
          <svg
            className="w-5 h-5 text-white dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="20"  
            height="20"
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
        </Button>
      </div>
    </div>
  );
}
