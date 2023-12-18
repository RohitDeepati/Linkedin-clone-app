import { Avatar } from "@mui/material";
import BackgroundCover from "../../assets/images/bg-cover.jpg";
import "./sidebar.css";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

export const Sidebar = () => {
  const user = useSelector(selectUser);
  const recentItem = (topic) => {
    return (
      <div className="sidebar-recent">
        <span className="sidebar-hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img src={BackgroundCover} alt="" />
        <Avatar src={user.photoURL} className="sibebar-avatar">
          {user.email[0]}{" "}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed you</p>
          <p className="sidebar-stat-number">2,543</p>
        </div>
        <div className="sidebar-stat">
          <p>Views on past</p>
          <p className="sidebar-stat-number">2,449</p>
        </div>
      </div>
      <div className="sidebar-button">
        <p>Recent</p>
        {recentItem("ReactJs")}
        {recentItem("Redux")}
        {recentItem("JavaScript")}
        {recentItem("BootStrap")}
        {recentItem("Tailwind")}
      </div>
    </div>
  );
};
