import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import uuid from 'react-uuid';
import update from 'react-addons-update';

// const mockObj = {
//     t: {
//         a: {
//             yolo: [1, {
//                 kek: true
//             }]
//         }
//     }
// }

// const newMockObj = update(mockObj, {
//     t: {
//         a: {
//             yolo: [, {
//                 kek:{
//                 $set: true
//                 }
//             }]
//         }
//     }
// },

//     { $push: false }
// )
// console.log(mockObj)
function NewGame() {
    const [hod, setHod] = useState(1)
    const [gameEnd, setGameEnd] = useState(false)
    const [defaultGame, setDefaultGame] = useState(
        [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ]);
    const [game, setGame] = useState(defaultGame);

    
    function checkWin() {

        if (game[0][0] == 1 && game[0][1] == 1 && game[0][2] == 1 ||
            game[1][0] == 1 && game[1][1] == 1 && game[1][2] == 1 ||
            game[2][0] == 1 && game[2][1] == 1 && game[2][2] == 1 ||
            game[0][0] == 1 && game[1][0] == 1 && game[2][0] == 1 ||
            game[0][1] == 1 && game[1][1] == 1 && game[2][1] == 1 ||
            game[0][2] == 1 && game[1][2] == 1 && game[2][2] == 1 ||
            game[0][0] == 1 && game[1][1] == 1 && game[2][2] == 1 ||
            game[0][2] == 1 && game[1][1] == 1 && game[2][0] == 1) {
            setGameEnd(true)
        }
        if (game[0][0] == 2 && game[0][1] == 2 && game[0][2] == 2 ||
            game[1][0] == 2 && game[1][1] == 2 && game[1][2] == 2 ||
            game[2][0] == 2 && game[2][1] == 2 && game[2][2] == 2 ||
            game[0][0] == 2 && game[1][0] == 2 && game[2][0] == 2 ||
            game[0][1] == 2 && game[1][1] == 2 && game[2][1] == 2 ||
            game[0][2] == 2 && game[1][2] == 2 && game[2][2] == 2 ||
            game[0][0] == 2 && game[1][1] == 2 && game[2][2] == 2 ||
            game[0][2] == 2 && game[1][1] == 2 && game[2][0] == 2) {
            setGameEnd(true)
        }
    }
    function playerWin(){
        if(hod % 2 === 0 && gameEnd == true){
            return( <div>Player "X" won</div>)
        }
        if(hod % 2 > 0 && gameEnd == true){
            return( <div>Player "0" won</div>)
        }
    }

    function onRowClickHandler(gameIndex, rowIndex) {



        setHod(hod + 1)
        let localhod = hod + 1

        setGame(update(game,
            {
                [gameIndex]: {
                    $splice: [[[rowIndex], 1, localhod % 2 === 0 ? 1 : 2]]
                }
            })
        )

    }

    function clickOnButton() {
        if(gameEnd == true){
        setHod(1)
        setGame(defaultGame)
        setGameEnd(false)
        
        }
    }

    function gameStatus(){
        let statusStyle = { color: "black"}
        if(gameEnd == true){
            statusStyle = {color: "red"}
        }
        return(<div style={statusStyle}>Game status: {hod}</div>)
    }

    useEffect(() => {
        checkWin()
    }, [hod]);

    return (
        <div className="Board">
            {game.map((row, gameIndex) => {
                return (
                    <div className="layer" key={uuid()}>{row.map((value, rowIndex) => {
                        return (
                            <Tile
                                key={uuid()}
                                value={game[gameIndex][rowIndex]}

                                onClickFunc={!gameEnd ? () => onRowClickHandler(gameIndex, rowIndex) : null} />
                        )
                    })}
                    </div>
                )
            })}

            <div>{gameStatus()}</div>
            <div><button onClick={clickOnButton}>reset game</button></div>
            <div>{playerWin()}</div>

            {/* <div>{JSON.stringify(mockObj)}</div> */}
            {/* <div><button>KEK FALSE</button></div> */}

        </div>
    )

}


export default NewGame;