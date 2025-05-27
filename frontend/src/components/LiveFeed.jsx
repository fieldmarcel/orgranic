import React, { useState, useEffect } from "react";
import socket from "@/utils/socket";

const LiveFeed = () => {
  const [posts, setPosts] = useState([]);
  const [msg, setMsg] = useState("");

  const handlePost = (e) => {
    e.preventDefault();
    if (msg.trim() === "") return;
    socket.emit("sendPost", { message: msg });
    setMsg("");
  };

  useEffect(() => {
    // Request all posts upon component mount
    socket.emit("getAllPosts");

    // Listen for allPosts event from the server
    socket.on("allPosts", (allPosts) => {
      setPosts(allPosts);
    });

    // Cleanup on component unmount
    return () => {
      socket.off("allPosts");
    };
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">🍲 Community Feed</h2>

      <form onSubmit={handlePost} className="mb-4">
        <textarea
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Share your food thoughts..."
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 mt-2"
        >
          Post
        </button>
      </form>

      <ul className="mt-4 space-y-2">
        {posts.map((post, index) => (
          <li key={index} className="bg-gray-100 p-2 rounded-lg shadow-sm">
            <p className="text-gray-800">{post.message}</p>
            <p className="text-sm text-gray-500">{post.user}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveFeed;
