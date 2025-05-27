import feedModel from '../models/feedModel.js';
import {socketAuth} from '../middlewares/socket.middleware.js';
import { User } from '../models/usermodel.js';

export const registerFeedSocketHandlers = (io) => {
  io.use(socketAuth);

  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id, "User:", socket.user.userName);

    socket.on("sendPost", async (data) => {
      try {
        const newPost = {
          message: data.message,
          user: socket.user.userName || "Anonymous",
          time: new Date(),
        };

        await feedModel.create(newPost);
        const allPosts = await feedModel.find().sort({ time: -1 });
        io.emit("allPosts", allPosts);
      } catch (err) {
        console.error("❌ Error saving post:", err);
      }
    });

    socket.on("getAllPosts", async () => {
      try {
        const posts = await feedModel.find().sort({ time: -1 });
        socket.emit("allPosts", posts);
      } catch (err) {
        console.error("❌ Error fetching posts:", err);
      }
    });

    socket.on("disconnect", () => {
      console.log("🔌 Socket disconnected:", socket.id);
    });
  });
};
