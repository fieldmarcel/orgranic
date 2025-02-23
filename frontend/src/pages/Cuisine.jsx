import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Searchcontent from "../components/Searchcontent";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Cuisine = () => {
  const [cuisineRecipes, setCuisineRecipes] = useState([]);
  const { cuisine } = useParams(); // Only extract `cuisine` from the route

  const fetchCuisineRecipes = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8081/api/v1/recipes/cuisine/${cuisine}`
      );
      setCuisineRecipes(res.data);
      console.log("Cuisine Recipes:", res.data);
    } catch (error) {
      console.error("Failed to fetch cuisine recipes:", error.message);
    }
  };

  useEffect(() => {
    console.log("Fetching recipes for:", cuisine);

    if (cuisine) {
      fetchCuisineRecipes();
    } else {
      console.error("Cuisine parameter is undefined");
    }
  }, [cuisine]);
  return (
    <div className="min-h-screen p-6">
      {/* Page Header */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800"
      >
        {cuisine} Cuisine
      </motion.h2>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cuisineRecipes.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-gray-500 col-span-full"
          >
            No recipes found
          </motion.p>
        ) : (
          cuisineRecipes.map((recipe) => (
            <motion.div
              key={recipe._id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <Searchcontent
                key={recipe._id}
                id={recipe._id}
                title={recipe.title}
                image={recipe.image}
                rating={recipe.rating}
              />
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cuisine;
