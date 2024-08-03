import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    orderItems:{
            type: [orderItemSchema]
        },
    address: {
        type: String,
        required: true
    },
    orderPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"],
        default: "PENDING"
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    dateOrdered: {
        type: Date,
        default: Date.now
    }
},
{
    timestaps: true
});

const Order = mongoose.model("Order", orderSchema);