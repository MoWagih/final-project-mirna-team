import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

export default function Dashboard() {
  const courses = [
    {
      cname: "math",
      duration: "chaper1",
      loder: "p",
    },
  ];
  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-amber-50 h-8 py-4 px-2 text-3xl">Dashboard</h1>
      <Navbar />
      <div className="h-full w-full  bg-slate-900  flex   rounded-2xl p-2 mb-2">
        <div className="w-full h-full  flex flex-col gap-2">
          <div className="Announcement w-full h-[20%] bg-gray-800 rounded-2xl p-2">
            <h3 className="text-2xl text-amber-50 pl-2 pb-1">Announcement</h3>
            <div className="w-full p-2 h-[60%] bg-slate-900/90 rounded-2xl flex flex-row justify-between items-center">
              <p className=" text-amber-50">
                Hello Faried ! your live session is about to start !
              </p>
              <button className="cursor-pointer hover:tracking-wider my-2 py-2 w-30 rounded-full border-2 border-amber-50 bg-transparent text-amber-50">
                Join
              </button>
            </div>
          </div>
          <div className="Courses-Progress w-full h-[50%] bg-gray-800  rounded-2xl flex flex-col p-3">
            <div className="Courses-header  w-full h-15 bg-gray-800 rounded-2xl pl-1 flex justify-between">
              <h3 className="text-amber-50 text-2xl">Courses Progress</h3>
              <select className="w-25 h-10 bg-gray-800  text-amber-50 border-2 border-amber-50 rounded-2xl p-2">
                <option className="text-amber-50" value="math">
                  Math
                </option>
                <option className="text-amber-50" value="science">
                  Sciencs
                </option>
                <option className="text-amber-50" value="english">
                  English
                </option>
                <option className="text-amber-50" value="arabic">
                  Arabic
                </option>
              </select>
            </div>
            <div className="courses-body flex w-full h-[100%] flex-col rounded-2xl px-1 py-1 gap-2">
              <div className="w-full h-10 bg-slate-900 rounded-2xl flex justify-between items-center px-4">
                <p className="text-amber-50">Chapter 1</p>
              </div>
              <div className="w-full h-10 bg-slate-900 rounded-2xl flex justify-between items-center px-4">
                <p className="text-amber-50">Chapter 2</p>
              </div>
              <div className="w-full h-10 bg-slate-900 rounded-2xl flex justify-between items-center px-4">
                <p className="text-amber-50">Chapter 3</p>
              </div>
              <div className="w-full h-10 bg-slate-900 rounded-2xl flex justify-between items-center px-4">
                <p className="text-amber-50">Chapter 4</p>
              </div>
              <div className="w-full h-10 bg-slate-900 rounded-2xl flex justify-between items-center px-4">
                <p className="text-amber-50">Chapter 5</p>
              </div>
            </div>
          </div>
          <div className="Assignments w-full h-40 bg-gray-800 rounded-2xl p-3">
            <h3 className="text-amber-50 text-2xl">Assignment</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
