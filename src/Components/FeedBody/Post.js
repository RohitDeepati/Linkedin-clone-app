import React, { forwardRef } from "react";
import { InputOptions } from "../Input/InputOptions";
import "./post.css";
import { Avatar } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

export const Post = forwardRef(
  ({ name, description, photoURL, message }, ref) => {
    return (
      <div ref={ref} className="post ">
        <div className="post-header">
          <Avatar src={photoURL}>{name[0]}</Avatar>
          <div className="post-info">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>

        <div className="post-body">
          <p>{message} </p>
        </div>
        <div className="post-buttons">
          <InputOptions Icon={ThumbUpIcon} title="Like" color="gray" />
          <InputOptions Icon={CommentIcon} title="Comment" color="gray" />
          <InputOptions Icon={ShareIcon} title="Share" color="gray" />
          <InputOptions Icon={SendIcon} title="Send" color="gray" />
        </div>
      </div>
    );
  }
);
