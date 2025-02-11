// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";

// const Recipe = () => {
//   const { id } = useParams();
//   const [recipe, setRecipe] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { data } = await axios.get(
//           `http://localhost:8081/api/v1/recipes/${id}?limit=3`
//         );
//         setRecipe(data);
//         setLoading(false);
//       } catch (err) {
//         setError("Error fetching recipe details");
//         console.error("Error:", err);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="animate-pulse text-2xl font-semibold text-red-600">
//           Loading recipe...
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-red-500 text-xl font-medium bg-red-50 px-8 py-4 rounded-xl">
//           ⚠️ {error}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Top Navigation */}
//       <div className="bg-gray-100 border-b">
//         <div className="max-w-7xl mx-auto px-4 py-3">
//           <Link
//             to="/"
//             className="text-gray-600 hover:text-gray-900 text-sm flex items-center"
//           >
//             <svg
//               className="w-4 h-4 mr-1"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//             Back to Recipes
//           </Link>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <div className="bg-gray-900 text-white">
//         <div className="max-w-7xl mx-auto px-4 py-8">
//           <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
//           <div className="flex items-center space-x-6 text-sm">
//             <div className="flex items-center">
//               <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//               </svg>
//               <span>{recipe.rating}/5</span>
//             </div>
//             <div>Prep Time: {recipe.readyIn} mins</div>
//             <div>Servings: {recipe.serving}</div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="grid grid-cols-12 gap-8">
//           {/* Main Content */}
//           <div className="col-span-12 lg:col-span-8">
//             {/* Recipe Image */}
//             <div className="mb-8">
//               <img
//                 src={recipe.image || "https://via.placeholder.com/800x400"}
//                 alt={recipe.title}
//                 className="w-full h-96 object-cover rounded-lg"
//               />
//             </div>

//             {/* Description */}
//             <div className="mb-8">
//               <p className="text-gray-700 text-lg">{recipe.description}</p>
//             </div>

//             {/* Instructions */}
//             <div className="mb-12">
//               <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Instructions</h2>
//               <ol className="space-y-6">
//                 {recipe.steps?.map((step, index) => (
//                   <li key={index} className="flex">
//                     <span className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-700 rounded-full flex items-center justify-center font-bold mr-4">
//                       {index + 1}
//                     </span>
//                     <p className="text-gray-700">{step}</p>
//                   </li>
//                 ))}
//               </ol>
//             </div>

//             {/* Nutrition Facts */}
//             <div className="bg-gray-50 p-6 rounded-lg mb-8">
//               <h2 className="text-2xl font-bold mb-6">Nutrition Facts</h2>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {Object.entries(recipe.nutrition).map(([key, value]) => (
//                   <div key={key} className="text-center">
//                     <div className="text-2xl font-bold text-gray-900">
//                       {value}
//                       <span className="text-sm ml-1">{key === 'calories' ? 'kcal' : 'g'}</span>
//                     </div>
//                     <div className="text-sm text-gray-600 uppercase">{key}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="col-span-12 lg:col-span-4">
//             {/* Recipe Info Card */}
//             <div className="bg-gray-50 p-6 rounded-lg mb-8">
//               <h3 className="text-xl font-bold mb-4">Recipe Details</h3>
//               <div className="space-y-4">
//                 <div>
//                   <div className="text-sm text-gray-600">Cuisine</div>
//                   <div className="font-medium">{recipe.cuisine}</div>
//                 </div>
//                 <div>
//                   <div className="text-sm text-gray-600">Meal Type</div>
//                   <div className="font-medium">{recipe.mealType}</div>
//                 </div>
//               </div>
//             </div>

//             {/* Ingredients Card */}
//             <div className="bg-gray-50 p-6 rounded-lg sticky top-4">
//               <h3 className="text-xl font-bold mb-4">Ingredients</h3>
//               <div className="space-y-3">
//                 {recipe.ingredients?.map((ingredient, index) => (
//                   <div key={index} className="flex items-center">
//                     <input
//                       type="checkbox"
//                       className="w-4 h-4 mr-3 text-red-600 rounded"
//                     />
//                     <span className="text-gray-700">{ingredient}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Recipe;

// // import React, { useEffect, useState } from "react";
// // import { useParams, Link } from "react-router-dom";
// // import axios from "axios";

