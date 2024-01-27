import { Link } from "react-router-dom";
import "./Sidebar.css";
import React from "react";
import SidebarRow from "../SidebarRow/SidebarRow";
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
       <Link to="/"> <SidebarRow selected Icon={HomeIcon} title="Home" /></Link>
      <Link to="/about"> {/* Use Link to navigate to the About page */}
        <SidebarRow Icon={PersonIcon} title=" About " />
      </Link>
      <Link to="/about"> {/* Use Link to navigate to the About page */}
        <SidebarRow Icon={WhatshotIcon} title="Trending" />
      </Link>
      <Link to="/about"> {/* Use Link to navigate to the About page */}
        <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
      </Link>
      <Link to="/about"> {/* Use Link to navigate to the About page */}
        <SidebarRow Icon={VideoLibraryIcon } title="Library" />
      </Link>
      <Link to="/about"> {/* Use Link to navigate to the About page */}
        <SidebarRow Icon={HistoryIcon} title="History" />
      </Link>
      <Link to="/about"> {/* Use Link to navigate to the About page */}
        <SidebarRow Icon={OndemandVideoIcon} title="On Demand" />
      </Link>
      <Link to="/about"> {/* Use Link to navigate to the About page */}
        <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
      </Link>
      <Link to="/about"> {/* Use Link to navigate to the About page */}
        <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos" />
      </Link>
      {/* Other SidebarRow components */}
      <hr />
    </div>
  );
}
export default Sidebar;
