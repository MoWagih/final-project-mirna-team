import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import course1 from "../../assets/img/course1.png"
import teacher from "../../assets/img/teacher.png"
import { useModal } from "../Store/Zustand";
import ClassroomLive from "./ClassroomLive";
import { GoPlus } from "react-icons/go";
import SingleSession from "./SingleSession";
import AddNewSession from "./AddNewSession";

export default function TeacherClassroom() {

const { classRoomLive , newSessionModal , openNewSessionModal } = useModal();

  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-amber-50 h-8 py-4 px-2 text-3xl">Classroom</h1>
      <Navbar />
      {/* Teacher ClassRoom */}
      <div className="container flex flex-col w-full bg-gray-800 rounded-2xl border-8 border-slate-900 p-4 gap-5">
         {/* Current Sessions and Add New Session  */}
         <div className="p-2 flex items-center text-white justify-between">
            <h2>Current Sessions</h2>
            {/* Add new Session */}
            <div className="flex items-center gap-3">
                <GoPlus />
                <p onClick={openNewSessionModal}>Add New Session</p>
            </div>
         </div>

         {/* Single Session */}
         <SingleSession />

          {
            classRoomLive && <ClassroomLive />
          }

          {
            newSessionModal && <AddNewSession />
          }
  
        </div>
      </div>
    // </div>
  );
}
