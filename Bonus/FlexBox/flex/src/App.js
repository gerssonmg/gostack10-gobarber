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
            <input type="text" placeholder="Search on Twitter" background={require("./assets/avatar.png")} />
            <img src={require("./assets/avatar.png")} alt="Avatar" />
            <button>Tweet</button>
          </div>
        </div>
      </header>
      <div className="banner">
        <h1>Twitter Rocketseat</h1>
      </div>
      <div className="bar">
        <div className="content">
          <ul>
            <li>
              <span>Tweets</span>
              <strong>1234</strong>
            </li>
            <li>
              <span>Followings</span>
              <strong>645</strong>
            </li>
            <li>
              <span>Followers</span>
              <strong>84</strong>
            </li>
            <li>
              <span>Favorites</span>
              <strong>98</strong>
            </li>
          </ul>
          <div className="actions">
            <button>Follow</button>
            <img src={require("./assets/more.svg")} alt="More" />
          </div>
        </div>
        <div />
      </div>
    </body >
  );
}

export default App;
