import { uploadOnCloudinary } from '../utils/cloudinary.js';
import { RecipeCard } from '../models/recipeCardmodel.js';
import {Recipe} from '../models/singleRecipemodel.js';
const createRecipeCard = async (req, res) => {
    const { title, rating, recipeId, category } = req.body;

    console.log("Request body for recipe cards:", req.body);

    console.log("Request file for recipe cards:", req.file);
    // 
    try {
        // Validate required fields
        if (!title || !rating || !req.file  || !recipeId || !category ) {
            return res.status(400).json({ error: "All fields are required, including an image" });
        }

        console.log("All fields are validated");

        // Upload image to Cloudinary
        const imageUpload = await uploadOnCloudinary(req.file.path);
        if (!imageUpload || !imageUpload.url) {
            return res.status(500).json({ error: "Image upload failed" });
        }

        console.log("Image uploaded successfully:", imageUpload);
        console.log("File path being uploaded:", req.file.path);


const recipeExists= await Recipe.findById(recipeId)

 if(!recipeExists){
    return res.status(404).json({ error: "Referenced recipe not found" });
 }
        // Create recipe card
        const recipeCard = await RecipeCard.create({
            title,
            rating,
            recipeId,
            category,
            image: imageUpload.url, // Correctly assign the Cloudinary image URL

        });

        console.log("Recipe card created:", recipeCard);

        // Respond with success
        return res.status(201).json({
            message: "Recipe card created successfully",
            createdRecipeCard: recipeCard,
        });

    } catch (error) {
        console.error("Error in creating recipe card:", error.message);
        return res.status(500).json({ error: "Error in creating recipe card" });
    }
};


//now fetching all recipe cards

const getRecipeCards = async (req, res) => {
// RecipeCard controller references data from the Recipe model,
//  and clicking
//  a card on the frontend displays details
//  of that specific card in the SingleRecipe
//for this purpose we use populate to get all data from that 
// ref id req in recipe cards 
try {
    const recipes= await RecipeCard.find({}).populate("recipeId");
    return res.status(200).json({recipes})
} catch (error) {
    return res.status(500).json({error: "Error in fetching recipe cards"})
}


}

export { createRecipeCard ,getRecipeCards};
