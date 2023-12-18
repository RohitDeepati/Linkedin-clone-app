import React, { useState } from "react";
import { useDispatch } from "react-redux";
import linkedin from "../../assets/images/linkedin.png";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCentralIcon from "@mui/icons-material/BusinessCenter";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./header.css";
import { HeaderOptions } from "./HeaderOptions";
import { logout } from "../../features/userSlice";
import { auth } from "../FireBase/Firebase";

export const Header = () => {
  const dispatch = useDispatch();

  const [dropDownVisible, setDropDownVisible] = useState(false);

  const logOutAppHandler = () => {
    dispatch(logout());
    auth.signOut();
  };

  const toggleDropDown = () => {
    setDropDownVisible(!dropDownVisible);
  };
  return (
    <div className="header">
      {/* header left */}
      <div className="header-left">
        <img className="" src={linkedin} alt="" />

        {/* search section */}

        <div className="header-search">
          <SearchIcon />
          <input placeholder="Search" className="" type="text" />
        </div>
      </div>

      <div className="header-right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={GroupIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCentralIcon} title="Jobs" />
        <HeaderOptions Icon={TextsmsIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        <div
          className={`header-option ${
            dropDownVisible && "header-option--active"
          }`}
          onClick={toggleDropDown}
        >
          <HeaderOptions avatar={true} title="Me" />
          {dropDownVisible && (
            <div className="header-dropdown">
              <p className="logout" onClick={logOutAppHandler}>Logout</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
