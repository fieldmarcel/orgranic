import mongoose from 'mongoose';

const recipeSchema=  new mongoose.Schema({


recipeId:{
    type:String,
    required:true,
},
subCategory:{
    type:String,
    required:true,
},
    title:{
    type:String,
    required:true,
},
rating:{
    type:Number,
    required:true,
},
description:{
    type:String,
},
    price:{
    type:Number,
    required:true,
},
    cookTime:{
    type:Number,
    required:true,
 },
 readyIn:{
    type:Number,
    required:true,},

serving:{
    type:Number,
    required:true,
},
ingredients:{
    type:Array,
    required:true,
},
nutrition:{
   calories:Number,
   fat: Number,
   carbs: Number,
   protein: Number,
},

cuisine:{
    type:String,
    required:true,
},
mealType:{
    type:String,
    required:true,
},
image:{
    type:URL,
    required:true,
}

},{timestamps:true})

export const Recipe = mongoose.model('Recipe', recipeSchema);