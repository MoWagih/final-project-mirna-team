import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

export default function Courses() {
  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-indigo-950 p-6 text-3xl">Courses</h1>
      <Navbar />
      <div className="h-full w-full bg-indigo-950 flex   rounded-2xl p-2 mb-2"></div>
    </div>
  );
}
