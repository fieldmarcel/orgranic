import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    
     // to make it easier in database searching
  },
  email: {
    type: String,
    required: true,
   
  },
  fullName: {
    type: String,
    required: true,
   
  },
 
  
  password: {
    type: String, // not no.
    required: [true, "Password is required"],
  },
  refreshToken: {
    type: String,
  },
  accessToken: {
    type: String,
  },
}, { timestamps: true });



export const User = mongoose.model("User", userSchema);
