import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div id="Join">
      <h1 id="Join-header">A real-time chat app using socket.io</h1>
      <p id="Join-intructions">
        Create a room by entering any name below!
        <br />
        <br />
        Join a room by entering its name!
      </p>
      <input
        className="Join-input"
        placeholder="Username"
        type="text"
        onChange={event => setName(event.target.value)}
      ></input>
      <input
        className="Join-input"
        placeholder="Room"
        type="text"
        onChange={event => setRoom(event.target.value)}
      ></input>
      <Link id="Join-link"
        onClick={event => (!name || !room ? event.preventDefault() : null)}
        to={`/chat?name=${name}&room=${room}`}
      >
        <button id="Join-button"  type="submit">Sign In</button>
      </Link>
    </div>
  );
};

export default Join;
