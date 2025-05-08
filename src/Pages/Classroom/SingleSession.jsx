import React from 'react'
import { useModal } from '../Store/Zustand'

export default function SingleSession() {

    const { openLiveClassRoom } = useModal();

  return (
    <div className="rounded-2xl bg-blue-900 shadow-lg flex items-center justify-between p-3 gap-2">
    {/* Session Name and Date */}
    <div className="courseName flex text-white gap-20 items-center">
      <p>Session Title</p>
      <p className="text-[14px]">Date: 1/1/2025</p>
    </div>
    <button onClick={openLiveClassRoom} className="bg-amber-500 cursor-pointer rounded-3xl text-amber-50 font-bold hover:tracking-wider h-10 w-40 shadow-amber-500">
      Open classroom
    </button>
  </div>
  )
}
