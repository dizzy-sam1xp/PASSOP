import React, { useState } from "react";
import { useEffect } from "react";

const Manager = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setform] = useState({
    website: "",
    username: "",
    password: "",
  });
  const [passwordArray, setPasswordArray] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [copiedField, setCopiedField] = useState(null);
  const [toast, setToast] = useState(null);
  const [editForm, setEditForm] = useState({
    website: "",
    username: "",
    password: "",
  });

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const savePassword = () => {
    if (form.website && form.username && form.password) {
      const updated = [...passwordArray, form];
      setPasswordArray(updated);
      localStorage.setItem("passwords", JSON.stringify(updated));
      setform({ website: "", username: "", password: "" });
      showToast("Password saved successfully!");
    }
  };

  const deletePassword = (index) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this password?",
    );

    if (!confirmed) {
      return;
    }

    const updated = passwordArray.filter((_, i) => i !== index);
    setPasswordArray(updated);
    localStorage.setItem("passwords", JSON.stringify(updated));
    showToast("Password deleted successfully!");
  };

  const startEdit = (index) => {
    setEditingIndex(index);
    setEditForm(passwordArray[index]);
  };

  const saveEdit = (index) => {
    const updated = passwordArray.map((item, i) =>
      i === index ? editForm : item,
    );
    setPasswordArray(updated);
    localStorage.setItem("passwords", JSON.stringify(updated));
    setEditingIndex(null);
    showToast("Password updated successfully!");
  };

  const cancelEdit = () => {
    setEditingIndex(null);
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const showToast = (message) => {
    setToast({ message });
    setTimeout(() => setToast(null), 3000);
  };

  const copyToClipboard = (text, index, field) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedField(`${index}-${field}`);
        showToast(
          `${field === "username" ? "Username" : "Password"} copied to clipboard!`,
        );
        setTimeout(() => {
          setCopiedField(null);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        showToast("Could not copy to clipboard.");
      });
  };

  return (
    <>
      {toast && (
        <div
          role="status"
          className="fixed right-4 top-4 z-50 flex max-w-[calc(100%-2rem)] items-center gap-3 rounded-lg border border-green-300 bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-lg sm:right-6 sm:top-6"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
            ✓
          </span>
          <span>{toast.message}</span>
        </div>
      )}
      <div className="min-h-screen bg-green-100">
        <div className="container mx-auto px-4 py-6 sm:py-8 max-w-4xl">
          <div className="mb-8">
            <h1 className="flex justify-center text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
              <span className="text-[#03b80ffd]">&lt;</span>
              <span>Pass</span>
              <span className="text-[#03b80ffd]">OP/&gt;</span>
            </h1>
            <p className="text-center text-sm sm:text-base text-gray-600">
              Securely manage all your passwords in one place
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-8 border border-gray-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Add New Password
            </h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Website URL
              </label>
              <input
                value={form.website}
                onChange={handleChange}
                type="text"
                name="website"
                id=""
                placeholder="https://example.com"
                className="rounded-full w-full px-4 py-2 bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <input
                  value={form.username}
                  onChange={handleChange}
                  type="text"
                  name="username"
                  id=""
                  placeholder="Enter username or email"
                  className="rounded-full w-full px-4 py-2 bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    value={form.password}
                    onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id=""
                    placeholder="Enter password"
                    className="rounded-full w-full px-4 py-2 pr-12 bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 focus:outline-none"
                  >
                    <img
                      src={showPassword ? "/eyeClose.png" : "/eyeOpen.png"}
                      alt={showPassword ? "Hide password" : "Show password"}
                      className="w-5 h-5"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full">
              <button
                onClick={savePassword}
                className="cursor-pointer rounded-full group flex items-center justify-center gap-2  bg-green-600 hover:bg-green-700  text-black font-semibold py-2 px-4 transition-all duration-300 hover:scale-105"
              >
                <svg
                  className=" w-5 h-5 transition-transform duration-300 group-hover:rotate-90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5v14M5 12h14"
                  />
                </svg>
                Add Password
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Your Passwords
            </h2>
            {passwordArray.length > 0 ? (
              <div className="space-y-2">
                {passwordArray.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-lg"
                  >
                    <button
                      onClick={() => toggleExpand(index)}
                      className="w-full flex justify-between items-center px-4 py-3 bg-green-50 hover:bg-green-100 transition"
                    >
                      <span className="font-medium text-gray-800 text-left break-all pr-3">
                        {item.website}
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-600 transition-transform ${
                          expandedIndex === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {expandedIndex === index && (
                      <div className="px-4 py-4 border-t-2 border-green-500 bg-green-100">
                        {editingIndex === index ? (
                          <div className="space-y-3">
                            <div>
                              <label className="block text-sm font-medium text-green-700 mb-1">
                                Website
                              </label>
                              <input
                                type="text"
                                name="website"
                                value={editForm.website}
                                onChange={handleEditChange}
                                className="w-full px-3 py-2 border-2 border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-green-700 mb-1">
                                Username
                              </label>
                              <input
                                type="text"
                                name="username"
                                value={editForm.username}
                                onChange={handleEditChange}
                                className="w-full px-3 py-2 border-2 border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-green-700 mb-1">
                                Password
                              </label>
                              <input
                                type="text"
                                name="password"
                                value={editForm.password}
                                onChange={handleEditChange}
                                className="w-full px-3 py-2 border-2 border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                              />
                            </div>
                            <div className="flex gap-2 justify-end">
                              <button
                                onClick={cancelEdit}
                                className="px-4 py-2 bg-green-400 hover:bg-green-500 text-white rounded-lg transition"
                              >
                                Cancel
                              </button>
                              <button
                                onClick={() => saveEdit(index)}
                                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <div>
                              <label className="text-sm font-medium text-green-700">
                                Website:
                              </label>
                              <p className="text-green-900 break-all">
                                <a href={item.website} target="_blank" rel="noreferrer">
                                  {item.website}
                                </a>
                              </p>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-green-700">
                                Username:
                              </label>
                              <div className="flex items-center gap-2">
                                <p className="text-green-900">
                                  {item.username}
                                </p>
                                <button
                                  type="button"
                                  onClick={() =>
                                    copyToClipboard(
                                      item.username,
                                      index,
                                      "username",
                                    )
                                  }
                                  className="cursor-pointer hover:opacity-70 transition"
                                >
                                  {copiedField === `${index}-username` ? (
                                    <svg
                                      className="w-4 h-4 text-green-600"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  ) : (
                                    <img
                                      src="/copy.png"
                                      alt="Copy username"
                                      className="w-4 h-4"
                                    />
                                  )}
                                </button>
                              </div>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-green-700">
                                Password:
                              </label>
                              <div className="flex items-center gap-2">
                                <p className="text-green-900 font-mono bg-green-200 px-2 py-1 rounded inline-block">
                                  {item.password}
                                </p>
                                <button
                                  type="button"
                                  onClick={() =>
                                    copyToClipboard(
                                      item.password,
                                      index,
                                      "password",
                                    )
                                  }
                                  className="cursor-pointer hover:opacity-70 transition"
                                >
                                  {copiedField === `${index}-password` ? (
                                    <svg
                                      className="w-4 h-4 text-green-600"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  ) : (
                                    <img
                                      src="/copy.png"
                                      alt="Copy password"
                                      className="w-4 h-4"
                                    />
                                  )}
                                </button>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4">
                              <button
                                onClick={() => startEdit(index)}
                                className="flex items-center gap-2 px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
                              >
                                <img
                                  src="/edit.png"
                                  alt="Edit"
                                  className="w-4 h-4"
                                />
                                Edit
                              </button>
                              <button
                                onClick={() => deletePassword(index)}
                                className="flex items-center gap-2 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
                              >
                                <img
                                  src="/bin.png"
                                  alt="Delete"
                                  className="w-4 h-4"
                                />
                                Delete
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-center py-8">
                No passwords saved yet. Add one above to get started!
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
