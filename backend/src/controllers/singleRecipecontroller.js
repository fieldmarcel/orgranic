import { uploadOnCloudinary } from '../utils/cloudinary.js';
import { Recipe } from '../models/singleRecipemodel.js';

const createSingleRecipeCard =async(req,res)=>{

const {recipeId, subCategory,title, rating, description,price, cookTime, readyIn,serving, ingredient ,nutrition,cuisine ,mealtype}= req.body
}

console.log("request body",req.body)

//checking wheteher all tthings a re present or not 
//not included image yet

try {
    if (!recipeId || !subCategory || !title || !rating || !description || !price  ||!cookTime || !serving || !ingredient || !nutrition || !cuisine ||  !mealType   ){


        res.status(500).json({ error: "All fields are required" })
        console.log("all fields are required ")
    }

    //creating for db
    
    const recipe= await Recipe.create(
    {
    
    recipeId,
    subCategory ,
    title,
    
    
    
    }
    )
    console.log("creation is completed")
    
    return res.status(201).json({
        message: "Recipe card created successfully",
        Recipe: recipe,
    });
    
} catch (error) {
    console.error("Error in creating recipe :", error.message);
        return res.status(500).json({ error: "Error in creating recipe " });
}

//now fetching all recipe cards 

const getRecipe= async(req,res)=>{
    
}


export {createSingleRecipeCard};