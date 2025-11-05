import React from 'react'
import "./Process.css";

export default function ProcessCard({number,title,description}) {
  return (
    
    <div className='process-style'>
            <div className="process-number">
              {number}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
    </div>
 
  )
}
