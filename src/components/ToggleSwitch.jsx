import React, { useState } from 'react';

function ToggleSwitch({ isToggled, onToggle }) {
    const toggle = ({ isToggled, onToggle }) 
    
  return (
    <div className="toggle-switch" onClick={onToggle}>
        <div className={`switch ${isToggled ? 'on' : 'off'}`}>
        </div>
    </div>
  )
}
export default ToggleSwitch