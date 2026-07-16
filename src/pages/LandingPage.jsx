import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import QuestionsDisplay from "../components/QuestionsDisplay";
import { generateQuestions } from "../services/QuestionsGenerator";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

function LandingPage() {
  const [subject, setSubject] = useState("IGCSE ICT");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "ExamGenAi";
  }, []);

  return (
    <div className="min-h-screen w-full bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white font-sans">
      {/* Navbar */}
      <Navbar home={true} />

      {/* <!-- Hero --> */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* <!-- Left --> */}
          <div>
            <span className="inline-block rounded-full bg-blue-600/20 px-4 py-2 text-blue-400">
              {" "}
              AI Powered{" "}
            </span>

            <h1 className="mt-8 text-6xl leading-tight font-bold">
              Generate Cambridge Examination Papers
            </h1>

            <p className="mt-8 text-xl leading-relaxed text-slate-400">
              Create unlimited IGCSE and A-Level examination papers with
              realistic questions, command words and complete mark schemes.
            </p>

            <div className="mt-10 flex gap-4">
              <PrimaryButton to="/generate">Generate Paper</PrimaryButton>

              <SecondaryButton
                href="https://github.com/Mustafa-Awd"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </SecondaryButton>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="flex gap-3">
                <div>⚡</div>
                <div>
                  <h3 className="font-semibold">Instant</h3>
                  <p className="text-sm text-slate-400">
                    5-10 second generation
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div>📄</div>
                <div>
                  <h3 className="font-semibold">PDF Export</h3>
                  <p className="text-sm text-slate-400">Printable papers</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div>🤖</div>
                <div>
                  <h3 className="font-semibold">AI Generated</h3>
                  <p className="text-sm text-slate-400">Unlimited questions</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div>🎯</div>
                <div>
                  <h3 className="font-semibold">Topic Specific</h3>
                  <p className="text-sm text-slate-400">Cambridge syllabus</p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right --> */}
          <div>
            <div className="rotate-2 rounded-3xl bg-white p-10 text-black shadow-2xl">
              <h2 className="text-center text-3xl font-bold">
                CAMBRIDGE EXAMINATION
              </h2>

              <hr className="my-6" />

              <p className="font-semibold">Subject: IGCSE ICT</p>

              <p className="mt-1">Topic: Hardware & Software</p>

              <p className="mt-8">
                <b>1.</b> Explain the purpose of RAM in a computer system.
              </p>

              <div className="mt-2 text-right font-bold">[4]</div>

              <hr className="my-8" />

              <p>
                <b>2.</b> Describe three advantages of SSDs over HDDs.
              </p>

              <div className="mt-2 text-right font-bold">[6]</div>

              <hr className="my-8" />

              <p>
                <b>3.</b> Evaluate the use of OCR in modern businesses.
              </p>

              <div className="mt-2 text-right font-bold">[8]</div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Features --> */}

      <section className="border-t border-slate-800 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-16 text-center text-4xl font-bold">
            Everything You Need
          </h2>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-xl font-bold">⚡ Fast</h3>
              <p className="mt-3 text-slate-400">
                Generate complete papers in seconds.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-xl font-bold">📚 Syllabus</h3>
              <p className="mt-3 text-slate-400">
                Questions follow Cambridge topics.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-xl font-bold">📝 Mark Schemes</h3>
              <p className="mt-3 text-slate-400">
                Every question includes answers.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-xl font-bold">📄 PDF</h3>
              <p className="mt-3 text-slate-400">
                Export ready-to-print papers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- CTA --> */}

      <section className="py-24">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Start Creating Better Revision Papers
          </h2>

          <p className="mt-6 text-xl text-slate-400">
            Unlimited papers. Unlimited practice.
          </p>

          <PrimaryButton to="/generate" className="mt-10">
            Generate Your First Paper
          </PrimaryButton>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
