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

const Branch = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Branching in Git</h1>
      
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Why Branching is Important</h2>
        <p className="mb-2">
          Branching allows you to work on new features or bug fixes without affecting the main codebase. For example, in an open-source project, developers can create separate branches to develop new features, test them, and only merge them into the main branch once they are ready. This keeps the main project stable while allowing for experimentation and development.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">Steps for Branching</h2>
        <p className="mb-2">
          Follow these steps to create and work with branches in Git:
        </p>
        <CommandBox command={`git branch <branch-name>`} />
        <p>Create a new branch with the specified name.</p>

        <CommandBox command={`git checkout <branch-name>`} />
        <p>Switch to the newly created branch.</p>

        <CommandBox command={`git checkout -b <branch-name>`} />
        <p>Create and switch to a new branch in one command.</p>

        <CommandBox command={`git merge <branch-name>`} />
        <p>Merge the specified branch into the current branch.</p>

        <CommandBox command={`git branch -d <branch-name>`} />
        <p>Delete the specified branch after merging.</p>
      </div>

      <h2 className="text-lg font-bold mt-6">Now you understand branching in Git!</h2>
    </div>
  );
};

export default Branch;
