import React, { useEffect, useState } from "react";
import Tile from "./Tile";


function NewGame() {
    const [hod, setHod] = useState(0)
    const [game, setGame] = useState(
        [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ])

    // game.map((game) => {

    //     useEffect(() => {

    //         if (hod % 2 == 0) {
    //             setGame('X')
    //         }
    //         else (
    //             setGame('O')
    //         )

    //         setHod(+ 1);

    //     }, [hod])

    // })

    return (
        <div className="Board">
            {game.map((row) => {
                return (
                    <div key={Math.random()*9999+1}>{row.map(() => {
                        return (
                            <Tile key={Math.random()*9999+1} onClickFunc={console.log()}></Tile>)
                    })}
                    </div>
                )
            })}
        </div>
    )

}

export default NewGame;