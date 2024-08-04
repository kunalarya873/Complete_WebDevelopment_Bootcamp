import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db/index.js";
dotenv.config({
    path: "/Users/kunalarya/Development/Complete_WebDevelopment_Bootcamp/backend/3.lecture/src/.env"
})
try {
    connectDB()
    .then(
        app.listen(process.env.PORT || 8000, ()=>{
            console.log(`Server started on port ${process.env.PORT || 8000}`);
        })
    )
    .catch(console.log(error));
  } catch (error) {
    console
  }



/*
import express from "express";

const app = express();

(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`)
        app.on("error", (error)=>{
            console.error('Error ', error)
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`Server started on port ${process.env.PORT}`)
        })
        console.log('Database connected')
    } catch (error) {
        console.error('Error ', error)
    }
})()*/