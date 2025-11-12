import mongoose, { Mongoose } from "mongoose";

const projectsSchema = new mongoose.Schema({
    image:{
        type: String,
        required: false
    },
    Project_Name:{
        type: String,
        required: true
    },
    client:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ["Complete","In Progress","Pending"],
        required: true
    },
    progress:{
        type: String,
    },
    team:{
        type: String,
        required: true
    },
    due_date:{
        type: Date,
        // required: true
    },
    result:{
        type: String,
        required: false
    },
    image:{
        type:String,
        required: false
    },
    description:{
        type: String,
        required: true
    }

})

const Projects = mongoose.model("Projects",projectsSchema)

export default Projects