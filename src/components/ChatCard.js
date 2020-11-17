import React from "react";
import "../styles/ChatCard.css";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import { Avatar } from "@material-ui/core";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
function ChatCard({
  text: { message, uid, photo, email, displayName, timestamp },
  time,
  id,
}) {
  const user = useSelector(selectUser);
  return (
    <div className={`chatCard ${user.email == email && "message-sender"} `}>
      <Avatar className="chatCard-image" src={photo} />
      <div className="chatCard-info-container">
        <p className="chatCard-texts">{message}</p>
        <p className="chatCard-time">
          <DoneAllIcon />
          {new Date(timestamp?.toDate()).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default ChatCard;
