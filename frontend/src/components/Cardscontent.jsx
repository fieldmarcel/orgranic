import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BorderBeam } from "../components/ui/border-beam";
import { useParams } from "react-router-dom";


const Cardscontent = ({ id, image, title, rating }) => {
  const [isBookmarked, setIsBookmarked] = useState(0)
  const handlebookmark = async (e) => {
    e.preventDefault();
    try {
      // Retrieve the data object from localStorage
      const dataString = localStorage.getItem("data");
  
      if (!dataString) {
        console.error("No data found in localStorage. User might not be logged in.");
        return;
      }
  
      // Parse the data object
      const data = JSON.parse(dataString);
  
      // Extract userId from the data object
      const userId = data.id; // Replace "userId" with the actual key if it's different
  
      if (!userId) {
        console.error("userId not found in the data object.");
        return;
      }
  
      const accessToken = localStorage.getItem("token");
      const recipeId = id; // Ensure this is the correct recipeId
  
      console.log("Sending payload:", { userId, recipeId }); // Log the payload
  
      if (!accessToken) {
        console.error("No access token found. User might not be logged in.");
        return;
      }
  
      const res = await axios.post(
        "http://localhost:8081/api/v1/users/bookmarks",
        { userId, recipeId },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setIsBookmarked(true);
      console.log("Bookmark response:", res.data);
    } catch (error) {
      console.error("Error bookmarking recipe:", error);
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      }
    }
  };
  return (
    <Link
      to={`/recipe/${id}`}
      className="sm:h-[32rem] sm:w-[20rem] block relative w-full h-96 max-w-xs mx-auto transition-transform duration-300 hover:-translate-y-2"
    >
      <BorderBeam
        size={500}
        duration={6}
        delay={0}
        borderWidth={3.5}
        className="rounded-3xl -inset-[2px]"
        colorFrom="#F93827"
        colorTo="#F7DCB9"
      />
      <div className="relative w-full h-full rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 z-10">
        {/* Image Container */}
        <img
          src={image || "/placeholder-food.jpg"}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

        {/* Top Icons */}
        <div className="absolute top-3 right-3 flex gap-2">
          <button
            onClick={handlebookmark}
            className={`p-2 rounded-full shadow-sm transition-colors duration-200 ${
              isBookmarked ? "bg-red-500 text-white" : "bg-white text-red-500"
            }`}
          >
            {isBookmarked ? "Bookmarked" : "Bookmark"}
          </button>
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2 text-white">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold line-clamp-2 leading-tight">
              {title}
            </h3>
            <span className="flex items-center bg-white/20 rounded-full px-3 py-1 text-sm backdrop-blur">
              ⭐ {rating}
            </span>
          </div>

          {/* View Button */}
          <div className="">
            <button className="opacity-0 hover:opacity-100 transition-opacity-colors duration-300 w-full py-2 bg-white/90 text-gray-900 rounded-3xl font-semibold hover:bg-white">
              View Recipe
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cardscontent;