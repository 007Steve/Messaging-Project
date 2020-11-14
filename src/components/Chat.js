import React, { useState } from "react";
import "../styles/Chat.css";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatCard from "./ChatCard";
import { Avatar } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import TelegramIcon from "@material-ui/icons/Telegram";
import { useSelector} from "react-redux";
import { selectUser} from "../features/userSlice";
import { auth } from "../firebase";
function Chat() {
  const user = useSelector(selectUser);
  const signOut = () => {
    auth.signOut()
  }
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    setInput("")
  };
  return (
    <div className="chat">
      <div className="chat-header">
        <h2>Header</h2>
        <div className="chat-header-icons">
          <NotificationsIcon className="chat-header-icon" />
          <Avatar
            src={user.photo}
            className="chat-header-icon"
          />
          <ExitToAppIcon onClick={signOut} className="chat-header-icon" />
        </div>
      </div>

      <div className="chat-content">
        <ChatCard text={input} />
        <ChatCard />
        <ChatCard />
      </div>
      <div className="chat-input-container">
        <form>
          <TelegramIcon onClick={sendMessage} />
          <input
            type="text"
            placeholder="Type Here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <AttachFileIcon />
        </form>
      </div>
    </div>
  );
}

export default Chat;
