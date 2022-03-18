import { EmojiFlags } from '@material-ui/icons';
import React from 'react';
import SidebarRow from './SidebarRow';
import  LocalHospitalIcon  from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from '@material-ui/icons';
import { useContext } from 'react';
import { StateContext } from './StateProvider';

function Sidebar() {
  const {user} = useContext(StateContext);

  return <div className='sidebar' >
      <SidebarRow title={user.displayName} />
      <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 information center" />
      <SidebarRow Icon={EmojiFlags} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends"/>
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />

      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
  </div>;
}

export default Sidebar;
