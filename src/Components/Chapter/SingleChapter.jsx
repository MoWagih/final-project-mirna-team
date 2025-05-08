import React from 'react'

export default function SingleChapter() {
  return (
    <div className='flex flex-col gap-4'>
    <div className='flex items-center justify-between ps-3 pe-3'>
            <div className='p-5 rounded w-[20%] text-center text-white bg-blue-900'>
                What is Matter?
            </div>
            <p className='text-[14px] w-[60%]'>A common or traditional definition of matter is "anything that has mass and volume (occupies space)". </p>
            <button className='bg-green-800 p-3 rounded-2xl'>
                Download
            </button>
        </div>
    </div>
  )
}
