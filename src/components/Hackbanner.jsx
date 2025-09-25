import React, { useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const CodeBox = ({ code }) => {
  const [copyMessage, setCopyMessage] = useState("");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopyMessage("✅ Command copied!");

    setTimeout(() => {
      setCopyMessage("");
    }, 2000);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg relative shadow-lg hover:shadow-green-400/40 transition-shadow duration-300">
      <pre className="text-sm overflow-x-auto">{code}</pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition"
      >
        Copy
      </button>
      {copyMessage && (
        <div className="mt-2 text-green-400 text-sm">{copyMessage}</div>
      )}
    </div>
  );
};

const Hackbanner = () => {
  return (
    <div className="relative min-h-screen w-full text-white flex flex-col items-center justify-start">
      {/* 🎨 Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-800 via-green-700 to-green-900 -z-10"></div>
      <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/memphis-mini.png')] opacity-10 -z-10"></div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold mt-12 text-center animate-pulse drop-shadow-lg">
        🌍 Welcome to Hacktoberfest 2025
      </h1>
      <p className="text-lg md:text-xl mt-4 text-gray-200 max-w-3xl text-center animate-fadeIn">
        CSI-CATT DMCE is open for all contributions made by the students of
        DMCE! Join us in celebrating open-source, learn, and grow your skills 🚀
      </p>

      {/* Social Media */}
      <div className="flex space-x-6 mt-6">
        <a
          href="https://www.instagram.com/csidmce/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-transform duration-300"
        >
          <FaInstagram className="text-pink-400 text-5xl drop-shadow-md" />
        </a>
        <a
          href="https://www.linkedin.com/company/csi-dmce/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-transform duration-300"
        >
          <FaLinkedin className="text-blue-400 text-5xl drop-shadow-md" />
        </a>
      </div>

      {/* Guide Container */}
      <div className="bg-gray-900 bg-opacity-90 text-white p-6 md:p-10 rounded-2xl max-w-6xl w-full mt-10 shadow-2xl">
        {/* Section - Hacktoberfest Guide */}
        <div className="mb-6 p-6 bg-gray-800 rounded-xl hover:shadow-lg hover:shadow-green-400/40 transition duration-300">
          <h3 className="font-bold text-2xl mb-4 text-green-400">
            🌟 What is Hacktoberfest 2025?
          </h3>
          <p className="mb-4 leading-relaxed">
            Hacktoberfest 2025 is a month-long celebration of open-source
            software, encouraging students to contribute to real-world projects
            and grow their coding skills. Participants can earn exclusive
            rewards by completing challenges.
          </p>
          <p>
            To earn rewards, participants must complete{" "}
            <strong>6 pull requests</strong> during October. Look out for issues
            labeled <span className="text-green-300">“Good First Issues”</span>{" "}
            🚀
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {[
            {
              step: "1. Visit the Official Website",
              desc: (
                <>
                  <a
                    href="https://hacktoberfest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    https://hacktoberfest.com
                  </a>
                  <p>
                    Register with your GitHub account and start your journey!
                  </p>
                </>
              ),
            },
            {
              step: "2. Register for Local Event",
              desc: (
                <>
                  <a
                    href="https://events.mlh.io/events/11747-hacktoberfest-2024-in-navi-mumbai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    Navi Mumbai Local Event
                  </a>
                  <p>Meet other developers and collaborate 🎉</p>
                </>
              ),
            },
            {
              step: "3. Track Contributions",
              desc: (
                <>
                  Sign up on our CSI-CATT Tracker:{" "}
                  <a
                    href="https://hacktoberfest-validator.onrender.com/auth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    Contribution Tracker
                  </a>
                </>
              ),
            },
            {
              step: "4. Start Hacking",
              desc: (
                <>
                  Fork, clone, and contribute to projects! Example commands:
                  <div className="mt-2 space-y-2">
                    <CodeBox code="git clone <repository-url>" />
                    <CodeBox code="cd <repository-folder>" />
                    <CodeBox code="git checkout -b my-branch" />
                    <CodeBox code='git commit -m "My contribution"' />
                    <CodeBox code="git push origin my-branch" />
                  </div>
                </>
              ),
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-800 rounded-xl hover:shadow-lg hover:shadow-green-400/40 transition duration-300"
            >
              <h4 className="font-semibold text-xl mb-2 text-green-300">
                {item.step}
              </h4>
              <div className="text-gray-200">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="bg-green-600 mt-8 p-6 rounded-xl text-center shadow-lg hover:shadow-green-400/50 transition">
          <h3 className="font-bold text-2xl mb-2">🎉 Get Started Today!</h3>
          <p className="text-lg">
            Kick-start your open-source journey with CSI-CATT DMCE. We can't
            wait to see your contributions! 💻✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hackbanner;
