import React from "react";
import "./Input.css";

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form id="Input">
      <input
      id="Input-bar"
        type="text"
        placeholder="Type a message"
        value={message}
        onChange={event => setMessage(event.target.value)}
        onKeyPress={event =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <button onClick={event => sendMessage(event)}>Send</button>
    </form>
  );
};

export default Input;
