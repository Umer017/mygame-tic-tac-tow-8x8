import { GAME_DRAW, GAME_PLAYING,GAME_WIN } from "../Constants";

function Header({Currentplayer,gameState,winnerPlayer}){
    const render_label =()=>{
        switch(gameState)
        {
            case GAME_PLAYING :
                return <div>Player {Currentplayer}  Turns</div>;
            case GAME_WIN :
                return <div>Player {winnerPlayer} Won</div>;
            case GAME_DRAW :
                return <div>GAME DRAW</div>;
            default:
        }
    }
    return (
        
        <div className="panel header">
            <div className="header-text"> {render_label()}</div>
        </div>
    )
}


export default Header
