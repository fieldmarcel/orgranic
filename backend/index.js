import dotenv from "dotenv";
import connectDB from "./src/db/index.js";
import { app } from "./src/app.js";

dotenv.config();

// Initialize Google Gemini AI

const startServer = async () => {
    try {
        await connectDB();  

        const PORT = process.env.PORT || 8081;
        app.listen(PORT, () => {
            console.log(`✅ Server running at port ${PORT}`);
        });
    } catch (error) {
        console.log("❌ MongoDB connection failed:", error.message);
    }
};

startServer();
