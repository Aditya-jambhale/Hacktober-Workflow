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

const pr = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pull Requests in Git</h1>
      
      <div className="mb-6">
        <h2 className="text-lg font-semibold">What are Pull Requests?</h2>
        <p className="mb-2">
          A pull request (PR) is a way to propose changes to a repository. It allows you to inform the project maintainers that you have completed a feature or fixed a bug, and you want them to review your changes before merging them into the main codebase. This process encourages collaboration and ensures that code is reviewed and tested before being integrated.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">How to Raise a Pull Request</h2>
        <p className="mb-2">
          Follow these steps to create a pull request:
        </p>
        
        <CommandBox command={`git add .`} />
        <p>Add your changes to the staging area.</p>

        <CommandBox command={`git commit -m "Your commit message"`} />
        <p>Commit your changes with a descriptive message.</p>

        <CommandBox command={`git push origin <branch-name>`} />
        <p>Push your changes to the remote repository on the specified branch.</p>

        <p className="mb-2">
          Now, go to the GitHub repository page in your web browser. You will see a prompt to create a pull request for the branch you just pushed. Click on it and follow the prompts to submit your pull request.
        </p>
      </div>

      <h2 className="text-lg font-bold mt-6">Now you understand pull requests in Git!</h2>
    </div>
  );
};

export default pr;
