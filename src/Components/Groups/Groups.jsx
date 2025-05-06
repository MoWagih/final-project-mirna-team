import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IoPersonAddOutline } from "react-icons/io5";
export default function Groups() {
  return (
    <div className="parent w-100 h-full bg-slate-950 flex flex-col  gap-6 border-r-2 border-gray-800 pt-6 pr-5 overflow-hidden">
      <h1 className="text-2xl h-8  font-bold text-amber-50 ">Groups</h1>
      <div className="searchBar w-80 h-10 bg-transparent rounded-2xl p-2 border-2 border-slate-950 shadow-lg shadow-amber-100 flex gap-3">
        <BiSearchAlt className="text-2xl text-amber-50" />
        <input
          className="text-gray-400"
          type="text"
          placeholder="Search here..."
        />
      </div>
      <div className="w-full h-[80%] px-4 py-2 border-2 border-slate-950 bg-transparent shadow-lg shadow-amber-100 rounded-2xl flex flex-col gap-2">
        <div className="creat-group w-full flex justify-between items-center">
          <p className="text-gray-500 w-full h-5 px-2 ">
            Create your group Now!
          </p>
          <IoPersonAddOutline className="text-[20px] text-amber-50" />
        </div>
        <div className="chatsContainer w-full h-[600px]   flex flex-col gap-2 overflow-auto">
          <div className="w-full h-[13%]  flex items-center gap-6">
            <div className="contact-img w-15 h-15 rounded-[50%] flex justify-center items-center bg-gray-400">
              <p className="text-2xl text-amber-50">A</p>
            </div>
            <p className="text-amber-50 ">Aysel Mohamed</p>
          </div>

          <div className="w-full h-[13%]  flex items-center gap-6">
            <div className="contact-img w-15 h-15 rounded-[50%] flex justify-center items-center bg-gray-400">
              <p className="text-2xl text-amber-50">A</p>
            </div>
            <p className="text-amber-50 ">Azza Atia</p>
          </div>

          <div className="w-full h-[13%]  flex items-center gap-6">
            <div className="contact-img w-15 h-15 rounded-[50%] flex justify-center items-center bg-gray-400">
              <p className="text-2xl text-amber-50">C</p>
            </div>
            <p className="text-amber-50 ">Celia Abdelrahman</p>
          </div>

          <div className="w-full h-[13%]  flex items-center gap-6">
            <div className="contact-img w-15 h-15 rounded-[50%] flex justify-center items-center bg-gray-400">
              <p className="text-2xl text-amber-50">E</p>
            </div>
            <p className="text-amber-50 ">Esraa Faried</p>
          </div>

          <div className="w-full h-[13%]  flex items-center gap-6">
            <div className="contact-img w-15 h-15 rounded-[50%] flex justify-center items-center bg-gray-400">
              <p className="text-2xl text-amber-50">F</p>
            </div>
            <p className="text-amber-50 ">Faried Salah</p>
          </div>

          <div className="w-full h-[13%]  flex items-center gap-6">
            <div className="contact-img w-15 h-15 rounded-[50%] flex justify-center items-center bg-gray-400">
              <p className="text-2xl text-amber-50">M</p>
            </div>
            <p className="text-amber-50 ">Mirna Faried</p>
          </div>

          <div className="w-full h-[13%]  flex items-center gap-6">
            <div className="contact-img w-15 h-15 rounded-[50%] flex justify-center items-center bg-gray-400">
              <p className="text-2xl text-amber-50">R</p>
            </div>
            <p className="text-amber-50 ">Rana Faried</p>
          </div>
        </div>
      </div>
    </div>
  );
}
