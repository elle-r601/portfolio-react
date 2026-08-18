import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import CarouselWidget from './components/CarouselWidget'
import ToggleSwitch from './components/ToggleSwitch'
import Home from './components/Home'
import Archive from './components/Archive'

function App() {
  const [toggled, setToggled] = useState(false);

  return (
    <>
    <BrowserRouter>
      <div id="bg" className={toggled ? "light" : "dark"}> 
        <ToggleSwitch 
              isOn={toggled}
              handleToggle={() => setToggled(!toggled)}
            />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Archive" element={<Archive />} />
          </Routes>

        
        
      </div>
    </BrowserRouter>
    
    </>
  )
}

export default App
