import React from 'react';
import './Sidebar.css';
import SidebarChat from './SidebarChat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

const Sidebar = () => {
 return (
 <div className="sidebar">
 <div className="sidebar__header">
    <Avatar src="2.jpg"/>
    <div className='sidebar_headerRight'>
        <Button>
            <DonutLargeIcon/>
        </Button>
        <Button>
            <ChatIcon/>
        </Button>
        <Button>
            <MoreVertIcon/>
        </Button>
    </div>
 </div>
 <div className="sidebar__search">
    <div className='sidebar_searchContainer'>
        <SearchIcon/>
        <input placeholder='Search or start new chat'
         type= "text"/>
    </div>
 </div>
 <div className="sidebar__chats">
    <SidebarChat/>
    <SidebarChat/>
    <SidebarChat/>
 </div>
 </div>
 )
};
export default Sidebar;
