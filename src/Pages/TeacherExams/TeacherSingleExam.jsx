import React from 'react'

export default function TeacherSingleExam({ title , points }) {
  return (
    <div className="bg-blue-950 p-4 rounded-2xl flex items-center justify-between shadow-md">
        {/* Exam Title */}
        <p>{title}</p>

        {/* Questions per Exam */}
        <p>10 Questions: <span className="text-[#9c9c9c]">{points}</span></p>

    </div>
  )
}
