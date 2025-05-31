import React from 'react'

export default function TeacherSingleExam({ title , points , duration }) {
  return (
    <div className="bg-blue-950 p-4 rounded-2xl flex items-center justify-between shadow-md">
        {/* Exam Title */}
        <p>{title}</p>

        {/* Questions per Exam */}
        <p>Total Points: <span className="text-[#9c9c9c]">{points}</span></p>

        <p>Duration: {duration} min</p>

    </div>
  )
}
