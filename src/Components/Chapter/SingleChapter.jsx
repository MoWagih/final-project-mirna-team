import React from 'react'
import { FiDownload } from 'react-icons/fi'

export default function SingleChapter({ chapter }) {
  return (
    <div
      className='
        flex flex-col gap-4 
        bg-[#2c0b34] 
        p-2 
        rounded 
        shadow-2xl 
        transition 
        duration-300 
        ease-in-out 
        transform 
        hover:scale-[1.02] 
        hover:bg-[#584287] 
        hover:shadow-purple-900
        overflow-hidden
      '
    >
      <div className='flex items-center justify-between ps-3 pe-3'>
        <div className='rounded w-full text-white gap-4 flex items-center overflow-hidden'>
          <h1 className='text-[18px] border-r-2 border-amber-500 pe-2 w-[28%] truncate'>
            {chapter.chapter_title}
          </h1>
          <p className='text-[14px] w-[60%] truncate'>
            {chapter.chapter_description}
          </p>
        </div>

        <FiDownload className='text-[28px] bg-purple-950 p-1 rounded text-white cursor-pointer hover:bg-purple-800 transition duration-300' />
      </div>
    </div>
  )
}
