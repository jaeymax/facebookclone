import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import NearMeIcon from "@material-ui/icons/NearMe";
import {ExpandMoreOutlined} from "@material-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import  ChatBubbleOutlineIcon  from '@material-ui/icons/ChatBubbleOutline';

function Post({profilePic, image , username, timestamp, message}) {
  return <div className='post' >
    <div className='post_top' >
      <Avatar src={profilePic} className='post__avatar' />
      <div className='post__topInfo' >
        <h3>{username}</h3>
      <p>Timestamp</p>
      </div>
    </div>
      
      <div className='post__bottom' >
          <p>{message}</p>
      </div>
    <div className='post__image' >
      <img src={image}  />
    </div>
    <div className='post__options' >
        <div className='post__option' >
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className='post__option' >
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className='post__option' >
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className='post__option' >
          <AccountCircleIcon />
          <ExpandMoreOutlined />
          <p>Like</p>
        </div>
    </div>
  </div>;
}

export default Post;
