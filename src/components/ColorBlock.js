import React from "react";
import "./ColorBlock.css";

const ColorBlock = ({color}) => {
    return (
        <div className="block" style = {{background: color}}> {color} 
        </div>
    );
}

export default ColorBlock;