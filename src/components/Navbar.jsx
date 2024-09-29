import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import CSI from '../assets/CSI_logo.png';

function Navbar() {
  

  return (
    <>
      <div class="max-w-screen-2xl px:0 md:px-20 py-5 mx-auto bg-slate-800 font-semibold text-black md:text-white cursor-pointer" id="nav">
        <div class="navbar">
          <div class="flex-1">
            <a href='/'>
              <div class="bg-white p-1 rounded-lg logo"> 
                <img src={CSI} class="w-32 h-auto" alt="CSI Logo" />
              </div>
            </a>
          </div>

          <div class="hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
              {/* Added .menu-item class to each menu item */}
              <li><a href='/InfoBoxcom' class="menu-item">Introduction</a></li>
              <li><a href='/Env' class="menu-item">Environment Setup</a></li>
              <li><a href='/Command' class="menu-item">Initial Commands</a></li>
              <li><a href='/Forkclone' class="menu-item">Forking and Cloning</a></li>
              <li><a href='/Branch' class="menu-item">Branching</a></li>
              <li><a href='/Pull' class="menu-item">Push and Pull Requests</a></li>
              <li><a href='/Hacktoberfest' class="menu-item">Hacktoberfest</a></li>
            </ul>
          </div>

          <div class="lg:hidden text-white">
            <div class="dropdown dropdown-end">
              <label tabIndex="0" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </label>
              <ul tabIndex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href='/InfoBoxcom' class="text-black menu-item">Introduction</a></li>
                <li><a href='/Env' class="text-black menu-item">Environment Setup</a></li>
                <li><a href='/Command' class="text-black menu-item">Initial Commands</a></li>
                <li><a href='/Forkclone' class="text-black menu-item">Forking and Cloning</a></li>
                <li><a href='/Branch' class="text-black menu-item">Branching</a></li>
                <li><a href='/Pull' class="text-black menu-item">Push and Pull Requests</a></li>
                <li><a href='/Hacktoberfest' class="text-black menu-item">Hacktoberfest</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
