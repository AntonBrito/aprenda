import React from 'react'
import './Sidebar.css';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import HomeIcon from '@material-ui/icons/Home';
import SidebarOption from './SidebarOption';
import AddIcon from '@material-ui/icons/Add';
import PageviewIcon from '@material-ui/icons/Pageview';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PersonIcon from '@material-ui/icons/Person';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
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
      <SidebarOption Icon={AddIcon} text="New Beans"/>

      {/*Button to Add new Been*/}
      <Button>Beens</Button>
    </div>
  )
}

export default Sidebar

