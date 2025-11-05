import Projects from "../models/Admin.projects.model.js";

export const viewProjects = async(req,res) =>{

    try {
        const response = await Projects.find()
        
        console.log("Projects fetched");
        res.status(200).json(response)

        
    } catch (error) {
        console.log("Error fetching works:",error);
        res.status(500).json({error:"Internal server error"})        
    }

}

export const createProjects = async (req,res) =>{
    try {
        const data = req.body
        const newProject = new Projects(data)
        const response = await newProject.save()
        console.log("new project created");
        res.status(200).json(response)
    } catch (error) {
        console.log("Error inserting works:",error);
        res.status(500).json({error:"Internal server error"})
    }
}

export const updateProjects = async (req,res) =>{
    try {
        const ProjectId = req.params.id
        const updatedProjectData = req.body
        const response = await Projects.findByIdAndUpdate(ProjectId, updatedProjectData,{
            new: true,
            useValidators: true
        })
        if(!response){
            res.status(404).json({error:"record not found"})
        }
        console.log("Projects updated");
        res.status(200).json(response)
    } catch (error) {
        console.log("Error updating works:",error);
        res.status(500).json({error:"Internal server error"})
    }
}

export const deleteProject = async (req,res) =>{
    try {
        const ProjectId = req.params.id
        const response = await Projects.findByIdAndDelete(ProjectId)
        
        if(!response){
            res.status(404).json({error:"record not found"})
        }
        console.log("Project removed");
        res.status(200).json({success:"Record removed successfully"})
    } catch (error) {
        console.log("Error deleting works:",error);
        res.status(500).json({error:"Internal server error"})
    }
}