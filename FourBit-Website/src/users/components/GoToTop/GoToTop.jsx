import React from 'react'
import { FaArrowCircleUp } from "react-icons/fa";

const GoToTop = () => {
    const goToTop = () =>{
        window.scrollTo({top:0, left:0, behavior:"smooth"})
    }
  return (
    <div className='go-to-top-container'>
      <FaArrowCircleUp onClick={goToTop} className='go-to-top-button'/>
    </div>
  )
}

export default GoToTop
