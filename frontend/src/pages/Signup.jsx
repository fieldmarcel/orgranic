import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [userName, setUsername] = useState("");
  const [fullName, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent form submission and page reload

    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/users/register",
        {
          userName,
          email,
          password,
          fullName,
        },
        {
          withCredentials: true,
        }
      );
      const data = res.data;

      if (data.success) {
        toast.success(data.message);
        navigate("/login");
      } else {
        toast.error(data.message || "Signup  has  failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong during signup", error.message);
      console.error(
        "ther's error during signup :",
        error.response?.data?.message || error.message
      );
    }
  };

  return (
    <div className="relative w-full h-screen">
      {/* Image Section */}
      <img
        src="/abc.jpg" // Directly using the public folder image
        className="object-cover w-full h-full absolute inset-0"
        alt="Signup visual"
      />

      {/* Form Section */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSignup}>
            <div className="text-gray-800 text-2xl text-center font-semibold mb-6">
              Create your Account
            </div>

            {/* Full Name Input */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="fullname"
              >
                Full Name
              </label>
              <input
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                type="text"
                value={fullName}
                onChange={(e) => setFullname(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Username Input */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                type="text"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Choose a username"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Signup Button */}
            <div className="flex items-center justify-between mb-6">
              <button
                className="w-full p-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all"
                type="submit"
              >
                Sign Up
              </button>
            </div>

            {/* Link to Login */}
            <div className="text-center text-sm">
              <span>Already have an account? </span>
              <Link
                to="/login"
                className="text-green-500 hover:underline font-semibold"
              >
                Login here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
