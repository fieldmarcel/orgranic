// import React, { useState } from 'react';
// import { Plus, X, Upload, ChefHat } from 'lucide-react';
// import axios from 'axios';


// const AddRecipe = () => {
//   const [recipeData, setRecipeData] = useState({
//     subCategory:'',
//     title: '',
//     rating:'',
//     description: '',
//     cookTime: '',
//     readyIn:'',

//     serving: '',
//     difficulty: 'medium',
//     tags: [],
//     ingredients: [{ name: '', quantity: '', unit: '' }],
//     steps: [{ description: '', image: null }],
//     image: '',
//   });
  
//   const [newTag, setNewTag] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setRecipeData({ ...recipeData, [name]: value });
//   };

//   const handleIngredientChange = (index, field, value) => {
//     const updatedIngredients = [...recipeData.ingredients];
//     updatedIngredients[index] = { ...updatedIngredients[index], [field]: value };
//     setRecipeData({ ...recipeData, ingredients: updatedIngredients });
//   };

//   const addIngredient = () => {
//     setRecipeData({
//       ...recipeData,
//       ingredients: [...recipeData.ingredients, { name: '', quantity: '', unit: '' }]
//     });
//   };

//   const removeIngredient = (index) => {
//     const filteredIngredients = recipeData.ingredients.filter((_, i) => i !== index);
//     setRecipeData({ ...recipeData, ingredients: filteredIngredients });
//   };

//   const handleStepChange = (index, value) => {
//     const updatedSteps = [...recipeData.steps];
//     updatedSteps[index] = { ...updatedSteps[index], description: value };
//     setRecipeData({ ...recipeData, steps: updatedSteps });
//   };

//   const addStep = () => {
//     setRecipeData({
//       ...recipeData,
//       steps: [...recipeData.steps, { description: '', image: null }]
//     });
//   };

//   const removeStep = (index) => {
//     const filteredSteps = recipeData.steps.filter((_, i) => i !== index);
//     setRecipeData({ ...recipeData, steps: filteredSteps });
//   };

//   const handleAddTag = () => {
//     if (newTag.trim() !== '' && !recipeData.tags.includes(newTag.trim())) {
//       setRecipeData({
//         ...recipeData,
//         tags: [...recipeData.tags, newTag.trim()]
//       });
//       setNewTag('');
//     }
//   };

//   const handleRemoveTag = (tagToRemove) => {
//     setRecipeData({
//       ...recipeData,
//       tags: recipeData.tags.filter(tag => tag !== tagToRemove)
//     });
//   };

//   const handleMainImageChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setRecipeData({
//         ...recipeData,
//         mainImage: URL.createObjectURL(e.target.files[0])
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = axios.post(`http://localhost:8081/api/v1/recipes/${id}`, recipeData);
//     console.log(formData);
//     // Here you would typically send the data to your backend
//     console.log('Submitting recipe:', recipeData);
//     alert('Recipe submitted successfully!');
//   };

//   return (
//     <div className="bg-emerald-200 min-h-screen py-12">
//       <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
//         <div className="p-8">
//           <div className="flex items-center mb-8">
//             <ChefHat className="text-teal-600 mr-3" size={32} />
//             <h1 className="text-3xl font-bold text-gray-800">Add a New Recipe</h1>
//           </div>
          
//           <form onSubmit={handleSubmit}>
//             {/* Main Image Upload */}
//             <div className="mb-8">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Recipe Photo
//               </label>
//               <div 
//                 className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 cursor-pointer hover:bg-gray-100 transition"
//                 onClick={() => document.getElementById('mainImageUpload').click()}
//               >
//                 {recipeData.image ? (
//                   <div className="relative w-full">
//                     <img 
//                       src={recipeData.mainImage} 
//                       alt="Recipe preview" 
//                       className="w-full h-64 object-cover rounded-lg"
//                     />
//                     <button
//                       type="button"
//                       className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         setRecipeData({...recipeData, mainImage: null});
//                       }}
//                     >
//                       <X size={16} />
//                     </button>
//                   </div>
//                 ) : (
//                   <>
//                     <Upload className="h-12 w-12 text-gray-400 mb-2" />
//                     <p className="text-sm text-gray-500">Click to upload your recipe photo</p>
//                     <p className="text-xs text-gray-400 mt-1">JPG, PNG or GIF, max 5MB</p>
//                   </>
//                 )}
//                 <input
//                   id="mainImageUpload"
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={handleMainImageChange}
//                 />
//               </div>
//             </div>
            
