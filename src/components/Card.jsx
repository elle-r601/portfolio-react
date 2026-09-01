import "./Card.css"
import Button from './Button'
import { useEffect, useState } from 'react';

function Card() {

    const [showPopUp, setShowPopUp] = useState(false)

    function updatePopUp() {
        setShowPopUp(!showPopUp);
        const bg = document.body;
        if (!showPopUp) {
            bg.style.overflow = 'hidden';
        } else {
            bg.style.overflow = 'visible';
        }
    }

    return (
        <div className="card-container">
            <div className="card">
                <p>Card Component</p>
                <button onClick={updatePopUp}>hello</button>
            </div>

            <div className={`card-content ${!showPopUp ? 'disabled' : 'enabled'}`}>
                <p>this is the popup</p>
                <button onClick={updatePopUp}>close</button>    
            </div>
        </div>
        
    );
}

export default Card