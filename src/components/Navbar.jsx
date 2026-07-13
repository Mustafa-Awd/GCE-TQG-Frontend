import React from "react";
import { Link } from "react-router-dom";

function Navbar({ home = false }) {
  return (
    <>
      <header className="w-full flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="text-xl font-bold tracking-tight">ExamGen AI</div>

        {home ? (
          // create react hyperlink to home page

          <Link
            to="/home"
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-medium"
          >
            Launch app
          </Link>
        ) : (
          <div className="flex items-center gap-4">
            <button className="text-sm text-gray-400 hover:text-white transition">
              History
            </button>
            <button className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition">
              My Account
            </button>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
