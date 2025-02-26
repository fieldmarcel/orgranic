import React, { useState } from "react";
import axios from "axios";

const FollowButton = ({ userName, isFollowing }) => {
  const [following, setFollowing] = useState(isFollowing);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleFollow = async () => {
    setLoading(true); 
    try {
      await axios.post(
        `http://localhost:8081/api/v1/users/${userName}/follow`,
        null,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      setFollowing(true); 
    } catch (error) {
      console.error("Error during follow:", error.message);
    } finally {
      setLoading(false); 
    }
  };

  const handleUnfollow = async () => {
    setLoading(true); 
    try {
      await axios.post(
        `http://localhost:8081/api/v1/users/${userName}/unfollow`,
        null,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      setFollowing(false); 
    } catch (error) {
      console.error("Error during unfollow:", error.message);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <button
      onClick={following ? handleUnfollow : handleFollow}
      disabled={loading} 
      className={`px-4 py-2 rounded-full font-medium transition-colors ${
        following
          ? "bg-green-400 hover:bg-green-500 text-gray-700"
          : "bg-blue-500 hover:bg-blue-600 text-white" 
      }`}
    >
      {loading ? "Loading..." : following ? "Following" : "Follow"}
    </button>
  );
};

export default FollowButton;