import express from "express";
 import cors from "cors"
 import cookieParser from "cookie-parser";
 const app= express();

 app.use(
   cors({
     origin: "http://localhost:5173", // Allow React frontend to access the backend
     credentials: true,
   })
 );
 

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"));
app.use(cookieParser())


// route import here
import userRouter from './routes/user.routes.js'
import recipeCardRouter from './routes/recipeCard.routes.js'
import recipeRouter from './routes/singleRecipe.routes.js'
app.use("/api/v1/users",userRouter)
app.use("/api/v1/recipes",recipeRouter)

export {app}













// 4. Suggestions You Might Not Have Applied Yet
// Caching
// Use Redis to cache frequently accessed recipes for faster response times.
// Cache single recipe pages, as they are likely to be viewed repeatedly.
// Rate Limiting
// Use express-rate-limit to prevent abuse of your API.
// Error Logging
// Use a service like Sentry or Winston for centralized error logging and debugging.
// Pagination
// For APIs returning multiple recipes, add pagination to improve performance:
// javascript
// Copy
// Edit
// const recipes = await Recipe.find()
//   .skip(page * limit)
//   .limit(limit);