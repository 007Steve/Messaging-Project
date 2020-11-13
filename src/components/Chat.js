import React from "react";
import "../styles/Chat.css";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatCard from "./ChatCard";
import { Avatar } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import TelegramIcon from "@material-ui/icons/Telegram";
function Chat() {
  return (
    <div className="chat">
      <div className="chat-header">
        <h2>Header</h2>
        <div className="chat-header-icons">
          <NotificationsIcon className="chat-header-icon" />
          <Avatar
            src="https://yt3.ggpht.com/a-/AOh14Gjr_s6yqhsbIayak1t_j804j_dNsmnIjGLgjUTJ8Q=s108-c-k-c0x00ffffff-no-rj"
            className="chat-header-icon"
          />
          <ExitToAppIcon className="chat-header-icon" />
        </div>
      </div>

      <div className="chat-content">
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
      </div>
      <div className="chat-input-container">
        <TelegramIcon />
        <input placeholder="Type Here" />
        <AttachFileIcon />
      </div>
    </div>
  );
}

export default Chat;
