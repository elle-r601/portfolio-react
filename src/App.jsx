import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import CarouselWidget from './components/CarouselWidget'
import ToggleSwitch from './components/ToggleSwitch'
import AnimatedBorder from './components/animatedBorder'
import Title from './components/Title'

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
          <About />
          <CarouselWidget />
    </div>
    </>
  )
}

export default App