// // const Recipe = () => {
// //   const { id } = useParams();
// //   const [recipe, setRecipe] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   // State for checkboxes
// //   const [checkedIngredients, setCheckedIngredients] = useState([]);
// //   const [checkedSteps, setCheckedSteps] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const { data } = await axios.get(
// //           `http://localhost:8081/api/v1/recipes/${id}?limit=3`
// //         );
// //         setRecipe(data);
// //         setLoading(false);
// //       } catch (err) {
// //         setError("Error fetching recipe details");
// //         console.error("Error:", err);
// //         setLoading(false);
// //       }
// //     };
// //     fetchData();
// //   }, [id]);

// //   // Handlers for checkboxes
// //   const handleIngredientCheck = (index) => {
// //     setCheckedIngredients((prev) =>
// //       prev.includes(index)
// //         ? prev.filter((i) => i !== index)
// //         : [...prev, index]
// //     );
// //   };

// //   const handleStepCheck = (index) => {
// //     setCheckedSteps((prev) =>
// //       prev.includes(index)
// //         ? prev.filter((i) => i !== index)
// //         : [...prev, index]
// //     );
// //   };

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center">
// //         <div className="animate-pulse text-2xl font-semibold text-red-600">
// //           Loading recipe...
// //         </div>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center">
// //         <div className="text-red-500 text-xl font-medium bg-red-50 px-8 py-4 rounded-xl">
// //           ⚠️ {error}
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       {/* Top Navigation */}
// //       <div className="bg-white shadow">
// //         <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
// //           <Link
// //             to="/"
// //             className="text-gray-600 hover:text-red-600 text-sm flex items-center"
// //           >
// //             <svg
// //               className="w-5 h-5 mr-2"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth="2"
// //                 d="M15 19l-7-7 7-7"
// //               />
// //             </svg>
// //             Back to Recipes
// //           </Link>
// //           <div className="text-gray-700 font-medium">{recipe.cuisine}</div>
// //         </div>
// //       </div>

// //       {/* Hero Section */}
// //       <div className="relative bg-gray-900 text-white">
// //         <img
// //           src={recipe.image || "https://via.placeholder.com/800x400"}
// //           alt={recipe.title}
// //           className="w-full h-96 object-cover opacity-50"
// //         />
// //         <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
// //           <h1 className="text-5xl font-extrabold mb-4">{recipe.title}</h1>
// //           <div className="flex items-center space-x-6 text-sm">
// //             <div className="flex items-center">
// //               <svg
// //                 className="w-5 h-5 mr-1 text-yellow-400"
// //                 fill="currentColor"
// //                 viewBox="0 0 20 20"
// //               >
// //                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// //               </svg>
// //               {recipe.rating}/5
// //             </div>
// //             <div>⏱️ {recipe.readyIn} mins</div>
// //             <div>🍽️ Serves {recipe.serving}</div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Content */}
// //       <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
// //         {/* Ingredients (Sidebar) */}
// //         <div className="lg:col-span-4">
// //           <div className="bg-white p-6 rounded-lg shadow-lg lg:sticky lg:top-20">
// //             <h2 className="text-2xl font-bold mb-4 text-red-600">Ingredients</h2>
// //             <div className="space-y-3">
// //               {recipe.ingredients?.map((ingredient, index) => (
// //                 <div key={index} className="flex items-center">
// //                   <input
// //                     type="checkbox"
// //                     checked={checkedIngredients.includes(index)}
// //                     onChange={() => handleIngredientCheck(index)}
// //                     className="w-4 h-4 mr-3 text-red-600 border-gray-300 rounded focus:ring-red-500"
// //                   />
// //                   <span
// //                     className={`${
// //                       checkedIngredients.includes(index)
// //                         ? "line-through text-gray-500"
// //                         : "text-gray-700"
// //                     }`}
// //                   >
// //                     {ingredient}
// //                   </span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Instructions and Nutrition */}
// //         <div className="lg:col-span-8">
// //           <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
// //             <div className="border-b border-gray-200 mb-6">
// //               <nav className="-mb-px flex space-x-8" aria-label="Tabs">
// //                 <a
// //                   href="#instructions"
// //                   className="tab-link text-red-600 border-red-600"
// //                 >
// //                   Instructions
// //                 </a>
// //                 <a
// //                   href="#nutrition"
// //                   className="tab-link text-gray-500 hover:text-red-600 hover:border-red-600"
// //                 >
// //                   Nutrition Facts
// //                 </a>
// //               </nav>
// //             </div>

