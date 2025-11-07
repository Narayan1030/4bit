import "./ProjectModal.css";
import { IoClose } from "react-icons/io5";

function ProjectModal({isClose}) {

  return (
    <div className="modal" onClick={()=>isClose()}>
      <div className="modal-container">
        <button className="close-btn" onClick={()=>isClose()}>
          <IoClose />
        </button>
        <div>
          <h2>Create Project</h2>
          <p>Create new Projects</p>
          <form className="edit-project-form" >
            <div className="form-group">
              <label>Project Name</label>
              <input type="text" placeholder="Website Redesign" />
            </div>

            <div className="form-group">
              <label>Client</label>
              <input type="text" placeholder="Acme Corp" />
            </div>

            <div className="form-group">
              <label>Status</label>
              <select>
                <option>In Progress</option>
                <option>Completed</option>
                <option>Pending</option>
              </select>
            </div>

            <div className="form-group">
              <label>image</label>
              <input type="file" />
            </div>

            <div className="form-group">
              <label>Result</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Due Date</label>
              <input type="date" />
            </div>

            <div className="form-group full-width">
              <label>Description</label>
              <textarea placeholder="Describe the project..." />
            </div>
            <button type="reset" className="action-btn">Cancel</button>
            <button type="submit" className="action-btn">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
