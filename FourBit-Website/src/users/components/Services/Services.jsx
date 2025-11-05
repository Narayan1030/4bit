import "./Services.css"
import ServicesCard from "./ServicesCard"
import { BiLayout,  BiCodeAlt } from "react-icons/bi";
import {  CiMobile2 } from "react-icons/ci";
import { LuMegaphone } from "react-icons/lu";


export default function Services(){

    const scrollToSection = (id) =>{
      document.getElementById(id).scrollIntoView({behaviour:"smooth",block:"start"})
    }

    const elements = [
        {
            logo : <BiLayout />,
            status: "Expert",
            title: "Website Development",
            description: "Fast, accessible, SEO-friendly websites built with modern stacks.",
            tools:["Next.js","Tailwind","SEO"]
        },
        {
            logo : <CiMobile2 />,
            status: "Expert",
            title: "App Development",
            description: "iOS/Android apps with delightful UX and rock-solid performance.",
            tools:["React Native","Flutter","CI/CD"]
        },
        {
            logo : <BiCodeAlt />,
            status: "Expert",
            title: "Software Development",
            description: "Scalable customsoftware tailored to your busines workflows.",
            tools:["APIs","Microservices","Cloud"]
        },
        {
            logo : <BiLayout />,
            status: "Expert",
            title: "Digital Marketing(Core Expertise)",
            description: "Performant ads, social, contents and analytics that moves the needles.",
            tools:["SMM","Paid Ads","Analytics"]
        }
        
        
        
    ]
    
    return(
    <div className="service-container">
        <div className="service-container-description">
            <h1>What we do</h1>
        <div className="service-descriptions">
            <p>End-to-end deliveryfrom discovery to launch — with measurable impact.</p>
            <button onClick={()=>scrollToSection("contact")}>Request Proposal</button>
        </div>
        </div>
        <div className="card">
            {
            elements.map((element,idx)=>
            <ServicesCard key={idx} element={element}/>
)
        }
        </div>
    </div>)
}