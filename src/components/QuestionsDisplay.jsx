import React, { useState } from "react";
import ExportPaperButton from "./ExportPaperButton";

function QuestionsDisplay({ questions }) {
  const [visibleMarkSchemes, setVisibleMarkSchemes] = useState({});

  const toggleMarkScheme = (index) =>
    setVisibleMarkSchemes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));

  return (
    <section className="w-full px-6 pb-24">
      <div className="max-w-4xl mx-auto">
        {questions.length > 0 && (
          <>
            <h2 className="text-3xl font-bold mb-6">Generated Questions</h2>

            <div className="space-y-4">
              {questions.map((q, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                  <p className="text-lg font-semibold">
                    {index + 1}. {q.question}
                  </p>

                  <p className="text-sm text-blue-400 mt-2">{q.marks} marks</p>

                  <button
                    onClick={() => toggleMarkScheme(index)}
                    className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition"
                  >
                    {visibleMarkSchemes[index]
                      ? "Hide Mark Scheme"
                      : "Show Mark Scheme"}
                  </button>

                  {visibleMarkSchemes[index] && (
                    <div className="mt-4 rounded-lg bg-slate-900/70 border border-green-500/20 p-4">
                      <h3 className="text-green-400 font-semibold mb-3">
                        Mark Scheme
                      </h3>

                      {q["Mark scheme"]?.length ? (
                        <div className="space-y-2">
                          {q["Mark scheme"].map((mark, i) => (
                            <p key={i} className="text-gray-300">
                              <span className="text-green-400 font-semibold">
                                Mark {i + 1}:
                              </span>{" "}
                              {mark}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-400">
                          No mark scheme provided.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <ExportPaperButton
                subject={"Computer Science"}
                topic="Input Devices"
                difficulty="Medium"
                questions={questions}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default QuestionsDisplay;
