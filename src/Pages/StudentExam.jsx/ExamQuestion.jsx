// ExamQuestion.jsx
export default function ExamQuestion({ question, index, selectedAnswer, onAnswer }) {
  return (
    <div className='bg-[#073a81] p-4 rounded text-white'>
      <div className='flex items-center justify-between'>
        <p className='grow pe-4'>{index}. {question.question_title}</p>
        <p className='w-[10%]'>Marks: {question.points}</p>
      </div>

      <div className='flex flex-col gap-3 pt-4'>
        {['a', 'b', 'c', 'd'].map(choice => (
          <div key={choice} className='flex items-center gap-2'>
            <input
              type='radio'
              id={`${question.id}_${choice}`}
              name={`question_${question.id}`}
              value={choice}
              checked={selectedAnswer === choice}
              onChange={() => onAnswer(question.id, choice)}
            />
            <label htmlFor={`${question.id}_${choice}`}>{question[`choice_${choice}`]}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
