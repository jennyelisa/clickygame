import React from "react";
import "./style.css"

function CharacterCard(props) {
    return (
        <div className="card" onClick={() => props.clickCount(props.id)}>
        <div className="img-container">
          <img alt={props.name} src={props.image} />
          onClick={() => props.shuffleImgs(props.id)} className="shuffleScore"
        </div>
      </div>
    );

    //   {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
    //     𝘅
    //   </span> */}
    // </div>
    // );
}

export default CharacterCard;

