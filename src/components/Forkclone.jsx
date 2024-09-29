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

const Forkclone = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Forking and Cloning in Git</h1>
      
      <div className="mb-6">
        <h2 className="text-lg font-semibold">What is Forking?</h2>
        <p className="mb-2">
          Forking is a way to create a personal copy of someone else's repository. This allows you to freely experiment and make changes without affecting the original project.
        </p>
        
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">What is Cloning?</h2>
        <p className="mb-2">
          Cloning creates a local copy of a repository on your machine. This allows you to work on the project locally and push changes back to the remote repository if you have access.
        </p>
        <CommandBox command={`git clone <repository-url>`} />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">Difference Between Fork and Clone</h2>
        <p className="mb-2">
          Fork: Creates a copy of a repository on your GitHub account. It’s used to contribute to open-source projects or to keep your own copy.
        </p>
        <p className="mb-2">
          Clone: Creates a local copy of a repository on your computer. You use this to work on the project locally.
        </p>
      </div>

      <h2 className="text-lg font-bold mt-6">Now you understand forking and cloning in Git!</h2>
    </div>
  );
};

export default Forkclone;
