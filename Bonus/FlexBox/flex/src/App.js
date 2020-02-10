import React from 'react';
import './App.css';
import { FaUserCircle, FaTwitter } from 'react-icons/fa'
import { IoIosNotificationsOutline, IoIosPerson } from 'react-icons/io'
import { TiHomeOutline } from 'react-icons/ti'
import { AiOutlineMail } from 'react-icons/ai'

function App() {
  return (
    <body>
      <header id="main-header">
        <div className="content">
          <nav>
            <ul>
              <li><TiHomeOutline color="#000" />Home</li>
              <li><IoIosNotificationsOutline color="#000" />Notifications</li>
              <li><AiOutlineMail color="#000" />Messages</li>
            </ul>
          </nav>
          <FaTwitter color="#3bb9e3"></FaTwitter>
          <div className="side">
            <i class="fa fa-youtube icon"></i>
            <input type="text" placeholder="Search on Twitter" />
            <IoIosPerson />
            <button>Tweet</button>
          </div>
        </div>
      </header>
    </body >
  );
}

export default App;
