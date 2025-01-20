import dotenv from "dotenv";
import connectDB from "./src/db/index.js";
import { app } from "./src/app.js";
dotenv.config();



const startServer =async ()=>{
    try {
    await connectDB();
    const PORT = process.env.PORT || 8080;
    app.listen(PORT,()=>{
      console.log(`Server running a port ${PORT}`);
    })
    } catch (error) {
      console.log("mongoDB connection failed ",error.message)
    }
  }
  
  startServer()