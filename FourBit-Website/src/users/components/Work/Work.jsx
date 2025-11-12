import "./Work.css";
import { useState, useEffect } from "react"
import WorkElements from "./WorkData.js";
import WorkCard from "./WorkCard.jsx";

export default function Work() {

  const [isViewAll, setIsViewAll] = useState(false)

  const visibileWork = isViewAll ? WorkElements : WorkElements.slice(0,3)

  
  return (
    <div className="featured-work-container">
      <div className="featured-work-description">
        <h2>Featured Work</h2>
        <div className="work-view">
          <p>A peek at projects we loved building and scaling.</p>
          <button onClick={()=>setIsViewAll(!isViewAll)}>View All</button>
        </div>
      </div>
      <div className="featured-work-card">
        {visibileWork && visibileWork.length
          ? visibileWork.map((workElement, index) => (
              <WorkCard key={workElement.id} element={workElement} />
            ))
          : null}
      </div>
    </div>
  );
}
