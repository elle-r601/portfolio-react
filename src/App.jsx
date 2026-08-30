import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import CarouselWidget from './components/CarouselWidget'
import ToggleSwitch from './components/ToggleSwitch'
import AnimatedBorder from './components/animatedBorder'
import Title from './components/Title'
import Navbar2 from './components/Navbar2'
import About2 from './components/About2'
import Work from './components/Work'
import Card from './components/Card'
import Spacer from './components/Spacer'
import gsap from 'gsap';
import { useEffect, useState } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";


function App() {

  return (
    <>
    
    <div id="bg" > 
        
          <Title />
          <Navbar2 />
          <About2 />
          <Spacer />
          <Work />
          {/* <Card/> */}
    </div>
    </>
  )
}

export default App
