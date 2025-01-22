import React from "react";

const Recipe = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex justify-center items-start py-10 px-4">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg p-6">
        {/* Recipe Image */}
        <div className="w-full mb-6">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Recipe"
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Recipe Details */}
        <div className="flex flex-col gap-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Recipe Name Here
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            A brief description of the recipe. Highlight its key flavors,
            ingredients, and unique preparation style.
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-bold text-gray-800">Preparation Time</p>
              <p>20 mins</p>
            </div>
            <div>
              <p className="font-bold text-gray-800">Cooking Time</p>
              <p>30 mins</p>
            </div>
            <div>
              <p className="font-bold text-gray-800">Servings</p>
              <p>4 people</p>
            </div>
            <div>
              <p className="font-bold text-gray-800">Difficulty</p>
              <p>Easy</p>
            </div>
          </div>
        </div>

        {/* Ingredients Section */}
        <div className="my-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
            Ingredients
          </h3>
          <ul className="list-none flex flex-wrap justify-center gap-4 text-gray-700">
            <li className="bg-gray-100 px-4 py-2 rounded-lg shadow-md">
              1 cup of flour
            </li>
            <li className="bg-gray-100 px-4 py-2 rounded-lg shadow-md">
              2 eggs
            </li>
            <li className="bg-gray-100 px-4 py-2 rounded-lg shadow-md">
              1/2 cup of sugar
            </li>
            <li className="bg-gray-100 px-4 py-2 rounded-lg shadow-md">
              1 tsp vanilla essence
            </li>
            <li className="bg-gray-100 px-4 py-2 rounded-lg shadow-md">
              1/2 cup of milk
            </li>
          </ul>
        </div>

        {/* Directions Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
            Directions
          </h3>
          <ol className="list-decimal space-y-4 text-gray-700 text-lg pl-6">
            <li>Preheat the oven to 180°C (350°F).</li>
            <li>Mix the dry ingredients in a bowl.</li>
            <li>Whisk the eggs and milk together in another bowl.</li>
            <li>Combine the wet and dry ingredients.</li>
            <li>Pour the mixture into a greased baking dish.</li>
            <li>Bake for 25-30 minutes or until golden brown.</li>
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
