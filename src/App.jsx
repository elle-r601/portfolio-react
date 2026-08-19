import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import CarouselWidget from './components/CarouselWidget'
import ToggleSwitch from './components/ToggleSwitch'
import AnimatedBorder from './components/animatedBorder'
import Title from './components/Title'
import Navbar2 from './components/Navbar2'
import About2 from './components/About2'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  const [toggled, setToggled] = useState(false);

  return (
    <>
    
    <div id="bg" > 
          {/* <Navbar 
            isOn={toggled}
            handleToggle={() => setToggled(!toggled)}
            /> */}
          <Title />
          <Navbar2 />
          <About2 />
          {/* <About /> */}
          <CarouselWidget />
    </div>
    </>
  )
}

export default App
