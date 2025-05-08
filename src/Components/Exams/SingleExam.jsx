
export default function SingleExam() {
  return (
    <div className="bg-blue-950 p-4 rounded-2xl flex items-center justify-between shadow-md">
        {/* Exam Title */}
        <p>Chemistry Exam</p>

        {/* Questions per Exam */}
        <p>10 Questions: <span className="text-[#9c9c9c]">100 Point</span></p>

        {/* Exam Status */}
        <p>Status: <span className="text-[#9c9c9c]">Draft</span></p>

        {/* Edit */}
        <button className="bg-blue-700 p-2 rounded-2xl">Edit</button>

    </div>
  )
}
