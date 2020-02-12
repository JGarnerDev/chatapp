import React from "react";
import "./InfoBar.css";

const InfoBar = ({ room }) => {
  return (
    <div>
      <div>
        <img src="" alt="online image" />
        <h3>{room}</h3>
      </div>
      <div>
        <a href="/">
          <img src="" alt="close image" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