//             {/* Basic Info Section */}
//             <div className="mb-8">
//               <h2 className="text-xl font-semibold text-gray-800 mb-4">Recipe Details</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
//                     Recipe Title
//                   </label>
//                   <input
//                     type="text"
//                     id="title"
//                     name="title"
//                     value={recipeData.title}
//                     onChange={handleInputChange}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                     placeholder="e.g., Creamy Garlic Pasta"
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 mb-1">
//                     Difficulty Level
//                   </label>
//                   <select
//                     id="difficulty"
//                     name="difficulty"
//                     value={recipeData.difficulty}
//                     onChange={handleInputChange}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
//                   >
//                     <option value="easy">Easy</option>
//                     <option value="medium">Medium</option>
//                     <option value="hard">Hard</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label htmlFor="cookTime" className="block text-sm font-medium text-gray-700 mb-1">
//                     Cooking Time (minutes)
//                   </label>
//                   <input
//                     type="number"
//                     id="cookTime"
//                     name="cookTime"
//                     value={recipeData.cookTime}
//                     onChange={handleInputChange}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                     placeholder="e.g., 45"
//                     min="1"
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="servings" className="block text-sm font-medium text-gray-700 mb-1">
//                     Number of Servings
//                   </label>
//                   <input
//                     type="number"
//                     id="servings"
//                     name="servings"
//                     value={recipeData.servings}
//                     onChange={handleInputChange}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                     placeholder="e.g., 4"
//                     min="1"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>
            
//             <div className="mb-6">
//               <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
//                 Description
//               </label>
//               <textarea
//                 id="description"
//                 name="description"
//                 value={recipeData.description}
//                 onChange={handleInputChange}
//                 rows="3"
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                 placeholder="Briefly describe your recipe..."
//                 required
//               />
//             </div>
            
//             {/* Tags Section */}
//             <div className="mb-8">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Tags
//               </label>
//               <div className="flex flex-wrap items-center gap-2 mb-2">
//                 {recipeData.tags.map((tag, index) => (
//                   <span 
//                     key={index} 
//                     className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800"
//                   >
//                     {tag}
//                     <button
//                       type="button"
//                       onClick={() => handleRemoveTag(tag)}
//                       className="ml-1.5 text-teal-600 hover:text-teal-800"
//                     >
//                       <X size={14} />
//                     </button>
//                   </span>
//                 ))}
//               </div>
//               <div className="flex">
//                 <input
//                   type="text"
//                   value={newTag}
//                   onChange={(e) => setNewTag(e.target.value)}
//                   className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                   placeholder="e.g., vegetarian, dinner, quick"
//                   onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
//                 />
//                 <button
//                   type="button"
//                   onClick={handleAddTag}
//                   className="px-4 bg-teal-600 text-white rounded-r-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
//                 >
//                   Add
//                 </button>
//               </div>
//               <p className="text-xs text-gray-500 mt-1">Press Enter or click Add to add a tag</p>
//             </div>
            
//             {/* Ingredients Section */}
//             <div className="mb-8">
//               <h2 className="text-xl font-semibold text-gray-800 mb-4">Ingredients</h2>
              
//               {recipeData.ingredients.map((ingredient, index) => (
//                 <div key={index} className="flex items-center mb-4 gap-3">
//                   <div className="grid grid-cols-3 gap-3 flex-grow">
//                     <input
//                       type="text"
//                       value={ingredient.name}
//                       onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
//                       className="col-span-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                       placeholder="Ingredient name"
//                       required
//                     />
//                     <div className="flex">
//                       <input
//                         type="text"
//                         value={ingredient.quantity}
//                         onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
//                         className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                         placeholder="Qty"
//                         required
//                       />
//                       <select
//                         value={ingredient.unit}
//                         onChange={(e) => handleIngredientChange(index, 'unit', e.target.value)}
//                         className="p-3 border border-l-0 border-gray-300 rounded-r-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
//                       >
//                         <option value="">Unit</option>
//                         <option value="g">g</option>
//                         <option value="kg">kg</option>
//                         <option value="ml">ml</option>
//                         <option value="l">l</option>
//                         <option value="tsp">tsp</option>
//                         <option value="tbsp">tbsp</option>
//                         <option value="cup">cup</option>
//                         <option value="piece">piece</option>
//                       </select>
//                     </div>
//                   </div>
                  
//                   <button
//                     type="button"
//                     onClick={() => removeIngredient(index)}
//                     className="p-2 text-red-500 rounded-full hover:bg-red-50"
//                     disabled={recipeData.ingredients.length === 1}
//                   >
//                     <X size={20} />
//                   </button>
//                 </div>
//               ))}
              
//               <button
//                 type="button"
//                 onClick={addIngredient}
//                 className="flex items-center px-4 py-2 text-sm text-teal-600 bg-teal-50 rounded-lg hover:bg-teal-100 transition mt-2"
//               >
//                 <Plus size={16} className="mr-1" />
//                 Add Another Ingredient
//               </button>
//             </div>
            
//             {/* Steps Section */}
//             <div className="mb-8">
//               <h2 className="text-xl font-semibold text-gray-800 mb-4">Preparation Steps</h2>
              
