import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login, setUser } from "../../redux/slices/authSlice";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "http://localhost:8080/api/v1/users/login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );

    const data = await res.data;
    if (data.success) {
      toast.success(data.message);
      dispatch(login(true));
      dispatch(setUser(data.user));
      navigate("/");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Image Section */}
      <div className="hidden md:block h-full">
        <img
          src="/abc.jpg"
          className="object-fill object-center h-screen w-full"
          alt="Login visual"
        />
      </div>

      {/* Form Section */}
      <div className="flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Welcome Back
          </h2>
          <form >
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              onClick={handleLogin}
              className="w-full py-2 text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Sign In
            </button>
          </form>

          <div className="flex justify-between items-center mt-6">
            <span className="text-sm text-gray-600">
              Don't have an account?
            </span>
            <Link
              to="/signup"
              className="text-sm text-green-500 hover:underline"
            >
              Sign Up
            </Link>
          </div>
          <p className="text-center text-xs text-gray-400 mt-8">
            &copy; 2023 Homechef. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
