import React from 'react';

const Cardscontent = ({image, title, rating} ) => {
  console.log("Image URL in Cardscontent:", image);

  return (
    <div className="relative w-64 h-80 bg-orange-400 rounded-lg shadow-lg overflow-hidden flex flex-col">
      {/* Image Section */}
      <div className="relative">
      
        <img
          src={image ? image : "/cookie.jpg"}
          
          alt={title}
          className="w-full h-40 object-cover object-top"
          
        />
        {/* Heart Icon */}
        <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-red-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.42 3.42 5 5.5 5c1.74 0 3.41.81 4.5 2.09C11.09 5.81 12.76 5 14.5 5 16.58 5 18 6.42 18 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      </div>

      {/* Title and Rating */}
      <div className="flex-1 p-4 flex flex-col justify-between bg-teal-600 text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm">Rating:</span>
          <span className="text-lg font-bold">{rating} ⭐</span>
        </div>
      </div>
    </div>
  );
};

export default Cardscontent;
