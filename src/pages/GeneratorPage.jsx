import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import QuestionsCountSlider from "../components/QuestionsCountSlider";
import QuestionsDisplay from "../components/QuestionsDisplay";
import { generateQuestions, getTopics } from "../services/QuestionsGenerator";

function GeneratorPage() {
  const [questions, setQuestions] = useState([]);
  const [subject, setSubject] = useState("IGCSE ICT");
  const [topic, setTopic] = useState("Hardware and Software");
  const [topics, setTopics] = useState([]);
  const [difficulty, setDifficulty] = useState("Medium");
  const [count, setCount] = useState(5);

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const subjects = {
    "IGCSE ICT": "ICT",
    "IGCSE Computer Science": "CS",
  };

  const difficulties = ["Easy", "Medium", "Hard"];

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
        subject,
        topic,
        difficulty,
        count,
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

  const fileName = subjects[subject];
  // Load topics based on the selected subject
  const setSubjectAndLoadTopics = (newSubject) => {
    setSubject(newSubject);
    const newFileName = subjects[newSubject];
    loadTopics(newFileName);
  };

  const loadTopics = async (filename = "ICT") => {
    try {
      const data = await getTopics(filename);
      setTopics(data);

      // Set the first topic as default if available
      if (data.length > 0) {
        setTopic(data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadTopics();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white font-sans">
      {/* Navbar */}
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Configure Your Paper</h1>
          <p className="text-gray-400">
            Select your parameters to generate custom Cambridge-style questions.
          </p>
        </div>

        {/* Generator Card */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Subject Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                Subject
              </label>

              <select
                value={subject}
                onChange={(e) => setSubjectAndLoadTopics(e.target.value)}
                className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
              >
                {Object.keys(subjects).map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Topic Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                Topic Area
              </label>

              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
              >
                {topics.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                Difficulty Level
              </label>

              <div className="flex bg-slate-800 p-1 rounded-xl border border-white/10">
                {difficulties.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDifficulty(d)}
                    className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                      difficulty === d
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
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
            {/* Question Count */}
            <QuestionsCountSlider count={count} setCount={setCount} />
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerateQuestions}
            disabled={loading}
            className={`w-full mt-10 py-4 font-bold rounded-2xl transition-all transform active:scale-[0.98] shadow-lg shadow-blue-900/20 flex items-center justify-center gap-3 ${
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
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            )}

            {loading
              ? `Generating Paper... (${elapsedTime}s)`
              : "Generate Examination Paper"}
          </button>

          {loading && (
            <p className="text-center mt-4 text-sm text-blue-300 animate-pulse">
              Please wait while the AI creates original Cambridge-style
              questions...
            </p>
          )}

          {!loading && (
            <p className="text-center mt-4 text-xs text-gray-500">
              Estimated generation time: ~5-10 seconds
            </p>
          )}
        </div>

        {/* Generated Questions */}
        <QuestionsDisplay questions={questions} />

        {/* Tip */}
        <div className="mt-12 p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10 flex gap-4 items-start">
          <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-blue-300">Pro Tip</h4>

            <p className="text-xs text-gray-400 mt-1 leading-relaxed">
              For A-Level subjects, "Hard" difficulty will prioritize 8-12 mark
              evaluation questions and complex case studies.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default GeneratorPage;
