import { Comment } from "../models/commentModel.js";


const createComment= async(req,res)=>{


    const id= req.params?.recipeId
    const {comment,userId}=req.body;
   try {
    if (!recipeId) {
        return res.status(400).json({ error: "Recipe ID is required" });
      }
      if (!comment) {
        return res.status(400).json({ error: "Comment text is required" });
      }
      if (!userId) {
        return res.status(400).json({ error: "User ID is required" });
      }
       

const newComment = await Comment.create({
    recipeId:id,
    comment,
    userId,})
    res.status(201).json(newComment);

   } catch (error) {
         console.error("Error creating comment:",error.message)
         return res.status(500).json({
              message:"Error creating comment",
              error:error.message
         })
}
}
export {createComment};