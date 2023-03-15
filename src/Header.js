import React from "react"
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Header() {
    return(
        <div className="header">
            <div className="header_left">
            <MenuIcon className="header_menuIcon"/>
            <img
            className="header_logo"
             src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052" alt=""> 
             </img>
            </div>
             
             <div className="header_input">
             <input placeholder="Search" type="text" />
             <SearchIcon className="header_inputButton" />
             </div>
             
             <div className="header_icons">
             <VideoCallIcon className="header_icon"/>
             <NotificationsIcon className="header_icon" />
             <AccountCircleIcon
             alt="Adrian Burke"
             src="https://github.com/account"/>
             </div>
             
        </div>
            
    
    )
}
export default Header;