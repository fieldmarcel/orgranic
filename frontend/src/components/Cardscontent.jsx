import React from 'react';
import { Link } from 'react-router-dom';
import { BorderBeam } from "../components/ui/border-beam";

const Cardscontent = ({ id, image, title, rating }) => {
  return (
    <Link
      to={`/recipe/${id}`}
      className=" sm:h-[32rem] sm:w-[20rem] block  relative w-full h-96  max-w-xs mx-auto transition-transform duration-300 hover:-translate-y-2"
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

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2 text-white">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold font-[Poppins] line-clamp-2 leading-tight">
              {title}
            </h3>
            <span className="flex items-center bg-white/20 rounded-full px-3 py-1 text-sm backdrop-blur">
              ⭐ {rating}
            </span>
          </div>

          {/* View Button */}
          <div className=" ">
            <button className="opacity-0 hover:opacity-100 transition-opacity-colors duration-300 w-full py-2 bg-white/90 text-gray-900 rounded-3xl font-semibold hover:bg-white ">
              View Recipe
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cardscontent;