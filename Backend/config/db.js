import express from "express"
import mongoose from "mongoose"

const MONGO_URI_LOCAL = "mongodb://localhost:27017/projects"

export const connectDB = async () =>{
    try {
        await mongoose.connect(MONGO_URI_LOCAL)
        console.log("DB Connected Successfully");
        
    } catch (error) {
        console.log("Error Connecting DB",error);
    }
}

