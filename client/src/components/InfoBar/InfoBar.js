import React from "react";
import "./InfoBar.css";

const InfoBar = ({ room }) => {
  return (
    <div id="InfoBar">
      
        <h3 id="InfoBar-roomName">{room}</h3>
      
    
    </div>
  );
};

export default InfoBar;
