import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BiEdit,
  BiBookmark,
  BiHeart,
  BiShare,
  BiCog,
  BiLogOut,
  BiCheckCircle,
  BiStar,
  BiTrophy,
  BiRestaurant,
  BiHourglass,
  BiUserVoice,
} from "react-icons/bi";
import axios from "axios";
import FollowButton from "@/components/FollowButton";
import { useParams } from "react-router-dom";
const Profile = () => {
  const [activeTab, setActiveTab] = useState("recipes");
  const { userName } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/api/v1/users/${userName}`
        );
        setUser(response.data.user);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch user data:", error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userName]); // Dependency on userName

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Image and Profile Info Section */}
      <div className="relative h-80 overflow-hidden">
        <img
          // src={user?.coverImage || "default-image-url"}

          src={"/apple.jpg" || "default-image-url"}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
      </div>

      {/* Profile Card */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <motion.div
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:flex">
            {/* Left Column - Avatar & Info */}
            <div className="md:w-1/3 p-6 md:p-8 flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-gray-100">
              <div className="relative mb-4">
                <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden">
                  <img
                    src="/cook.gif"
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  <BiCheckCircle className="text-xl" />
                </motion.div>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 text-center md:text-left">
                {user?.fullName || "Admin"}
              </h1>
              <p className="text-green-600 font-medium mb-4 text-center md:text-left">
                {user.title}
              </p>

              <p className="text-gray-600 text-sm mb-6 text-center md:text-left">
                {user.bio}
              </p>

              {/* Stats */}
              <div className="flex justify-between w-full mb-6">
                <div className="text-center">
                  {/* <p className="text-2xl font-bold text-gray-800">recipes</p>
                  <p className="text-sm text-gray-500">Recipes</p> */}
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800">
                    {user.followers}
                  </p>
                  <p className="text-sm text-gray-500">Followers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800">
                    {user.following}
                  </p>
                  <p className="text-sm text-gray-500">Following</p>
                </div>
              </div>

              {/* Achievements */}
            </div>

            {/* Right Column - Content */}
            <div className="md:w-2/3 p-6 md:p-8">
              {/* Action buttons */}
              <div className="flex justify-between mb-8">
                <motion.button
                  className="px-4 py-2 bg-green-500 text-white rounded-full font-medium flex items-center gap-2 shadow-md hover:bg-green-600 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BiHeart className="text-lg" />
                  Follow
                </motion.button>

                <div className="flex gap-2">
                  <motion.button
                    className="p-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <BiShare className="text-lg" />
                  </motion.button>
                  <motion.button
                    className="p-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <BiCog className="text-lg" />
                  </motion.button>
                </div>
              </div>
              {/* Tabs */}
              {/* <div className="border-b border-gray-200 mb-6">
                <nav className="flex space-x-8">
                  {[
                    {
                      id: "recipes",
                      label: "My Recipes",
                      icon: <BiRestaurant />,
                    },
                    { id: "saved", label: "Saved", icon: <BiBookmark /> },
                    { id: "reviews", label: "Reviews", icon: <BiUserVoice /> },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-3 flex items-center gap-1 border-b-2 font-medium text-sm ${
                        activeTab === tab.id
                          ? "border-green-500 text-green-600"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div> */}
              {/* Tab Content
              <div className="min-h-[400px]">
                {activeTab === "recipes" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {recipes.map((recipe) => (
                      <motion.div
                        key={recipe.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="relative aspect-video overflow-hidden">
                          <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                            <div>
                              <div className="flex gap-1 mb-1">
                                {recipe.tags.map((tag, idx) => (
                                  <span
                                    key={idx}
                                    className="text-xs px-2 py-1 bg-white/30 backdrop-blur-sm rounded-full text-white font-medium"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <h3 className="text-white font-bold">
                                {recipe.title}
                              </h3>
                            </div>
                            <div className="flex items-center gap-1 text-white/90 text-sm">
                              <BiHourglass /> {recipe.time}
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <BiHeart className="text-red-500" />
                                {recipe.likes}
                              </span>
                              <span className="flex items-center gap-1">
                                <BiBookmark className="text-blue-500" />
                                {recipe.saves}
                              </span>
                            </div>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                recipe.difficulty === "Easy"
                                  ? "bg-green-100 text-green-800"
                                  : recipe.difficulty === "Medium"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {recipe.difficulty}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === "saved" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {savedRecipes.map((recipe) => (
                      <motion.div
                        key={recipe.id}
                        className="flex bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="w-1/3 overflow-hidden">
                          <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <div className="w-2/3 p-4 flex flex-col justify-between">
                          <div>
                            <h3 className="font-bold text-gray-800 mb-1">
                              {recipe.title}
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">
                              By {recipe.author}
                            </p>
                          </div>
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-xs text-gray-600 flex items-center gap-1">
                              <BiHourglass /> {recipe.time}
                            </span>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                recipe.difficulty === "Easy"
                                  ? "bg-green-100 text-green-800"
                                  : recipe.difficulty === "Medium"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {recipe.difficulty}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === "reviews" && (
                  <div className="text-center py-12 text-gray-500">
                    <BiUserVoice className="text-5xl mx-auto mb-4 text-gray-300" />
                    <p>You haven't written any reviews yet.</p>
                  </div>
                )}
              </div> */}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Actions */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-4 flex justify-between items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-gray-500 text-sm">Member since Feb 2023</div>
          <motion.button
            className="px-4 py-2 text-red-600 font-medium flex items-center gap-2 hover:bg-red-50 rounded-full transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BiLogOut className="text-lg" />
            Sign Out
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
