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
              <li><img src={require("./assets/home.svg")} alt="Home" />Home</li>
              <li><img src={require("./assets/notification.svg")} alt="Home" />Notifications</li>
              <li><img src={require("./assets/message.svg")} alt="Home" />Messages</li>
            </ul>
          </nav>
          <img src={require("./assets/logo.svg")} alt="Home" />

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
