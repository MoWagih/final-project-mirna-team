import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import course1 from "../../assets/course1.png";
import course2 from "../../assets/course2.png";
import course3 from "../../assets/course3.png";
import course4 from "../../assets/course4.png";
import course5 from "../../assets/course5.png";
import course6 from "../../assets/course6.png";
import teacher from "../../assets/teacher.png";

export default function Classroom() {
  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-amber-50 h-8 py-4 px-2 text-3xl">Classroom</h1>
      <Navbar />
      <div className="container flex flex-col w-full h-[87%] bg-gray-800 rounded-2xl  border-8 border-slate-900 ">
        <div className="top p-2 w-full flex gap-5 items-center justify-center h-[50%] rounded-2xl">
          <div className="w-[34%] rounded-2xl h-[100%] bg-gray-800 shadow-lg  shadow-amber-100 flex flex-col items-center justify-between p-3 gap-2">
            <div className="courseTop relative w-full h-full">
              <img className="w-full h-50 rounded-2xl" src={course1} alt="" />
              <div className="">
                <img
                  className="h-10 w-10 absolute top-[180px] right-4"
                  src={teacher}
                  alt=""
                />
              </div>
            </div>
            <div className="courseName flex w-full pl-1">
              <p className="text-amber-50 ">English Department</p>
            </div>
            <button className="bg-amber-500 cursor-pointer rounded-3xl text-amber-50 font-bold hover:tracking-wider h-10 w-40 shadow-md shadow-amber-500">
              Open classroom
            </button>
          </div>
          <div className="w-[34%] rounded-2xl h-[100%] bg-gray-800 shadow-lg  shadow-amber-100 flex flex-col items-center justify-between p-3 gap-2">
            <div className="courseTop relative w-full h-full">
              <img className="w-full h-50 rounded-2xl" src={course2} alt="" />
              <div className="">
                <img
                  className="h-10 w-10 absolute top-[180px] right-4"
                  src={teacher}
                  alt=""
                />
              </div>
            </div>
            <div className="courseName flex w-full pl-1">
              <p className="text-amber-50 ">English Department</p>
            </div>
            <button className="bg-amber-500 cursor-pointer rounded-3xl text-amber-50 font-bold hover:tracking-wider h-10 w-40 shadow-md shadow-amber-500">
              Open classroom
            </button>
          </div>
          <div className="w-[34%] rounded-2xl h-[100%] bg-gray-800 shadow-lg  shadow-amber-100 flex flex-col items-center justify-between p-3 gap-2">
            <div className="courseTop relative w-full h-full">
              <img className="w-full h-50 rounded-2xl" src={course3} alt="" />
              <div className="">
                <img
                  className="h-10 w-10 absolute top-[180px] right-4"
                  src={teacher}
                  alt=""
                />
              </div>
            </div>
            <div className="courseName flex w-full pl-1">
              <p className="text-amber-50 ">English Department</p>
            </div>
            <button className="bg-amber-500 cursor-pointer rounded-3xl text-amber-50 font-bold hover:tracking-wider h-10 w-40 shadow-md shadow-amber-500">
              Open classroom
            </button>
          </div>
        </div>
        <div className="bottom p-2 w-full flex gap-5 items-center justify-center h-[50%] rounded-2xl">
          <div className="w-[34%] rounded-2xl h-[100%] bg-gray-800 shadow-lg  shadow-amber-100 flex flex-col items-center justify-between p-3 gap-2">
            <div className="courseTop relative w-full h-full">
              <img className="w-full h-50 rounded-2xl" src={course4} alt="" />
              <div className="">
                <img
                  className="h-10 w-10 absolute top-[180px] right-4"
                  src={teacher}
                  alt=""
                />
              </div>
            </div>
            <div className="courseName flex w-full pl-1">
              <p className="text-amber-50 ">English Department</p>
            </div>
            <button className="bg-amber-500 cursor-pointer rounded-3xl text-amber-50 font-bold hover:tracking-wider h-10 w-40 shadow-md shadow-amber-500">
              Open classroom
            </button>
          </div>
          <div className="w-[34%] rounded-2xl h-[100%] bg-gray-800 shadow-lg  shadow-amber-100 flex flex-col items-center justify-between p-3 gap-2">
            <div className="courseTop relative w-full h-full">
              <img className="w-full h-50 rounded-2xl" src={course5} alt="" />
              <div className="">
                <img
                  className="h-10 w-10 absolute top-[180px] right-4"
                  src={teacher}
                  alt=""
                />
              </div>
            </div>
            <div className="courseName flex w-full pl-1">
              <p className="text-amber-50 ">English Department</p>
            </div>
            <button className="bg-amber-500 cursor-pointer rounded-3xl text-amber-50 font-bold hover:tracking-wider h-10 w-40 shadow-md shadow-amber-500">
              Open classroom
            </button>
          </div>
          <div className="w-[34%] rounded-2xl h-[100%] bg-gray-800 shadow-lg  shadow-amber-100 flex flex-col items-center justify-between p-3 gap-2">
            <div className="courseTop relative w-full h-full">
              <img className="w-full h-50 rounded-2xl" src={course6} alt="" />
              <div className="">
                <img
                  className="h-10 w-10 absolute top-[180px] right-4"
                  src={teacher}
                  alt=""
                />
              </div>
            </div>
            <div className="courseName flex w-full pl-1">
              <p className="text-amber-50 ">English Department</p>
            </div>
            <button className="bg-amber-500 cursor-pointer rounded-3xl text-amber-50 font-bold hover:tracking-wider h-10 w-40 shadow-md shadow-amber-500">
              Open classroom
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
