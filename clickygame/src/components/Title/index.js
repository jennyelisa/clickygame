import React from "react";
import "./style.css";

function Title(props) {
    return <h1 className="title">{props.children}<p>Try not to click the same picture twice!</p></h1>;
    
}

export default Title;

