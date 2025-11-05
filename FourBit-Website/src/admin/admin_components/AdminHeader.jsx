import React from "react";
import "./AdminHeader.css";
import { useState, useEffect } from "react";
import { BsClock } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrNotification } from "react-icons/gr";

const AdminHeader = ({ handleHideNav }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="header-container">
      <div className="ham-menu">
        <button onClick={() => handleHideNav()}>
          <GiHamburgerMenu style={{ height: "1.5rem", width: "2rem" }} />
        </button>
        <span className="time">
          <BsClock style={{ height: "1rem", width: "2rem" }} />
          {time.toLocaleTimeString()}
        </span>
      </div>
      <div className="header-end">
        <GrNotification style={{ height: "1.5rem", width: "2rem" }} />
        <div className="profile">
          <span className="profile-avatar">Profile</span>
          <h3>Admin Name</h3>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
