import React from 'react'

export default function AttendanceWidget() {
  return (
    <div className="bg-gray-800 p-3 grow rounded-2xl">
    {/* Heading and Group Selection */}
    <div className="flex items-center text-white justify-between">
        <h3 className="font-medium text-lg">Attendance Overview</h3>
        <select>
            <option value="Group A">Group A</option>
        </select>
    </div>

    <div className="flex justify-evenly p-2 text-white">
        <div className="bg-slate-900/90 rounded-2xl p-10 flex flex-col justify-center items-center">
            <p>31</p>
            <p>Total no. of Students</p>
        </div>

        <div className="bg-slate-900/90 rounded-2xl p-10 flex flex-col justify-center items-center">
            <p>31</p>
            <p>Total no. of Students</p>
        </div>

        <div className="bg-slate-900/90 rounded-2xl p-10 flex flex-col justify-center items-center">
            <p>31</p>
            <p>Total no. of Students</p>
        </div>
    </div>
</div>
  )
}
