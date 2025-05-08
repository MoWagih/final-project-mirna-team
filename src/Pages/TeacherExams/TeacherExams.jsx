import React from 'react'
import TeacherSingleExam from './TeacherSingleExam'
import TeacherNewExam from './TeacherNewExam';
import { useModal } from '../Store/Zustand';

export default function TeacherExams() {

  const { newExam , openNewExam } = useModal();

  return (
    <div className="grow bg-blue-950 p-3 sm:h-[100vh] sm:overflow-hidden flex flex-col gap-3">        
        {/* Exams Container */}
        <div className="bg-gray-900 p-4 rounded-2xl text-white h-full overflow-hidden">
            {/* Title and Actions */}
            <div className="p-2 flex justify-between">
                <h1 className="text-[26px]">Exams</h1>
                <button onClick={openNewExam} className="ps-2 pe-2 p-1 bg-blue-800 rounded-2xl">Create New Exam</button>
            </div>

            {/* Exams */}
            <div className="p-2 h-[85vh] overflow-auto flex flex-col gap-6">
                <TeacherSingleExam />
                <TeacherSingleExam />
                <TeacherSingleExam />
            </div>

            {
              newExam && <TeacherNewExam />
            }
        </div>
    
    </div>
  )
}
