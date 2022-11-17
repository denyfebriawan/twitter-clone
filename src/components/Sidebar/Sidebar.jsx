
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import './Sidebar.css';
import "./SidebarOption.css"
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';


const Sidebar = () => {
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
            <div className='sidebarOption'>
                <TwitterIcon className='sidebar__twitterIcon'/>
            </div>
            <div className='sidebarOption' onClick={()=>{navigate("/");}}>
                <HomeIcon className='sidebar__twitterIcon' />
                <h2>Home</h2>
            </div>
            <div className='sidebarOption'>
                <SearchIcon className='sidebar__twitterIcon'/>
                <h2>Explore</h2>
            </div>
            <div className='sidebarOption'>
                <NotificationsNoneIcon className='sidebar__twitterIcon'/>
                <h2>Notifications</h2>
            </div>
            <div className='sidebarOption'>
                <MailOutlineIcon className='sidebar__twitterIcon'/>
                <h2>Messages</h2>
            </div>
            <div className='sidebarOption'>
                <BookmarkBorderIcon className='sidebar__twitterIcon'/>
                <h2>Bookmarks</h2>
            </div>
            <div className='sidebarOption'>
                <ListAltIcon className='sidebar__twitterIcon'/>
                <h2>Lists</h2>
            </div>
            <div className='sidebarOption'>
                <PermIdentityIcon className='sidebar__twitterIcon'/>
                <h2>Profile</h2>
            </div>
            <div className='sidebarOption'>
                <MoreHorizIcon className='sidebar__twitterIcon'/>
                <h2>More</h2>
            </div>
            

            <Button variant="outlined" className="sidebarTweet" fullWidth>
                Tweet</Button>

                <Button variant="outlined" className="sidebarLogout" onClick={handleLogout}>
                Log Out</Button>
        </div >
    )
};

export default Sidebar;