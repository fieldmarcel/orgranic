import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8080/api/v1/recipes/${id}`);
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

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-2xl font-semibold text-emerald-600">
        Preparing your recipe...
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-red-500 text-xl font-medium bg-red-50 px-8 py-4 rounded-xl">
        ⚠️ {error}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Recipe Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Navigation */}
        <nav className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-emerald-600 hover:text-emerald-800 transition-colors group"
          >
            <svg 
              className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-medium">All Recipes</span>
          </Link>
        </nav>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Sticky Meta */}
          <div className="lg:col-span-1 lg:sticky lg:top-24 h-fit">
            {/* Recipe Image */}
            <div className="aspect-w-3 aspect-h-2 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={recipe.image || "https://via.placeholder.com/600x400"}
                alt={recipe.title}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Quick Facts */}
            <div className="mt-6 bg-white p-6 rounded-2xl shadow-sm border border-emerald-50">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h2>
              <p className="text-gray-600 mb-6">{recipe.description}</p>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-6 mr-2 text-emerald-600">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span className="font-medium">{recipe.readyIn} mins total</span>
                </div>
                
                <div className="flex items-center">
                  <span className="w-6 mr-2 text-emerald-600">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  <span className="font-medium">Serves {recipe.serving}</span>
                </div>

                <div className="flex items-center">
                  <span className="w-6 mr-2 text-emerald-600">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </span>
                  <span className="font-medium">{recipe.rating}/5 Stars</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2">
            {/* Ingredients & Instructions */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-50">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="mr-2 text-emerald-600">🥑</span>
                  Ingredients
                </h3>
                <ul className="space-y-3">
                  {recipe.ingredients?.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-5 mt-1 mr-2 text-emerald-600">▹</span>
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-50">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="mr-2 text-emerald-600">👩🍳</span>
                  Instructions
                </h3>
                <ol className="space-y-4">
                  {recipe.steps?.split('\n').map((step, index) => (
                    <li key={index} className="flex">
                      <span className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mr-3">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Nutrition Section */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="mr-2 text-emerald-600">⚡</span>
                Nutrition Facts
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-emerald-50 rounded-xl">
                  <div className="text-sm text-gray-600 mb-1">Calories</div>
                  <div className="text-xl font-bold text-emerald-600">{recipe.nutrition.calories}</div>
                  <div className="text-xs text-gray-500">kcal</div>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-xl">
                  <div className="text-sm text-gray-600 mb-1">Protein</div>
                  <div className="text-xl font-bold text-emerald-600">{recipe.nutrition.protein}g</div>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-xl">
                  <div className="text-sm text-gray-600 mb-1">Carbs</div>
                  <div className="text-xl font-bold text-emerald-600">{recipe.nutrition.carbs}g</div>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-xl">
                  <div className="text-sm text-gray-600 mb-1">Fat</div>
                  <div className="text-xl font-bold text-emerald-600">{recipe.nutrition.fat}g</div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-emerald-50">
                <h4 className="font-semibold text-gray-800 mb-2">Cuisine</h4>
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                  {recipe.cuisine}
                </span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-emerald-50">
                <h4 className="font-semibold text-gray-800 mb-2">Meal Type</h4>
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
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