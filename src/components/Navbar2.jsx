import ToggleSwitch from "./ToggleSwitch";
import { useState } from 'react'
import gsap from 'gsap';

import "./Navbar.css"

function Navbar() {
    const handleClick = (e) => {

        e.preventDefault();
        const id = e.target.id;
        const element = document.getElementById(id + '-section');
        const top = element.getBoundingClientRect().top + window.scrollY - 140; 
        window.scrollTo({ top, behavior: 'smooth' });
    }

    const scrollTop = (e) => {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

  return (
    <div className="header-alt">
        <div className="header-col1-alt">
            {/* <img src="/newIcon.svg" onClick={scrollTop} className="logo-img"/> */}
        </div>
        <div className="header-col2-alt">
            <a href="#" onClick={scroll} className="nav" id="about">[about]</a>
            <a href="#" onClick={handleClick} className="nav" id="portfolio">[projects]</a>
        </div>
        
    </div>
  )
}

export default Navbar