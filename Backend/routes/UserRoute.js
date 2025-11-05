import express, { Router } from "express"
// import User from "../models/UserData.js"
import { getAllRecords, createRecord } from "../controllers/UserController.js"

const router = express.Router() 

router.get("/", getAllRecords)

router.post("/", createRecord)

export default router