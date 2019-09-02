import React from "react";
import "./style.css";

const Header = props => (
    <div id="header" className="gameHeader">
        <h1>CupHead</h1>
        <div className="stats">
        <label>Score: {props.score}</label>
        <label>Wins: {props.wins}</label>
        <label>Losses: {props.losses}</label>
         <label>High Score: {props.highScore}</label>
        </div>
    </div>
);

export default Header;