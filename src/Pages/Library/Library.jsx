import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { IoMdDownload } from "react-icons/io";
import book1 from "../../assets/book1.png";
import book2 from "../../assets/book2.png";
import book3 from "../../assets/book3.png";
import book4 from "../../assets/book4.png";
import book5 from "../../assets/book5.png";
import book6 from "../../assets/book6.png";
import book7 from "../../assets/book7.png";
import book8 from "../../assets/book8.png";
import { Link } from "react-router-dom";

export default function Library() {
  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-amber-50 h-4 p-4 px-2 text-3xl">Library</h1>
      <Navbar />

      <div className="h-[90%] w-full border-7 border-slate-900 bg-gray-800  flex gap-3 p-3 flex-col mb-2 rounded-2xl">
        <div className="top w-full flex gap-5 items-center justify-center h-[49%] rounded-2xl ">
          <div className="w-[25%] rounded-2xl p-1 h-[100%] cursor-pointer bg-slate-900  shadow-lg shadow-amber-100">
            <div className="bookImg w-full h-[86%] flex justify-center">
              <img className="w-70 h-full rounded-2xl" src={book1} alt="" />
            </div>
            <div className="bookDiscription w-full h-[15%] flex justify-between items-center">
              <p className="text-amber-500 font-bold">Chemistry</p>
              <a
                href="https://drive.google.com/uc?export=download&id=1IkqC34l4cBHxM5ECe1bMPtO6sDIH7ByZ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  <IoMdDownload className="text-amber-500 " />{" "}
                </button>
              </a>
            </div>
          </div>

          <div className="w-[25%] rounded-2xl p-1 h-[100%] cursor-pointer bg-slate-900  shadow-lg shadow-amber-100">
            <div className="bookImg w-full h-[86%] flex justify-center">
              <img className="w-70 h-full rounded-2xl" src={book2} alt="" />
            </div>
            <div className="bookDiscription w-full h-[15%] flex justify-between items-center">
              <p className="text-amber-500 font-bold">Organic</p>
              <IoMdDownload className="text-amber-500 " />
            </div>
          </div>

          <div className="w-[25%] rounded-2xl p-1 h-[100%] cursor-pointer bg-slate-900  shadow-lg shadow-amber-100">
            <div className="bookImg w-full h-[86%] flex justify-center">
              <img className="w-70 h-full rounded-2xl" src={book3} alt="" />
            </div>
            <div className="bookDiscription w-full h-[15%] flex justify-between items-center">
              <p className="text-amber-500 font-bold">Physics</p>
              <IoMdDownload className="text-amber-500 " />
            </div>
          </div>

          <div className="w-[25%] rounded-2xl p-1 h-[100%] cursor-pointer bg-slate-900  shadow-lg shadow-amber-100">
            <div className="bookImg w-full h-[86%] flex justify-center">
              <img className="w-70 h-full rounded-2xl" src={book4} alt="" />
            </div>
            <div className="bookDiscription w-full h-[15%] flex justify-between items-center">
              <p className="text-amber-500 font-bold">Physics</p>
              <IoMdDownload className="text-amber-500 " />
            </div>
          </div>
        </div>

        <div className="bottom w-full flex gap-5 items-center justify-center h-[49%] rounded-2xl ">
          <div className="w-[25%] rounded-2xl p-1 h-[100%] cursor-pointer bg-slate-900  shadow-lg shadow-amber-100">
            <div className="bookImg w-full h-[86%] flex justify-center">
              <img className="w-70 h-full rounded-2xl" src={book5} alt="" />
            </div>
            <div className="bookDiscription w-full h-[15%] flex justify-between items-center">
              <p className="text-amber-500 font-bold">Mathematics</p>
              <IoMdDownload className="text-amber-500 " />
            </div>
          </div>

          <div className="w-[25%] rounded-2xl p-1 h-[100%] cursor-pointer bg-slate-900  shadow-lg shadow-amber-100">
            <div className="bookImg w-full h-[86%] flex justify-center">
              <img className="w-70 h-full rounded-2xl" src={book6} alt="" />
            </div>
            <div className="bookDiscription w-full h-[15%] flex justify-between items-center">
              <p className="text-amber-500 font-bold">Mathematics</p>
              <IoMdDownload className="text-amber-500 " />
            </div>
          </div>

          <div className="w-[25%] rounded-2xl p-1 h-[100%] cursor-pointer bg-slate-900  shadow-lg shadow-amber-100">
            <div className="bookImg w-full h-[86%] flex justify-center">
              <img className="w-70 h-full rounded-2xl" src={book7} alt="" />
            </div>
            <div className="bookDiscription w-full h-[15%] flex justify-between items-center">
              <p className="text-amber-500 font-bold">English</p>
              <IoMdDownload className="text-amber-500 " />
            </div>
          </div>

          <div className="w-[25%] rounded-2xl p-1 h-[100%] cursor-pointer bg-slate-900  shadow-lg shadow-amber-100">
            <div className="bookImg w-full h-[86%] flex justify-center">
              <img className="w-70 h-full rounded-2xl" src={book8} alt="" />
            </div>
            <div className="bookDiscription w-full h-[15%] flex justify-between items-center">
              <p className="text-amber-500 font-bold">English</p>
              <IoMdDownload className="text-amber-500 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
