import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-only form handling - just reset the form
    alert(
      "Thank you for your message! This is a demo form. Please reach out via GitHub for actual communication.",
    );
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/dizzy-sam1xp/PASSOP.git", "_blank");
  };

  return (
    <div className="min-h-screen bg-green-100">
      {/* Hero Section */}
      <div className="bg-linear-to-b from-green-100 to-green-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-700">
            Have a question, found a bug, or have a suggestion? I'd love to hear
            from you.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Contact Form Section */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-300">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message..."
                  rows="6"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Other Ways to Connect Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Other Ways to Connect
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* GitHub Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-300 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">
                <svg
                  className="w-12 h-12 text-gray-800"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.226 17.284c-2.965-.36-5.054-2.493-5.054-5.256 0-1.123.404-2.336 1.078-3.144-.292-.741-.247-2.314.09-2.965.898-.112 2.111.36 2.83 1.01.853-.269 1.752-.404 2.853-.404 1.1 0 1.999.135 2.807.382.696-.629 1.932-1.1 2.83-.988.315.606.36 2.179.067 2.942.72.854 1.101 2 1.101 3.167 0 2.763-2.089 4.852-5.098 5.234.763.494 1.28 1.572 1.28 2.807v2.336c0 .674.561 1.056 1.235.786 4.066-1.55 7.255-5.615 7.255-10.646C23.5 6.188 18.334 1 11.978 1 5.62 1 .5 6.188.5 12.545c0 4.986 3.167 9.12 7.435 10.669.606.225 1.19-.18 1.19-.786V20.63a2.9 2.9 0 0 1-1.078.224c-1.483 0-2.359-.808-2.987-2.313-.247-.607-.517-.966-1.034-1.033-.27-.023-.359-.135-.359-.27 0-.27.45-.471.898-.471.652 0 1.213.404 1.797 1.235.45.651.921.943 1.483.943.561 0 .92-.202 1.437-.719.382-.381.674-.718.944-.943" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">GitHub</h3>
              <p className="text-gray-700 mb-6">
                Check out the source code, report issues, or contribute to the
                project.
              </p>
              <button
                onClick={handleGitHubClick}
                className="w-full flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.226 17.284c-2.965-.36-5.054-2.493-5.054-5.256 0-1.123.404-2.336 1.078-3.144-.292-.741-.247-2.314.09-2.965.898-.112 2.111.36 2.83 1.01.853-.269 1.752-.404 2.853-.404 1.1 0 1.999.135 2.807.382.696-.629 1.932-1.1 2.83-.988.315.606.36 2.179.067 2.942.72.854 1.101 2 1.101 3.167 0 2.763-2.089 4.852-5.098 5.234.763.494 1.28 1.572 1.28 2.807v2.336c0 .674.561 1.056 1.235.786 4.066-1.55 7.255-5.615 7.255-10.646C23.5 6.188 18.334 1 11.978 1 5.62 1 .5 6.188.5 12.545c0 4.986 3.167 9.12 7.435 10.669.606.225 1.19-.18 1.19-.786V20.63a2.9 2.9 0 0 1-1.078.224c-1.483 0-2.359-.808-2.987-2.313-.247-.607-.517-.966-1.034-1.033-.27-.023-.359-.135-.359-.27 0-.27.45-.471.898-.471.652 0 1.213.404 1.797 1.235.45.651.921.943 1.483.943.561 0 .92-.202 1.437-.719.382-.381.674-.718.944-.943" />
                </svg>
                Visit GitHub
              </button>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-300 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Email</h3>
              <p className="text-gray-700 mb-6">
                Have a question or want to get in touch? Send me an email.
              </p>
              <a
                href="mailto:saksham.pawan14@yahoo.com"
                className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Send Email
              </a>
            </div>

            {/* Feedback Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-300 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Feedback
              </h3>
              <p className="text-gray-700 mb-6">
                Found a bug or have an idea to improve PassOP? I'd love to hear
                your feedback.
              </p>
              <button
                onClick={handleGitHubClick}
                className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Open an Issue
              </button>
            </div>
          </div>
        </div>

        {/* Contribute Section */}
        <div className="mb-16">
          <div className="bg-linear-to-r from-green-100 to-emerald-50 rounded-lg shadow-lg p-12 border-2 border-green-400">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Contribute to PassOP
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              PassOP is an open-source project, and contributions are welcome.
              If you'd like to improve the project, fix a bug, add a feature, or
              contribute in any way, you can do so through GitHub.
            </p>
            <button
              onClick={handleGitHubClick}
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10.226 17.284c-2.965-.36-5.054-2.493-5.054-5.256 0-1.123.404-2.336 1.078-3.144-.292-.741-.247-2.314.09-2.965.898-.112 2.111.36 2.83 1.01.853-.269 1.752-.404 2.853-.404 1.1 0 1.999.135 2.807.382.696-.629 1.932-1.1 2.83-.988.315.606.36 2.179.067 2.942.72.854 1.101 2 1.101 3.167 0 2.763-2.089 4.852-5.098 5.234.763.494 1.28 1.572 1.28 2.807v2.336c0 .674.561 1.056 1.235.786 4.066-1.55 7.255-5.615 7.255-10.646C23.5 6.188 18.334 1 11.978 1 5.62 1 .5 6.188.5 12.545c0 4.986 3.167 9.12 7.435 10.669.606.225 1.19-.18 1.19-.786V20.63a2.9 2.9 0 0 1-1.078.224c-1.483 0-2.359-.808-2.987-2.313-.247-.607-.517-.966-1.034-1.033-.27-.023-.359-.135-.359-.27 0-.27.45-.471.898-.471.652 0 1.213.404 1.797 1.235.45.651.921.943 1.483.943.561 0 .92-.202 1.437-.719.382-.381.674-.718.944-.943" />
              </svg>
              Contribute on GitHub
            </button>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center py-12 border-t border-gray-300">
          <p className="text-lg text-gray-700 mb-4">
            Thanks for checking out &lt;PassOP/&gt;!
          </p>
          <p className="text-lg text-gray-700">
            Built with <span className="text-red-500">❤️</span> by Saksham
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
