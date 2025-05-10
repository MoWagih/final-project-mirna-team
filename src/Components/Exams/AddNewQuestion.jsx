import React, { useState } from 'react';
import { useModal } from '../../Pages/Store/Zustand';
import { GoPlus } from 'react-icons/go';

export default function AddNewQuestion({ addQuestion }) {
  const { closeModal } = useModal();
  const [questionTitle, setQuestionTitle] = useState('');
  const [choices, setChoices] = useState(['', '', '', '']);
  const [correctChoice, setCorrectChoice] = useState('A');
  const [points, setPoints] = useState(0.5);

  const handleSubmit = (e) => {
    e.preventDefault();
    // التحقق من الحقول
    if (!questionTitle || choices.some((choice) => !choice)) {
      alert('يرجى ملء عنوان السؤال وجميع الخيارات');
      return;
    }
    if (!points || points < 0.5 || points > 10) {
      alert('يرجى إدخال نقاط بين 0.5 و10');
      return;
    }

    const newQuestion = {
      question_text: questionTitle,
      options: choices.map((choice, index) => ({
        label: String.fromCharCode(65 + index), // A, B, C, D
        text: choice,
      })),
      correct_answer: correctChoice,
      points: Number(points),
    };

    addQuestion(newQuestion);
    closeModal();
  };

  return (
    <div
      onClick={closeModal}
      className="bg-[#00000084] flex items-center justify-center w-full h-[100vh] absolute top-0 left-0"
    >
      <div className="bg-blue-950 w-[50%] rounded-2xl p-6">
        <form onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit} className="flex flex-col gap-3">
          {/* Question Title */}
          <div className="p-1 flex flex-col gap-2 w-full">
            <label htmlFor="questionTitle">Question Title</label>
            <input
              type="text"
              placeholder="Enter Question Title"
              className="border p-2 rounded"
              value={questionTitle}
              onChange={(e) => setQuestionTitle(e.target.value)}
            />
          </div>

          {/* Choices */}
          <div className="p-2 flex items-center justify-between">
            {choices.map((choice, index) => (
              <div key={index} className="p-2 w-1/5 flex gap-2 items-center">
                <label>{String.fromCharCode(65 + index)}:</label>
                <input
                  type="text"
                  placeholder={`Choice ${String.fromCharCode(65 + index)}`}
                  className="w-full border p-1 rounded"
                  value={choice}
                  onChange={(e) => {
                    const newChoices = [...choices];
                    newChoices[index] = e.target.value;
                    setChoices(newChoices);
                  }}
                />
              </div>
            ))}
          </div>

          {/* Correct Choice and Points */}
          <div className="p-2 flex items-center gap-3">
            <p>Correct Choice is:</p>
            <select
              value={correctChoice}
              onChange={(e) => setCorrectChoice(e.target.value)}
              className="w-1/4 text-center bg-blue-800 rounded-2xl"
            >
              <option value="A">Choice A</option>
              <option value="B">Choice B</option>
              <option value="C">Choice C</option>
              <option value="D">Choice D</option>
            </select>

            <label htmlFor="points">Points:</label>
            <input
              type="number"
              max={10}
              min={0.5}
              step={0.5}
              className="border p-1 rounded"
              value={points}
              onChange={(e) => setPoints(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div  onClick={handleSubmit} className="flex gap-3 items-center bg-blue-800 justify-center p-2 rounded ">
            <GoPlus />
            <p>Add Question</p>
          </div>
        </form>
      </div>
    </div>
  );
}