import React from "react";

function QuestionsCountSlider({ count, setCount }) {
  // Max number of questions shown on the slider and the tick marks
  const maxQuestions = 8;
  // Precompute tick marks for the slider (1..maxQuestions)
  const questionMarks = Array.from(
    { length: maxQuestions },
    (_, idx) => idx + 1,
  );

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <label className="text-sm font-medium text-gray-300">
          Number of Questions
        </label>
        <span className="text-sm font-bold text-blue-400">{count}</span>
      </div>
      <input
        type="range"
        min="1"
        max={maxQuestions}
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
      />
      <div className="flex justify-between text-[10px] text-gray-500 px-1">
        {questionMarks.map((num) => (
          <span key={num} className="w-3 text-center">
            {num}
          </span>
        ))}
      </div>
    </div>
  );
}

export default QuestionsCountSlider;
