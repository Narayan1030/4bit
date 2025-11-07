import React, { useState , useEffect } from 'react'
// import ProjectData from './ProjectsData'
import toast from "react-hot-toast"
import api from "../../../lib/axios.js"
import { HiDotsHorizontal } from "react-icons/hi";

import "./ProjectsCard.css"

const ProjectsCard = () => {

    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(  ()=>{
        const fetchProjects = async () =>{
            try {
                const response = await api.get("/admin/projects")
                setProjects(response.data)
                setLoading(false)
            } catch (error) {
                console.log(error);
                toast.error("Error fetching projects")
            }
        }
        fetchProjects()
    },[])
    console.log(projects);
    
    
  return (
    <div className='projects-card'>
      <h3>All Projects</h3>
      <p>A list of projects and their status.</p>

      <table>
       <thead>
         <tr>
        <th>Project Name</th>
        <th>Client</th>
        <th>Status</th>
        <th>Progress</th>
        <th>Team</th>
        <th>Due Date</th>
        <th>Action</th>
        </tr>
       </thead>
        <tbody>
          {
            projects && projects.length && (
                projects.map((project)=>
                
                <tr key={project.id}>
                    <td>{project.Project_Name}</td>
                    <td>{project.client}</td>
                    <td>{project.status}</td>
                    <td>{project.progress}</td>
                    <td>{project.team}</td>
                    <td>{new Date(project.due_date).toLocaleDateString()}</td>
                    <td><HiDotsHorizontal/></td>
                </tr>
                )
            )
        }
        </tbody>
      </table>
    </div>
  )
}

export default ProjectsCard
