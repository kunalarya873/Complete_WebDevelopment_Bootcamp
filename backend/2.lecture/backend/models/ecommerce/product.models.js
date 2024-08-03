import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    productImage:{
        type: String,
    },
    price: {
        default: 0,
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
},
{
    timestaps:true//created_at, updated_at     
});

export const Product = mongoose.model("Product", productSchema);