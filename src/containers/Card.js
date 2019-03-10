import React from "react";
import ColorBlock from "../components/ColorBlock"
import "./Card.css"

const Card = ( card ) => {
    const { name, height, mass, gender, hair_color, skin_color, eye_color} = card.data;
    return (
        <div className="card">
            <div className = "line">Name: <p>{name}</p></div>
            <div className = "line">Height: <p>{height} cm</p></div>
            <div className = "line">Mass: <p>{mass} kg</p></div>
            <div className = "line">Gender: <p>{gender}</p></div>
            <div className = "line">Hair color: <ColorBlock color = {hair_color} /></div>
            <div className = "line">Skin color: <ColorBlock color = {skin_color} /></div>
            <div className = "line">Eye color: <ColorBlock color = {eye_color} /></div>   
        </div>
    );
}

export default Card;