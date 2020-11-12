import React from "react";
import "../styles/MessageCard.css";
import { motion } from "framer-motion";
function MessageCard() {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 300 }}
      dragElastic={0.2}
      className="messageCard"
    >
      <div className="messageCard-image-container">
        <img
          className="messageCard-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAnkVD95W4n3EcRVI6dsAPjDix0nJSWs5xdw&usqp=CAU"
          alt
        />
      </div>

      <div className="messageCard-info-container">
        <h4 className="messageCard-h4">Name</h4>
        <p className="messageCard-content">Text content goes here whats up!</p>
      </div>
      <div className="messageCard-notificaton-container">
        <div className="messageCard-notificaton">
          <span>1</span>
        </div>
        <p className="messageCard-time">2M</p>
      </div>
    </motion.div>
  );
}

export default MessageCard;
