import React from "react";
import CSI from "../assets/CSI_logo.png";

function Navbar() {
  return (
    <nav className="w-full px-4 md:px-10 py-5 bg-slate-800 font-semibold text-white">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="bg-white p-1 rounded-lg">
          <img src={CSI} className="w-32 h-auto" alt="CSI Logo" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8">
          <li>
            <a href="/InfoBoxcom" className="hover:text-green-400">
              Introduction
            </a>
          </li>
          <li>
            <a href="/Env" className="hover:text-green-400">
              Environment Setup
            </a>
          </li>
          <li>
            <a href="/Command" className="hover:text-green-400">
              Initial Commands
            </a>
          </li>
          <li>
            <a href="/ProfileBuild" className="hover:text-green-400">
              Profile Building
            </a>
          </li>
          <li>
            <a href="/Branch" className="hover:text-green-400">
              Branching
            </a>
          </li>
          <li>
            <a href="/Forkclone" className="hover:text-green-400">
              Forking & Cloning
            </a>
          </li>
          <li>
            <a href="/Pull" className="hover:text-green-400">
              Push & Pull Requests
            </a>
          </li>
          <li>
            <a href="/Hackbanner" className="hover:text-green-400">
              Hacktoberfest
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white rounded-box w-52 bg-black"
            >
              <li>
                <a href="/InfoBoxcom">Introduction</a>
              </li>
              <li>
                <a href="/Env">Environment Setup</a>
              </li>
              <li>
                <a href="/Command">Initial Commands</a>
              </li>
              <li>
                <a href="/ProfileBuild">Profile Building</a>
              </li>
              <li>
                <a href="/Branch">Branching</a>
              </li>
              <li>
                <a href="/Forkclone">Forking & Cloning</a>
              </li>
              <li>
                <a href="/Pull">Push & Pull Requests</a>
              </li>
              <li>
                <a href="/Hackbanner">Hacktoberfest</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
