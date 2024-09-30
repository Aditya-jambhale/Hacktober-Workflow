import React, { useState } from 'react';

const CommandBox = ({ command }) => {
  const [copyMessage, setCopyMessage] = useState('');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopyMessage('Command copied to clipboard!');

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
        <h2 className="text-lg font-semibold">Step 1: Forking a Repository</h2>
        <p className="mb-2">
          Forking is the first step. When you fork a repository, you create your own personal copy of someone else’s project on your GitHub account. Here’s how you do it:
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>Go to the repository on GitHub that you want to contribute to.</li>
          <li>Click the "Fork" button in the upper-right corner.</li>
          <li>This will create a copy of the repository under your GitHub account.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">Step 2: Cloning the Forked Repository</h2>
        <p className="mb-2">
          After forking, you’ll need to clone your copy of the repository to your local machine. This will allow you to work on it locally. To clone the repository:
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>Copy the URL of your forked repository from GitHub.</li>
          <li>Use the following command to clone it to your local machine:</li>
        </ul>
        <CommandBox command={`git clone <repository-url> <folder-name-that-you-desire>`} />
        <p className="mt-2">Replace <code>&lt;repository-url&gt;</code> with the actual URL of your forked repository.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">Step 3: Navigating to the Cloned Repository</h2>
        <p className="mb-2">
          After cloning, navigate to the directory where the repository was cloned:
        </p>
        <CommandBox command={`cd <folder-name>`} />
        <p className="mt-2">Replace <code>{`<folder-name>`}</code> with the name of the directory you cloned into.</p>

      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">Step 4: Creating a New Branch</h2>
        <p className="mb-2">
          It’s a good practice to create a new branch for any changes you want to make. This keeps your changes organized and separated from the main branch.
        </p>
        <p className="mb-2">
          Use the following command to create and switch to a new branch:
        </p>
        <CommandBox command={`git checkout -b <new-branch-name>`} />
        <p className="mt-2">Replace <code>&lt;new-branch-name&gt;</code> with a descriptive name for your branch.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">Step 5: Start Coding!</h2>
        <p className="mb-2">
          Now that you’ve created a new branch, you can start making changes to the code. Any changes you make will now be isolated in this branch, and you can push them later for review or collaboration.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">Step 6: Adding and Committing Changes</h2>
        <p className="mb-2">
          After making changes, you need to stage and commit them:
        </p>
        <CommandBox command={`git add .`} />
        <p className="mt-2">This stages all the changes. Then commit the changes with a message:</p>
        <CommandBox command={`git commit -m "Your commit message"`} />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">Step 7: Pushing Changes to GitHub</h2>
        <p className="mb-2">
          Now that your changes are committed, push them to GitHub so others can see and review them:
        </p>
        <CommandBox command={`git push origin <new-branch-name>`} />
        <p className="mt-2">Replace <code>&lt;new-branch-name&gt;</code> with the name of the branch you created earlier.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">Step 8: Creating a Pull Request</h2>
        <p className="mb-2">
          Once your changes are pushed to GitHub, go to your repository and click on the "Compare & pull request" button. This will allow you to submit your changes for review.
        </p>
      </div>

      <h2 className="text-lg font-bold mt-6">Now you're ready to contribute using Forking and Cloning in Git!</h2>
    </div>
  );
};

export default Forkclone;
