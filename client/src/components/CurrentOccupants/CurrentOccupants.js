import React from "react";

import "./CurrentOccupants.css";

const CurrentOccupants = ({ users }) => (
  <div id="CurrentOccupants">
    {users ? (
      <div id="CurrentOccupants-container">
        <a id="CurrentOccupants-closeRoom" href="/">
          <h3 >Close Room</h3>
        </a>
        <h1 id="CurrentOccupants-header">Currently chatting</h1>
        <div>
          <h2>
            {users.map(({ name }) => (
              <div className="CurrentOccupants-username" key={name}>
                {name}
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default CurrentOccupants;
