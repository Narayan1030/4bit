import { FiFacebook,FiLinkedin,FiMail,FiPhone } from "react-icons/fi";
import ContactForm from "./ContactForm.jsx";

import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <section className='contact-section'>
            <div className="contact-container">
                <ContactForm />
                <div className="contact-info">
                    <h2>Contact details</h2>
                    <p className='special'>Prefer a direct line? Reach us anytime.</p><hr />
                    <a href="#"><FiPhone />+977-98-XXX-XXX</a>
                    <a href="mailto:hello@fourbit.com"><FiMail />hello@fourbit.com</a>
                    <a href="https://www.linkedin.com/company/thefourbit" target="blank"><FiLinkedin />linked.com/company/Fourbit</a>
                    <a href="https://www.facebook.com/thefourbit" target="blank"><FiFacebook />facebook.com/Fourbit</a>
                    <div className='offshore-box'>
                        <h3>Open for Offsharing</h3>
                        <p className='special'> We partner worldwide to deliver cost-effective,high-quality builds from Nepal</p>
                    </div>
                </div>
            </div>
            <hr />


        </section>
    )
}

export default Contact