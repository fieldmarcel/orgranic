import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/api/v1/recipes/${id}?limit=3`
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

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-2xl font-semibold text-emerald-600">
          Preparing your recipe...
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-xl font-medium bg-red-50 px-8 py-4 rounded-xl">
          ⚠️ {error}
        </div>
      </div>
    );

   
    
    
   
    
      return (
        <div className="min-h-screen bg-gradient-to-b from-emerald-50/50 to-white/50">
          {/* Recipe Container */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Back Navigation */}
            <nav className="mb-8">
              <Link
                to="/"
                className="inline-flex items-center font-medium text-emerald-700 hover:text-emerald-900 transition-colors group"
              >
                <svg
                  className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
                Back to Recipes
              </Link>
            </nav>
    
            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left Column - Sticky Meta */}
              <div className="lg:col-span-1 lg:sticky lg:top-24 h-fit space-y-8">
                {/* Recipe Image */}
                <div className="aspect-w-3 aspect-h-2 bg-gray-100 rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5">
                  <img
                    src={recipe.image || "https://via.placeholder.com/600x400"}
                    alt={recipe.title}
                    className="object-cover w-full h-full"
                  />
                </div>
    
                {/* Quick Facts */}
                <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-900/5">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
                    {recipe.title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {recipe.description}
                  </p>
    
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-700">
                      <span className="w-8 mr-3 text-emerald-600">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                      <span className="text-lg">
                        {recipe.readyIn} minutes
                      </span>
                    </div>
    
                    <div className="flex items-center text-gray-700">
                      <span className="w-8 mr-3 text-emerald-600">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18 7.5v2.25M18 7.5h-1.25m-7.5 0H6m10.25 0h1.25M4.5 16.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v7.5A2.25 2.25 0 004.5 16.5zm-6-12h.008v.008H-6V4.5zm0 5.25h.008v.008H-6v-.008zm0 5.25h.008v.008H-6V15z"
                          />
                        </svg>
                      </span>
                      <span className="text-lg">Serves {recipe.serving}</span>
                    </div>
    
                    <div className="flex items-center text-gray-700">
                      <span className="w-8 mr-3 text-emerald-600">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          />
                        </svg>
                      </span>
                      <span className="text-lg">{recipe.rating}/5 Stars</span>
                    </div>
                  </div>
                </div>
              </div>
    
              {/* Right Column - Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Ingredients & Instructions */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-xl shadow-sm ring-1 ring-gray-900/5">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center font-serif">
                      <span className="mr-3 text-emerald-600">🥑</span>
                      Ingredients
                    </h3>
                    <ul className="space-y-4">
                      {recipe.ingredients?.map((ingredient, index) => (
                        <li
                          key={index}
                          className="flex items-start text-gray-700 text-lg leading-relaxed"
                        >
                          <span className="w-5 mt-1 mr-3 text-emerald-600">▹</span>
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>
    
                  <div className="bg-white p-8 rounded-xl shadow-sm ring-1 ring-gray-900/5">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center font-serif">
                      <span className="mr-3 text-emerald-600">👩🍳</span>
                      Instructions
                    </h3>
                    <ol className="space-y-6">
                      {Array.isArray(recipe.steps) ? (
                        recipe.steps.map((step, index) => (
                          <li key={index} className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-emerald-100/80 text-emerald-700 rounded-full flex items-center justify-center font-medium">
                              {index + 1}
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed">
                              {step}
                            </p>
                          </li>
                        ))
                      ) : (
                        <li>No instructions available</li>
                      )}
                    </ol>
                  </div>
                </div>
    
                {/* Nutrition Section */}
                <div className="bg-white p-8 rounded-xl shadow-sm ring-1 ring-gray-900/5">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center font-serif">
                    <span className="mr-3 text-emerald-600">⚡</span>
                    Nutrition Facts
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(recipe.nutrition).map(([key, value]) => (
                      <div
                        key={key}
                        className="text-center p-4 bg-emerald-50/50 rounded-lg hover:bg-emerald-50 transition-colors"
                      >
                        <div className="text-sm font-medium text-gray-600 mb-1 uppercase tracking-wide">
                          {key}
                        </div>
                        <div className="text-xl font-bold text-emerald-700">
                          {value}
                          {key === 'calories' ? 'kcal' : 'g'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
    
                {/* Additional Info */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-900/5">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Cuisine
                    </h4>
                    <span className="inline-block px-4 py-2 bg-emerald-100/70 text-emerald-800 rounded-full text-sm font-medium">
                      {recipe.cuisine}
                    </span>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-900/5">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Meal Type
                    </h4>
                    <span className="inline-block px-4 py-2 bg-emerald-100/70 text-emerald-800 rounded-full text-sm font-medium">
                      {recipe.mealType}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default Recipe;