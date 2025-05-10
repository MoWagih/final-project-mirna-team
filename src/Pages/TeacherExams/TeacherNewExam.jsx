import React, { useState } from 'react';
import SingleQuestion from '../../Components/Exams/SingleQuestion';
import AddNewQuestion from '../../Components/Exams/AddNewQuestion';
import { useModal } from '../Store/Zustand';
import axios from 'axios';

export default function TeacherNewExam({ refreshExams }) {
  const { modalStatus, openModal, closeNewExam } = useModal();
  const [examTitle, setExamTitle] = useState('');
  const [examDuration, setExamDuration] = useState('');
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  const publishExam = async () => {
    if (!examTitle || !examDuration || questions.length === 0) {
      alert('يرجى ملء عنوان الامتحان، المدة، وإضافة سؤال واحد على الأقل');
      return;
    }

    setIsLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('لم يتم العثور على توكن تسجيل الدخول. يرجى تسجيل الدخول أولاً.');
      }

      // الخطوة 1: إنشاء الأسئلة في /questions
      const questionIds = [];
      for (const question of questions) {
        const questionData = {
          data: {
            text: question.question_text,
            answers: question.options.map(opt => opt.text),
            correct: question.correct_answer, // غيرنا correct_answer لـ correct
            score: question.points, // غيرنا points لـ score
            publishedAt: new Date().toISOString(),
          },
        };
        const questionResponse = await axios.post(
          'http://82.112.241.233:1400/api/questions',
          questionData,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );
        questionIds.push(questionResponse.data.data.id);
      }

      // الخطوة 2: إنشاء الامتحان مع معرفات الأسئلة
      const examData = {
        data: {
          title: examTitle, // غيرنا exam_title لـ title
          duration: examDuration, // غيرنا exam_duration لـ duration
          total_points: questions.reduce((total, q) => total + q.points, 0), // غيرنا exam_points لـ total_points
          questions: questionIds,
          publishedAt: new Date().toISOString(),
        },
      };
      const examResponse = await axios.post(
        'http://82.112.241.233:1400/api/exams',
        examData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('تم نشر الامتحان بنجاح:', examResponse.data);
      closeNewExam();
      refreshExams();
    } catch (error) {
      console.error('فشل نشر الامتحان:', {
        message: error.message,
        code: error.code,
        response: error.response ? {
          status: error.response.status,
          data: error.response.data,
        } : null,
        request: error.request ? error.request : null,
      });
      alert(`فشل نشر الامتحان: ${error.response?.data?.error?.message || error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full bg-blue-950 p-10 h-[100vh] flex flex-col gap-3 absolute top-0 left-0">
      <div className="bg-gray-900 p-4 rounded-2xl text-white h-full overflow-hidden">
        <div className="p-2 pb-4 flex justify-between">
          <h1 className="text-[26px]">Exams</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                console.log('Clicked New Question, modalStatus:', modalStatus);
                openModal();
              }}
              className="ps-2 pe-2 p-1 bg-blue-800 rounded-2xl"
            >
              New Question
            </button>
            <button
              onClick={publishExam}
              disabled={isLoading}
              className="ps-2 pe-2 p-1 bg-green-800 rounded-2xl"
            >
              {isLoading ? 'Publishing...' : 'Publish Exam'}
            </button>
            <button onClick={closeNewExam} className="ps-2 pe-2 p-1 underline">
              Go Back
            </button>
          </div>
        </div>

        <div className="p-2 rounded-2xl">
          <form className="p-2 flex flex-col gap-3">
            <div className="p-1 flex items-center gap-3">
              <div className="flex items-center gap-2">
                <label htmlFor="examTitle">Exam Title:</label>
                <input
                  type="text"
                  className="border rounded p-2 border-blue-600"
                  placeholder="Enter Exam Title"
                  value={examTitle}
                  onChange={(e) => setExamTitle(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="examDuration">Duration:</label>
                <input
                  type="text"
                  className="border rounded p-2 border-blue-600"
                  placeholder="Enter Exam Duration"
                  value={examDuration}
                  onChange={(e) => setExamDuration(e.target.value)}
                />
              </div>
              <p>
                Total Questions: <span className="text-[#9c9c9c]">{questions.length}</span>
              </p>
            </div>

            <div className="bg-green-950 p-4 h-[68vh] overflow-auto rounded-2xl flex flex-col gap-2.5">
              {questions.length > 0 ? (
                questions.map((question, index) => (
                  <SingleQuestion key={index} question={question} />
                ))
              ) : (
                <p>لا توجد أسئلة بعد، أضف سؤالاً جديداً!</p>
              )}
            </div>

            {modalStatus && <AddNewQuestion addQuestion={addQuestion} />}
          </form>
        </div>
      </div>
    </div>
  );
}