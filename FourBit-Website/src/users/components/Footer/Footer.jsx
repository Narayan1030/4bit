import React from 'react'
import { FiMail,FiPhone } from "react-icons/fi";
import { PiCopyrightBold } from "react-icons/pi";
import whitelogo from "../../../assets/4bitlogowhite.png";
import blacklogo from "../../../assets/4bitlogoblack.png";
import './Footer.css'

const Footer = ({light}) => {
    const scrollToSection = (id) =>{
      document.getElementById(id).scrollIntoView({behaviour:"smooth",block:"start"})
    }
    return (
        
           
                <div className="footer-container">
                    <div className="footer-describe">
                        <div className="logo">
                            <img 
                             src={light?`${blacklogo}`:`${whitelogo}`} 
                             alt="FourBit Logo" 
                            className="footer-img" />
                        </div>
                        
                        <p>Building digital products and growth engines from Nepal</p>
                        <p className="copyright" style={{
                                display: "flex",
                                flexDirection:"row",
                                gap:"2px",
                                alignItems:"center"
                        }}><PiCopyrightBold/>2025 FourBit.All rights reserved.</p>
                    </div>
                    <div className="footer-nav">
                        <div className="footer-company">
                        <h3>Company</h3>
                        <li onClick={()=>scrollToSection("services")}>Services</li>
                        <li onClick={()=>scrollToSection("work")}>Work</li>
                        <li onClick={()=>scrollToSection("process")}>Process</li>
                        <li onClick={()=>scrollToSection("pricing")}>Pricing</li>
                    </div>
                    <div className="footer-resources">
                        <h3>Resource</h3>
                        <li>Case studies</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </div>
                    <div className="footer-contact">
                        <h3>Contact</h3>

                        <a href="mailto:hello@fourbit.com"><p><FiMail /> hello@fourbit.com <br /></p></a>
                        <p><FiPhone /> +977-970-5395408</p>
                    </div>
                    </div>




                </div>
        
    )
}

export default Footer