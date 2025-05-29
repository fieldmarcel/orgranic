import feedModel from '../models/feedModel.js';
// Main function to register all socket event handlers
export const registerFeedSocketHandlers = (io) => {
  // Previously had authentication middleware here (commented out)
  // Now allows unauthenticated connections

  // Event fired when a new client connects
  io.on("connection", (socket) => {
    // Log new connection with socket ID
    console.log("Socket connected:", socket.id);

    // Handler for when client sends a new post
    socket.on("sendPost", async (data) => {
      try {
        // Create new post object with:
        const newPost = {
          message: data.message, // Message from client
          user: "Anonymous",     // Hardcoded username (no auth)
          time: new Date(),      // Current timestamp
        };

        // Save to MongoDB
        await feedModel.create(newPost);
        
        // Fetch all posts sorted by newest first
        const allPosts = await feedModel.find().sort({ time: -1 });
        
        // Broadcast updated posts to ALL connected clients
        io.emit("allPosts", allPosts);
      } catch (err) {
        console.error("❌ Error saving post:", err);
      }
    });

    // Handler for when client requests all posts
    socket.on("getAllPosts", async () => {
      try {
        // Fetch sorted posts from DB
        const posts = await feedModel.find().sort({ time: -1 });
        
        // Send posts back ONLY to the requesting client
        socket.emit("allPosts", posts);
      } catch (err) {
        console.error("❌ Error fetching posts:", err);
      }
    });

    // Handler for client disconnection
    socket.on("disconnect", () => {
      console.log("🔌 Socket disconnected:", socket.id);
    });
  });
};