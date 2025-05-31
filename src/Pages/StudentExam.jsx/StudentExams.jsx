import React, { useEffect, useState } from 'react'
import TeacherSingleExam from '../TeacherExams/TeacherSingleExam'
import axios from 'axios';
import { useModal } from '../Store/Zustand';
import StudentExam from './StudentExam';

export default function StudentExams() {
  const [exams, setExams] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ selectedExam , setSelectedExam ] = useState(null);

  const { studentExamModal , openStudentExam } = useModal();

  const refreshExams = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get('http://82.112.241.233:1400/api/exams?populate=questions');
      setExams(res.data.data);
      console.log(res.data.data)
    } catch (error) {
      console.error('فشل جلب الامتحانات:', error);
      alert('حدث خطأ أثناء جلب الامتحانات');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshExams();
  }, []);


  return (
    <div className="grow bg-blue-950 p-3 sm:h-[95vh] sm:overflow-hidden flex flex-col gap-3 ">
      <div className="bg-gray-900 p-4 rounded-2xl text-white h-full overflow-hidden">
        <div className="p-2 flex justify-between">
          <h1 className="text-[26px]">Exams</h1>
        </div>

        <div className="p-2 h-[85vh] overflow-auto flex flex-col gap-6">
          { isLoading ? (
            <div>جاري تحميل الامتحانات...</div>
          ) : exams.length > 0 ? (
            exams.map((el , index) => (
              <div onClick={()=>{
                openStudentExam() , setSelectedExam(el.documentId)
              }}>
                <TeacherSingleExam key={el.id} title={el.exam_title} points={el.exam_points} duration={el.exam_duration} />
              </div>
            ))
          ) : (
            <div>لا توجد امتحانات بعد!</div>
          )}
        </div>

            {
              studentExamModal && <StudentExam studentName="Mohamed Ali"  examId={selectedExam} />
            }
      </div>
    </div>
  )
}
