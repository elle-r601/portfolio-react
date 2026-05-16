import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import CarouselWidget from './components/CarouselWidget'

function App() {

  return (
    <>
     <Navbar />
     <About />
     <CarouselWidget />
    </>
  )
}

export default App
