import React, { useState, useEffect } from "react";
// import ProjectData from './ProjectsData'
import toast from "react-hot-toast";
import api from "../../../lib/axios.js";
import { HiDotsHorizontal,HiOutlinePencilAlt,HiOutlineTrash } from "react-icons/hi";

import "./ProjectsCard.css";
import ProjectModal from "../modals/ProjectModal.jsx";

const ProjectsCard = () => {
  const [editModal, setEditModal] = useState(false);
  const [projects, setProjects] = useState();
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleEdit = (projects) => {
    setSelectedProject(projects);
    setEditModal(true);
  };

  const handleDelete = async (id) =>{
      if(!window.confirm("Are you sure you want to delete this project")) return;
    try {
      await api.delete(`/admin/projects/${id}`)
      setProjects(prevProjects => prevProjects.filter(project => project._id !== id));
      toast.success("Project removed successfully")
    } catch (error) {
      console.log("error deleting project",error);
      toast.error("Couldn't Delete the Project")
    }
  }

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await api.get("/admin/projects");
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        toast.error("Error fetching projects");
      }
    };
    fetchProjects();
  }, [projects]);
  // console.log(projects);

  return (
    <div className="projects-card">
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
          {projects && projects.length
            ? projects.map((project) => (
                <tr key={project._id}>
                  <td>{project.Project_Name}</td>
                  <td>{project.client}</td>
                  <td>{project.status}</td>
                  <td>{project.progress}</td>
                  <td>{project.team}</td>
                  <td>{new Date(project.due_date).toLocaleDateString()}</td>
                  <td>
                    <button className="table-action edit-btn" onClick={() => handleEdit(project)}>
                      <HiOutlinePencilAlt /> 
                    </button>

                    <button className="table-action delete-btn" onClick={() => handleDelete(project._id)}>
                      <HiOutlineTrash /> 
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
      {editModal && (
        <ProjectModal
          mode="edit"
          projectData={selectedProject}
          onClose={() => setEditModal(false)}
        />
      )}
    </div>
  );
};

export default ProjectsCard;
