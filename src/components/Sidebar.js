import React, { useState, useEffect } from "react";
import "../styles/Sidebar.css";
import MessageCard from "./MessageCard";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import db from "../firebase";
function Sidebar() {
  const [chat, setChat] = useState([]);
  const [chatinfo, setChatInfo] = useState([]);
  const addchat = () => {
    const name = prompt("please enter a name");
    if (name) {
      db.collection("chat").add({
        name: name,
      });
    }
  };
  useEffect(() => {
    db.collection("chat")
      .doc()
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setChatInfo(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );

    db.collection("chat").onSnapshot((snapshot) =>
      setChat(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar-logo-container">
        <img className="sidebar-logo" src="/Untitled design (7).png" alt="logo" />
        <h2>Bolt Chat </h2>
      </div>
      <div className="sidebar-container">
        {chat.map(({ id, data: { name } }) => (
          <MessageCard
            image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcNCAgICAgHBwgHBw0HBwcHBw8ICQcNFREWFhURExMYHSggGBoxGxMfITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NFQ0NDysZFRkrLS0rLTc3KysrNy0rLS0rKystKysrKysrKysrKysrKysrKysrKysrKy0rLSstKy0tK//AABEIALwBDAMBIgACEQEDEQH/xAAbAAEBAQEBAQEBAAAAAAAAAAAAAQQDAgcGBf/EABcQAQEBAQAAAAAAAAAAAAAAAAACASH/xAAZAQEBAQEBAQAAAAAAAAAAAAADAgQGBQH/xAAYEQEBAQEBAAAAAAAAAAAAAAABAAIxEf/aAAwDAQACEQMRAD8A/iiKRLshgCErGoA0kGKioSsYqKhJBioo0rGAISQYqKhKxgCErGLOoDSu7xTRFMcU7xQ0j1m2RTRFMUU0RQ0s282yKaIpiimiKGlm1m2xTvFMcU7xQ0s+s2yddZ1linadQln0WqddZ1mnXWdQwaLTOvbhOuuamFL5AqDuUvSGoA0kGoioSsYqA0kGoCEkGpgISsagISsYANJBqIqErGAISsZjrFOSzo0q7a4poimKKd4oaQazbYpoimKKaIoaWbebbFO8UxxTvFDSz6zbIp3nWSKd4oaWbWbVOusazTrtOoSz6LTOumazzrrmoSFL5OqDuktg1AQlYxUBpINQEJINRFGlYxUVCSDFRUJWMAQlYxUUaSDAEJWMAQlY3uNd4pldYoaXzRbIpoimKKaIoaWfWbZFNEUxRTRFDSz7zbIpoimOKd4oaWbebZFO06yRTvGjSzaLTOuuazTrrlIYEvl4Du0lGoijSQYANKxqIqEkGYqKhJBgA0rGoCEkGoCErGKghKxqANJBgCErGLmoDSq7xTvFMc60RSEo1m2RTRFMUU0RQks+s2yKaIpiimiKQlm3m2xTvFMUU0RQ0s2s2uddM1ninXNGln0XzYB3iUDURRpIMAGkgxUBpWNQEJINQwQkgxUVCVjFRRpIMAQlY1AQlYwAaSDBRCVjHSKczNGlXbXFO8UxxTvFDSDWbbFNEUxRTRFDSz7zbYp3imKKaIoaWbebZFO2VxlinXNQlm0Xz8B3aWUYqA0rGoA0kGAISQagDSQYqKhKxgCEkGqoISsaqgNJBighKxgCErGoA0rGAISQrOu8UzvcUNL5o9tsU0RTFFNEUNIN5tkU0RTFFNEUNLNvNtinbK4yRTtNcGlm1m/EoqO8S8wYANJBqIo0kGADSsYqKhJBioDSQagIaxqAhJBioqErGoijSQYAhKxighKxgA0kGGaCEqLtFO8UxzrvFDSjRbYpoimKKaIoaWfebZFO+VxjinfK4NLNrN+TAd4l4g0FQaVjFRRpIMAGkgwAaSDUBCVjUAaSDFRUJWMAQkg1V5UaVjUBCSDFRUJWMAQlYwAaVjHuKeDEJVa4p3imOKd4oSRazbYp3yuMcU7ZXEJZtZvz6KO8S5saIoNJBoANKxqIo0kGADSQagDSQYqCErGoA0kGoCEkGKioSsYqKNKxgCEkGoCErGAISsYANKxrOu8UzvcUNL6nttinfK4xxTtNcGln1m/kgO9S5IaCoNJBiKgkkGKgNJBqANKxioqEkGADSQaiKhJBioDSsaqioSQYqCErGoA0rGKioSQYAhKxgCErGKgNKy6xTvlcZM12yuDSnRZEUd6lxQ0AEkg0AGlY0UBpINFAaSDABpINRFGlYxUEJINQBpINQEJWNQEJINRFQlY1QVCVjABpIMAQlYwUQlY0espEGlV4RUd6lwoxFQSSDEUGkg0AGkgwAaVjABpIMVFGkgwAbINQEJWNRFGyEVFQlZFQQyFVQQ1jUAbIQBDWRUVCVkAQ1l//2Q=="
            texts={chatinfo[0]?.message}
            time="Now"
            notification="2"
            name={name}
            key={id}
            id={id}
          />
        ))}
      </div>
      <AddCircleIcon onClick={addchat} className="sidebar-add-chat" />
    </div>
  );
}

export default Sidebar;
