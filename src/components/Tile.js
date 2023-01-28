import React, { useState } from "react";

function Tile({onClickFunc, value, }) {   

if(value > 0){
    onClickFunc = undefined
}
if(value == 0){
    value = ""
}
if(value == 1){
    value = "X"
}
if(value == 2){
    value = "O"
}

    return (
        <div className="box" onClick={onClickFunc}>
            {value}
        </div>
    )
};

export default Tile;