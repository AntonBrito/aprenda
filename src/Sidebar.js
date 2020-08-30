import React from 'react'
import './Sidebar.css';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import HomeIcon from '@material-ui/icons/Home';
import SidebarOption from './SidebarOption';
import PageviewIcon from '@material-ui/icons/Pageview';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PersonIcon from '@material-ui/icons/Person';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from "@material-ui/core"

function Sidebar() {
  return (
    <div className="sidebar">
      <WbIncandescentIcon />
      
      <SidebarOption Icon={HomeIcon} text="Home"/>
      <SidebarOption Icon={PageviewIcon} text="Explore"/>
      <SidebarOption Icon={NotificationsActiveIcon} text="Notifications"/>
      <SidebarOption Icon={PersonIcon} text="My Profile"/>
      <SidebarOption Icon={FolderSharedIcon} text="My Beans"/>
      <SidebarOption Icon={BookmarkBorderIcon} text="My Bookmarks"/>
      <SidebarOption Icon={MoreHorizIcon} text="More"/>

      {/*Button to Add new Bean*/}
      <Button variant="outlined" className="sidebar__aprenda">New Beans</Button>
    </div>
  )
}

export default Sidebar

