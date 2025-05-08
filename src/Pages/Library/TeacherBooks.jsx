import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SingleBook from "./SingleBook";
import { GoPlus } from "react-icons/go";
import { useModal } from "../Store/Zustand";
import AddNewBook from "./AddNewBook";


export default function TeacherBooks() {

    const { addBook , openBookModal } = useModal();

  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-amber-50 h-4 p-4 px-2 text-3xl">Library</h1>
      <Navbar />
      {/* Titles and Add Book */}
        <div className="flex -items-center justify-between pt-3 pb-3 text-white">
            <h2>Uploaded Books</h2>
            <div onClick={openBookModal} className="flex items-center gap-3">
                <GoPlus />
                <p>Add New Book</p>
            </div>
            {
                addBook && <AddNewBook />
            }
        </div>
      {/* Books Container */}
      <div className="h-full border-7 border-slate-900 bg-gray-800 gap-3 p-3 flex flex-wrap mb-2 rounded-2xl overflow-auto">
        <SingleBook />
        <SingleBook />
        <SingleBook />
      </div>
    </div>
  );
}
