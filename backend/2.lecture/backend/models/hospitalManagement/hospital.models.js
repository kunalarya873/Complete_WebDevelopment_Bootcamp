import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    addressLine1:{
        type: String,
        required: true
    },
    addressLine2:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    pinCode:{
        type: String,
        required: true
    },
    specializedIn:[
        {
            type: String,
            required: true
            
        }
    ]

})

export const Hospital = mongoose.model("Hospital", hospitalSchema)