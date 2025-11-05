import express, {Router} from "express";
import { viewProjects, createProjects, updateProjects, deleteProject } from "../controllers/Admin.projects.controller.js"

const Projectsrouter = express.Router()

Projectsrouter.get("/", viewProjects)
Projectsrouter.post("/", createProjects)
Projectsrouter.put("/:id", updateProjects)
Projectsrouter.delete("/:id", deleteProject)

export default Projectsrouter