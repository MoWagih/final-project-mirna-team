import React from 'react'
import { useModal } from '../../Pages/Store/Zustand'

export default function AddNewChapter() {

    const { closeNewChapterModal } = useModal();

  return (
    <div onClick={closeNewChapterModal} className="bg-[#00000084] flex items-center justify-center w-full h-[100vh] absolute top-0 left-0">
        {/* Frame */}
        <div className="bg-blue-950 w-[50%] rounded-2xl p-6">
            <form className="flex flex-col gap-3">
                {/* Question Title */}
                <div className="p-1 flex flex-col gap-2 w-full">
                    <label htmlFor="questionTitle">Chapter Title</label>
                    <input type="text" placeholder="Enter Chapter Title" className="border p-2 rounded" />
                    <label htmlFor="downloadLink">Download Link</label>
                    <input type="text" placeholder="Enter Download Link" className="border p-2 rounded" />
                    <button className='bg-green-800 p-2 rounded'>Save</button>
                </div>
            </form>
        </div>
    </div>
  )
}
