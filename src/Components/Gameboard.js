import React,{useEffect, useState} from "react";
import Gamecircle from "./Gamecircle";
import Header from "./Header";
import '../Game.css';
import Footer from "./Footer";
import {calculateWinner,isDraw,ComputerMove} from "../helper.js";
import {GAME_PLAYING,GAME_WIN ,GAME_DRAW} from "../Constants";


const Gameboard =()=>{
    const NO_CIRCLES = 16;
    const PLAYER_0 = 0;
    const PLAYER_1 = 1;
    const PLAYER_2 = 2;
    const [gameBoard,setGameBoard] = useState(Array(16).fill(PLAYER_0));
    const [turn , SetTurn] = useState(PLAYER_1);
    const [gameState,setGameState] = useState(GAME_PLAYING);
    const [winnerPlayer,setwinnerPlayer] = useState(PLAYER_0);

    const initBoard = () =>{
        const Circles = [];
        let i;
     for(i = 0; i <NO_CIRCLES;i++){
       Circles.push(renderCircle(i));
     } 
     return Circles

    }

    useEffect(() => { // called only once in life cycle of the game
      ResetGame();
    },[])

    function ResetGame(){
      setGameBoard(Array(16).fill(PLAYER_0))
      SetTurn(PLAYER_1);
      setGameState(GAME_PLAYING)
    }

    const suggetsMove = () =>{

      CircleClick(ComputerMove(gameBoard));

    }

    function CircleClick(id){

        if(gameBoard[id] !== PLAYER_0) return 
        if(gameState === GAME_WIN) return 
        console.log("Cirlce "+id +"is clicked");
       // const Board = [...gameBoard]; //copy of array

       setGameBoard(prev =>{
        return prev.map((circle,position) => { //recomended way
            if(position === id) return turn;
            return circle;
        })
       });

       // gameBoard[id] = turn;
       // setGameBoard(gameBoard);
       if(calculateWinner(gameBoard,id,turn))
       {
         setGameState(GAME_WIN)
         setwinnerPlayer(turn)
       }
       if(isDraw(gameBoard,id,turn))
       {
         setGameState(GAME_DRAW)
         setwinnerPlayer(PLAYER_0)
       }
        SetTurn(turn === PLAYER_1 ? PLAYER_2 : PLAYER_1)
         
        console.log(gameBoard);
    }

    const renderCircle = (id) =>{ //helper function
       return(     
       <Gamecircle key={id} id={id} className={`Player${gameBoard[id]}`} CircleClick={CircleClick}>
        </Gamecircle>
       )
    }
    return (
    <>
    <Header gameState={gameState} Currentplayer = {turn} winnerPlayer={winnerPlayer}/>
    <div className="gameBoard">
       {initBoard()} 
    </div>
    <Footer Reset={ResetGame} ComputerMove={suggetsMove} gameState={gameState}/>
    </>
    )
} 

export default Gameboard
