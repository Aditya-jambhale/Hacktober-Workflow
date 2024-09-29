import React, { useState } from 'react';

const TabContent = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUnlock = () => {
    if (password === 'Hacking123') { // Replace 'yourPassword' with your desired password
      setIsLocked(false);
      setMessage('Content Unlocked!');
    } else {
      setMessage('Incorrect Password. Try Again.');
    }
    setPassword(''); // Clear the input field
  };

  return (
    <div className="p-6">
      {isLocked ? (
        <div className="bg-gray-200 p-4 rounded-md">
          <h2 className="font-bold mb-2">Content is Locked</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="border p-2 rounded"
          />
          <button
            onClick={handleUnlock}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mt-2"
          >
            Unlock
          </button>
          {message && <p className="text-red-500 mt-2">{message}</p>}
        </div>
      ) : (
        <div className="bg-gray-900 text-white p-4 rounded-md">
          <h2 className="font-bold mb-2">Restricted Content</h2>
          <p>This is the content you wanted to hide from users.</p>
        </div>
      )}
    </div>
  );
};

const Hacktoberfest = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold p-6">Secured Tab</h1>
      <TabContent />
    </div>
  );
};

export default Hacktoberfest;
