import React, { useState, useEffect } from "react";
import "../styles/Chat.css";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatCard from "./ChatCard";
import { Avatar } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import TelegramIcon from "@material-ui/icons/Telegram";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db from "../firebase";
import { selectchat, selectchatId} from "../features/chatSlice";
import { auth } from "../firebase";
import firebase from "firebase";
function Chat() {
  const user = useSelector(selectUser);
  const chatName = useSelector(selectchat);
  const chatId = useSelector(selectchatId);
  const signOut = () => {
    auth.signOut();
  };
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([]);
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("chat").doc(chatId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      displayName: user.displayName,
    });
    setInput("");
  };
  useEffect(() => {
    if (chatId) {
      db.collection("chat")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessage(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, [chatId]);

  return (
    <div className="chat">
      <div className="chat-header">
        <h2>{chatName}</h2>
        <div className="chat-header-icons">
          <NotificationsIcon className="chat-header-icon" />
          <Avatar src={user.photo} className="chat-header-icon" />
          <ExitToAppIcon onClick={signOut} className="chat-header-icon" />
        </div>
      </div>

      <div className="chat-content">
        {message.map(({ id, data }) => (
          <ChatCard text={data} key={id} />
        ))}
      </div>
      <div className="chat-input-container">
        <form onSubmit={sendMessage}>
          <TelegramIcon type="submit" onClick={sendMessage} className="send" />
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
