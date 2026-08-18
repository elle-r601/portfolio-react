
import { useState } from 'react'
import About from './About'
import CarouselWidget from './CarouselWidget'
import Navbar from './/Navbar'

function Home()  {
    const [toggled, setToggled] = useState(false);
    return (
      <div className="Home">
        <Navbar 
          isOn={toggled}
          handleToggle={() => setToggled(!toggled)}
          />
        <About />
        <CarouselWidget />
      </div>
    )
}
export default Home;