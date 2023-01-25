import React, { useEffect, useState } from "react";
import Tile from "./Tile";


function NewGame() {
    const [hod, setHod] = useState(0)
    const [game, setGame] = useState(
        [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ])
        console.log(game)
        
        let gameChange = game

        function onClickTiktaktoe(row, item){

            gameChange[] == "1"

            console.log(gameChange)
        }
        

    return (
        <div className="Board">
            {game.map((row, index) => {
                return (
                    <div className = 'layer' key={Math.random()*9999+1}>{row.map((item, index) => {
                        return (
                            <Tile key={Math.random()*9999+1}  
                            onClickFunc={()=>onClickTiktaktoe(row, item)}
                            value={item}
                            >
                            </Tile>)
                    })}
                    </div>
                )
            })}
        </div>
    )

}

export default NewGame;