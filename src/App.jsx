import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import CarouselWidget from './components/CarouselWidget'
import ToggleSwitch from './components/ToggleSwitch'

function App() {
  const [toggled, setToggled] = useState(false);

  return (
    <>
     <Navbar />
     <About />
     <CarouselWidget />
    </>
  )
}

export default App
