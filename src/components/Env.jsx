import React, { useState } from 'react';

const CommandBox = ({ command }) => {
  const [copyMessage, setCopyMessage] = useState('');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopyMessage("Command copied to clipboard!");

    // Clear the message after 2 seconds
    setTimeout(() => {
      setCopyMessage('');
    }, 2000);  // 2 seconds
  };

  return (
    <div className="bg-gray-900 text-white p-4 rounded-md mb-4">
      <pre className="whitespace-pre-wrap">{command}</pre>
      <button
        onClick={copyToClipboard}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mt-2"
      >
        Copy
      </button>
      {copyMessage && (
        <p className="mt-2 text-green-500">{copyMessage}</p>
      )}
    </div>
  );
};

const Env = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Git Environment Setup for Beginners</h1>
      
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Step 1: Install Git</h2>
        <p className="mb-2">
          Download and install Git from the official website. Follow the installation instructions based on your operating system.
        </p>
        <CommandBox command={`Download Git from: https://git-scm.com/`} />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">Step 2: Verify Git Installation</h2>
        <p className="mb-2">
          After installation, verify that Git is installed correctly by running the following command in your terminal:
        </p>
        <CommandBox command={`git --version`} />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">Step 3: Configure Git</h2>
        <p className="mb-2">
          Set up your Git username and email address. This information will be associated with your commits:
        </p>
        <CommandBox command={`git config --global user.name "Your Name"`} />
        <CommandBox command={`git config --global user.email "youremail@example.com"`} />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">Step 4: Create a New Repository</h2>
        <p className="mb-2">
          Create a new directory for your project and initialize a Git repository:
        </p>
        <CommandBox command={`mkdir my-project`} />
        <CommandBox command={`cd my-project`} />
        <CommandBox command={`git init`} />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">Step 5: Add and Commit Files</h2>
        <p className="mb-2">
          To add files to your repository and commit them, use the following commands:
        </p>
        <CommandBox command={`git add .`} />
        <CommandBox command={`git commit -m "Initial commit"`} />
      </div>

      <h2 className="text-lg font-bold mt-6">Now you're ready to start using Git!</h2>
    </div>
  );
};

export default Env;
