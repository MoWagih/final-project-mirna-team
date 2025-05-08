import React from 'react'

export default function SingleQuestion() {
  return (
    <div className='bg-blue-950 ps-3 pe-3 p-4 rounded-2xl flex items-center justify-between shadow-md'>
      {/* Question Title */}
      <div className='flex items-center gap-5'>
        <p>-</p>
        <p>Question Title</p>
      </div>
      {/* Actions on Questions */}
      <div className='flex items-center gap-3'>
        <button className='bg-blue-700 ps-2 pe-2 p-1 rounded-2xl'>Edit</button>
        <button className='bg-blue-700 ps-2 pe-2 p-1 rounded-2xl'>Delete</button>
      </div>
    </div>
  )
}
