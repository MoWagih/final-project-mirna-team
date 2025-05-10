import React, { useState } from "react";
import { useModal } from "../Store/Zustand";
import axios from "axios";

export default function AddNewBook({  fetchBooks } ) {
  const { closeBookModal } = useModal();

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [cover, setCover] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

        const formData = new FormData();
      formData.append("files", cover);

      const uploadRes = await axios.post("http://82.112.241.233:1400/api/upload", formData);
      const uploadedImage = uploadRes.data[0];

      const bookData = {
        data: {
          book_title: title,
          book_link: link,
          book_cover: uploadedImage.id,
        },
      };

      await axios.post("http://82.112.241.233:1400/api/books", bookData);
        fetchBooks(); 
        closeBookModal();


    } catch (err) {
      console.error("Upload failed:", err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      onClick={closeBookModal}
      className="bg-[#00000084] flex items-center justify-center w-full h-[100vh] absolute top-0 left-0"
    >
      {/* Frame */}
      <div className="bg-blue-950 w-[50%] rounded-2xl p-6">
        <form onClick={(e) => e.stopPropagation()} className="flex flex-col gap-3" onSubmit={handleUpload}>
          <input
            type="text"
            placeholder="Book Title"
            className="border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter Download Link"
            className="border p-2 rounded"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
          <label htmlFor="imgUpload" className="text-white">Cover Img:</label>
          <input
            type="file"
            id="imgUpload"
            name="imgUpload"
            accept="image/*"
            className="border rounded p-2 text-white"
            onChange={(e) => setCover(e.target.files[0])}
            required
          />
          <button
            type="submit"
            className="bg-green-800 p-2 rounded text-white"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload"}
          </button>
        </form>
      </div>
    </div>
  );
}
