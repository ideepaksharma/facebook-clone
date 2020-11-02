import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Posts.css"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Posts({ profilePic, image, username, timestamp, message }) {

    return (
        <div className="posts">

            <div className="posts__top">
                <Avatar src={profilePic} className="posts__avatar" />
                <div className="posts__topInfo">
                    <h3>{username}</h3>
                    <p>
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </p>
                </div>
            </div>

            <div className="posts__bottom">
                <p>{message}</p>
            </div>

            <div className="posts__image">
                <img src={image} alt="" />
            </div>

            <div className="posts__options" >
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreIcon />
                </div>
            </div>

        </div>
    )
}

export default Posts
