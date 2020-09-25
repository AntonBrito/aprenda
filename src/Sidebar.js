import React from 'react'
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import SidebarOption from './SidebarOption';
import PersonIcon from '@material-ui/icons/Person';
import FolderSharedIcon from '@material-ui/icons/FolderShared';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarOption Icon={HomeIcon} text="Home"/>
      <SidebarOption Icon={PersonIcon} text="My Profile"/>
      <SidebarOption Icon={FolderSharedIcon} text="My Beans"/>
    </div>
  )
}

export default Sidebar

