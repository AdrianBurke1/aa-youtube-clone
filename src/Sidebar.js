import "./Sidebar.css";
import React from "react";
import SidebarRow from "./SidebarRow";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import PersonIcon from '@mui/icons-material/Person';


function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={PersonIcon} title=" About " />
      <hr />
      <SidebarRow Icon={WhatshotIcon}title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon}title="Subcription" />
      <SidebarRow Icon={VideoLibraryIcon}title="Library" />
      <SidebarRow Icon={HistoryIcon}title="History" />
      <SidebarRow Icon={OndemandVideoIcon}title="Your Videos" />
      <SidebarRow Icon={WatchLaterIcon}title="Watch Later" />
      <SidebarRow Icon={ThumbUpAltOutlinedIcon}title="Liked Videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon}title="Show More" />
      <hr />
    </div>
  );
}
export default Sidebar;
