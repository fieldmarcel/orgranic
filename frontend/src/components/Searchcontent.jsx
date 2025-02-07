import React from "react";
import { Link } from "react-router-dom";

const Searchcontent = ({ id, image, readyIn, rating, title }) => {
  return (
    <div className="group">
      <Link
        to={`/recipe/${id}`}
        className="block sm:w-[320px] sm:h-[220px] h-48 w-full mx-auto transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
      >
        <div className="relative w-full h-full rounded-xl shadow-md overflow-hidden bg-white">
          {/* Image Container with Floating Badges */}
          <div className="relative w-full h-full">
            <img
              src={image || "/placeholder-food.jpg"}
              alt={title}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
            
            {/* Top Right Rating */}
            <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-amber-600 shadow-sm">
              ⭐ {rating}
            </div>
          </div>

          {/* Bottom Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1.5">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-white font-[Poppins] line-clamp-2 leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {title}
              </h3>
            </div>

            {/* Metadata Section */}
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-white/90 bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                🕒 {readyIn}
              </p>
              <button className="p-2 bg-white/90 backdrop-blur rounded-full shadow-sm hover:bg-white transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.42 3.42 5 5.5 5c1.74 0 3.41.81 4.5 2.09C11.09 5.81 12.76 5 14.5 5 16.58 5 18 6.42 18 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Searchcontent;