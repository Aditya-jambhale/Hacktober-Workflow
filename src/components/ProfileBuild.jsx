import React from 'react';

const CommandBox = ({ command }) => {
  const [copyMessage, setCopyMessage] = React.useState('');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopyMessage("Command copied to clipboard!");

    setTimeout(() => {
      setCopyMessage('');
    }, 2000);  // 2 seconds
  };

  return (
    <div className="bg-gray-900 text-white p-4 rounded-md mb-6">
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

const ProfileBuild = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Steps to Improve Your GitHub Profile</h1>
      
      {/* Step 1 */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold">1. Generate Your GitHub Profile README</h2>
        <p className="mb-2">
          Visit the following link to generate your GitHub Profile README using a visual editor:
        </p>
        <a
          href="https://rahuldkjain.github.io/gh-profile-readme-generator/"
          className="text-blue-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://rahuldkjain.github.io/gh-profile-readme-generator/
        </a>
        <p className="mt-2">
          Fill in your personal details such as bio, skills, social media links, etc., and generate the markdown file.
        </p>
      </div>

      {/* Step 2 */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold">2. Download and Save the README.md File</h2>
        <p className="mb-2">
          After generating the profile README, download the <code>README.md</code> file to your local machine.
        </p>
      </div>

      {/* Step 3 */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold">3. Clone Your GitHub Repository</h2>
        <p className="mb-2">
          Clone your GitHub profile repository locally by running the following command:
        </p>
        <CommandBox command={`git clone https://github.com/<your-username>/<your-username>.git`} />
        <p className="mt-2">
          Replace <code>{`<your-username>`}</code> with your actual GitHub username.
        </p>
      </div>

      {/* Step 4 */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold">4. Move into the Cloned Repository</h2>
        <p className="mb-2">
          Navigate into the directory you just cloned by running:
        </p>
        <CommandBox command={`cd <your-username>`} />
        <p className="mt-2">
          Replace <code>{`<your-username>`}</code> with your GitHub username.
        </p>
      </div>

      {/* Step 5 */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold">5. Copy the README.md to Your Repository</h2>
        <p className="mb-2">
          Copy the <code>README.md</code> file you downloaded earlier into this directory. You can either drag and drop it manually or run the following command:
        </p>
        <CommandBox command={`cp /path/to/README.md .`} />
        <p className="mt-2">
          Replace <code>{`/path/to/README.md`}</code> with the actual path to your downloaded <code>README.md</code> file.
        </p>
      </div>

      {/* Step 6 */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold">6. Add, Commit, and Push the Changes</h2>
        <p className="mb-2">
          Add the <code>README.md</code> file to the staging area:
        </p>
        <CommandBox command={`git add README.md`} />
        <p className="mb-2">
          Commit the changes with a message:
        </p>
        <CommandBox command={`git commit -m "Added profile README"`} />
        <p className="mb-2">
          Push the changes to GitHub:
        </p>
        <CommandBox command={`git push origin main`} />
      </div>

      {/* Step 7 */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold">7. Pin the README to Your Profile</h2>
        <p className="mb-2">
          Now that you've added the README file, visit your GitHub profile and make sure the new README is displayed.
        </p>
        <p className="mb-2">
          To pin it to the top of your profile, navigate to the "Repositories" tab on your profile, find your profile repository (named <code>{`<your-username>`}</code>), click the three-dot menu, and select "Pin to your profile."
        </p>
      </div>

      {/* Step 8 */}
      <div className="mb-6">
        <h2 className="text-lg font-bold">Now you know how to make your GitHub profile stand out!</h2>
        <p className="mb-2">
          If you need more advanced profile customizations, check out the following link for more resources:
        </p>
        <a
          href="https://docs.google.com/document/d/18ykVh-KM6ZCNqMRj_522H1yLoAG9BwgAxupDWddwZ6s/edit?usp=sharing"
          className="text-blue-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Profile Resources
        </a>
      </div>
    </div>
  );
};

export default ProfileBuild;
