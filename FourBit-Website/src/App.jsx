import React, { createContext, useState } from "react";
import { Toaster } from "react-hot-toast";

import HomePage from "./users/HomePage.jsx";
import { Route, Routes } from "react-router-dom";
import AdminRoutes from "./admin/AdminRoutes.jsx";

export const ThemeContext = createContext();

function App() {
  const [light, setLight] = useState(false);
  return (
    <div>
      <Toaster />
      <ThemeContext.Provider value={[light, setLight]}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

// {/* <Routes>
//           <Route path=''/>
//         </Routes> */}

// import { useState,useEffect } from 'react'
// import { Routes } from 'react-router-dom'
// import Navbar from './users/components/Navbar/Navbar.jsx'
// import Services from './users/components/Services/Services'
// import Hero from './users/components/Hero/Hero'
// import Process from './users/components/Process/Process.jsx'
// import Price from './users/components/Pricing/Price.jsx'
// import Work from './users/components/Work/Work.jsx'
// import Contact from './users/components/Contact/Contact.jsx'
// import Review from './users/components/Review/Review.jsx'
// import Footer from './users/components/Footer/Footer.jsx'

{
  /* <Navbar light={light} setLight={setLight}/>
        <div id="hero"><Hero /></div>
        <div id="services"><Services /></div>
        <div id="work"><Work /></div>
        <div id="process"><Process /></div>       
        <div id="price"><Price /></div>
        <div id="review"><Review /></div>
        <div id="contact"><Contact /></div>
        <Footer light={light}/>
        <GoToTop /> */
}

