import React from 'react'
import SingleQuestion from '../../Components/Exams/SingleQuestion'
import AddNewQuestion from '../../Components/Exams/AddNewQuestion'
import { useModal } from '../Store/Zustand'

export default function TeacherNewExam() {

const { modalStatus , openModal , closeNewExam } = useModal();

  return (
    <div className="w-full bg-blue-950 p-10 h-[100vh] flex flex-col gap-3 absolute top-0 left-0">        
        {/* Exams Container */}
        <div className="bg-gray-900 p-4 rounded-2xl text-white h-full overflow-hidden">
            {/* Title and Actions */}
            <div className="p-2 pb-4 flex justify-between">
                <h1 className="text-[26px]">Exams</h1>
                <div className="flex items-center gap-3">
                    <button onClick={openModal} className="ps-2 pe-2 p-1 bg-blue-800 rounded-2xl">New Question</button>
                    <button className="ps-2 pe-2 p-1 bg-green-800 rounded-2xl">Publish Exam</button>
                    <button onClick={closeNewExam} className="ps-2 pe-2 p-1 underline">Go Back</button>
                </div>
            </div>

            {/* Exam */}
            <div className="p-2 rounded-2xl">
                <form className="p-2 flex flex-col gap-3">
                    {/* Enter Title and Duration */}
                    <div className="p-1 flex items-center gap-3">
                        {/* Title */}
                        <div className="flex items-center gap-2">
                            <label htmlFor="examTitle">Exam Title:</label>
                            <input type="text" className="border rounded p-2 border-blue-600" placeholder="Enter Exam Title" />
                        </div>
                        {/* Duration */}
                        <div className="flex items-center gap-2">
                            <label htmlFor="examDuration">Duration:</label>
                            <input type="text" className="border rounded p-2 border-blue-600" placeholder="Enter Exam Duration" />
                        </div>

                        <p>Total Question is: <span className="text-[#9c9c9c]">2</span></p>
                     </div>
                    
                     {/* Questions */}
                     <div className="bg-green-950 p-4 h-[68vh] overflow-auto rounded-2xl flex flex-col gap-2.5">


                        <SingleQuestion />
                        <SingleQuestion />
                     </div>

                     {/* New Question Modal */}
                        {
                            modalStatus && <AddNewQuestion /> 
                        }
                </form>
            </div>

        </div>
    </div>
  )
}
