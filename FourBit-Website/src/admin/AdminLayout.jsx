import React from "react";
import { useState } from "react";
import AdminNavBar from "./admin_components/AdminNavBar";
import AdminHeader from "./admin_components/AdminHeader";
import { Outlet } from "react-router-dom";
import "./AdminLayout.css";

const AdminLayout = () => {

  const [isNavVisible, setIsNavVisible] = useState(true)
  const handleHideNav = () =>{
    setIsNavVisible(!isNavVisible)
  }
  console.log(isNavVisible);
  

  return (
    
      <div className="admin-layout">
      <AdminNavBar isNavVisible={isNavVisible}/>
      <div className="head-and-body">
        <AdminHeader handleHideNav={handleHideNav}/>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
   
  );
};

export default AdminLayout;
