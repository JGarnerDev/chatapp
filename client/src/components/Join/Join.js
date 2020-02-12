import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div>
      <div>
        <h1>Join</h1>
        <div>
          <input
            placeholder="Name"
            type="text"
            onChange={event => setName(event.target.value)}
          ></input>
        </div>
        <div>
          <input
            placeholder="Room"
            type="text"
            onChange={event => setRoom(event.target.value)}
          ></input>
        </div>
        <Link
          onClick={event => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
