import mongoose from 'mongoose';
const CategorySchema = new mongoose.Schema({

    name: { type: String, required: true },

subcategories:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Subcategory"
}

}


,{timestamps:true})
export const Category = mongoose.model("Category", CategorySchema)