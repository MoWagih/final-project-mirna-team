import React, { useEffect, useState } from 'react';
import TeacherSingleExam from './TeacherSingleExam';
import TeacherNewExam from './TeacherNewExam';
import { useModal } from '../Store/Zustand';
import axios from 'axios';

export default function TeacherExams() {
  const { newExam, openNewExam } = useModal();
  const [exams, setExams] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const refreshExams = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get('http://82.112.241.233:1400/api/exams');
      setExams(res.data.data);
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
    <div className="grow bg-blue-950 p-3 sm:h-[100vh] sm:overflow-hidden flex flex-col gap-3">
      <div className="bg-gray-900 p-4 rounded-2xl text-white h-full overflow-hidden">
        <div className="p-2 flex justify-between">
          <h1 className="text-[26px]">Exams</h1>
          <button onClick={openNewExam} className="ps-2 pe-2 p-1 bg-blue-800 rounded-2xl">
            Create New Exam
          </button>
        </div>

        <div className="p-2 h-[85vh] overflow-auto flex flex-col gap-6">
          {isLoading ? (
            <div>جاري تحميل الامتحانات...</div>
          ) : exams.length > 0 ? (
            exams.map((el) => (
              <TeacherSingleExam key={el.id} title={el.exam_title} points={el.exam_points} />
            ))
          ) : (
            <div>لا توجد امتحانات بعد!</div>
          )}
        </div>

        {newExam && <TeacherNewExam refreshExams={refreshExams} />}
      </div>
    </div>
  );
}