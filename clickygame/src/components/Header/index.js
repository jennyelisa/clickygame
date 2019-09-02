import React from "react";
import "./style.css";

const Header = props => (
    <div id="header" className="bg-sucess text-light">
        <h2>CupHead</h2>
        <label>Score: {props.clickedImg}</label>
        <label>High Score: {props.highScore}</label>
        <label>Wins: {props.wins}</label>
        <label>Losses: {props.losses}</label>
    </div>
);

export default Header;