import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    isActive: Boolean
},
{
    timestaps:true//created_at, updated_at
});

export const User = mongoose.model("User", userSchema);

