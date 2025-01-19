import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Login attempted with Email: ${email} and Password: ${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div
        className="relative bg-gray-800 text-white rounded-lg shadow-lg p-8 max-w-sm w-full border border-purple-500 
        transform hover:scale-105 hover:shadow-2xl transition duration-300"
      >
        {/* Animated Border */}
        <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 blur opacity-50 animate-pulse"></div>

        <h2 className="text-3xl font-bold text-center mb-8">Welcome Back</h2>

        <form onSubmit={handleLogin} className="space-y-6 relative z-10">
          {/* Email Input */}
          <div className="relative">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 mt-1 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:border-purple-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 mt-1 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:border-purple-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-md shadow-md hover:bg-purple-700 transition duration-300 transform hover:scale-105"
          >
            Login
          </button>
        </form>

        {/* Link */}
      </div>
    </div>
  );
};

export default Login;
