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
        enum: ["complete","incomplete","canceled"],
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
        required: true
    }

})

const Projects = mongoose.model("Projects",projectsSchema)

export default Projects