import React from "react";
import Stage1 from "../components/Stage1";
import Stage2 from "../components/Stage2";
import Stage3 from "../components/Stage3";
import Stage4 from "../components/Stage4";
import Stage5 from "../components/Stage5";


export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="">
      <Stage1/>
      <Stage2/>
      <Stage3/>
      <Stage4/>
      <Stage5/>
      </div>
    </div>
  );
}
