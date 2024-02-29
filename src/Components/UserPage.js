import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import insta from "./instagram.png";
import like from "./heart.png";
import search from "./loupe.png";
import myProfile from "./myprofile.png";
import explore from "./direction.png";
import reel from "./reel.png";
import home from "./home.png";
import messenger from "./messenger.png";
import add from "./tab.png";
export default function UserPage() {
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (logout) {
      navigate("/");
    }
  });
  function backToLogin() {
    setLogout(true);
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
          <div className="main-bar"><h1>loremhggggggggggggggggggggggggvcnxcnebgceu cyvcc oremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvcccyvccccyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvcccyvccccyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvcccyvccccyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvcccyvccccyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvcccyvccccyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvcccyvccccyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvcccyvccccyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvcccyvccccyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvcccyvccccyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvcccyvccccyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvcccyvccccyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvcccyvccccyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvccoremhggggggggggggggggggggggggvcnxcnebgceu cyvcccyvccc</h1></div>
          <div className="right-bar">
            <div className="adjasment">
              <div className="same-widgets">
                <img src={myProfile} /><h5>alaudhin_<br></br><span style={{fontSize:"10px"}}>Allu </span></h5><button>Switch</button>
              </div>
              <br></br><div id="suggestion">Suggested For You <span id="seeall">See All</span></div><br></br>
              <div className="same-widgets"><img src={myProfile} /><h5>alaudhin_<br></br><span style={{fontSize:"10px"}}>Allu </span></h5><button>Switch</button></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
