import React, { useState } from "react";

function Tile({onClickFunc}) {

    return (
        <div className="box" onClick={onClickFunc}>
        </div>
    )
};

export default Tile;