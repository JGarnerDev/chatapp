  
import React from 'react';


import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div>
              <h2>
                {users.map(({name}) => (
                  <div key={name} >
                    {name}
                    <img alt="Online Icon" src=''/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;