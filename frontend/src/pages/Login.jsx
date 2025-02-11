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

    try {
      const res = await axios.post(
        "http://localhost:8081/api/v1/users/login",
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
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Image Section */}
      <div className="hidden lg:flex w-full lg:w-1/2 login_bg">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url('/abc.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      {/* Form Section */}
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-white">
        <div className="w-full max-w-md px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Sign In to HomeChef
          </h2>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
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
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                required
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-800"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  to="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-blue-600 font-medium hover:text-blue-500"
              >
                Sign Up
              </Link>
            </p>
          </div>

          <p className="text-center text-xs text-gray-400 mt-8">
            &copy; {new Date().getFullYear()} HomeChef. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
