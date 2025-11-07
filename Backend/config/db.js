import express from "express"
import mongoose from "mongoose"
// import dotenv from dotenv



export const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI_LOCAL)
        console.log("DB Connected Successfully");
        
    } catch (error) {
        console.log("Error Connecting DB",error);
    }
}

