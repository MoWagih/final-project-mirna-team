import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

export default function Attendance() {
  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-amber-50 h-8 py-4 px-2 text-3xl">Attendance</h1>
      <Navbar />
      <div className="h-full w-full bg-gray-800 flex   rounded-2xl p-2 mb-2"></div>
    </div>
  );
}
