
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for checkboxes
  const [checkedIngredients, setCheckedIngredients] = useState([]);
  const [checkedSteps, setCheckedSteps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8081/api/v1/recipes/${id}?limit=3`
        );
        setRecipe(data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching recipe details");
        console.error("Error:", err);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  // Handlers for checkboxes
  const handleIngredientCheck = (index) => {
    setCheckedIngredients((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const handleStepCheck = (index) => {
    setCheckedSteps((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="animate-pulse text-2xl font-semibold text-green-700">
          <span className="inline-block animate-bounce mr-2">🥦</span>
          Preparing your recipe...
          <span className="inline-block animate-bounce ml-2">🥦</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="text-green-800 text-xl font-medium bg-green-100 px-8 py-4 rounded-xl border-2 border-green-300">
          ⚠️ {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50">
      {/* Top Navigation */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-green-700 hover:text-green-900 text-sm flex items-center transition-all duration-300 hover:scale-105"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Recipes
          </Link>
          <div className="bg-green-600 text-white px-4 py-1 rounded-full font-medium text-sm shadow-sm">
            {recipe.cuisine}
          </div>
        </div>
      </div>

      {/* Hero Section with Image and Gradient Overlay */}
      <div className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-center  bg-cover h-[25rem] w-[35rem]"
          style={{
            backgroundImage: `url(${recipe.image || "https://via.placeholder.com/800x400"})`,
            filter: 'brightness(0.75)'
          }}
        />
        <div className="absolute inset-0 " />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h1 className="text-5xl font-bold mb-4 text-shadow">{recipe.title}</h1>
          <div className="flex flex-wrap items-center space-x-6 text-sm mb-6 text-shadow">
            <div className="flex items-center mb-2">
              <svg
                className="w-5 h-5 mr-1 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {recipe.rating}/5
            </div>
            <div className="mb-2">⏱️ {recipe.readyIn} mins</div>
            <div className="mb-2">🍽️ Serves {recipe.serving}</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 -mt-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="col-span-12 lg:col-span-8">
            {/* Recipe Description */}
            <div className="glass-card mb-8 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="h-10 w-1 bg-green-600 rounded-full mr-3"></div>
                <h2 className="text-3xl font-bold text-green-800">About This Dish</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {recipe.description}
              </p>
            </div>

            {/* Instructions */}
            <div className="glass-card mb-12 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="h-10 w-1 bg-green-600 rounded-full mr-3"></div>
                <h2 className="text-3xl font-bold text-green-800">Cooking Instructions</h2>
              </div>
              <ol className="space-y-6">
                {recipe.steps?.map((step, index) => (
                  <li key={index} className="flex items-start p-4 rounded-lg transition-all duration-300 hover:bg-green-100">
                    <div className="flex-shrink-0 mr-4">
                      <input
                        type="checkbox"
                        checked={checkedSteps.includes(index)}
                        onChange={() => handleStepCheck(index)}
                        className="w-6 h-6 mt-1 text-green-600 border-gray-300 rounded focus:ring-green-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <div className="bg-green-700 text-white w-8 h-8 rounded-full flex items-center justify-center mb-2 text-sm font-bold">
                        {index + 1}
                      </div>
                      <p
                        className={`text-gray-700 ${
                          checkedSteps.includes(index)
                            ? "line-through text-gray-400"
                            : ""
                        }`}
                      >
                        {step}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Nutrition Facts */}
            <div className="glass-card p-8 rounded-xl mb-8">
              <div className="flex items-center mb-6">
                <div className="h-10 w-1 bg-green-600 rounded-full mr-3"></div>
                <h2 className="text-3xl font-bold text-green-800">Nutrition Facts</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {Object.entries(recipe.nutrition).map(([key, value]) => (
                  <div
                    key={key}
                    className="text-center bg-white p-4 rounded-xl shadow-sm border border-green-100 transition-all duration-300 hover:shadow-md hover:border-green-200"
                  >
                    <div className="text-2xl font-bold text-green-700">
                      {value}
                      <span className="text-sm ml-1">
                        {key === "calories" ? "kcal" : "g"}
                      </span>
                    </div>
                    <div className="text-sm text-green-600 uppercase font-medium">
                      {key}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ingredients Sidebar */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-white p-6 rounded-xl shadow-lg lg:sticky lg:top-20 border border-green-100 bg-gradient-to-br from-white to-green-50">
              <div className="flex items-center mb-4">
                <div className="h-8 w-1 bg-green-600 rounded-full mr-3"></div>
                <h2 className="text-2xl font-bold text-green-800">Ingredients</h2>
              </div>
              <div className="space-y-3">
                {recipe.ingredients?.map((ingredient, index) => (
                  <div key={index} className="flex items-center p-3 rounded-lg transition-all duration-300 hover:bg-green-100">
                    <input
                      type="checkbox"
                      checked={checkedIngredients.includes(index)}
                      onChange={() => handleIngredientCheck(index)}
                      className="w-5 h-5 mr-3 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span
                      className={`${
                        checkedIngredients.includes(index)
                          ? "line-through text-gray-400"
                          : "text-gray-700"
                      }`}
                    >
                      {ingredient}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Print Recipe Button */}
              <button className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-300 font-medium shadow-sm hover:shadow-md">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Print Recipe
              </button>
              
              {/* Save Recipe Button */}
              <button className="mt-4 w-full bg-white border border-green-600 text-green-600 hover:bg-green-50 py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-300 font-medium">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                Save Recipe
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for glass effect and text shadow */}
      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(144, 238, 144, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
        }
        
        .text-shadow {
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
};

export default Recipe;