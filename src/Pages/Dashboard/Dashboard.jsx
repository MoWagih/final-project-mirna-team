import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Mainlayout from "../Mainlayout/Mainlayout";
export default function Dashboard() {
  const courses = [
    {
      cname: "math",
      duration: "chaper1",
      loder: "p",
    },
  ];

  const [filled, setFilled] = useState(0);
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    if (filled < 100 && loading) {
      setTimeout(() => setFilled((prev) => (prev += 5)), 50);
    }
  }, [filled, loading]);
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
            <div className="courses-body flex w-full h-[100%]  justify-center items-center flex-col rounded-2xl px-1 py-1 gap-2">
              <div className="w-[70%] h-10 bg-slate-900 rounded-2xl flex justify-between items-center px-4">
                <p className="text-amber-50  text-2xl">Chapter 1</p>
                {/* ProgressBar */}
                <div
                  className="flex w-80 h-3 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="flex flex-col justify-center rounded-full overflow-hidden bg-amber-500 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-amber-500 w-[25%]"></div>
                            
                </div>
              </div>
              <div className="w-[70%] h-10 bg-slate-900 rounded-2xl flex justify-between items-center px-4">
                <p className="text-amber-50  text-2xl">Chapter 2</p>
                {/* ProgressBar */}
                <div
                  className="flex w-80 h-3 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="flex flex-col justify-center rounded-full overflow-hidden bg-amber-500 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-amber-500 w-[35%]"></div>
                            
                </div>
              </div>
              <div className="w-[70%] h-10 bg-slate-900 rounded-2xl flex justify-between items-center px-4">
                <p className="text-amber-50  text-2xl">Chapter 3</p>
                {/* ProgressBar */}
                <div
                  className="flex w-80 h-3 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="flex flex-col justify-center rounded-full overflow-hidden bg-amber-500 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-amber-500 w-[55%]"></div>
                            
                </div>
              </div>
              <div className="w-[70%] h-10 bg-slate-900 rounded-2xl flex justify-between items-center px-4">
                <p className="text-amber-50  text-2xl">Chapter 4</p>
                {/* ProgressBar */}
                <div
                  className="flex w-80 h-3 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="flex flex-col justify-center rounded-full overflow-hidden bg-amber-500 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-amber-500 w-[75%]"></div>
                            
                </div>
              </div>
              <div className="w-[70%] h-10 bg-slate-900 rounded-2xl flex justify-between items-center px-4">
                <p className="text-amber-50  text-2xl">Chapter 5</p>
                {/* ProgressBar */}
                <div
                  className="flex w-80 h-3 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="flex flex-col justify-center rounded-full overflow-hidden bg-amber-500 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-amber-500 w-[95%]"></div>
                            
                </div>
              </div>
            </div>
          </div>
          <div className="Assignments w-full h-40 bg-gray-800 rounded-2xl p-3 flex flex-col gap-2">
            <h3 className="text-amber-50 text-2xl px-1">Assignment</h3>
            <div className="w-full h-20 shadow-lg shadow-slate-900 bg-slate-900 rounded-2xl flex  justify-around p-4">
              <div className="top w-[25%] h-full flex flex-col items-center gap-1">
                <p className="text-amber-50 font-bold">Math</p>
                <p className="text-gray-400">Chapter1</p>
              </div>

              <div className="top w-[25%] h-full flex flex-col items-center gap-1">
                <p className="text-amber-50 font-bold">Daily task</p>
                <p className="text-gray-400">page 10</p>
              </div>

              <div className="top w-[25%] h-full  flex flex-col items-center gap-1">
                <p className="text-amber-50 font-bold">Deadline</p>
                <p className="text-gray-400 font-bold">11:00 AM</p>
              </div>

              <div className="top w-[25%] h-full  flex flex-col items-center gap-1">
                <p className="text-amber-50 font-bold">Progress</p>
                <p className="text-amber-500 font-bold">Pending</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
