import { useState } from "react";
import Button from "./Button";

export default function GameBoard(){
    const [gameboard, setGameBoard] = useState(
        [
            [null, null, "x"],
            [null, null, null],
            [null, null, null]
        ]
    );

    function handlePlayerClick(indexRows, indexPosition){
        const gameboardCopy = JSON.parse(JSON.stringify(gameboard));
        gameboardCopy[indexRows][indexPosition] = "o";
        setGameBoard(gameboardCopy);
    }
    return(
          <ol id="game-board">
          {gameboard.map((rows, indexRows)=>{
            return <li><ol>
                {rows.map((position, indexPosition)=>{
                    return <li><Button playerSymbol={position} onPlayerClick={()=>{handlePlayerClick(indexRows,indexPosition)}}/></li>
                })}
                </ol></li>
          })}
        </ol>
    );
}