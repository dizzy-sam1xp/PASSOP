import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-green-100">
      <div className="bg-linear-to-b from-green-100 to-green-50 py-10 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-6">
            About PassOP
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-4">
            PassOP is a simple and secure password manager designed to help you
            keep your login credentials organized in one place.
          </p>
          <p className="text-lg text-gray-600">
            Store, manage, and access your passwords without keeping them
            scattered across notes, browsers, or random files.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 sm:mb-12 text-center">
            What PassOP Does
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-5 sm:p-8 border border-gray-300 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Store Passwords
              </h3>
              <p className="text-gray-700">
                Save website URLs, usernames, emails, and passwords in one
                place.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-5 sm:p-8 border border-gray-300 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Quick Access
              </h3>
              <p className="text-gray-700">
                View and manage your saved credentials from a simple and clean
                interface.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-5 sm:p-8 border border-gray-300 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Privacy First
              </h3>
              <p className="text-gray-700">
                Your passwords should remain private. PassOP is designed with
                privacy and security in mind. That's why it saves all your
                passwords in your browser's localStorage, ensuring that your
                data never leaves your device.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
            Features
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-5 sm:p-8 border border-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-lg text-gray-700">
                    Add and delete passwords
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-lg text-gray-700">
                    Edit saved credentials
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-lg text-gray-700">
                    Show/hide passwords
                  </span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-lg text-gray-700">
                    Copy passwords to clipboard
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-lg text-gray-700">
                    Store website URLs and usernames
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-lg text-gray-700">
                    Save passwords in browser's localStorage for privacy
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Built With
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <h3 className="text-xl font-bold text-green-600 mb-2">React</h3>
                <p className="text-gray-700">
                  JavaScript library for building user interfaces
                </p>
              </div>
              <div className="text-center p-4">
                <h3 className="text-xl font-bold text-green-600 mb-2">Vite</h3>
                <p className="text-gray-700">
                  Next generation frontend tooling
                </p>
              </div>
              <div className="text-center p-4">
                <h3 className="text-xl font-bold text-green-600 mb-2">
                  Tailwind CSS
                </h3>
                <p className="text-gray-700">Utility-first CSS framework</p>
              </div>
              <div className="text-center p-4">
                <h3 className="text-xl font-bold text-green-600 mb-2">
                  React Router
                </h3>
                <p className="text-gray-700">Client-side routing for React</p>
              </div>
              <div className="text-center p-4">
                <h3 className="text-xl font-bold text-green-600 mb-2">
                  localStorage API
                </h3>
                <p className="text-gray-700">
                  Browser storage for data persistence
                </p>
              </div>
              <div className="text-center p-4">
                <h3 className="text-xl font-bold text-green-600 mb-2">
                  Clipboard API
                </h3>
                <p className="text-gray-700">
                  Copy text to clipboard functionality
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-12 border-t border-gray-300">
          <p className="text-lg text-gray-700">
            Built with <span className="text-red-500">❤️</span> by Saksham
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
