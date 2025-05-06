import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Word from "../../assets/Word.png";
import Excel from "../../assets/Excel.png";
import Powerpoint from "../../assets/Powerpoint.png";
import Length from "../../assets/Len.png";
import Doc from "../../assets/Doc.png";
import Drive from "../../assets/Drive.png";

export default function Integration() {
  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-amber-50 h-8 py-4 px-2 text-3xl">Integration</h1>
      <Navbar />
      <div className="h-full w-full bg-cyan-9500 bg-gray-800 border-10 border-slate-900 flex gap-2 flex-col rounded-2xl p-2 mb-2">
        <div className="top w-full flex gap-5  items-center justify-center h-[50%] rounded-2xl">
          <div className="w-[30%] flex flex-col justify-center items-center rounded-2xl h-[90%] shadow-lg shadow-slate-950 bg-slate-900">
            <img className="w-40 h-40 p-1" src={Drive} alt="" />
            <button className="p-[15px] w-[100px] h-[40px] bg-slate-950 shadow-lg shadow-amber-50 text-amber-50 rounded-[20px] cursor-pointer flex justify-center items-center">
              <a
                href="https://drive.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open
              </a>
            </button>
          </div>
          <div className="w-[30%] flex flex-col justify-center items-center rounded-2xl h-[90%] shadow-lg shadow-slate-950  bg-slate-900">
            <img className="w-40 h-40 p-1" src={Length} alt="" />
            <button className="p-[15px] w-[100px] h-[40px] bg-slate-950 shadow-lg shadow-amber-50 text-amber-50 rounded-[20px] cursor-pointer flex justify-center items-center">
              <a
                href="https://lens.google"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open
              </a>
            </button>
          </div>
          <div className="w-[30%] flex flex-col justify-center items-center rounded-2xl h-[90%] shadow-lg shadow-slate-950  bg-slate-900">
            <img className="w-60 h-40 p-1" src={Doc} alt="" />
            <button className="p-[15px] w-[100px] h-[40px] bg-slate-950 shadow-lg shadow-amber-50 text-amber-50 rounded-[20px] cursor-pointer flex justify-center items-center">
              <a
                href="https://docs.google.com/document"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open
              </a>
            </button>
          </div>
        </div>
        <div className="bottom w-full flex  items-center justify-center gap-5 h-[50%] rounded-2xl">
          <div className="w-[30%] flex flex-col justify-center items-center rounded-2xl h-[90%] shadow-lg shadow-slate-950  bg-slate-900">
            <img className="w-50 h-40 p-1" src={Word} alt="" />
            <button className="p-[15px] w-[100px] h-[40px] bg-slate-950 shadow-lg shadow-amber-50 text-amber-50 rounded-[20px] cursor-pointer flex justify-center items-center">
              <a
                href="https://www.office.com/launch/word"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open
              </a>
            </button>
          </div>
          <div className="w-[30%] flex flex-col justify-center items-center rounded-2xl h-[90%] shadow-lg shadow-slate-950  bg-slate-900">
            <img className="w-60 h-40 p-1" src={Powerpoint} alt="" />
            <button className="p-[15px] w-[100px] h-[40px] bg-slate-950 shadow-lg shadow-amber-50 text-amber-50 rounded-[20px] cursor-pointer flex justify-center items-center">
              <a
                href="https://www.office.com/launch/powerpoint"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open
              </a>
            </button>
          </div>
          <div className="w-[30%] flex flex-col justify-center items-center rounded-2xl h-[90%] shadow-lg shadow-slate-950  bg-slate-900">
            <img className="w-60 h-40 p-1" src={Excel} alt="" />
            <button className="p-[15px] w-[100px] h-[40px] bg-slate-950 shadow-lg shadow-amber-50 text-amber-50 rounded-[20px] cursor-pointer flex justify-center items-center">
              <a
                href="https://www.office.com/launch/excel"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
