import ToggleSwitch from "./ToggleSwitch";
import { useState } from 'react'
import "./Navbar.css"

function Navbar({isOn, handleToggle}) {
    const d = new Date();
    const mon = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const week = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const day = week[d.getDay()];
    const monthDay = mon[d.getMonth()];
    const string = day + " " + d.getDate().toString() + " " + monthDay.toString();

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
    <div className="header">
        <div className="header-col1">
            <div href="#" onClick={scrollTop} className="logo"><h2>Eleora Rizkalla</h2>
                <div href="#" onClick={scrollTop} className="logo alt"></div>
            </div>
            <a href="#" onClick={handleClick} className="nav" id="about">[about]</a>
            <a href="#" onClick={handleClick} className="nav" id="portfolio">[portfolio]</a>
        </div>
        <div className="header-col2">
            {/* <p id="date">{string}</p> */}
            <ToggleSwitch
                isOn={isOn}
                handleToggle={handleToggle}
            />
        </div>
        
    </div>
  )
}

export default Navbar