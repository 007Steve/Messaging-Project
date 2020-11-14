import React from "react";
import "../styles/ChatCard.css";
import DoneAllIcon from '@material-ui/icons/DoneAll';
function ChatCard({text}) {
  return (
    <div className="chatCard">
      <img className="chatCard-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ45k6WphptPmvKz5P6E7sEhMKjESUMcRlP-g&usqp=CAU" alt="" />
      <div className="chatCard-info-container">
  <p className="chatCard-texts">{text}</p>
        <p className="chatCard-time"><DoneAllIcon/> 1:23</p>
      </div>
    </div>
  );
}

export default ChatCard;
