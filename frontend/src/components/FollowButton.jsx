import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const FollowButton = () => {
  const { userName } = useParams(); 
  const [isFollowing, setIsFollowing] = useState(false);

  const accessToken = localStorage.getItem("token");

  
  const handleFollow = async () => {
    try {
      if (!accessToken) {
        console.error("User not authenticated");
        return;
      }

      if (isFollowing) {
        await axios.post(
          process.env.REACT_BASE_URL + `api/v1/users/${userName}/unfollow`,
        
          {
            headers: {
              Authorization: `Bearer ${accessToken}`, 
            },
          }
        );
      } else {
        await axios.post(
          process.env.REACT_BASE_URL + `/api/v1/users/${userName}/follow`,
          
          {
            headers: {
              Authorization: `Bearer ${accessToken}`, 
            },
          }
        );
      }
      setIsFollowing(!isFollowing); 
    } catch (error) {
      console.error("Failed to update follow status:", error.message);
    }
  };

  return (
    <button
      onClick={handleFollow}
      className={`px-4 py-2 ${
        isFollowing ? "bg-red-500" : "bg-green-500"
      } text-white rounded-full font-medium flex items-center gap-2 shadow-md hover:bg-${
        isFollowing ? "red-600" : "green-600"
      } transition-all`}
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </button>
  );
};

export default FollowButton;