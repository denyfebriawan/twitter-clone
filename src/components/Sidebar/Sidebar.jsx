
import React, { useState } from "react";
import "./Sidebar.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Messages from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Profile from '@mui/icons-material/PermIdentity';
import Button from '@mui/material/Button';
import { useAuth } from "../../context/AuthContext";
import {useNavigate} from 'react-router-dom';

const Sidebar =  () => {
  
    const navigate = useNavigate();
    const {logout} = useAuth();
    const [errMsg, setErrMsg] = useState("");

    const handleLogout = async (e) => {
        e.preventDefault();
        
        try {
          setErrMsg("");
        
          await logout();
          navigate('/login')
        } catch (err) {
          if (!err?.response) {
            setErrMsg("No Server Response");
          }  else {
            setErrMsg("Logout Failed");
          }
          
        }
      };
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon"/>
            <SidebarOption active Icon={HomeIcon} text={"Home"}/>
            <SidebarOption Icon={SearchIcon} text={"Explore"}/>
            <SidebarOption Icon={NotificationsNoneIcon} text={"Notifications"}/>
            <SidebarOption Icon={Messages} text={"Messages"}/>
            <SidebarOption Icon={BookmarkBorderIcon} text={"Bookmarks"}/>
            <SidebarOption Icon={ListAltIcon} text={"List"}/>
            <SidebarOption Icon={Profile} text={"Profile"}/>
            <Button variant="outlined" className='sidebar__tweet' fullWidth>Tweet</Button>
            <Button variant="outlined" className='sidebar__tweet' onClick={handleLogout}>Log Out</Button>
        </div>
    );
}

export default Sidebar;