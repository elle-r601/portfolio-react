import { useRef } from 'react';
import "./ToggleSwitch.css"

const ToggleSwitch = ({ isOn, handleToggle }) => {

  const bg = useRef(document.getElementById('root'));
  
    
  return (
     <>
     <div className='light-switch'>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="switch-checkbox"
        id={`switch`}
        type="checkbox"
      />
      <label
        className="switch-label"
        htmlFor={`switch`}
      >
        <span className={`switch-button`} />
      </label>
     </div>
      
    </>
  );
};
export default ToggleSwitch