import React from "react";
import "./ChatHeader.css";
import { IoMdNotifications } from 'react-icons/io';
import { GrSearch } from 'react-icons/gr';

function ChatHeader() {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          Test Channel Name
        </h3>
      </div>

      <div className="chatHeader__right">
      <IoMdNotifications className="chatHeader__notification" />
        <div className="chatHeader__search">

            <input placeholder="Search" />
            <GrSearch className="chatHeader__iconSearch" />
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;
