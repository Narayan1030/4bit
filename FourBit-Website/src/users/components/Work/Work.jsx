import "./Work.css";
import { useState, useEffect } from "react"
// import WorkElements from "./WorkData.js";
import WorkCard from "./WorkCard.jsx";
import toast from "react-hot-toast"
import api from "../../../lib/axios.js"

export default function Work() {

  const [isViewAll, setIsViewAll] = useState(false)
  const [works, setWorks] = useState([])
  const [loading, setLoading] = useState(false)

  const visibileWork = isViewAll ? works : works.slice(0,3)

  useEffect(()=>{
    const fetchWork= async () =>{
      setLoading(true)
      try {
        const response = await api.get("/admin/projects")
        setWorks(response.data)
        // toast.success("works fetched")
        // console.log("works fetched successfully.");
                
      } catch (error) {
        console.log("error fetching works",error);
        toast.error("error fetching works!!")
      }
    }
    fetchWork()
  },[])
  // console.log(works);


  


  
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
          ? visibileWork.map((works) => (
              <WorkCard key={works._id} element={works} />
            ))
          : null}
      </div>
    </div>
  );
}
