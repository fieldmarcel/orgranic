// import { RecipeCard } from '../models/recipeCardmodel.js';
// import { Recipe } from '../models/singleRecipemodel.js';

// // const createRecipeCard = async (req, res) => {
// //     const { title, rating, category, image } = req.body;  // Receive image URL instead of file
// //     console.log("Request body for recipe cards:", req.body);

// //     // Validate required fields
// //     if (!title || !rating || !image) {
// //         return res.status(400).json({ error: "All fields are required, including an image URL" });
// //     }

// //     console.log("All fields are validated");

// //     try {
// //         // Check if the recipe exists by its title
// //         const recipeExists = await Recipe.findOne({ title });  // Use title directly for search
// //         if (!recipeExists) {
// //             return res.status(404).json({ error: "Referenced recipe not found" });
// //         }

// //         // Create recipe card
// //         const recipeCard = await RecipeCard.create({
// //             title: recipeExists._id,   // Reference the recipe's ObjectId
// //             rating,
// //             category,                  // Assuming this is sent as part of the body
// //             image,                     // Use the image URL directly
// //         });

// //         console.log("Recipe card created:", recipeCard);

// //         // Respond with success
// //         return res.status(201).json({
// //             message: "Recipe card created successfully",
// //             createdRecipeCard: recipeCard,
// //         });

// //     } catch (error) {
// //         console.error("Error in creating recipe card:", error.message);
// //         return res.status(500).json({ error: "Error in creating recipe card" });
// //     }
// // };

// // Fetch all recipe cards and populate recipe details
// // const getRecipeCards = async (req, res) => {
// //     try {
// //         // Find all RecipeCards and populate the "title" field to fetch full recipe details
// //         const recipes = await RecipeCard.find({}).populate("title");  // Populate the full recipe object using the "title" field reference
// //         return res.status(200).json({ recipes });
// //     } catch (error) {
// //         console.error("Error in fetching recipe cards:", error.message);
// //         return res.status(500).json({ error: "Error in fetching recipe cards" });
// //     }
// // };


// // const getSingleRecipe = async (req, res) => {
// //     const { recipeId } = req.params;  // Get recipeId from the URL parameters

// //     try {
// //         // Fetch the recipe card using the recipeId, and populate the recipe details
// //         const recipeCard = await RecipeCard.find({}).populate("title");  // Populate "title" to get full recipe details
// //         db.recipeCards.find().pretty({title: "Samosa"})

// //         if (!recipeCard) {
// //             return res.status(404).json({ error: "Recipe card not found" });
// //         }

// //         return res.status(200).json({ recipeCard });
// //     } catch (error) {
// //         console.error("Error fetching single recipe:", error.message);
// //         return res.status(500).json({ error: "Error fetching single recipe" });
// //     }
// // };


// const createRecipeCard = async (req, res) => {
//   const { title, rating, category, image } = req.body;

//   console.log("Request body for recipe cards:", req.body);

//   // Validate required fields
//   if (!title || !rating || !category || !image) {
//     return res.status(400).json({ error: "All fields are required, including an image URL" });
//   }

//   try {
//     // Find the recipe by its title
//     const recipe = await Recipe.findOne({ title });
//     if (!recipe) {
//       return res.status(404).json({ error: "Referenced recipe not found" });
//     }

//     // Create the recipe card using the recipe's _id
//     const recipeCard = await RecipeCard.create({
//       recipe: recipe._id,  // Reference the recipe's _id
//       rating,
//       category,
//       image,
//     });

//     console.log("Recipe card created:", recipeCard);

//     // Respond with success
//     return res.status(201).json({
//       message: "Recipe card created successfully",
//       createdRecipeCard: recipeCard,
//     });

//   } catch (error) {
//     console.error("Error in creating recipe card:", error.message);
//     return res.status(500).json({ error: "Error in creating recipe card" });
//   }
// };
// const getRecipeCards = async (req, res) => {
//     try {
//       // Fetch all RecipeCards and populate the "recipe" field
//       const recipeCards = await RecipeCard.find({}).populate({
//         path: "recipe",
//         select: "title rating image",  // Only fetch the required fields
//       });
  
//       return res.status(200).json({ recipeCards });
//     } catch (error) {
//       console.error("Error in fetching recipe cards:", error.message);
//       return res.status(500).json({ error: "Error in fetching recipe cards" });
//     }
//   }; 

//   const getSingleRecipe = async (req, res) => {
//     const { recipeId } = req.params;
  
//     try {
//       // Fetch the recipe card and populate the "recipe" field
//       const recipeCard = await RecipeCard.findById(recipeId).populate({
//         path: "recipe",
//         select: "title rating image description ingredients steps",  // Fetch all required fields
//       });
  
//       if (!recipeCard) {
//         return res.status(404).json({ error: "Recipe card not found" });
//       }
  
//       return res.status(200).json({ recipeCard });
//     } catch (error) {
//       console.error("Error fetching single recipe:", error.message);
//       return res.status(500).json({ error: "Error fetching single recipe" });
//     }
//   };

// export { createRecipeCard, getRecipeCards,getSingleRecipe };
