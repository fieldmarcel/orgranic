import { io } from '../../index.js'; 
import feedModel from '../models/feedModel.js';

export const createPost =async (req,res)=>{

    try {

const {user,message}= req.body;
const post=await feedModel.create({user,message})
io.emit("receivePost",post);
    res.status(201).json({ success: true, post });
console.log( "posted");

} catch (error) {
          res.status(500).json({ success: false, message: err.message });
  
    }


}