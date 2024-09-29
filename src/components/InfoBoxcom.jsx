import React from 'react';

const InfoBox = ({ title, content }) => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-md mb-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

const InfoBoxcom = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Introduction to Open Source</h1>
      
      <InfoBox 
        title="Why Open Source is Important?" 
        content={
          <span>
            Open source software is crucial for fostering innovation, collaboration, and community engagement. 
            It allows developers to access, modify, and improve software freely, leading to greater transparency and 
            security. The open-source model encourages shared knowledge, enabling rapid development and problem-solving, 
            as developers around the world can contribute to projects and learn from each other.
          </span>
        } 
      />

      <InfoBox 
        title="Useful Links for Open Source Projects" 
        content={
          <span>
            Here are some great platforms to explore open source projects:
            <ul className="list-disc list-inside">
              <li><a href="https://github.com/explore" target="_blank" rel="noopener noreferrer" className="text-blue-500">GitHub Explore</a></li>
              <li><a href="https://www.opengovdata.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Open Government Data</a></li>
              <li><a href="https://opensource.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Open Source Initiative</a></li>
              <li><a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500">FreeCodeCamp</a></li>
            </ul>
          </span>
        } 
      />

      <InfoBox 
        title="What is Git and GitHub?" 
        content={
          <span>
            Git is a version control system that helps developers track changes in their code, collaborate with others, and manage project versions efficiently. 
            It allows multiple developers to work on the same project without overwriting each other's changes.
            <br /><br />
            GitHub, on the other hand, is a platform built on top of Git that provides a web-based interface for managing Git repositories. 
            It facilitates collaboration by allowing developers to share code, contribute to open-source projects, and manage issues and pull requests.
          </span>
        } 
      />

      <InfoBox 
        title="Useful Links for Learning Git and GitHub" 
        content={
          <span>
            Here are some helpful resources to learn Git and GitHub:
            <ul className="list-disc list-inside">
              <li><a href="https://www.youtube.com/watch?v=RGOj5yH7evk" target="_blank" rel="noopener noreferrer" className="text-blue-500">YouTube: Git and GitHub for Beginners</a></li>
              <li><a href="https://www.codecademy.com/learn/learn-git" target="_blank" rel="noopener noreferrer" className="text-blue-500">Codecademy: Learn Git</a></li>
              <li><a href="https://www.freecodecamp.org/news/learn-git-and-github-by-building-a-website/" target="_blank" rel="noopener noreferrer" className="text-blue-500">FreeCodeCamp: Learn Git and GitHub</a></li>
              <li><a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer" className="text-blue-500">Official Git Documentation</a></li>
            </ul>
          </span>
        } 
      />

      <h2 className="text-lg font-bold mt-6">That's all for intro, let's move towards the hands-on GitHub!</h2>
    </div>
  );
};

export default InfoBoxcom;
