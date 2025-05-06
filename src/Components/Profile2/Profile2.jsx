import React from "react";
import Img from "../../assets/student.jpeg";
import { MdOutlineModeEditOutline } from "react-icons/md";
export default function Profile2() {
  return (
    <div className="parent w-100 h-full bg-slate-950 flex flex-col  gap-6 border-r-2 border-gray-800 pt-6 pr-5 overflow-hidden">
      <h1 className="text-2xl h-8  font-bold text-amber-50 ">Profile</h1>
      <div className="studentPic w-full h-[220px] flex flex-col  items-center">
        <div className="pic h-[160px] w-[160px] flex flex-col relative items-center">
          <img
            className="h-[150px] w-[150px] rounded-[50%] bg-cover"
            src={Img}
            alt="Student"
          />
          <button className="edit-pen cursor-pointer bg-amber-50 w-8 h-8  rounded-[50%] absolute bottom-0 right-8 flex items-center justify-center">
            <MdOutlineModeEditOutline className="rounded-[50%] text-2xl" />
          </button>
        </div>
        <h1 className="text-2xl text-amber-50">Faried</h1>
        <p className="text-gray-400">Student</p>
      </div>
      <div className="studentInfo h-[370px]  px-4 py-5 border-2 border-slate-950 bg-transparent shadow-lg shadow-amber-100 rounded-2xl flex flex-col justify-around">
        <div className="fullName">
          <h3 className="text-gray-500">Full Name</h3>
          <h3 className="text-amber-50 font-bold">Faried Salah Eldeen</h3>
        </div>
        <div className="grade  py-4">
          <h3 className="text-gray-500">Grade</h3>
          <h3 className="text-amber-50 font-bold">Grade : 9</h3>
        </div>
        <div className="location  py-4">
          <h3 className="text-gray-500">Location</h3>
          <h3 className="text-amber-50 font-bold">Eygpt, Alexandria</h3>
        </div>
        <div className="number py-4">
          <h3 className="text-gray-500">Phone Number</h3>
          <h3 className="text-amber-50 font-bold">01201031087</h3>
        </div>
      </div>
    </div>
  );
}
