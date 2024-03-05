import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import js from "./js.png";
import jsPost from "./Jspost.jpg";
import insta from "./instagram.png";
import liked from "./Liked.png";
import save from "./save-instagram.png";
import comment from "./chat.png";
import share from "./send.png";
import more from "./more.png";
import vjdp from "./vijaydp.jpeg";
import vjpost from "./vijaypost.jpg";
import news from "./news.jpg";
import like from "./heart.png";
import Polimer from "./Polimer.png";
import verified from "./verified.png";
import i1 from "./i1.jpeg";
import i2 from "./i2.jpeg";
import i3 from "./i3.jpeg";
import i4 from "./i4.jpg";
import i5 from "./i5.jpg";
import i6 from "./i6.jpg";
import i7 from "./i7.jpeg";
import Rightarr from "./right-arrow.png";
import Leftarr from "./left-arrow.png";
import search from "./loupe.png";
import myProfile from "./myprofile.png";
import explore from "./direction.png";
import reel from "./reel.png";
import home from "./home.png";
import messenger from "./messenger.png";
import add from "./tab.png";
export default function UserPage() {
  const [count, setCount] = useState(126789);
  const [fill, setFill] = useState(true);
  const [style, setStyle] = useState(true);
  function updateFill() {
    setFill(!fill);
    setCount((prevCount) => prevCount + 1);
  }
  function updateeFill() {
    setFill(!fill);
    setCount((prevCount) => prevCount - 1);
  }
  function updateStyle() {
    setStyle(!style);
  }
  const [x, setX] = useState(0);
  function moveRight() {
    setX((prevX) => {
      const newX =
        -(document.querySelector(".content").children.length - 1) * 60;
      return prevX <= newX ? prevX : prevX - 150;
    });
  }
  function moveLeft() {
    setX((prevX) => (prevX < 0 ? prevX + 150 : prevX));
  }
 
  return (
    <>
      <div>
        <div className="body-container">
          <div className="left-bar">
            <div className="left-sub-bar">
              <div className="insta-logo">
                <img src={insta}></img>
              </div>
              <br></br>
              <br></br>
              <div className="widgets">
                <img src={home} title="Home" />
                <img src={search} title="Search" />
                <img src={explore} title="Explore" />
                <img src={reel} title="Reels" />
                <img src={messenger} title="messages" />
                <img src={like} title="Notifications" />
                <img src={add} title="Post Something" />
                <div className="myProfile">
                  {" "}
                  <img src={myProfile} title="Your Profile" />
                </div>
              </div>
            </div>
          </div>
          <div className="main-bar">
            <div>
              <div className="top-bar">
                <div>
                  <h2>Tech-Gram</h2>
                </div>
                <div className="rt">
                  <span className="edit">
                    <img src={search} />
                    <input type="text" placeholder="Search" />
                  </span>
                  <img src={like}></img>
                </div>
              </div>
              <div className="adj">
                <div className="slide-container">
                  <div className="content" style={{ left: `${x}px` }}>
                    <div>
                      <img src={myProfile}></img>
                      <p>alaudhin_</p>
                    </div>
                    <div>
                      <img src={i1}></img>
                      <p>rxnu14_</p>
                    </div>
                    <div>
                      <img src={i2}></img>
                      <p>Priya4_</p>
                    </div>
                    <div>
                      <img src={i3}></img>
                      <p>abhu_boy</p>
                    </div>
                    <div>
                      <img src={i4}></img>
                      <p>Hemu_x</p>
                    </div>
                    <div>
                      <img src={i5}></img>
                      <p>Pikachu_</p>
                    </div>
                    <div>
                      <img src={i6}></img>
                      <p>John_</p>
                    </div>
                    <div>
                      <img src={i7}></img>
                      <p>Case_Karan</p>
                    </div>
                    <div>
                      <img src={i3}></img>
                      <p>Dolu_</p>
                    </div>
                    <div>
                      <img src={i4}></img>
                      <p>Nandhini</p>
                    </div>
                    <div>
                      <img src={i1}></img>
                      <p>Arokya</p>
                    </div>
                    <div>
                      <img src={i2}></img>
                      <p>Shoba</p>
                    </div>
                    <div>
                      <img src={i6}></img>
                      <p>malini</p>
                    </div>
                    <div>
                      <img src={i3}></img>
                      <p>Kathiresan</p>
                    </div>
                    <div>
                      <img src={i7}></img>
                      <p>alaudhin_</p>
                    </div>
                    <div>
                      <img src={i2}></img>
                      <p>alaudhin_</p>
                    </div>
                    <div>
                      <img src={i1}></img>
                      <p>alaudhin_</p>
                    </div>
                    <div>
                      <img src={i4}></img>
                      <p>alaudhin_</p>
                    </div>
                    <div>
                      <img src={i2}></img>
                      <p>alaudhin_</p>
                    </div>
                    <div>
                      <img src={i6}></img>
                      <p>alaudhin_</p>
                    </div>
                    <div>
                      <img src={i7}></img>
                      <p>alaudhin_</p>
                    </div>
                    <div>
                      <img src={i2}></img>
                      <p>Priya4_</p>
                    </div>
                    <div>
                      <img src={i3}></img>
                      <p>abhu_boy</p>
                    </div>
                    <div>
                      <img src={i4}></img>
                      <p>Hemu_x</p>
                    </div>
                    <div>
                      <img src={i5}></img>
                      <p>Pikachu_</p>
                    </div>
                    <div>
                      <img src={i6}></img>
                      <p>John_</p>
                    </div>
                    <div>
                      <img src={i7}></img>
                      <p>Chickom_Pa</p>
                    </div>
                    <div>
                      <img src={i2}></img>
                      <p>Priya4_</p>
                    </div>
                    <div>
                      <img src={i3}></img>
                      <p>abhu_boy</p>
                    </div>
                    <div>
                      <img src={i4}></img>
                      <p>Hemu_x</p>
                    </div>
                    <div>
                      <img src={i5}></img>
                      <p>Pikachu_</p>
                    </div>
                    <div>
                      <img src={i6}></img>
                      <p>John_</p>
                    </div>
                    <div>
                      <img src={i7}></img>
                      <p>Chickom_Pa</p>
                    </div>
                  </div>
                </div>
                <div className="buttons">
                  <img src={Leftarr} onClick={moveLeft} />{" "}
                  <img src={Rightarr} onClick={moveRight} className="hie"/>
                </div>
                <div className="posts">
                  <div className="post-top">
                    <div className="post-top1">
                      <img src={Polimer} />
                      <p>Polimer News</p>
                      <img src={verified} id="modimg"></img>
                    </div>
                    <div className="post-top2">
                      {" "}
                      <img src={more} onClick={updateStyle} id="reduce"></img>
                      <div
                        className="et-1"
                        style={{ display: style ? "none" : "block" }}
                      >
                        <div
                          className="et"
                          style={{ color: "red", borderColor: "white" }}
                        >
                          Report
                        </div>
                        <div
                          className="et"
                          style={{ color: "red", borderColor: "white" }}
                        >
                          Unfollow
                        </div>
                        <div className="et">Add To Favorites</div>
                      </div>
                    </div>
                  </div>
                  <div className="post-img">
                    <img src={news}></img>
                  </div>
                  <div className="post-likes">
                    <div id="dd">
                      {fill ? (
                        <img src={like} onClick={updateFill} />
                      ) : (
                        <img src={liked} onClick={updateeFill} />
                      )}
                      <img src={comment} />
                      <img src={share} />
                    </div>
                    <div>
                      <img src={save} />
                    </div>
                  </div>
                  <div  className="likeCount">
                    {count}Likes
                  </div>

                  <div className="post-comments"></div>
                </div>
                <div className="posts">
                  <div className="post-top">
                    <div className="post-top1">
                      <img src={vjdp} />
                      <p>ActorVijayOfficial</p>
                      <img src={verified} id="modimg"></img>
                    </div>
                    <div className="post-top2">
                      {" "}
                      <img src={more} onClick={updateStyle} id="reduce"></img>
                      <div
                        className="et-1"
                        style={{ display: style ? "none" : "block" }}
                      >
                        <div
                          className="et"
                          style={{ color: "red", borderColor: "white" }}
                        >
                          Report
                        </div>
                        <div
                          className="et"
                          style={{ color: "red", borderColor: "white" }}
                        >
                          Unfollow
                        </div>
                        <div className="et">Add To Favorites</div>
                      </div>
                    </div>
                  </div>
                  <div className="post-img">
                    <img src={vjpost}></img>
                  </div>
                  <div className="post-likes">
                    <div id="dd">
                      {fill ? (
                        <img src={like} onClick={updateFill} />
                      ) : (
                        <img src={liked} onClick={updateeFill} />
                      )}
                      <img src={comment} />
                      <img src={share} />
                    </div>
                    <div>
                      <img src={save} />
                    </div>
                  </div>
                  <div  className="likeCount">
                    {count}Likes
                  </div>
                  <div className="post-comments"></div>
                </div>
                <div className="posts">
                  <div className="post-top">
                    <div className="post-top1">
                      <img src={js} />
                      <p>JavaScriptOfficial</p>
                      <img src={verified} id="modimg"></img>
                    </div>
                    <div className="post-top2">
                      {" "}
                      <img src={more} onClick={updateStyle} id="reduce"></img>
                      <div
                        className="et-1"
                        style={{ display: style ? "none" : "block" }}
                      >
                        <div
                          className="et"
                          style={{ color: "red", borderColor: "white" }}
                        >
                          Report
                        </div>
                        <div
                          className="et"
                          style={{ color: "red", borderColor: "white" }}
                        >
                          Unfollow
                        </div>
                        <div className="et">Add To Favorites</div>
                      </div>
                    </div>
                  </div>
                  <div className="post-img">
                    <img src={jsPost}></img>
                  </div>
                  <div className="post-likes">
                    <div id="dd">
                      {fill ? (
                        <img src={like} onClick={updateFill} />
                      ) : (
                        <img src={liked} onClick={updateeFill} />
                      )}
                      <img src={comment} />
                      <img src={share} />
                    </div>
                    <div>
                      <img src={save} />
                    </div>
                  </div>
                  <div className="likeCount" >
                    {count}Likes
                  </div>
                  <div className="post-comments"></div>
                </div>

                <div className="down-nav">
                  <img src={home} />
                  <img src={explore} />
                  <img src={reel} />
                  <img src={add} />
                  <img src={messenger} />
                  <img src={myProfile} />
                </div>
              </div>
            </div>
          </div>
          <div className="right-bar">
            <div className="adjasment">
              <div className="same-widgets">
                <img src={myProfile} />
                <h5>
                  alaudhin_<br></br>
                  <span style={{ fontSize: "10px" }}>Allu </span>
                </h5>
                <button>Switch</button>
              </div>
              <br></br>
              <div id="suggestion">
                Suggested For You <span id="seeall">See All</span>
              </div>
              <br></br>
              <div className="same-widgets">
                <img src={i4} />
                <h5>
                  shuhailx<br></br>
                  <span style={{ fontSize: "10px" }}>Suhu</span>
                </h5>
                <button style={{ width: "100px" }}>Follow</button>
              </div>
              <div className="same-widgets">
                <img src={i1} />
                <h5>
                  Priyanks<br></br>
                  <span style={{ fontSize: "10px" }}>Prizz</span>
                </h5>
                <button style={{ width: "100px" }}>Follow</button>
              </div>
              <div className="same-widgets">
                <img src={i6} />
                <h5>
                  Nizarhdin<br></br>
                  <span style={{ fontSize: "10px" }}>Nizu</span>
                </h5>
                <button style={{ width: "100px" }}>Follow</button>
              </div>
              <div className="same-widgets">
                <img src={i5} />
                <h5>
                  Nizarnis<br></br>
                  <span style={{ fontSize: "10px" }}>Nizz</span>
                </h5>
                <button style={{ width: "100px" }}>Follow</button>
              </div>
              <div className="same-widgets">
                <img src={i3} />
                <h5>
                  NizarnishX<br></br>
                  <span style={{ fontSize: "10px" }}>Nizz</span>
                </h5>
                <button style={{ width: "100px" }}>Follow</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
