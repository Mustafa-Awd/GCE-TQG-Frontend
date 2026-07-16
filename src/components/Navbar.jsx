import React from "react";
import { Link } from "react-router-dom";

function Navbar({ home = false }) {
  return (
    <>
      <nav className="border-b border-slate-800">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <h1 className="text-2xl font-bold">
            Exam<span className="text-blue-500">Gen</span> AI
          </h1>

          <div className="space-x-4">
            <a
              href="https://github.com/Mustafa-Awd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white"
            >
              GitHub
            </a>
            <Link
              to={home ? "/generate" : "/"}
              className="rounded-xl bg-blue-600 px-5 py-2 font-medium hover:bg-blue-700"
            >
              {home ? "Generate" : "Home"}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
