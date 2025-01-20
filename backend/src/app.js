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
app.use("/api/v1/users",userRouter)
app.use("/api/v1/recipes/cards",recipeCardRouter)


export {app}
