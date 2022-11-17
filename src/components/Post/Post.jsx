import React from "react";
import "./Post.css";
import  Avatar  from "@mui/material/Avatar";
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import { useAuth } from "../../context/AuthContext";

const Post = ({
    
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) => {
    const {currentUser} = useAuth();
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                           {currentUser.displayName}{" "}
                            <span className="post__headerSpecial">
                                <VerifiedIcon className="post__badge"/>
                                {" "}{currentUser.email}{console.log(currentUser)}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, ut!</p>
                    </div>
                </div>
                <img src="https://media3.giphy.com/media/1dIo6kDOPMzsnMOJTj/giphy.gif" alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon fontSize="small"/>
                    <PublishIcon fontSize="small"/>
                </div>
            </div>
        </div>
    );
}

export default Post;