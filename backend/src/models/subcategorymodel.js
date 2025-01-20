import mongoose from 'mongoose';
const SubcategorySchema = new mongoose.Schema({

    name: { type: String, required: true },

    categoryId: { type: mongoose.Schema.Types.ObjectId, 
        ref: "Category", required: true },
recipes:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Recipe"
}]

}


,{timestamps:true})
export const Subcategory = mongoose.model("Subcategory", SubcategorySchema)