import "./Work.css"

export default function WorkCard({element}){

    
    return(
        <>
            <div className="work-card">
                <div className="img-or-vid">
                    <div className="vid">
                    {element.img ? 
                        <img src={element.img} className="brand-img" alt="Screenshot/Video Placeholder" /> :
                        <div className="placeholder-image">Screenshot/Video Placeholder</div>
                    }
                    </div>
                </div>
                <div className="other-details">
                    <div className="org-service">
                        <h3>{element.client}</h3>
                        <p>{element.Project_Name}</p>
                    </div>
                    <p>{element.result}</p>
                </div>
            </div>
        </>
    )
}