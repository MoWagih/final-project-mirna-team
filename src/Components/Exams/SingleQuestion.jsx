import React from 'react';

export default function SingleQuestion({ question }) {
  return (
    <div className="bg-gray-800 p-4 rounded-2xl text-white">
      <h3 className="text-lg">{question.question_text}</h3>
      <ul className="mt-2">
        {question.options.map((option, index) => (
          <li key={index} className={option.label === question.correct_answer ? 'text-green-400' : ''}>
            {option.label}: {option.text}
          </li>
        ))}
      </ul>
      <p className="mt-2">Points: {question.points}</p>
    </div>
  );
}