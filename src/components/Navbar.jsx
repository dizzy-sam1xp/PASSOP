import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleGitHubClick = () => {
    window.open("https://github.com/dizzy-sam1xp/PASSOP.git", "_blank");
  };

  return (
    <nav className="bg-linear-to-r from-green-50 to-emerald-50 border-b-2 border-green-400 shadow-md">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <a href="/" className="flex items-center group">
          <div className="logo font-bold text-2xl tracking-tight">
            <span className="text-green-600 group-hover:text-green-700 transition-colors">
              &lt;
            </span>
            <span className="text-black group-hover:text-gray-800 transition-colors">
              Pass
            </span>
            <span className="text-green-600 group-hover:text-green-700 transition-colors">
              OP/&gt;
            </span>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link
              to="/"
              className="text-gray-700 font-medium hover:text-green-600 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-600 hover:after:w-full after:transition-all after:duration-300 transition-colors pb-1"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-700 font-medium hover:text-green-600 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-600 hover:after:w-full after:transition-all after:duration-300 transition-colors pb-1"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-700 font-medium hover:text-green-600 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-600 hover:after:w-full after:transition-all after:duration-300 transition-colors pb-1"
            >
              Contact
            </Link>
          </li>
        </ul>

        <button
          onClick={handleGitHubClick}
          title="Get the source code from GitHub"
          className="relative group flex items-center gap-2 px-4 py-2 bg-white border-2 border-green-600 rounded-lg hover:bg-green-600 hover:shadow-lg transition-all duration-300 text-gray-700 hover:text-white font-medium"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path d="M10.226 17.284c-2.965-.36-5.054-2.493-5.054-5.256 0-1.123.404-2.336 1.078-3.144-.292-.741-.247-2.314.09-2.965.898-.112 2.111.36 2.83 1.01.853-.269 1.752-.404 2.853-.404 1.1 0 1.999.135 2.807.382.696-.629 1.932-1.1 2.83-.988.315.606.36 2.179.067 2.942.72.854 1.101 2 1.101 3.167 0 2.763-2.089 4.852-5.098 5.234.763.494 1.28 1.572 1.28 2.807v2.336c0 .674.561 1.056 1.235.786 4.066-1.55 7.255-5.615 7.255-10.646C23.5 6.188 18.334 1 11.978 1 5.62 1 .5 6.188.5 12.545c0 4.986 3.167 9.12 7.435 10.669.606.225 1.19-.18 1.19-.786V20.63a2.9 2.9 0 0 1-1.078.224c-1.483 0-2.359-.808-2.987-2.313-.247-.607-.517-.966-1.034-1.033-.27-.023-.359-.135-.359-.27 0-.27.45-.471.898-.471.652 0 1.213.404 1.797 1.235.45.651.921.943 1.483.943.561 0 .92-.202 1.437-.719.382-.381.674-.718.944-.943" />
          </svg>
          <span className="hidden sm:inline">GitHub</span>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-normal">
            Get the source code from GitHub
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
