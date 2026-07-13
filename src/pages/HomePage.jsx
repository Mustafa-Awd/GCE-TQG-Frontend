import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import QuestionsDisplay from "../components/QuestionsDisplay";
import { generateQuestions } from "../services/QuestionsGenerator";

function HomePage() {
  const [subject, setSubject] = useState("IGCSE ICT");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const [error, setError] = useState("");

  useEffect(() => {
    let timer;

    if (loading) {
      timer = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [loading]);

  const handleGenerateQuestions = async () => {
    try {
      setError(""); // Clear previous errors when parameters change
      setLoading(true);
      setElapsedTime(0);

      const data = await generateQuestions({
        subject: subject,
        topic: "Input Devices",
        difficulty: "Medium",
        count: 3,
      });

      setQuestions(data.questions);
    } catch (error) {
      if (error.response?.status === 502) {
        setError(
          "The AI model is currently busy and couldn't generate questions. Please try again in a few seconds.",
        );
      } else if (error.response?.status === 400) {
        setError("Please check your inputs and try again.");
      } else {
        setError(
          "Unable to contact the server. Please check your connection and try again.",
        );
      }
    } finally {
      setLoading(false);
      setElapsedTime(0);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white font-sans">
      {/* Navbar */}
      <Navbar home={true} />

      {/* Hero */}
      <section className="w-full px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Generate Cambridge-Style Exam Questions in Seconds
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Instantly create IGCSE & A-Level questions with mark schemes.
          </p>

          {/* Input + Button */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 w-72 text-white"
              placeholder="Enter subject"
            />

            <button
              onClick={handleGenerateQuestions}
              disabled={loading}
              className={`px-6 py-3 rounded-xl font-medium transition flex items-center gap-3 ${
                loading
                  ? "bg-blue-500 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading && (
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              )}

              {loading
                ? `Generating... (${elapsedTime}s)`
                : "Generate Questions"}
            </button>
          </div>

          {loading && (
            <p className="mt-5 text-sm text-blue-300 animate-pulse">
              Please wait while the AI generates original Cambridge-style
              questions...
            </p>
          )}
        </div>
      </section>
      {error && (
        <div className="mt-8 rounded-2xl border border-red-500/30 bg-red-500/10 p-6">
          <h3 className="text-lg font-bold text-red-400">
            Failed to Generate Questions
          </h3>

          <p className="mt-2 text-gray-300">{error}</p>

          <button
            onClick={handleGenerateQuestions}
            className="mt-5 rounded-lg bg-red-600 px-5 py-2 font-semibold hover:bg-red-700 transition"
          >
            Try Again
          </button>
        </div>
      )}
      {/* Generated Questions */}
      <QuestionsDisplay questions={questions} />
    </div>
  );
}

export default HomePage;
