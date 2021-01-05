import React from "react";
import "../styles/MessageCard.css";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setChat } from "../features/chatSlice";
function MessageCard({ image, texts, time, notification, name, id }) {
  const dispatch = useDispatch();
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 300 }}
      dragElastic={0.2}
      onClick={() => {
        dispatch(
          setChat({
            chatId: id,
            name: name,
          })
        );
      }}
      className="messageCard"
    >
      <img className="messageCard-image" src={image} alt="logo" />

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
