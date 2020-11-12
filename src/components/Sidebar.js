import React from "react";
import "../styles/Sidebar.css";
import MessageCard from "./MessageCard";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo-container">
        <img className="sidebar-logo"src="/Untitled design (7).png" alt />
        <h2>Bolt Chat</h2>
      </div>
      <div className="sidebar-header-container">
        <div className="sidebar-header-image-container">
          <img
            className="sidebar-header-image"
            src="https://yt3.ggpht.com/a-/AOh14Gjr_s6yqhsbIayak1t_j804j_dNsmnIjGLgjUTJ8Q=s108-c-k-c0x00ffffff-no-rj"
            alt
          />
        </div>
        <div className="sidebar-header-info-container">
          <h3 className="sidebar-header-info-h3">Stephen</h3>
          <p className="sidebar-header-info-p">Lead Developer</p>
        </div>
      </div>
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
     
      
      
    </div>
  );
}

export default Sidebar;
