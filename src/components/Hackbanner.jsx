import React, { useState } from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const CodeBox = ({ code }) => {
  const [copyMessage, setCopyMessage] = useState('');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopyMessage('Command copied to clipboard!');

    // Clear the message after 2 seconds
    setTimeout(() => {
      setCopyMessage('');
    }, 2000); // 2 seconds
  };

  return (
    <div className="bg-gray-800 p-4 rounded-md relative">
      <pre className="text-sm overflow-x-auto">{code}</pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700"
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
  const [isLocked, setIsLocked] = useState(true);
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUnlock = () => {
    if (password === 'Hacking123') {
      setIsLocked(false);
      setMessage('Content Unlocked!');
    } else {
      setMessage('Incorrect Password. Try Again.');
    }
    setPassword(''); // Clear the input field after submission
  };

  return (
    <div className="min-h-screen w-full bg-green-700 text-white flex flex-col items-center justify-center">
      {isLocked ? (
        // Password prompt section
        <div className="bg-black p-6 rounded-md text-center">
          <h2 className="font-bold text-2xl mb-4">Content is Locked</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="border p-2 rounded w-full mb-2 text-black"
          />
          <button
            onClick={handleUnlock}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
          >
            Unlock
          </button>
          {message && <p className="text-red-500 mt-2">{message}</p>}
        </div>
      ) : (
        // Unlocked content section
        <>
          {/* Heading with animation */}
          <h1 className="text-4xl font-bold text-white mb-4  text-center animate-pulse">
            Welcome to Hacktoberfest 2024
          </h1>

          {/* Subheading */}
          <p className="text-xl text-white mb-6 animate-fadeIn text-center">
            CSI-CATT DMCE is open for all contributions made by the students of DMCE!
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-6 mb-6">
            {/* Instagram */}
            <a href="https://www.instagram.com/csidmce/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-4xl hover:scale-110 transform transition-transform duration-300" />
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/csi-dmce/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-4xl hover:scale-110 transform transition-transform duration-300" />
            </a>
          </div>

          {/* Hacktoberfest Guide */}
          <div className="bg-gray-900 text-white p-6 rounded-md max-w-6xl w-full mx-auto">
            {/* Section - Hacktoberfest Guide */}
            <div className="mb-6 p-4 bg-gray-800 rounded-md">
              <h3 className="font-bold text-lg mb-2">What is Hacktoberfest 2024?</h3>
              <p className="mb-4">
                Hacktoberfest 2024 is a month-long celebration of open-source software, encouraging students to contribute to real-world projects and grow their coding skills. Participants can earn exclusive holopins and swags by completing the event's challenges.
              </p>
              <p className="mb-4">
                To earn rewards, participants must complete <strong>4 pull requests</strong> during the event. Look out for issues labeled <strong>“Good First Issues”</strong>, which are beginner-friendly and a great starting point for newcomers.
              </p>
            </div>

            {/* Section - Steps to Participate */}
            <div className="mb-6 p-4 bg-gray-800 rounded-md">
              <h3 className="font-bold text-lg mb-4">Steps to Participate</h3>

              {/* Step 1 */}
              <div className="mb-4">
                <h4 className="font-semibold">1. Visit the Hacktoberfest 2024 Official Website</h4>
                <p>
                  <a
                    href="https://hacktoberfest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    https://hacktoberfest.com
                  </a>
                </p>
                <p>After completing the registration, follow the steps below.</p>
              </div>

              {/* Step 2 */}
              <div className="mb-4">
                <h4 className="font-semibold">2. Steps for Registration</h4>
                <p>Sign up with your GitHub account, verify your email, and register for Hacktoberfest 2024.</p>
              </div>

              {/* Step 3 */}
              <div className="mb-4">
                <h4 className="font-semibold">3. Register for Local Event</h4>
                <p>
                  After registering on the official website, sign up for our local event at Navi Mumbai:
                </p>
                <a
                  href="https://events.mlh.io/events/11747-hacktoberfest-2024-in-navi-mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  https://events.mlh.io/events/11747-hacktoberfest-2024-in-navi-mumbai
                </a>
              </div>

              {/* Step 4 */}
              <div className="mb-4">
                <h4 className="font-semibold">4. Sign Up for CSI-CATT Tracker</h4>
                <p>
                  To track your contributions, sign up on:
                </p>
                <a
                  href="https://hacktoberfest-validator.onrender.com/auth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  https://hacktoberfest-validator.onrender.com/auth
                </a>
                <p>Enter your GitHub username for validation.</p>
              </div>

              {/* Step 5 */}
              <div className="mb-4">
                <h4 className="font-semibold">5. Generate GitHub Token</h4>
                <p>
                  You will need a GitHub token to track your progress:
                </p>
                <a
                  href="https://github.com/settings/tokens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  https://github.com/settings/tokens
                </a>
                <p>
                  Create a classic token, copy it, and paste it on the CSI-CATT tracker sign-up page.
                </p>
              </div>

              {/* Step 6 */}
              <div className="mb-4">
                <h4 className="font-semibold">6. Start Hacking!</h4>
                <p>
                  After registration, you're ready to start contributing! We have opened repositories for all DMCE students. Ensure you complete <strong>4 pull requests</strong> throughout October to qualify for the rewards.
                </p>
                <a
                  href="https://github.com/CSI-DMCE-2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  https://github.com/CSI-DMCE-2024
                </a>
              </div>

              {/* Step 7 */}
              <div className="mb-4">
                <h4 className="font-semibold">7. Tech and Non-Tech Repositories</h4>
                <p>
                  You can contribute to both tech and non-tech repositories. Choose a repository of your interest or select a no-code repository if you're not interested in coding.
                </p>
              </div>

              {/* Step 8 */}
              <div className="mb-4">
                <h4 className="font-semibold">8. Selecting and Working on Issues</h4>
                <p>
                  Once you choose a repository, click on the "Issues" tab and find an issue that you can solve. If it's not assigned, comment on the issue saying, "I am interested to work on this issue." Once the maintainer assigns the issue to you, you'll receive an email confirmation.
                </p>
              </div>

              {/* Step 9 */}
              <div className="mb-4">
                <h4 className="font-semibold">9. Fork and Clone the Repository</h4>
                <p>
                  After receiving confirmation, fork the repository and clone it to your local system. Follow the README instructions for installing dependencies.
                </p>
                <p>Here are the commands you'll need:</p>
                <CodeBox code={`git clone <repository-url>`} />
                <CodeBox code={`cd <repository-folder>`} />
                <CodeBox code={`git checkout -b <new-branch-name>`} />
                <CodeBox code={`git add .`} />
                <CodeBox code={`git commit -m "Your commit message"`} />
                <CodeBox code={`git push origin <new-branch-name>`} />
                <CodeBox code={`git pull request`} />
              </div>

              {/* Step 10 */}
              <div className="mb-4">
                <h4 className="font-semibold">10. Wait for Review</h4>
                <p>
                  After pushing your changes, wait for the maintainer to review and merge your pull request.
                </p>
              </div>

              {/* Step 11 */}
              <div className="mb-4">
                <h4 className="font-semibold">11. Validate Your Pull Requests</h4>
                <p>
                  Once your pull request is merged, go to:
                </p>
                <a
                  href="https://hacktoberfest-validator.onrender.com/auth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  https://hacktoberfest-validator.onrender.com/auth
                </a>
                <p>
                  login to your account with the credentials you enetered before.Click on the "Update Pull Request" button to validate your contributions.
                </p>
              </div>

              {/* Conclusion */}
              <div className="bg-gray-700 p-4 rounded-md">
                <h3 className="font-bold text-xl mb-4">Get Started Today!</h3>
                <p>
                  Kick-start your open-source journey and make it memorable with CSI-CATT DMCE. We can't wait to see your contributions!
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Hackbanner;
