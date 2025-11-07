import React, { useState } from "react";
import "./ProjectsPage.css";
import { BsPlus } from "react-icons/bs";
// import { IoSearch } from "react-icons/io5";
import ProjectsCard from "../admin_components/cards/ProjectsCard";
import ProjectModal from "../admin_components/modals/ProjectModal";

const ProjectsPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="projects-page-container">
        <div className="projects-title">
          <div>
            <h2>Projects</h2>
            <p>Manage and track your projects.</p>
          </div>
          <button className="prj-btn" onClick={() => handleShowModal()}>
            <BsPlus /> New Project
          </button>
        </div>
        <input
          type="search"
          name="projects-search"
          id="search"
          className="prj-search"
          placeholder="search a project"
        />
      </div>

      <ProjectsCard />
      {showModal && (
        <ProjectModal isOpen={showModal} isClose={handleShowModal} />
      )}
    </>
  );
};

export default ProjectsPage;
