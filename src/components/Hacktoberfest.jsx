import React from "react";

const TabContent = () => {
  return (
    <div className="p-6">
      <div className="bg-gray-900 text-white p-6 rounded-md">
        {/* Section 1 - Welcome */}
        <div className="mb-6 p-4 bg-gray-800 rounded-md">
          <h2 className="font-bold mb-4 text-2xl">
            Welcome to Hacktoberfest 2025!
          </h2>
          <p className="mb-4">
            CSI-CATT DMCE is open to all contributions made by students of DMCE.
            Hacktoberfest is an annual event that encourages participation in
            the open-source community, helping students to contribute to
            projects that matter, grow their skills, and collaborate with a
            global community.
          </p>
        </div>

        {/* Section 2 - What is Hacktoberfest */}
        <div className="mb-6 p-4 bg-gray-800 rounded-md">
          <h3 className="font-bold text-lg mb-2">
            What is Hacktoberfest 2025?
          </h3>
          <p>
            Hacktoberfest 2025 is a month-long celebration of open source
            software. It's designed to give students and developers alike the
            opportunity to work on various open-source projects, enhancing their
            coding skills while contributing to real-world projects. By
            participating, students can improve their coding skills, network
            with the open-source community, and even get rewarded for their
            contributions.
          </p>
        </div>

        {/* Section 3 - Guide for Contributions */}
        <div className="mb-6 p-4 bg-gray-800 rounded-md">
          <h3 className="font-bold text-lg mb-4">
            Steps to Make Contributions
          </h3>

          {/* Step 1 */}
          <div className="mb-4">
            <h4 className="font-semibold">
              1. Visit the Hacktoberfest 2025 Official Website
            </h4>
            <p>
              <a
                href="https://hacktoberfest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                https://hacktoberfest.com
              </a>
            </p>
            <p>
              After doing the registration, come back here and follow the steps
              below.
            </p>
          </div>

          {/* Step 2 */}
          <div className="mb-4">
            <h4 className="font-semibold">2. Steps for Registration</h4>
            <p>
              Head over to the Hacktoberfest website and sign up with your
              GitHub account. You’ll need to verify your email and choose to
              participate by registering for Hacktoberfest 2025.
            </p>
          </div>

          {/* Step 3 */}
          <div className="mb-4">
            <h4 className="font-semibold">
              3. Start Contributing to Open-Source Projects
            </h4>
            <p>
              Now that you’ve registered for Hacktoberfest 2025, you can start
              contributing to open-source projects by forking any repository
              that is open under Hacktoberfest.
            </p>
          </div>

          {/* Step 4 */}
          <div className="mb-4">
            <h4 className="font-semibold">
              4. Identifying Hacktoberfest Repositories
            </h4>
            <p>
              To recognize which repositories are open for Hacktoberfest
              contributions, look for repositories with the{" "}
              <strong>Hacktoberfest</strong> tag. These repos will be marked as
              accepting Hacktoberfest contributions, ensuring your pull requests
              count towards your participation.
            </p>
          </div>

          {/* Step 5 */}
          <div className="mb-4">
            <h4 className="font-semibold">
              5. Contribute to CSI-CATT DMCE Repositories
            </h4>
            <p>
              For DMCE students, we have our own set of repositories open for
              Hacktoberfest contributions. You can find them here:
            </p>
            <a
              href="https://github.com/CSI-DMCE-2024"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              https://github.com/CSI-DMCE-2024
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hacktoberfest = () => {
  return (
    <div className="min-h-screen bg-green-700 text-white">
      <h1 className="text-4xl font-bold text-center p-6">Hacktoberfest 2025</h1>
      <TabContent />
    </div>
  );
};

export default Hacktoberfest;
