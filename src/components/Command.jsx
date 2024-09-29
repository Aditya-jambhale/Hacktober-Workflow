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

const Command= () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">GitHub Commands</h1>
      
      <div className="mb-6">
        <h2 className="text-lg font-semibold">1. Initialize a new Git repository</h2>
        <p className="mb-2">
          <strong>`git init`</strong> initializes a new local Git repository. It creates a `.git` folder in your project directory, which is where Git stores all the data and metadata about your project.
        </p>
        <CodeBox code={`git init`} />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">2. Clone an existing repository</h2>
        <p className="mb-2">
          <strong>`git clone <repository-url/>`</strong> clones a repository from a remote source to your local machine. This command downloads all the files, commits, and history from the remote repository. Replace `<repository-url/>` with the actual URL of the repository you want to clone (e.g., from GitHub).
        </p>
        <CodeBox code={`git clone <repository-url>`} />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">3. Check the status of your repository</h2>
        <p className="mb-2">
          <strong>`git status`</strong> shows the current state of your working directory and staging area. It tells you what changes have been made, which files are staged for commit, and which are untracked.
        </p>
        <CodeBox code={`git status`} />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">4. Add all changes to the staging area</h2>
        <p className="mb-2">
          <strong>`git add .`</strong> adds all files (new, modified, and deleted) to the staging area in preparation for a commit. The dot (`.`) means "all changes in the current directory."
        </p>
        <CodeBox code={`git add .`} />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">5. Commit changes with a message</h2>
        <p className="mb-2">
          <strong>`git commit -m "Your commit message"`</strong> commits the changes you've staged in Git to the repository with a message describing what the commit does. The `-m` flag allows you to include the commit message in-line, making it more efficient than opening a text editor.
        </p>
        <CodeBox code={`git commit -m "Your commit message"`} />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">6. Push commits to the remote repository</h2>
        <p className="mb-2">
          <strong>`git push origin main`</strong> pushes your local commits to the remote repository (e.g., on GitHub). The command sends your changes to the remote repository's `main` branch (the default branch). Replace `main` with your actual branch name if necessary.
        </p>
        <CodeBox code={`git push origin main`} />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">7. Pull changes from the remote repository</h2>
        <p className="mb-2">
          <strong>`git pull origin main`</strong> pulls updates from the remote repository (from the `main` branch) and merges them with your local branch. This is useful to make sure your code is up to date with the latest changes.
        </p>
        <CodeBox code={`git pull origin main`} />
      </div>
    </div>
  );
};

export default Command;