//               {recipeData.steps.map((step, index) => (
//                 <div key={index} className="mb-6">
//                   <div className="flex items-start mb-2">
//                     <div className="flex-shrink-0 bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center mt-1">
//                       {index + 1}
//                     </div>
//                     <div className="ml-4 flex-grow">
//                       <textarea
//                         value={step.description}
//                         onChange={(e) => handleStepChange(index, e.target.value)}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                         rows="2"
//                         placeholder={`Describe step ${index + 1}...`}
//                         required
//                       />
//                     </div>
                    
//                     {recipeData.steps.length > 1 && (
//                       <button
//                         type="button"
//                         onClick={() => removeStep(index)}
//                         className="p-2 ml-2 text-red-500 rounded-full hover:bg-red-50 mt-1"
//                       >
//                         <X size={20} />
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               ))}
              
//               <button
//                 type="button"
//                 onClick={addStep}
//                 className="flex items-center px-4 py-2 text-sm text-teal-600 bg-teal-50 rounded-lg hover:bg-teal-100 transition"
//               >
//                 <Plus size={16} className="mr-1" />
//                 Add Another Step
//               </button>
//             </div>
            
//             {/* Submit Button */}
//             <div className="mt-12">
//               <button
//                 type="submit"
//                 className="w-full bg-teal-600 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition duration-150 ease-in-out shadow-lg"
//               >
//                 Publish Recipe
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddRecipe;


import { useState } from "react";
import axios from "axios";

export default function AddRecipe() {
  const [recipe, setRecipe] = useState({
    subCategory: "",
    title: "",
    rating: "",
    description: "",
    cookTime: "",
    readyIn: "",
    serving: "",
    ingredients: "",
    nutrition: { calories: "", fat: "", carbs: "", protein: "" },
    cuisine: "",
    mealType: "",
    steps: "",
    image: "",
    userId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("nutrition.")) {
      const field = name.split(".")[1];
      setRecipe((prev) => ({
        ...prev,
        nutrition: { ...prev.nutrition, [field]: value },
      }));
    } else {
      setRecipe({ ...recipe, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve the access token from local storage
    const accessToken = localStorage.getItem("token");
    console.log("Access Token:", accessToken); // Log the token for debugging
    // The headers object you've provided is used in an HTTP request (likely made with a library like axios or fetch)
    //  to specify additional information about the request being sent to the server. Let's break down each header within the object1

    // the headers object in your code is configuring the HTTP request to:

    // Tell the server that the request body contains JSON data.
    
    // Provide an access token for authentication using the Bearer scheme3.
    //  The server will use this token to verify the identity of the client and 
    // ensure they have permission to access the requested resource5
    try {
      const response = await axios.post("http://localhost:8081/api/v1/recipes", recipe, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`, // Include the access token
        },
      });
      console.log(response.data);
      alert("Recipe submitted successfully!");
    } catch (error) {
      console.error("Error submitting recipe:", error.response?.data || error.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Publish Your Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input name="title" placeholder="Title" onChange={handleChange} className="border p-2 w-full" required />
        <input name="subCategory" placeholder="Sub Category" onChange={handleChange} className="border p-2 w-full" />
        <input name="rating" type="number" step="0.1" placeholder="Rating (0-5)" onChange={handleChange} className="border p-2 w-full" required />
        <textarea name="description" placeholder="Description" onChange={handleChange} className="border p-2 w-full" required></textarea>
        <input name="cookTime" type="number" placeholder="Cook Time (mins)" onChange={handleChange} className="border p-2 w-full" required />
        <input name="readyIn" type="number" placeholder="Ready In (mins)" onChange={handleChange} className="border p-2 w-full" />
        <input name="serving" type="number" placeholder="Serving" onChange={handleChange} className="border p-2 w-full" required />
        <input name="ingredients" placeholder="Ingredients (comma-separated)" onChange={handleChange} className="border p-2 w-full" required />
        <input name="cuisine" placeholder="Cuisine" onChange={handleChange} className="border p-2 w-full" required />
        <input name="mealType" placeholder="Meal Type" onChange={handleChange} className="border p-2 w-full" required />
        <textarea name="steps" placeholder="Steps (comma-separated)" onChange={handleChange} className="border p-2 w-full" required></textarea>
        
        {/* Nutrition Inputs */}
        <h3 className="font-semibold mt-4">Nutrition</h3>
        <input name="nutrition.calories" type="number" placeholder="Calories" onChange={handleChange} className="border p-2 w-full" required />
        <input name="nutrition.fat" type="number" placeholder="Fat (g)" onChange={handleChange} className="border p-2 w-full" required />
        <input name="nutrition.carbs" type="number" placeholder="Carbs (g)" onChange={handleChange} className="border p-2 w-full" required />
        <input name="nutrition.protein" type="number" placeholder="Protein (g)" onChange={handleChange} className="border p-2 w-full" required />
        
        <input name="image" type="url" placeholder="Image URL" onChange={handleChange} className="border p-2 w-full" required />
        
        <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded-md">Publish Recipe</button>
      </form>
    </div>
  );
}
