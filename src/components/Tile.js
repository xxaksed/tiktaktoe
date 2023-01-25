import React, { useState } from "react";

function Tile({onClickFunc, value}) {

    return (
        <div className="box" onClick={onClickFunc}>
            {value}
        </div>
    )
};

export default Tile;