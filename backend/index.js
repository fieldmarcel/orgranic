import dotenv from "dotenv";
import connectDB from "./src/db/index.js";
import { app } from "./src/app.js";
import { Server } from "socket.io";
import { createServer } from "http";

dotenv.config();

const PORT = process.env.PORT || 8081;

// Create HTTP server from Express app
const httpServer = createServer(app);

// Setup Socket.IO with CORS
const io = new Server(httpServer, {
  cors: {
    origin: [process.env.CORS_ORIGIN || "http://localhost:5173"],
    credentials: true,
  },
});

// Handle Socket.IO connections
io.on("connection", (socket) => {
  console.log("New client connected", socket.id);

  socket.on("disconnect", () => {
    console.log("Client disconnected", socket.id);
  });
});


const startServer = async () => {
  try {
    await connectDB();

    httpServer.listen(PORT, () => {
      console.log(`✅ Server running at port ${PORT}`);
    });

  } catch (error) {
    console.log(" MongoDB connection failed:", error.message);
  }
};

startServer();
