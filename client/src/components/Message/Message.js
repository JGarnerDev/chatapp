import React from "react";
import ReactEmoji from 'react-emoji'
import "./Message.css";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <div>
      <p>{trimmedName}</p>
      <div>
        <p>{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div>
    <p>{user}</p>
    <div>
      <p>{ReactEmoji.emojify(text)}</p>
    </div>
  </div>
  );
};

export default Message;
