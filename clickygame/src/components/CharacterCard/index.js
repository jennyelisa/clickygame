import React from "react";
import "./style.css"

function CharacterCard(props) {
    return (
        <div className="card" onClick={() => props.clickCount(props.id)}>
        <div className="img-container">
          <img alt={props.name} src={props.image} />
          onClick={() => props.shuffleImages(props.id)} className="shuffleImages"
        </div>
      </div>
    );
}

export default CharacterCard;

