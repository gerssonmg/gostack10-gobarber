import React from 'react';
import './App.css';

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
        <img className="img-banner" src={require("./assets/keepcode.png")} alt="Diego Fernandes" />
        {/*<h1>Twitter da Rocketseat</h1>*/}
      </div>
      <div className="bar">
        <div className="content">
          <ul>
            <li className="active">
              <span>Tweets</span>
              <strong className="active">1234</strong>
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
      <div className="wrapper-content content">
        <aside className="profile">
          <img className="avatar" src={require("./assets/avatar.png")} alt="Diego Fernandes" />
          <h1>Diego Fernandes</h1>
          <span>@Exibit</span>
          <p>Web, Design & Rock 'n roll Partner/UI Designer
            @spade_be Musican in @dashboxmusic
          </p>
          <ul className="list">
            <li><img src={require("./assets/place.svg")} alt="Place" />Namur, Belgium</li>
            <li><img src={require("./assets/url.svg")} alt="URL" />exibit.be</li>
            <li><img src={require("./assets/joined.svg")} alt="Joined" />Joined June 2007</li>
            <li><img src={require("./assets/born.svg")} alt="Born" />Born the 20th of June 1978</li>
          </ul>

          <div className="widget followers">
            <strong><img src={require("./assets/followers.svg")} alt="Followers" /> 73 followers that you know</strong>
            <ul>
              <li><img className="followperson" src={require("./assets/rocketseat.png")} alt="Diego Fernandes" /></li>
              <li><img className="followperson" src={require("./assets/boneca.png")} alt="Diego Fernandes" /></li>
              <li><img className="followperson" src={require("./assets/wolf.png")} alt="Diego Fernandes" /></li>
              <li><img className="followperson" src={require("./assets/bobesponja.png")} alt="Diego Fernandes" /></li>
              <li><img className="followperson" src={require("./assets/pikachu.png")} alt="Diego Fernandes" /></li>
              <li><img className="followperson" src={require("./assets/dog.png")} alt="Diego Fernandes" /></li>
              <li><img className="followperson" src={require("./assets/earth.png")} alt="Diego Fernandes" /></li>
              <li><img className="followperson" src={require("./assets/airbnb.png")} alt="Diego Fernandes" /></li>
              <li><img className="followperson" src={require("./assets/kakashi.png")} alt="Diego Fernandes" /></li>
              <li><img className="followperson" src={require("./assets/med.png")} alt="Diego Fernandes" /></li>
            </ul>
          </div>

          <div className="widget images">
            <strong><img src={require("./assets/images.svg")} alt="Images" /> 266 Photos and videos</strong>

            <ul>
              <li><img className="followimages" src={require("./assets/anonnymous.png")} alt="Diego Fernandes" /></li>
              <li><img className="followimages" src={require("./assets/bart.png")} alt="Diego Fernandes" /></li>
              <li><img className="followimages" src={require("./assets/woman.png")} alt="Diego Fernandes" /></li>
              <li><img className="followimages" src={require("./assets/boy.png")} alt="Diego Fernandes" /></li>
              <li><img className="followimages" src={require("./assets/langeri.png")} alt="Diego Fernandes" /></li>
              <li><img className="followimages" src={require("./assets/leon.png")} alt="Diego Fernandes" /></li>
            </ul>
          </div>
        </aside>
        <section className="timeline">
          timeline
        </section>
        <aside className="widgets">
          <div className="widget follow">
            <div className="title">
              <strong>Who to follow</strong>
              <a href="https://twitter.com">Refresh</a>
              <a href="https://twitter.com">View All</a>
            </div>

            <ul>
              <li>
                <div className="profile">
                  <img src={require("./assets/avatar.png")} alt="Place" />
                  <div className="info">
                    <strong>Spade <span>@spade_be</span></strong>
                    <button>Follow</button>
                  </div>
                </div>
                <a href="">X</a>
              </li>

              <li>
                <div className="profile">
                  <img src={require("./assets/avatar.png")} alt="Place" />
                  <div className="info">
                    <strong>Spade <span>@spade_be</span></strong>
                    <button>Follow</button>
                  </div>
                </div>
                <a href="">X</a>
              </li>

              <li>
                <div className="profile">
                  <img src={require("./assets/avatar.png")} alt="Place" />
                  <div className="info">
                    <strong>Spade <span>@spade_be</span></strong>
                    <button>Follow</button>
                  </div>
                </div>
                <a href="">X</a>
              </li>


              <li>
                <div className="profile">
                  <img src={require("./assets/avatar.png")} alt="Place" />
                  <div className="info">
                    <strong>Spade <span>@spade_be</span></strong>
                    <button>Follow</button>
                  </div>
                </div>
                <a href="">X</a>
              </li>

            </ul>
          </div>

          <div className="widget follow">
            <div className="title">
              <strong>Here in following</strong>
              <a href="https://twitter.com">Who</a>
              <a href="https://twitter.com">When</a>
            </div>

            <ul>
              <li>
                <div className="profile">
                  <img src={require("./assets/avatar.png")} alt="Place" />
                  <div className="info">
                    <strong>Spade <span>@spade_be</span></strong>
                    <button>Follow</button>
                  </div>
                </div>
                <a href="">X</a>
              </li>

              <li>
                <div className="profile">
                  <img src={require("./assets/avatar.png")} alt="Place" />
                  <div className="info">
                    <strong>Spade <span>@spade_be</span></strong>
                    <button>Follow</button>
                  </div>
                </div>
                <a href="">X</a>
              </li>

              <li>
                <div className="profile">
                  <img src={require("./assets/avatar.png")} alt="Place" />
                  <div className="info">
                    <strong>Spade <span>@spade_be</span></strong>
                    <button>Follow</button>
                  </div>
                </div>
                <a href="">X</a>
              </li>


              <li>
                <div className="profile">
                  <img src={require("./assets/avatar.png")} alt="Place" />
                  <div className="info">
                    <strong>Spade <span>@spade_be</span></strong>
                    <button>Follow</button>
                  </div>
                </div>
                <a href="">X</a>
              </li>

            </ul>
          </div>

          <div className="widget follow">
            <div className="title">
              <strong>Your to stars</strong>
              <a href="https://twitter.com">Before</a>
              <a href="https://twitter.com">Above</a>
            </div>

            <ul>
              <li>
                <div className="profile">
                  <img src={require("./assets/avatar.png")} alt="Place" />
                  <div className="info">
                    <strong>Spade <span>@spade_be</span></strong>
                    <button>Follow</button>
                  </div>
                </div>
                <a href="">X</a>
              </li>

              <li>
                <div className="profile">
                  <img src={require("./assets/avatar.png")} alt="Place" />
                  <div className="info">
                    <strong>Spade <span>@spade_be</span></strong>
                    <button>Follow</button>
                  </div>
                </div>
                <a href="">X</a>
              </li>

              <li>
                <div className="profile">
                  <img src={require("./assets/avatar.png")} alt="Place" />
                  <div className="info">
                    <strong>Spade <span>@spade_be</span></strong>
                    <button>Follow</button>
                  </div>
                </div>
                <a href="">X</a>
              </li>


              <li>
                <div className="profile">
                  <img src={require("./assets/avatar.png")} alt="Place" />
                  <div className="info">
                    <strong>Spade <span>@spade_be</span></strong>
                    <button>Follow</button>
                  </div>
                </div>
                <a href="">X</a>
              </li>

            </ul>
          </div>

        </aside>
      </div>
    </body >
  );
}

export default App;
