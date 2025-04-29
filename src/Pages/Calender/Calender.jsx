import React from "react";
import "./Calender.css";
import Navbar from "../../Components/Navbar/Navbar";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

export default function Calender() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <h1 className="text-amber-50 p-6 text-3xl">Calender</h1>
      <Navbar />
      <div className="Calender h-full w-full bg-gray-800  flex gap-8 rounded-2xl p-3 mb-10  border-8 border-gray-900 shadow-lg shadow-gray-700">
        <div className="navigateDate flex gap-4 flex-col ">
          <h1 className="Calender text-4xl pl-4 text-amber-50 ">Calender</h1>

          <div className="header-date flex justify-between items-center w-[398px] pl-4">
            <div className="flex">
              <h2 className="month text-[28px]  text-amber-50">May,</h2>
              <h2 className="year text-[28px] text-amber-50">2025</h2>
            </div>
            <div className="buttons flex gap-1">
              <i className="left text-amber-500 rounded-3xl w-5 h-5 bg-gray-400/35 flex items-center justify-center">
                <IoIosArrowBack />
              </i>
              <i className="right text-amber-500 rounded-3xl w-5 h-5 bg-gray-400/35 flex items-center justify-center">
                <IoIosArrowForward />
              </i>
            </div>
          </div>

          <div className="weekdays w-[100%] flex gap-5 text-gray-400 text-[10px] pl-2">
            <span className="w-[39px] flex justify-center font-bold text-[14px]">
              Sun
            </span>
            <span className="w-[39px] flex justify-center font-bold text-[14px]">
              Mon
            </span>
            <span className="w-[39px] flex justify-center font-bold text-[14px]">
              Tue
            </span>
            <span className="w-[39px] flex justify-center font-bold text-[14px]">
              Wed
            </span>
            <span className="w-[39px] flex justify-center font-bold text-[14px]">
              Thu
            </span>
            <span className="w-[39px] flex justify-center font-bold text-[14px]">
              Fri
            </span>
            <span className="w-[39px] flex justify-center font-bold text-[14px]">
              Sat
            </span>
          </div>

          <div className="days flex flex-wrap gap-[31px] p-3 w-[450px] text-amber-50 text-[10px]">
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              1
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              2
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              3
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]  bg-amber-600 rounded-[10px] shadow-lg shadow-amber-400">
              4
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              5
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              6
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              7
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              8
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              9
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              10
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              11
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              12
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              13
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              14
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              15
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              16
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              17
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              18
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              19
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              20
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              21
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              22
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              23
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              24
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              25
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              26
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              27
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              28
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              29
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              30
            </span>
            <span className="flex justify-center items-center w-7 h-7 text-[14px]">
              31
            </span>
          </div>
        </div>

        <div className="events w-[60%] h-[100%]">
          <div className="popup  flex flex-col justify-center items-center gap-6 absolute w-[420px] h-[320px] rounded-[8px] p-4 top-[45%] left-[15rem] bg-slate-900 shadow-lg shadow-slate-900/95 ">
            <div className="time-input flex gap-2 ">
              <div className="events-popup-time w-[4rem]  bg-blue-500 rounded-[1rem]  shadow-md shadow-blue-400  flex justify-center items-center text-amber-50">
                Time
              </div>
              <input
                className="hours w-[4rem] h-[2rem] text-center bg-transparent border  border-t-2 border-t-blue-500 border-b-blue-500 border-b-2 border-r-transparent border-l-transparent text-amber-50 webkit-appearancess"
                type="number"
                name="hours"
                min={0}
                max={24}
              />
              <input
                className="minutes w-[4rem] h-[2rem] text-center bg-transparent border  border-t-2 border-t-blue-500 border-b-blue-500 border-b-2 border-r-transparent border-l-transparent text-amber-50"
                type="number"
                name="minutes"
                min={0}
                max={60}
              />
            </div>

            <textarea
              className="w-[20rem] resize-none bg-gray-800 text-amber-50 border-none rounded-[4px] p-[1rem] "
              placeholder="Enter event text (Maximum 60 charactors)"
            ></textarea>
            <button className="events-popup-btn w-[20rem] h-[2rem] rounded-[4px] bg-amber-500 shadow-md shadow-amber-300 text-amber-50 font-bold cursor-pointer hover:tracking-wider">
              Add Event
            </button>
            <button className="close-events-popup absolute top-[1rem] right-[1rem] bg-transparent border-none cursor-pointer text-2xl text-amber-500">
              <IoIosClose />
            </button>
          </div>

          <div className="event w-[100%] h-[5rem] bg-blue-500  p-[1rem] gap-4 rounded-2xl flex items-center">
            <div className="event-date-wrapper flex flex-col items-center w-[20%]  border border-r-amber-200 ">
              <div className="event-data text-[14px] text-amber-50">
                May 15, 2025
              </div>
              <div className="event-time text-[14px] text-amber-50 font-bold">
                10:00
              </div>
            </div>
            <div className="event-text text-amber-50 w-[75%] p-2 text-[15px] ">
              Meeting with Mirna
            </div>
            <div className="event-buttons  w-8 h-12 flex justify-center items-center text-amber-50 cursor-pointer flex-col gap-2">
              <i>
                <FaRegEdit className="w-5 text-[15px]" />
              </i>
              <i>
                <TiDelete className="w-5 text-[19px]" />
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
