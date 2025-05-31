import React, { useEffect, useState } from 'react';
import { useModal } from '../Store/Zustand';
import ExamQuestion from './ExamQuestion';
import axios from 'axios';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function StudentExam({ examId , studentName }) {
  const { closeStudentExam } = useModal();
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [answers, setAnswers] = useState({});
  const [ timeLeft , setTimeLeft ] = useState(null);
  const [examTitle, setExamTitle] = useState("");

  const handleAnswerChange = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleSubmitAnswers = async () => {
    const doc = new jsPDF();

    // const user = axios.get("/api/users-permissions/roles/:id").then((res)=>{
    //   console.log(res.data)
    // })
  
    doc.setFontSize(22);
    doc.text(`Student Name: ${studentName}`, 18, 32);
    doc.text(`Exam: ${examTitle}`, 18, 40);
  
    const tableData = questions.map((q, index) => {
      const studentAnswer = answers[q.id] || 'لم يُجب';
      const correctAnswer = q.correct_answer.toLowerCase();
      const isCorrect = studentAnswer === correctAnswer;
  
      return [
        index + 1,
        q.question_title,
        q[`choice_${studentAnswer}`] || '---',
        q[`choice_${correctAnswer}`],
        isCorrect ? '✅' : '❌'
      ];
    });
  
    autoTable(doc, {
      head: [['#', 'Question', 'Student Answer', 'Correct Answer', 'Result']],
      body: tableData,
      startY: 50,
    });
  
    // ✅ حول الـ PDF إلى Blob
    const pdfBlob = doc.output('blob');
    const file = new File([pdfBlob], `${studentName}_exam_answers.pdf`, {
      type: 'application/pdf',
    });

  
  
    // ✅ جهّز البيانات للإرسال
    const formData = new FormData();
    formData.append('files.studentAnswers', file); // هنا اسم الحقل في سترابي
    formData.append('data', JSON.stringify({
      examId: examId,
      user: userId,
    }));
  
    try {
      await axios.post('http://82.112.241.233:1400/api/exam-submissions', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('تم إرسال الامتحان بنجاح ✅');
    } catch (error) {
      console.error('❌ خطأ أثناء رفع الملف:', error);
      alert('حدث خطأ أثناء إرسال الملف');
    }
  
    closeStudentExam();
  };
  

  const fetchQuestions = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`http://82.112.241.233:1400/api/exams/${examId}?populate=questions`);
      const examData = res.data.data;
      setQuestions(examData.questions || []);
      setExamTitle(examData.exam_title);
      if (timeLeft === null && examData.exam_duration) {
        setTimeLeft(examData.exam_duration * 60); // exam_duration بالدقايق
      }
    } catch (error) {
      console.error("خطأ في جلب الأسئلة:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (examId) {
      fetchQuestions();
    }

        if (timeLeft === null) return;

      if (timeLeft === 0) {
        handleSubmitAnswers(); // خلّيه يبعت الإجابات تلقائي
        closeStudentExam();    // يقفل الامتحان
        return;
      }

      const timer = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearTimeout(timer);
  }, [examId , timeLeft]);

  return (
    <div className='h-full w-full bg-[#00000088] flex items-center justify-center absolute top-0 left-0 z-50'>
      <div className='w-[85%] h-[90%] p-5 bg-[#3b3b3b] rounded flex flex-col gap-3 overflow-auto'>
        {/* Titles */}
        <div className='flex items-center justify-between text-white'>
          <h1>{examTitle}</h1>
          <p>الوقت المتبقي: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</p>
          <p className='cursor-pointer text-red-400' onClick={closeStudentExam}>إغلاق</p>
        </div>

        {/* Student Questions */}
        <form className='flex flex-col gap-3'>
          {questions.map((q, idx) => (
            <ExamQuestion
              key={q.id}
              question={q}
              index={idx + 1}
              selectedAnswer={answers[q.id]}
              onAnswer={handleAnswerChange}
            />
          ))}

          <div
            onClick={handleSubmitAnswers}
            className='bg-green-700 text-white flex items-center justify-center p-2 rounded cursor-pointer mt-4'
          >
            <p>Send</p>
          </div>
        </form>
      </div>
    </div>
  );
}
