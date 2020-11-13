import React from "react";
import "../styles/MessageCard.css";
import { motion } from "framer-motion";
function MessageCard({ image, texts, time, notification, name }) {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 300 }}
      dragElastic={0.2}
      className="messageCard"
    >
      <img className="messageCard-image" src={image} alt />

      <div className="messageCard-info-container">
        <h4 className="messageCard-h4">{name}</h4>
        <p className="messageCard-content">{texts}</p>
      </div>
      <div className="messageCard-notificaton-container">
        <div className="messageCard-notificaton">
          <span>{notification}</span>
        </div>
        <p className="messageCard-time">{time}</p>
      </div>
    </motion.div>
  );
}

export default MessageCard;