// //             {/* Instructions */}
// //             <div id="instructions">
// //               <h2 className="text-2xl font-bold mb-6 text-red-600">
// //                 Cooking Instructions
// //               </h2>
// //               <ol className="space-y-6">
// //                 {recipe.steps?.map((step, index) => (
// //                   <li key={index} className="flex">
// //                     <input
// //                       type="checkbox"
// //                       checked={checkedSteps.includes(index)}
// //                       onChange={() => handleStepCheck(index)}
// //                       className="w-5 h-5 mt-1 mr-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
// //                     />
// //                     <p
// //                       className={`text-gray-700 ${
// //                         checkedSteps.includes(index)
// //                           ? "line-through text-gray-500"
// //                           : ""
// //                       }`}
// //                     >
// //                       {step}
// //                     </p>
// //                   </li>
// //                 ))}
// //               </ol>
// //             </div>

// //             {/* Nutrition Facts */}
// //             <div id="nutrition" className="mt-12">
// //               <h2 className="text-2xl font-bold mb-6 text-red-600">
// //                 Nutrition Facts
// //               </h2>
// //               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
// //                 {Object.entries(recipe.nutrition).map(([key, value]) => (
// //                   <div
// //                     key={key}
// //                     className="text-center bg-gray-50 p-4 rounded-lg"
// //                   >
// //                     <div className="text-2xl font-bold text-gray-900">
// //                       {value}
// //                       <span className="text-sm ml-1">
// //                         {key === "calories" ? "kcal" : "g"}
// //                       </span>
// //                     </div>
// //                     <div className="text-sm text-gray-600 uppercase">
// //                       {key}
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Recipe Description */}
// //           <div className="bg-white p-6 rounded-lg shadow-lg">
// //             <h2 className="text-2xl font-bold mb-4 text-red-600">About This Recipe</h2>
// //             <p className="text-gray-700 text-lg leading-relaxed">
// //               {recipe.description}
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Recipe;
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-2xl font-semibold text-red-600">
          Loading recipe...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-xl font-medium bg-red-50 px-8 py-4 rounded-xl">
          ⚠️ {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-gray-600 hover:text-red-600 text-sm flex items-center"
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
          <div className="text-gray-700 font-medium">{recipe.cuisine}</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="col-span-12 lg:col-span-8">
            {/* Recipe Image */}
            <div className="mb-8">
              <img
                src={recipe.image || "https://via.placeholder.com/800x400"}
                alt={recipe.title}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            {/* Recipe Title and Details */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4 text-red-600">
                {recipe.title}
              </h1>
              <div className="flex items-center space-x-6 text-sm mb-6">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-1 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {recipe.rating}/5
                </div>
                <div>⏱️ {recipe.readyIn} mins</div>
                <div>🍽️ Serves {recipe.serving}</div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {recipe.description}
              </p>
            </div>

            {/* Instructions */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-red-600">
                Cooking Instructions
              </h2>
              <ol className="space-y-6">
                {recipe.steps?.map((step, index) => (
                  <li key={index} className="flex">
                    <input
                      type="checkbox"
                      checked={checkedSteps.includes(index)}
                      onChange={() => handleStepCheck(index)}
                      className="w-5 h-5 mt-1 mr-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                    />
                    <p
                      className={`text-gray-700 ${
                        checkedSteps.includes(index)
                          ? "line-through text-gray-500"
                          : ""
                      }`}
                    >
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Nutrition Facts */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-6 text-red-600">
                Nutrition Facts
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {Object.entries(recipe.nutrition).map(([key, value]) => (
                  <div
                    key={key}
                    className="text-center bg-white p-4 rounded-lg shadow"
                  >
                    <div className="text-2xl font-bold text-gray-900">
                      {value}
                      <span className="text-sm ml-1">
                        {key === "calories" ? "kcal" : "g"}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 uppercase">
                      {key}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ingredients Sidebar */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-white p-6 rounded-lg shadow-lg lg:sticky lg:top-20">
              <h2 className="text-2xl font-bold mb-4 text-red-600">
                Ingredients
              </h2>
              <div className="space-y-3">
                {recipe.ingredients?.map((ingredient, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={checkedIngredients.includes(index)}
                      onChange={() => handleIngredientCheck(index)}
                      className="w-4 h-4 mr-3 text-red-600 border-gray-300 rounded focus:ring-red-500"
                    />
                    <span
                      className={`${
                        checkedIngredients.includes(index)
                          ? "line-through text-gray-500"
                          : "text-gray-700"
                      }`}
                    >
                      {ingredient}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
