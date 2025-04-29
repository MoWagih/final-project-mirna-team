import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

export default function Library() {
  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-amber-50 p-6 text-3xl">Library</h1>
      <Navbar />

      <div className="h-full w-full border-10 border-gray-800 bg-amber-50  flex gap-2 p-3 flex-col rounded-2xl">
        <div className="top w-full flex gap-5 items-center justify-center h-[50%] rounded-2xl ">
          <div className="w-[34%] rounded-2xl h-[100%] cursor-pointer bg-amber-50  shadow-2xl"></div>
          <div className="w-[34%] rounded-2xl h-[100%] cursor-pointer bg-amber-50  shadow-2xl"></div>
          <div className="w-[34%] rounded-2xl h-[100%] cursor-pointer bg-amber-50  shadow-2xl"></div>
        </div>
        <div className="bottom w-full flex items-center justify-center gap-5 h-[50%] rounded-2xl">
          <div className="w-[34%] rounded-2xl h-[100%] cursor-pointer bg-amber-50  shadow-2xl"></div>
          <div className="w-[34%] rounded-2xl h-[100%] cursor-pointer bg-amber-50 shadow-2xl"></div>
          <div className="w-[34%] rounded-2xl h-[100%] cursor-pointer bg-amber-50   shadow-2xl"></div>
        </div>
      </div>
    </div>
  );
}
