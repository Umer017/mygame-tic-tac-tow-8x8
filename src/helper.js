 export function calculateWinner(gameBoard,CurrenMove,currentplayer){

    const Board = [...gameBoard];
    Board[CurrenMove] = currentplayer;
    const winningLines = [
        [0,1,2,3],
        [4,5,6,7],
        [8,9,10,11],
        [12,13,14,15],
        [0,4,8,12],
        [1,5,9,13],
        [2,6,10,14],
        [3,7,11,15],
        [0,5,10,15],
        [3,6,9,12]
    ];

    for(let i = 0 ; i< winningLines.length;i++){
        const [c1,c2,c3,c4] = winningLines[i];
        if(Board[c1] > 0 && Board[c1] === Board[c2] && Board[c2]=== Board[c3]&& Board[c3]===Board[c4]){
            return true;
        }
    }
    return false
}

export const isDraw = (gameBoard,CurrenMove,currentplayer) =>{
    const Board = [...gameBoard];
    Board[CurrenMove] = currentplayer;
    let count = Board.reduce((n,x) => n + (x === 0) , 0);
    console.log(`count ${count}`);
    return count === 0;
}

 const ComputerRandomMove = (gameBoard) =>{
    let validMoves = [];
    for (let i = 0 ; i < gameBoard.length ; i ++){
        if(gameBoard[i]===0){
            validMoves.push(i);
        }
    }
    let rndNo = Math.floor(Math.random() * validMoves.length);
    return validMoves[rndNo]
}

const getPosition = (gameBoard,movesCheck) =>{
    for(let check = 0 ; check < movesCheck.length; check++){
        for(let i = 0 ; i < movesCheck[check].Max;i+= movesCheck[check].step){
            let series = gameBoard[i + movesCheck[check].indexes[0]].toString() +
            gameBoard[i + movesCheck[check].indexes[1]].toString() +
            gameBoard[i + movesCheck[check].indexes[2]].toString() +
            gameBoard[i + movesCheck[check].indexes[3]].toString();

            switch(series){
                case "1110":
                case "2220":
                    return i + movesCheck[check].indexes[3];
                case "1101":
                case "2202":
                    return i + movesCheck[check].indexes[2];    
                case "1011":
                case "2022":
                    return i+ movesCheck[check].indexes[1];
                case "0111":
                case "0222":
                    return i+movesCheck[check].indexes[0];
                default:

            }
        }
    }
    return -1;
}


 export const ComputerMove = (gameBoard) =>{
    let movesCheck = [
        //vertical
        {
            indexes : [0,4,8,12],
            Max : 4,
            step : 1
        },
         //Horizontal
         {
            indexes : [0,1,2,3],
            Max :4,
            step: 4
        },
         //diagonal
         {
            indexes : [0,5,10,15],
            Max :16,
            step: 16
        },
         //diagonal
         {
            indexes : [0,1,2,3],
            Max :16,
            step: 16
        },
    ]

    let position = getPosition(gameBoard,movesCheck);
    if(position > -1 ) return position;

    return ComputerRandomMove(gameBoard);

};

