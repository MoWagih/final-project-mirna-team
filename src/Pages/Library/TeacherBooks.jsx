import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SingleBook from "./SingleBook";
import { GoPlus } from "react-icons/go";
import { useModal } from "../Store/Zustand";
import AddNewBook from "./AddNewBook";
import axios from "axios";

export default function TeacherBooks() {
  const { addBook, openBookModal } = useModal();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = () => {
    setLoading(true);
    axios
      .get("http://82.112.241.233:1400/api/books?populate=*")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    axios
      .get("http://82.112.241.233:1400/api/books?populate=*")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false); 
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-amber-50 h-4 p-4 px-2 text-3xl">Library</h1>
      <Navbar />

      {/* Titles and Add Book */}
      <div className="flex items-center justify-between pt-3 pb-3 text-white">
        <h2>Uploaded Books</h2>
        <div onClick={openBookModal} className="flex items-center gap-3 cursor-pointer">
          <GoPlus />
          <p>Add New Book</p>
        </div>
        {addBook && <AddNewBook fetchBooks={fetchBooks} />}
      </div>

      {/* Loader or Books */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-white border-t-transparent"></div>
        </div>
      ) : (
        <div className="h-full border-7 border-slate-900 bg-gray-800 gap-3 p-3 flex flex-wrap mb-2 rounded-2xl overflow-auto">
          {books.map((el) => (
            <SingleBook
              key={el.id}
              title={el.book_title}
              courseImg={`http://82.112.241.233:1400${el.book_cover?.formats?.medium?.url}`}
              bookLink={el.book_link}
            />
          ))}
        </div>
      )}
    </div>
  );
}
