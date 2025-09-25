import React, { useEffect, useRef } from "react";
import image from "../assets/image.png";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

function Banner() {
  const paragraphRef = useRef(null);
  const headingRef = useRef(null);
  const imgRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Animate image
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.3, ease: "back.out(1.7)" }
    );

    // Split text into words
    const paragraph = paragraphRef.current;
    const words = paragraph.textContent
      .split(" ")
      .map((word) => `<span class="word inline-block mr-1">${word}</span>`)
      .join(" ");
    paragraph.innerHTML = words;

    // Animate words
    gsap.fromTo(
      paragraph.querySelectorAll(".word"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
    );

    // Animate button
    gsap.fromTo(
      btnRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 overflow-hidden">
      {/* ✅ Fullscreen Background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/memphis-mini.png')]"></div>
      </div>

      {/* ✅ Left Content */}
      <div className="relative z-10 flex-1">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl font-extrabold text-green-400 drop-shadow-lg"
        >
          Welcome To HacktoberFest 2025
        </h1>
        <p
          ref={paragraphRef}
          className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed font-medium"
        >
          Empowering Collaboration, Driving Innovation – Unlock the Power of
          Open Source with Git & GitHub
        </p>
        <div className="mt-8">
          <Link to="/InfoBoxcom">
            <button
              ref={btnRef}
              className="px-6 py-3 rounded-2xl text-lg font-semibold bg-green-500 text-white shadow-lg hover:shadow-green-400/50 hover:scale-105 transition-transform duration-300"
            >
              🚀 Introduction to Git and GitHub
            </button>
          </Link>
        </div>
      </div>

      {/* ✅ Right Content (Image) */}
      <div className="relative z-10 flex-1 mt-8 md:mt-0 flex justify-center">
        <img
          ref={imgRef}
          src={image}
          alt="HacktoberFest"
          className="w-60 md:w-80 animate-bounce-slow"
        />
      </div>
    </div>
  );
}

export default Banner;
