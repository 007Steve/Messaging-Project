import React from "react";
import "../styles/HomePage.css";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
function HomePage() {
  return (
    <div className="homePage">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default HomePage;
