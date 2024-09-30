import React, { useState } from 'react';

const CodeBox = ({ code }) => {
  const [copyMessage, setCopyMessage] = useState('');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopyMessage("Command copied to clipboard!");

    // Clear the message after 2 seconds
    setTimeout(() => {
      setCopyMessage('');
    }, 2000);  // 2 seconds
  };

  return (
    <div className="bg-gray-900 text-white p-4 rounded-md mb-6">
      <pre className="whitespace-pre-wrap">{code}</pre>
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

const Command = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">GitHub Commands</h1>
      
      <div className="mb-6">
        <h2 className="text-lg font-semibold">1. Initialize a new Git repository</h2>
        <p className="mb-2">
          <strong>`git init`</strong> initializes a new local Git repository. It creates a `.git` folder in your project directory, where Git will track all changes.
        </p>
        <CodeBox code={`git init`} />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">2. Add all changes to the staging area</h2>
        <p className="mb-2">
          <strong>`git add .`</strong> stages all the changes (new, modified, or deleted files) for commit. The dot (`.`) means to stage all the files in the current directory.
        </p>
        <CodeBox code={`git add .`} />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">3. Commit changes with a message</h2>
        <p className="mb-2">
          <strong>`git commit -m "Your commit message"`</strong> commits the changes you've staged in Git with a message describing the commit. The `-m` flag allows you to add the message directly in the command.
        </p>
        <CodeBox code={`git commit -m "Your commit message"`} />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">4. Check the status of your repository</h2>
        <p className="mb-2">
          <strong>`git status`</strong> shows the current state of your working directory. It tells you which files are staged for commit, which are modified, and which are untracked (new files).
        </p>
        <CodeBox code={`git status`} />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">5. Add a remote origin (link to the GitHub repository)</h2>
        <p className="mb-2">
          <strong>`git remote add origin <repository-url/>`</strong> connects your local repository to a remote repository (e.g., GitHub). Replace `<repository-url/>` with the actual URL of your repository on GitHub.
        </p>
        <CodeBox code={`git remote add origin <repository-url>`} />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">6. Switch to the main branch</h2>
        <p className="mb-2">
          <strong>`git branch -M main`</strong> switches your repository to the `main` branch. In Git, the default branch is often called `main`, and this command ensures that you are on the correct branch for pushing your changes.
        </p>
        <CodeBox code={`git branch -M main`} />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">7. Push commits to the remote repository</h2>
        <p className="mb-2">
          <strong>`git push origin main`</strong> pushes your local commits to the remote repository on GitHub, sending them to the `main` branch. Replace `main` with the appropriate branch name if necessary.
        </p>
        <CodeBox code={`git push origin main`} />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">8. Pull changes from the remote repository</h2>
        <p className="mb-2">
          <strong>`git pull origin main`</strong> pulls the latest changes from the remote repository and merges them with your local branch. This ensures that your local repository is up to date with any changes from the `main` branch on GitHub.
        </p>
        <CodeBox code={`git pull origin main`} />
      </div>

      <div className="mt-8">
        <p className="text-lg font-semibold">
          Now you know the basic Git commands you need for contributing to a project! 
          If you need more commands, please click on the link below:
        </p>
        <a
          href="https://docs.google.com/document/d/18ykVh-KM6ZCNqMRj_522H1yLoAG9BwgAxupDWddwZ6s/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline mt-4 block"
        >
          Additional Git Commands
        </a>
      </div>
    </div>
  );
};

export default Command;
