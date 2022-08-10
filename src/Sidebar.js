import React from "react";
import "./Sidebar.css";
import { FaChevronDown } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import SidebarChannel from "./SidebarChannel";
import { Avatar } from "@material-ui/core";
import { IoMdSettings } from "react-icons/io";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Ayaan's Discord</h3>
        <FaChevronDown />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <FaChevronDown className="sidebar__headerIcon" />
            <h4>Chat Channels</h4>
          </div>

          <IoIosAdd className="sidebar__addChannel" />
        </div>

        <div className="sidebar__channelsList">
          <SidebarChannel />
        </div>
      </div>

      <div className="sidebar__profile">
        <Avatar src="http://images6.fanpop.com/image/photos/35200000/Dog-dogs-35247719-3706-2480.jpg" />
        <div className="sidebar__profileInfo">
          <h3>Ayaan Khan</h3>
          <p>#userId</p>
        </div>

        <div className="sidebar__profileIcons">
          <IoMdSettings className="IoMdSettings" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
