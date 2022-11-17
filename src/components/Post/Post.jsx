import React from "react";
import "./Post.css";
import  Avatar  from "@mui/material/Avatar";
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import { useAuth } from "../../context/AuthContext";
import {useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import { BarChartSharp, CodeOutlined, DeleteOutlined, IosShareOutlined, MoreHorizRounded, PushPinOutlined, RepeatRounded, VerifiedUser } from "@mui/icons-material";

const Post = ({
    
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) => {
    const {currentUser} = useAuth();
    const tweets = useSelector((state) => state.Stories.tweets);
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        // <div className="post">
        //     <div className="post__avatar">
        //         <Avatar src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
        //     </div>
        //     <div className="post__body">
        //         <div className="post__header">
        //             <div className="post__headerText">
        //                 <h3>
        //                    {currentUser.displayName}{" "}
        //                     <span className="post__headerSpecial">
        //                         <VerifiedIcon className="post__badge"/>
        //                         {" "}{currentUser.email}{console.log(currentUser)}
        //                     </span>
        //                 </h3>
        //             </div>
        //             <div className="post__headerDescription">
        //                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, ut!</p>
        //             </div>
        //         </div>
        //         <img src="https://media3.giphy.com/media/1dIo6kDOPMzsnMOJTj/giphy.gif" alt="" />
        //         <div className="post__footer">
        //             <ChatBubbleOutlineIcon fontSize="small"/>
        //             <RepeatIcon fontSize="small"/>
        //             <FavoriteBorderIcon fontSize="small"/>
        //             <PublishIcon fontSize="small"/>
        //         </div>
        //     </div>
        // </div>
        <div>
            {tweets.filter((t) => t.parentId === null).map((tweet) => {
                return (
                    <div className="post" key={tweet.id} >
                        <div className="post__avatar">
                            <Avatar src={tweet.avatar} />
                        </div>
                        <div className="post__body">
                            <div className="post__header">
                                <div className="post_headerText">
                                    <h3>
                                        {currentUser.displayName}{' '}
                                        <span className="post__headerSpecial">
                                            <VerifiedUser className="post__badge" />{' '}{currentUser.email}
                                        </span>
                                    </h3>
                                </div>
                                <div className="post__headerDescription">
                                    <p>{tweet.context}</p>
                                </div>
                            </div>
                            <img src={tweet.imageUrl} alt="" />
                            <div className="post__footer">
                                <ChatBubbleOutlineIcon fontSize="small" className="ChatBubbleOutlineIcon"
                                    onClick={() => navigate(`/${tweet.id}`)} />
                                <RepeatRounded fontSize="small" className="RepeatRoundedIcon" />
                                <FavoriteBorderIcon fontSize="small" className="FavoriteBorderIcon" />
                                <IosShareOutlined fontSize="small" className="IosShareOutlinedIcon" />
                            </div>
                        </div>
                        <div>
                            <MoreHorizRounded
                                className="MoreHorizRounded"
                                id="demo-positioned-button"
                                aria-controls={open ? 'demo-positioned-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            />
                            <Menu
                                id="demo-positioned-menu"
                                aria-labelledby="demo-positioned-button"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                <MenuItem onClick={handleClose} >
                                    <ListItemIcon>
                                        <DeleteOutlined className="DeleteMenu"/>
                                    </ListItemIcon>
                                    <ListItemText className="DeleteMenu">
                                        Delete
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <PushPinOutlined />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Pin to your profile
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <CodeOutlined />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Embed Tweet
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <BarChartSharp />
                                    </ListItemIcon>
                                    <ListItemText>
                                        View Tweet Analytics
                                    </ListItemText>
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Post;