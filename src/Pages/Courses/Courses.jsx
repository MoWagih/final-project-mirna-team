import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import course1 from "../../assets/img/course1.png";
import teacher from "../../assets/img/teacher.png";
import course3 from "../../assets/course3.png";
import course4 from "../../assets/course4.png";
import course5 from "../../assets/course5.png";
import course6 from "../../assets/course6.png";

export default function Courses() {
  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-amber-50 p-6 text-3xl">Courses</h1>
      <Navbar />
      <div className="h-full w-full bg-gray-800 flex   rounded-2xl p-2 mb-2">
        <div className="container flex flex-col w-full h-full bg-slate-950 rounded-2xl">
          <div className="head w-full px-3 h-[8%] flex items-center justify-between">
            <div className="w-100 flex  items-center justify-between">
              <button className="cursor-pointer hover:tracking-wider  w-[130px] rounded-full  bg-transparent text-amber-50">
                All Courses (12)
              </button>
              <button className="cursor-pointer hover:tracking-wider  w-[120px] rounded-full  bg-transparent text-amber-50">
                Ongoing (7)
              </button>
              <button className="cursor-pointer hover:tracking-wider  w-[120px] rounded-full  bg-transparent text-amber-50">
                Completed (5)
              </button>
            </div>
            <button className="cursor-pointer hover:tracking-wider  w-[120px] rounded-full  bg-transparent text-amber-50">
              See all
            </button>
          </div>

          <div className="top p-3 w-full flex gap-5 items-center justify-center h-[50%] rounded-2xl">
            <div className="w-[34%] rounded-2xl h-[100%] bg-gray-800 shadow-lg  shadow-gray-950 flex flex-col items-center justify-between p-2">
              <div className="courseTop relative w-full h-full">
                <img className="w-full h-40 rounded-2xl" src={course1} alt="" />
                <div className="">
                  <img
                    className="h-10 w-10 absolute top-[140px] right-4"
                    src={teacher}
                    alt=""
                  />
                </div>
              </div>
              <div className="courseName flex w-full pl-1">
                <p className="text-amber-50">English Department</p>
              </div>
              <button className="bg-slate-900 cursor-pointer rounded-3xl text-amber-50 hover:tracking-wider h-10 w-20">
                Resume
              </button>
            </div>
            <div className="w-[34%] rounded-2xl h-[100%] bg-gray-800 shadow-lg  shadow-gray-950 flex flex-col items-center justify-between p-2">
              <div className="courseTop relative w-full h-full">
                {/* <img className="w-full h-40 rounded-2xl" src={course2} alt="" /> */}
                <div className="">
                  <img
                    className="h-10 w-10 absolute top-[140px] right-4"
                    src={teacher}
                    alt=""
                  />
                </div>
              </div>
              <div className="courseName flex w-full pl-1">
                <p className="text-amber-50">Computer Department</p>
              </div>
              <button className="bg-slate-900 cursor-pointer rounded-3xl text-amber-50 hover:tracking-wider h-10 w-20">
                Resume
              </button>
            </div>
            <div className="w-[34%] rounded-2xl h-[100%] bg-gray-800 shadow-lg shadow-gray-950 flex flex-col items-center justify-between p-2">
              <div className="courseTop relative w-full h-full">
                <img className="w-full h-40 rounded-2xl" src={course3} alt="" />
                <div className="">
                  <img
                    className="h-10 w-10 absolute top-[140px] right-4"
                    src={teacher}
                    alt=""
                  />
                </div>
              </div>
              <div className="courseName flex w-full pl-1">
                <p className="text-amber-50">Physics Department</p>
              </div>
              <button className="bg-slate-900 cursor-pointer rounded-3xl text-amber-50 hover:tracking-wider h-10 w-20">
                Resume
              </button>
            </div>
          </div>
          <div className="bottom p-3 w-full flex gap-5 items-center justify-center h-[50%] rounded-2xl">
            <div className="w-[34%] rounded-2xl h-[100%] bg-gray-800 shadow-lg  shadow-gray-950 flex flex-col items-center justify-between p-2">
              <div className="courseTop relative w-full h-full">
                <img className="w-full h-40 rounded-2xl" src={course4} alt="" />
                <div className="">
                  <img
                    className="h-10 w-10 absolute top-[140px] right-4"
                    src={teacher}
                    alt=""
                  />
                </div>
              </div>
              <div className="courseName flex w-full pl-1">
                <p className="text-amber-50">Social Department</p>
              </div>
              <button className="bg-slate-900 cursor-pointer rounded-3xl text-amber-50 hover:tracking-wider h-10 w-20">
                Resume
              </button>
            </div>
            <div className="w-[34%] rounded-2xl h-[100%] bg-gray-800 shadow-lg  shadow-gray-950 flex flex-col items-center justify-between p-2">
              <div className="courseTop relative w-full h-full">
                <img className="w-full h-40 rounded-2xl" src={course5} alt="" />
                <div className="">
                  <img
                    className="h-10 w-10 absolute top-[140px] right-4"
                    src={teacher}
                    alt=""
                  />
                </div>
              </div>
              <div className="courseName flex w-full pl-1">
                <p className="text-amber-50">Chemistry Department</p>
              </div>
              <button className="bg-slate-900 cursor-pointer rounded-3xl text-amber-50 hover:tracking-wider h-10 w-20">
                Resume
              </button>
            </div>
            <div className="w-[34%] rounded-2xl h-[100%] bg-gray-800 shadow-lg  shadow-gray-950 flex flex-col items-center justify-between p-2">
              <div className="courseTop relative w-full h-full">
                <img className="w-full h-40 rounded-2xl" src={course6} alt="" />
                <div className="">
                  <img
                    className="h-10 w-10 absolute top-[140px] right-4"
                    src={teacher}
                    alt=""
                  />
                </div>
              </div>
              <div className="courseName flex w-full pl-1">
                <p className="text-amber-50">Math Department</p>
              </div>
              <button className="bg-slate-900 cursor-pointer rounded-3xl text-amber-50 hover:tracking-wider h-10 w-20">
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
