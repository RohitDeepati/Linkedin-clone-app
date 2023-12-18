import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

import "./headerOptions.css";
import { Avatar } from "@mui/material";

export const HeaderOptions = ({ Icon, title, avatar, onClick }) => {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="header-Option">
      {Icon && <Icon className="header-icon" />}
      {avatar && (
        <Avatar className="header-icon" src={user?.photoURL}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="header-title">{title}</h3>
    </div>
  );
};
