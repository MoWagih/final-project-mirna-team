import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { MdInsertDriveFile } from "react-icons/md";
import { GoFileDirectoryFill } from "react-icons/go";
import { FaDownLong } from "react-icons/fa6";

export default function Assignments() {
  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-amber-50 p-6 text-3xl">Assignments</h1>
      <Navbar />
      <div className="h-full w-full p-6 bg-cyan-9500 bg-gray-800 border-10 border-slate-900 flex gap-5 flex-col rounded-2xl  mb-2">
        <h1 className="text-2xl text-amber-50">Assignment Activity</h1>
        <p className="text-amber-50">Write a short about your assignment</p>
        <div className="file w-full h-[75%] justify-between  flex flex-row">
          <h1 className="text-2xl text-amber-50">File Submissions</h1>
          <div className="box w-[70%] bg-gray-800 border-4 border-slate-900 shadow-lg shadow-slate-950 rounded-2xl h-full flex flex-col  p-3 items-center">
            <h1 className="text-amber-50 text-2xl">
              Maximum file size 1 MB, Maximum number of file : 10
            </h1>
            <div className="icons w-full h-30 flex gap-4 flex-row items-center justify-center">
              <div className="text-4xl rounded-2xl shadow-md shadow-slate-950 border-3 border-slate-900 cursor-pointer  p-2">
                <MdInsertDriveFile className="text-amber-50" />
              </div>
              <div className="text-4xl rounded-2xl shadow-md shadow-slate-950 border-3 border-slate-900 cursor-pointer  p-2">
                <GoFileDirectoryFill className="text-amber-50" />
              </div>
            </div>
            <div className="dragBox w-[90%] h-50 border-3 shadow-md shadow-slate-950 border-slate-900 rounded-2xl bg-gray-800  flex flex-col items-center justify-center gap-3 p-3">
              <FaDownLong className="text-6xl text-amber-50" />
              <p className="text-amber-50 ">
                You can drag and drop files here to add them here
              </p>
            </div>
          </div>
        </div>
        <div className="buttons w-full h-[10%] gap-5  flex justify-center">
          <button className="w-30 h-[40px] rounded-4xl cursor-pointer hover:tracking-wide  text-amber-50  bg-slate-900 shadow-lg shadow-slate-950">
            Save changes
          </button>
          <button className="w-30 h-[40px] rounded-4xl cursor-pointer hover:tracking-wide  text-amber-50  bg-slate-900 shadow-lg shadow-slate-950">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
