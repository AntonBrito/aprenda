import React from 'react';
import './Post.css';
import { Avatar } from "@material-ui/core";
import  VerifiedUserIcon from "@material-ui/icons/VerifiedUser"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post(
  displayName,
  username,
  verified,
  text,
  image, 
  avatar
) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Anton Brito {""}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" />
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Today I learned </p>
          </div>
        </div>
        <img src="https://media.giphy.com/media/XR9Dp54ZC4dji/giphy.gif" 
        alt=""
         />
         <div className="post__footer">
           <ChatBubbleOutlineIcon fontSize="small" />
           <RepeatIcon fontSIze="small" />
           <FavoriteBorderIcon fontSize="small" />
           <PublishIcon fontSize="small" />
         </div>

      </div>
    </div>
  )
}

export default Post
