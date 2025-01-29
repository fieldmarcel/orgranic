import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Recipe = () => {
  const { id } = useParams(); // Get recipe ID from URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/recipes/${id}`);
        setRecipe(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching recipe.");
        setLoading(false);
      }
    };

    fetchRecipeData();
  }, [id]); // Fetch new data if the recipe ID changes

  if (loading) return <p>Loading recipe...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex justify-center items-start py-10 px-4">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg p-6">
        {/* Recipe Image */}
        <div className="w-full mb-6">
          <img
            src={recipe.image || "https://via.placeholder.com/600x400"}  // Fallback to placeholder
            alt={recipe.title}
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Recipe Details */}
        <div className="flex flex-col gap-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">{recipe.title}</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {recipe.description}
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-bold text-gray-800">Preparation Time</p>
              <p>{recipe.preparationTime}</p>
            </div>
            <div>
              <p className="font-bold text-gray-800">Cooking Time</p>
              <p>{recipe.cookingTime}</p>
            </div>
            <div>
              <p className="font-bold text-gray-800">Servings</p>
              <p>{recipe.servings}</p>
            </div>
            <div>
              <p className="font-bold text-gray-800">Difficulty</p>
              <p>{recipe.difficulty}</p>
            </div>
          </div>
        </div>

        {/* Ingredients Section */}
        <div className="my-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
            Ingredients
          </h3>
          <ul className="list-none flex flex-wrap justify-center gap-4 text-gray-700">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="bg-gray-100 px-4 py-2 rounded-lg shadow-md">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        {/* Directions Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
            Directions
          </h3>
          <ol className="list-decimal space-y-4 text-gray-700 text-lg pl-6">
            {recipe.directions.map((direction, index) => (
              <li key={index}>{direction}</li>
            ))}
          </ol>
        </div>

        {/* Newsletter Section */}
        <div className="bg-blue-600 text-white py-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Sign Up for More Recipes
          </h3>
          <p className="mb-6 text-center">
            Get delicious recipes delivered straight to your inbox!
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg text-gray-800 w-full sm:w-1/2 shadow-md"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
