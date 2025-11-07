import express from  "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import router from "./routes/UserRoute.js"
import Projectsrouter from "./routes/Projects.route.js"
import cors from "cors"

dotenv.config()
const app = express()


const PORT = process.env.PORT || 5001

//middlewares
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173','http://localhost:5174']
}))
//routes
app.use("/api/user", router)
app.use("/api/admin/projects", Projectsrouter)

connectDB().then(()=>{
    app.listen(PORT, ()=>{
    console.log(`server is listenting on port :${PORT}`)
})})
    
