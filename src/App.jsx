import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Homepage from './components/Homepage'
import Founder from './components/Founder'
import OrderCourseButton from './components/OrderCourseButton';
import WhyPickUs from './components/WhyPickUs'
import WhatYouAchieve from './components/WhatYouAchieve'
import Community from './components/Community'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'


import './App.css'





function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than 50px
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header scrolled={scrolled}/>
      
      <div className="app-container">
        <Homepage />
        
        <Founder />
        <WhyPickUs />
        <WhatYouAchieve />
        <Community />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </>
  )
}


export default App
