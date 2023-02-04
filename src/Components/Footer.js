import React from 'react'
import {GAME_PLAYING} from "../Constants";

const Footer =({Reset,ComputerMove,gameState})=>{
  const render_buttons =()=>{
    if(gameState === GAME_PLAYING){
      return <button onClick={ComputerMove}>Suggest Move</button>
    }
    return <button onClick={Reset}>New game</button>
  }
  return (
    
    <div className='panel  footer'>
       {render_buttons()}
    </div>
  )
}

export default Footer