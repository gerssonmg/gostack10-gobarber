import React, { useState, useEffect } from 'react';
import './App.css';
import axios from './services/api';

function App() {

  const [listTimeline, setListtimeline] = useState([]);
  const [listText, setText] = useState({
    avatar: './assets/avatar.png',
    commets: 1,
    retweet: 2,
    like: 3,
    strong: 'Benoît Vrins ',
    span: '@Exibit',
    p: 'app @itsmeDigitalID désinstallée puis réinstallée, comment faire pour retrouver son compte ? Ma banque dit que mon token existe déjà #UX',
  },
  );

  const url = 'https://github.com/gerssonmg';
  useEffect(() => {
    async function loadAvatar() {
      const response = await axios.get('');
      console.log(response.data);
      setListtimeline(response.data)
    }
    loadAvatar();
  }, []);

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
          <nav>
            <a href={url} className="active">Tweets</a>
            <a href={url}>Tweets replices</a>
            <a href={url}>Medias</a>
          </nav>

          <ul className="tweets">
            {
              listTimeline.map(post =>
                (
                  <li key={Math.random()}>
                    <img src={`${post.avatar_url}`} alt="Avatar" />
                    <div className="info">
                      <strong>{post.login}  <span>{listText.span}</span></strong>
                      <p>{listText.p}</p>
                      <div className="actions">
                        <a href={url}><img src={require("./assets/comments.svg")} alt="Comments" />{Math.floor(Math.random() * 10)}</a>
                        <a href={url}><img src={require("./assets/retweet.svg")} alt="Retweet" />{Math.floor(Math.random() * 10)}</a>
                        <a href={url}><img src={require("./assets/like.svg")} alt="Like" />{Math.floor(Math.random() * 10)}</a>
                      </div>
                    </div>
                  </li>
                )
              )

            }
            {/*
            <li>
              <img src={require("./assets/avatar.png")} alt="Avatar" />
              <div class="info">
                <strong>Benoît Vrins <span>@Exibit</span></strong>
                <p>app @itsmeDigitalID désinstallée puis réinstallée, comment faire pour retrouver son compte ? Ma banque dit que mon token existe déjà #UX</p>
                <div class="actions">
                  <a href={url}><img src={require("./assets/comments.svg")} alt="Comments" /> 3</a>
                  <a href={url}><img src={require("./assets/retweet.svg")} alt="Retweet" /> 4</a>
                  <a href={url}><img src={require("./assets/like.svg")} alt="Like" /> 5</a>
                </div>
              </div>
            </li>
            <li>
              <img src={require("./assets/avatar.png")} alt="Avatar" />
              <div class="info">
                <strong>Benoît Vrins <span>@Exibit</span></strong>
                <p>app @itsmeDigitalID désinstallée puis réinstallée, comment faire pour retrouver son compte ? Ma banque dit que mon token existe déjà #UX</p>
                <div class="actions">
                  <a href={url}><img src={require("./assets/comments.svg")} alt="Comments" /> 3</a>
                  <a href={url}><img src={require("./assets/retweet.svg")} alt="Retweet" /> 4</a>
                  <a href={url}><img src={require("./assets/like.svg")} alt="Like" /> 5</a>
                </div>
              </div>
            </li>
            <li>
              <img src={require("./assets/avatar.png")} alt="Avatar" />
              <div class="info">
                <strong>Benoît Vrins <span>@Exibit</span></strong>
                <p>app @itsmeDigitalID désinstallée puis réinstallée, comment faire pour retrouver son compte ? Ma banque dit que mon token existe déjà #UX</p>
                <div class="actions">
                  <a href={url}><img src={require("./assets/comments.svg")} alt="Comments" /> 3</a>
                  <a href={url}><img src={require("./assets/retweet.svg")} alt="Retweet" /> 4</a>
                  <a href={url}><img src={require("./assets/like.svg")} alt="Like" /> 5</a>
                </div>
              </div>
            </li>
            <li>
              <img src={require("./assets/avatar.png")} alt="Avatar" />
              <div class="info">
                <strong>Benoît Vrins <span>@Exibit</span></strong>
                <p>app @itsmeDigitalID désinstallée puis réinstallée, comment faire pour retrouver son compte ? Ma banque dit que mon token existe déjà #UX</p>
                <div class="actions">
                  <a href={url}><img src={require("./assets/comments.svg")} alt="Comments" /> 3</a>
                  <a href={url}><img src={require("./assets/retweet.svg")} alt="Retweet" /> 4</a>
                  <a href={url}><img src={require("./assets/like.svg")} alt="Like" /> 5</a>
                </div>
              </div>
            </li>
            <li>
              <img src={require("./assets/avatar.png")} alt="Avatar" />
              <div class="info">
                <strong>Benoît Vrins <span>@Exibit</span></strong>
                <p>app @itsmeDigitalID désinstallée puis réinstallée, comment faire pour retrouver son compte ? Ma banque dit que mon token existe déjà #UX</p>
                <div class="actions">
                  <a href={url}><img src={require("./assets/comments.svg")} alt="Comments" /> 3</a>
                  <a href={url}><img src={require("./assets/retweet.svg")} alt="Retweet" /> 4</a>
                  <a href={url}><img src={require("./assets/like.svg")} alt="Like" /> 5</a>
                </div>
              </div>
            </li>
            <li>
              <img src={require("./assets/avatar.png")} alt="Avatar" />
              <div class="info">
                <strong>Benoît Vrins <span>@Exibit</span></strong>
                <p>app @itsmeDigitalID désinstallée puis réinstallée, comment faire pour retrouver son compte ? Ma banque dit que mon token existe déjà #UX</p>
                <div class="actions">
                  <a href={url}><img src={require("./assets/comments.svg")} alt="Comments" /> 3</a>
                  <a href={url}><img src={require("./assets/retweet.svg")} alt="Retweet" /> 4</a>
                  <a href={url}><img src={require("./assets/like.svg")} alt="Like" /> 5</a>
                </div>
              </div>
            </li>
            <li>
              <img src={require("./assets/avatar.png")} alt="Avatar" />
              <div class="info">
                <strong>Benoît Vrins <span>@Exibit</span></strong>
                <p>app @itsmeDigitalID désinstallée puis réinstallée, comment faire pour retrouver son compte ? Ma banque dit que mon token existe déjà #UX</p>
                <div class="actions">
                  <a href={url}><img src={require("./assets/comments.svg")} alt="Comments" /> 3</a>
                  <a href={url}><img src={require("./assets/retweet.svg")} alt="Retweet" /> 4</a>
                  <a href={url}><img src={require("./assets/like.svg")} alt="Like" /> 5</a>
                </div>
              </div>
            </li>
            <li>
              <img src={require("./assets/avatar.png")} alt="Avatar" />
              <div class="info">
                <strong>Benoît Vrins <span>@Exibit</span></strong>
                <p>app @itsmeDigitalID désinstallée puis réinstallée, comment faire pour retrouver son compte ? Ma banque dit que mon token existe déjà #UX</p>
                <div class="actions">
                  <a href={url}><img src={require("./assets/comments.svg")} alt="Comments" /> 3</a>
                  <a href={url}><img src={require("./assets/retweet.svg")} alt="Retweet" /> 4</a>
                  <a href={url}><img src={require("./assets/like.svg")} alt="Like" /> 5</a>
                </div>
              </div>
            </li>
            <li>
              <img src={require("./assets/avatar.png")} alt="Avatar" />
              <div class="info">
                <strong>Benoît Vrins <span>@Exibit</span></strong>
                <p>app @itsmeDigitalID désinstallée puis réinstallée, comment faire pour retrouver son compte ? Ma banque dit que mon token existe déjà #UX</p>
                <div class="actions">
                  <a href={url}><img src={require("./assets/comments.svg")} alt="Comments" /> 3</a>
                  <a href={url}><img src={require("./assets/retweet.svg")} alt="Retweet" /> 4</a>
                  <a href={url}><img src={require("./assets/like.svg")} alt="Like" /> 5</a>
                </div>
              </div>
            </li>
            <li>
              <img src={require("./assets/avatar.png")} alt="Avatar" />
              <div class="info">
                <strong>Benoît Vrins <span>@Exibit</span></strong>
                <p>app @itsmeDigitalID désinstallée puis réinstallée, comment faire pour retrouver son compte ? Ma banque dit que mon token existe déjà #UX</p>
                <div class="actions">
                  <a href={url}><img src={require("./assets/comments.svg")} alt="Comments" /> 3</a>
                  <a href={url}><img src={require("./assets/retweet.svg")} alt="Retweet" /> 4</a>
                  <a href={url}><img src={require("./assets/like.svg")} alt="Like" /> 5</a>
                </div>
              </div>
            </li>
            <li>
              <img src={require("./assets/avatar.png")} alt="Avatar" />
              <div class="info">
                <strong>Benoît Vrins <span>@Exibit</span></strong>
                <p>app @itsmeDigitalID désinstallée puis réinstallée, comment faire pour retrouver son compte ? Ma banque dit que mon token existe déjà #UX</p>
                <div class="actions">
                  <a href={url}><img src={require("./assets/comments.svg")} alt="Comments" /> 3</a>
                  <a href={url}><img src={require("./assets/retweet.svg")} alt="Retweet" /> 4</a>
                  <a href={url}><img src={require("./assets/like.svg")} alt="Like" /> 5</a>
                </div>
              </div>
            </li>
            */
            }
          </ul>
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
                  <img src={require("./assets/j.png")} alt="Place" />
                  <div className="info">
                    <strong>Jhon <span>@spade_be</span></strong>
                    <button>Follow</button>
                  </div>
                </div>
                <a href={url}>X</a>
              </li>

              <li>
                <div className="profile">
                  <img src={require("./assets/jhon.png")} alt="Place" />
                  <div className="info">
                    <strong>Jhon <span>@spade_be</span></strong>
                    <button>Follow</button>
                  </div>
                </div>
                <a href={url}>X</a>
              </li>

              <li>
                <div className="profile">
                  <img src={require("./assets/julia.png")} alt="Place" />
                  <div className="info">
                    <strong>Julia <span>@spade_be</span></strong>
                    <button>Follow</button>
                  </div>
                </div>
                <a href={url}>X</a>
              </li>


              <li>
                <div className="profile">
                  <img src={require("./assets/maria.png")} alt="Place" />
                  <div className="info">
                    <strong>Maria <span>@spade_be</span></strong>
                    <button>Follow</button>
                  </div>
                </div>
                <a href={url}>X</a>
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
                  <img src={require("./assets/diego.png")} alt="Place" />
                  <div className="info">
                    <strong>Diego F <span>@spade_be</span></strong>
                    <button>Follow</button>
                  </div>
                </div>
              </li>
              <li>
                <div className="profile">
                  <img src={require("./assets/m.png")} alt="Place" />
                  <div className="info">
                    <strong>Donald <span>@spade_be</span></strong>
                    <button>Follow</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </body >
  );
}

export default App;
