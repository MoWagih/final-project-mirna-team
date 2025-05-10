import React from 'react'

export default function SingleChapter({chapter}) {
  return (
    <div className='flex flex-col gap-4'>
    <div className='flex items-center justify-between ps-3 pe-3'>
            <div className='p-5 rounded w-[20%] text-center text-white bg-blue-900'>
               <h1>{chapter.chapter_title}</h1>
            </div>
            <p className='text-[14px] w-[60%]'>{chapter.chapter_description}</p>
            {/* ناقص بس تفعيل زرار التحميل */}
            <button className='bg-green-800 p-3 rounded-2xl'>Download</button>
        </div>
    </div>
  )
}
