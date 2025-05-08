import React from 'react'
import { useModal } from '../Store/Zustand';

export default function AddNewBook() {

    const { closeBookModal } = useModal();


  return (
    <div onClick={closeBookModal} className="bg-[#00000084] flex items-center justify-center w-full h-[100vh] absolute top-0 left-0">
        {/* Frame */}
        <div className="bg-blue-950 w-[50%] rounded-2xl p-6">
            <form onClick={(e)=>e.stopPropagation} className="flex flex-col gap-3">
                {/* Question Title */}
                <div className="p-1 flex flex-col gap-2 w-full">
                    <input type="text" placeholder="Book Title" className="border p-2 rounded" required />
                    <input type="text" placeholder="Enter Download Link" className="border p-2 rounded" required />
                    <label htmlFor="examTitle">Cover Img:</label>
                    <input type="file" id="img" name="imgUpload" accept="image/*" className="border rounded p-2" required  />
                    <button className='bg-green-800 p-2 rounded'>Upload</button>
                </div>
            </form>
        </div>
    </div>
  )
}
