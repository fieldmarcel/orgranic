import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Clock, Users, Star, ChefHat, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [checkedIngredients, setCheckedIngredients] = useState([]);
  const [checkedSteps, setCheckedSteps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8081/api/v1/recipes/${id}`);
        setRecipe(data);
      } catch (err) {
        setError("Error fetching recipe details");
      }
      setLoading(false);
    };

    fetchData();
  }, [id]);

  const toggleIngredient = (index) => {
    if (checkedIngredients.includes(index)) {
      setCheckedIngredients(checkedIngredients.filter((i) => i !== index));
    } else {
      setCheckedIngredients([...checkedIngredients, index]);
    }
  };

  const toggleStep = (index) => {
    if (checkedSteps.includes(index)) {
      setCheckedSteps(checkedSteps.filter((i) => i !== index));
    } else {
      setCheckedSteps([...checkedSteps, index]);
    }
  };

  if (loading) return <div className="text-center mt-10 animate-pulse">Loading...</div>;
  if (!recipe) return <div className="text-center mt-10">Recipe not found</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  const userName = recipe.userId ? recipe.userId.userName : "admin";

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative mb-8 rounded-xl overflow-hidden shadow-lg">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{recipe.title}</h1>
          <p className="text-sm md:text-base opacity-90">By {userName}</p>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="flex items-center p-4">
            <Clock className="w-5 h-5 mr-2 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Cook Time</p>
              <p className="font-semibold">{recipe.cookTime} min</p>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="flex items-center p-4">
            <Users className="w-5 h-5 mr-2 text-green-500" />
            <div>
              <p className="text-sm text-gray-500">Serving</p>
              <p className="font-semibold">{recipe.serving} people</p>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="flex items-center p-4">
            <Star className="w-5 h-5 mr-2 text-yellow-500" />
            <div>
              <p className="text-sm text-gray-500">Rating</p>
              <p className="font-semibold">{recipe.rating} ⭐</p>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="flex items-center p-4">
            <ChefHat className="w-5 h-5 mr-2 text-purple-500" />
            <div>
              <p className="text-sm text-gray-500">Cuisine</p>
              <p className="font-semibold">{recipe.cuisine}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Description */}
      <Card className="mb-8 hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <p className="text-gray-700 leading-relaxed">{recipe.description}</p>
        </CardContent>
      </Card>

      {/* Ingredients */}
      <Card className="mb-8 hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <span className="w-1 h-8 bg-blue-500 rounded mr-3"></span>
            Ingredients
          </h2>
          <ul className="space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li
                key={index}
                className="flex items-center cursor-pointer"
                onClick={() => toggleIngredient(index)}
              >
                <div
                  className={`w-5 h-5 border-2 rounded-md mr-3 flex items-center justify-center ${
                    checkedIngredients.includes(index)
                      ? "bg-blue-500 border-blue-500"
                      : "border-gray-300"
                  }`}
                >
                  {checkedIngredients.includes(index) && (
                    <Check className="w-4 h-4 text-white" />
                  )}
                </div>
                <span
                  className={`${
                    checkedIngredients.includes(index) ? "line-through text-gray-400" : "text-gray-700"
                  }`}
                >
                  {ingredient}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Steps */}
      <Card className="mb-8 hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <span className="w-1 h-8 bg-green-500 rounded mr-3"></span>
            Instructions
          </h2>
          <ol className="space-y-4">
            {recipe.steps.map((step, index) => (
              <li
                key={index}
                className="flex items-start cursor-pointer"
                onClick={() => toggleStep(index)}
              >
                <div
                  className={`w-5 h-5 border-2 rounded-md mr-3 flex items-center justify-center mt-1 ${
                    checkedSteps.includes(index)
                      ? "bg-green-500 border-green-500"
                      : "border-gray-300"
                  }`}
                >
                  {checkedSteps.includes(index) && (
                    <Check className="w-4 h-4 text-white" />
                  )}
                </div>
                <span
                  className={`${
                    checkedSteps.includes(index) ? "line-through text-gray-400" : "text-gray-700"
                  }`}
                >
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* Nutrition */}
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <span className="w-1 h-8 bg-purple-500 rounded mr-3"></span>
            Nutrition Facts
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <p className="text-gray-500 text-sm">Calories</p>
              <p className="text-xl font-bold">{recipe.nutrition.calories}</p>
              <p className="text-gray-500 text-sm">kcal</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <p className="text-gray-500 text-sm">Protein</p>
              <p className="text-xl font-bold">{recipe.nutrition.protein}</p>
              <p className="text-gray-500 text-sm">g</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <p className="text-gray-500 text-sm">Carbs</p>
              <p className="text-xl font-bold">{recipe.nutrition.carbs}</p>
              <p className="text-gray-500 text-sm">g</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <p className="text-gray-500 text-sm">Fat</p>
              <p className="text-xl font-bold">{recipe.nutrition.fat}</p>
              <p className="text-gray-500 text-sm">g</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Recipe;