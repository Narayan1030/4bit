import React, { useState } from "react";
import "./Contact.css";
import api from "../../../lib/axios";
import toast from "react-hot-toast"

const ContactForm = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [compname, setCompname] = useState("");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(user);
  console.log(email);
  console.log(compname);
  console.log(details);
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      await api.post("/user", { user, email, compname, details });
      toast.success("Request Submitted. We will contact to your email shorty")
      // console.log("data saved");
    } catch (error) {
      console.log(error);
      toast.error("failed to save")
    }finally{setLoading(false)}
  };

  return (
    <div className="contact-form">
      <h2>Tell us about your project</h2>
      <p>We typically reply within one business day.</p>
      <hr />
      <form onSubmit={handleFormSubmit}>
        <input 
        type="text" 
        placeholder="your name"
        value={user} 
        onChange={(e)=>setUser(e.target.value)}
        required />
        <input 
        type="email" 
        placeholder="Email" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        required />
        <input 
        type="text" 
        placeholder="company/organization" 
        value={compname}
        onChange={(e)=>setCompname(e.target.value)}
        required />
        <textarea
          placeholder="What are you trying to build or grow?"
          rows="4"
          value={details}
          onChange={(e)=>setDetails(e.target.value)}
          required
        />

        <button type="submit"> Send Message </button>
      </form>
    </div>
  );
};

export default ContactForm;
