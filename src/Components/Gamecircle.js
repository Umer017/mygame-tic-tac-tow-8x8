import React from 'react'
import '../Game.css';

const Gamecircle = ({id,className,CircleClick}) => {
  return (
    <div  className={`gameCircle ${className}`} onClick={()=>CircleClick(id)}></div>
  );
}

export default Gamecircle

// used - rafce (react arrow function export componenet)