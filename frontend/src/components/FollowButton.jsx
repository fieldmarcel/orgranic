import React, { useState } from "react";
import axios from "axios";

const FollowButton = ({ userId, followerId }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(0);

  const handleFollow = async () => {
    try {
      const response = await axios.post(`http://localhost:8081/api/v1/users/${userId}/follow`, null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // Send the access token
        },
      });

      setIsFollowing(!isFollowing);
      setFollowersCount(response.data.followersCount);
    } catch (error) {
      console.error("Error during follow:", error.message);
    }
  };

  return (
    <button onClick={handleFollow}>
      {isFollowing ? "Unfollow" : "Follow"} ({followersCount})
    </button>
  );
};

export default FollowButton;