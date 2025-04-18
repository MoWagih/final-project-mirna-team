import React from "react";
import "./Fram1.css";
import { FaGraduationCap } from "react-icons/fa6";
export default function Fram1() {
  return (
    <div className="cover h-[100vh] w-full ">
      <div className="parentFram1 h-[100vh] w-full flex">
        <div className="h-[50vh  w-[550px]  items-center flex flex-col">
          <FaGraduationCap className="h-[100px] w-[100px] text-amber-100" />
          <button className="cursor-pointer hover:tracking-wider   my-4 py-2 w-[300px] rounded-full border border-amber-100 bg-transparent text-amber-100">
            Login as a Teacher
          </button>
          <button className="cursor-pointer hover:tracking-wider my-4 py-2 w-[300px] rounded-full border border-amber-100 bg-transparent text-amber-100">
            Login as a Student
          </button>
          <button className="cursor-pointer hover:tracking-wider my-4 py-2 w-[300px] rounded-full border border-amber-100 bg-transparent text-amber-100">
            Login as a Parent
          </button>
        </div>
      </div>
    </div>
  );
}
