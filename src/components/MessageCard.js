import React from "react";
import "../styles/MessageCard.css";
function MessageCard() {
  return (
    <div className="messageCard">
      <img className="messageCard-image" src="" alt />
      <div className="messageCard-info-container">
        <h4 className="messageCard-h4">Name</h4>
        <p className="messageCard-content">Text content goes here whats up!</p>
      </div>
      <div className="messageCard-notificaton-container">
        <p className="messageCard-time">2M</p>
      </div>
    </div>
  );
}

export default MessageCard;
