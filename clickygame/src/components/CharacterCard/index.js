import React from "react";
import "./style.css"

function CharacterCard(props) {
    return (
    
        <div key={props.id} className="cupheadChara" onClick={() => props.userClicks(props.id)}>
          <img alt={props.name} src={props.image} />
          {/* onClick={() => props.shuffleImages(props.id)} className="shuffleImages" */}
        </div>
    
    );
}

export default CharacterCard;

///card div around img-container div to create card around each image. 