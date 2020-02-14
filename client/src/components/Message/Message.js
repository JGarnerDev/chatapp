import React from "react";
import ReactEmoji from "react-emoji";
import "./Message.css";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <div className="message">
      <p className="message-username">{trimmedName + ": "}</p>
        <p className="message-text">{ReactEmoji.emojify(text)}</p>   
    </div>
  ) : (
    <div className="message-otheruser">
    <p className="message-otheruser-text">{ReactEmoji.emojify(text)}</p>
      <p className="message-otheruser-username">{": " + user}</p>
    </div>
  );
};

export default Message;
