import React from 'react'
import { useContext,useEffect } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Services from './components/Services/Services'
import Hero from './components/Hero/Hero'
import Process from './components/Process/Process.jsx'
import Price from './components/Pricing/Price.jsx'
import Work from './components/Work/Work.jsx'
import Contact from './components/Contact/Contact.jsx'
import Review from './components/Review/Review.jsx'
import Footer from './components/Footer/Footer.jsx'
import { ThemeContext } from '../App.jsx'

const HomePage = () => {
    
  const [light, setLight] = useContext(ThemeContext)

  useEffect(() => {
    if (light) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [light]);
  
  return (
    <div className='container'>
              <Navbar light={light} setLight={setLight}/>
              <div id="hero"><Hero /></div>
              <div id="services"><Services /></div>
              <div id="work"><Work /></div>
              <div id="process"><Process /></div>       
              <div id="price"><Price /></div>
              <div id="review"><Review /></div>
              <div id="contact"><Contact /></div>
              <Footer light={light}/>
    </div>
  )
}

export default HomePage
