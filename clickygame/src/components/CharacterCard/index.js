import React from "react";
import "./style.css"

function CharacterCard(props) {
    return (
    
        <div key={props.id} className="card col-md-3 cupheadChara" onClick={() => props.userClicks(props.id)}>
          
          <img alt={props.name} src={props.image} width="175px" height="175px" />
          {/* onClick={() => props.shuffleImages(props.id)} className="shuffleImages" */}
          
        </div>
    
    );
}

export default CharacterCard;

///card div around img-container div to create card around each image. 