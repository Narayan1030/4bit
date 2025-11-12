import { useState, useEffect } from "react";
import "./ProjectModal.css";
import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";
import api from "../../../lib/axios";

function ProjectModal({ mode = "add", projectData = null, onClose }) {
  const [formData, setFormData] = useState({
    Project_Name: projectData?.Project_Name || "",
    client: projectData?.client || "",
    status: projectData?.status || "In Progress",
    team: projectData?.team || "",
    result: projectData?.result || "yet to impact",
    due_date: projectData?.due_date || "",
    description: projectData?.description || "",
  });

  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
  if (projectData && mode === "edit") {
    setFormData({
      Project_Name: projectData.Project_Name,
      client: projectData.client,
      status: projectData.status,
      team: projectData.team,
      result: projectData.result,
      due_date:  projectData?.due_date
    ? new Date(projectData.due_date).toISOString().split("T")[0]
    : "",
      description: projectData.description,
    });
  }
}, [projectData]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal")) onClose();
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (mode === "add") {
      try {
        const response = await api.post("/admin/projects", formData);
        toast.success("Project saved successfully");
        console.log("Saved project:", response.data);
      } catch (error) {
        console.error("Error posting data:", error);
        toast.error("Failed to save data");
      } finally {
        setLoading(false);
      }
    } else {
      try {
        await api.put(`/admin/projects/${projectData._id}`, formData);
        toast.success("Project updated");

      } catch (error) {
        console.error("Error updating data:", error);
        toast.error("Failed to update data");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="modal" onClick={handleOverlayClick}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()} >
        <button className="close-btn" onClick={onClose}>
          <IoClose />
        </button>
        <div>
          <h2>{mode === "add" ? "Add Projects" : "Edit Project"}</h2>
          <p>
            {mode === "add" ? "Add a new Project you are working on" : "Edit this Project"}
          </p>
          <form className="edit-project-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label>Project Name</label>
              <input
                name="Project_Name"
                type="text"
                placeholder="Website Redesign"
                value={formData.Project_Name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Client</label>
              <input
                name="client"
                type="text"
                placeholder="Acme Corp"
                value={formData.client}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Status</label>
              <input
                name="status"
                type="text"
                value={formData.status}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Team</label>
              <input
                name="team"
                type="number"
                value={formData.team}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Result</label>
              <input name="result" type="text" value={formData.result} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Due Date</label>
              <input
                name="due_date"
                type="date"
                value={formData.due_date}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Image</label>
              <input type="file" />
            </div>

            <div className="form-group full-width">
              <label>Description</label>
              <textarea
                name="description"
                placeholder="Describe the project..."
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div
              className="full-width"
              style={{ display: "flex", gap: "1rem" }}
            >
              <button
                type="button"
                className="action-btn"
                onClick={onClose}
                disabled={loading}
              >
                Cancel
              </button>
              <button type="submit" className="action-btn" disabled={loading}>
                {mode === "add" ? "Create" : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
