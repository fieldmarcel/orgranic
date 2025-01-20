import mongoose from 'mongoose';


const collectionSchema= new mongoose.Schema({

name:{
    type:String,
    required:true,
},
recipes:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Recipe"
}



},{timestamps:true})

export const Collection= mongoose.model("Collection", collectionSchema)