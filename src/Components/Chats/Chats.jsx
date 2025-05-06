import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import Img from "../../assets/student.jpeg";

export default function Chats() {
  return (
    <div className="parent w-100 h-full bg-slate-950 flex flex-col  gap-6 border-r-2 border-gray-800 pt-6 pr-5 overflow-hidden">
      <h1 className="text-2xl h-8  font-bold text-amber-50 ">Chats</h1>
      <div className="searchBar w-80 h-10 bg-transparent rounded-2xl p-2 border-2 border-slate-950 shadow-lg shadow-amber-100 flex gap-3">
        <BiSearchAlt className="text-2xl text-amber-50" />
        <input
          className="text-gray-400"
          type="text"
          placeholder="Search here..."
        />
      </div>
      <div className="w-full h-[80%] px-4 py-2 border-2 border-slate-950 bg-transparent shadow-lg shadow-amber-100 rounded-2xl flex flex-col gap-2">
        <p className="text-gray-500 w-full h-5 px-2">Recent</p>
        <div className="chatsContainer w-full h-[600px]   flex flex-col gap-2 overflow-auto">
          <div className="w-full h-[13%]  flex items-center justify-between">
            <img className="w-15 h-15 rounded-[50%]" src={Img} alt="" />
            <div className="text w-[80%] h-full  flex flex-col gap-1 justify-center ">
              <p className="text-amber-50 ">Mirna Faried</p>
              <p className="text-amber-50 ">Bs bgd 3ndy soaal!</p>
            </div>
          </div>
          <div className="w-full h-[13%]  flex items-center justify-between">
            <img className="w-15 h-15 rounded-[50%]" src={Img} alt="" />
            <div className="text w-[80%] h-full  flex flex-col gap-1 justify-center ">
              <p className="text-amber-50 ">Marnona</p>
              <p className="text-amber-50 ">Anty helwa kda azay!</p>
            </div>
          </div>
          <div className="w-full h-[13%]  flex items-center justify-between">
            <img className="w-15 h-15 rounded-[50%]" src={Img} alt="" />
            <div className="text w-[80%] h-full  flex flex-col gap-1 justify-center ">
              <p className="text-amber-50 ">Mero</p>
              <p className="text-amber-50 ">anty tt7ty felmat7f!</p>
            </div>
          </div>
          <div className="w-full h-[13%]  flex items-center justify-between">
            <img className="w-15 h-15 rounded-[50%]" src={Img} alt="" />
            <div className="text w-[80%] h-full  flex flex-col gap-1 justify-center ">
              <p className="text-amber-50 ">Mira</p>
              <p className="text-amber-50 ">anty ely 3aml rsam!</p>
            </div>
          </div>
          <div className="w-full h-[13%]  flex items-center justify-between">
            <img className="w-15 h-15 rounded-[50%]" src={Img} alt="" />
            <div className="text w-[80%] h-full  flex flex-col gap-1 justify-center ">
              <p className="text-amber-50 ">Marnosh</p>
              <p className="text-amber-50 ">feky 7aga btshdny!</p>
            </div>
          </div>
          <div className="w-full h-[13%]  flex items-center justify-between">
            <img className="w-15 h-15 rounded-[50%]" src={Img} alt="" />
            <div className="text w-[80%] h-full  flex flex-col gap-1 justify-center ">
              <p className="text-amber-50 ">MarMar</p>
              <p className="text-amber-50 ">ded ely bytbny!</p>
            </div>
          </div>
          <div className="w-full h-[13%]  flex items-center justify-between">
            <img className="w-15 h-15 rounded-[50%]" src={Img} alt="" />
            <div className="text w-[80%] h-full  flex flex-col gap-1 justify-center ">
              <p className="text-amber-50 ">Marmora</p>
              <p className="text-amber-50 ">anty wla leky ay !!!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
