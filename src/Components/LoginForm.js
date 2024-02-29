import React, { useEffect, useState } from "react";
import mobile from "./MobileLogo.jpg";
import User from "./user.png";
import faceBook from "./facebook.png";
import password from "./padlock.png";
import playstore from "./playStore.png";
import appstore from "./Appstore.png";
import { useNavigate } from "react-router";
export default function LoginForm() {
  useEffect(() => {
    if (loggedIn) {
      navigate("./userPage");
    }
  });

  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  function updatePassword() {
    setShowPassword(!showPassword);
  }
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      functiononlogin();
    }
  }
  function functiononlogin() {
    const myName = document.getElementById("myName");
    const myPass = document.getElementById("myPass");
    if (myName.value == "") {
      alert("UserName Should Not Be Empty");
    } else if (myPass.value == "") {
      alert("Password Should not be Empty");
    } else if (/\d/.test(myName.value)) {
      alert("UserName Should Not Contain Any Numbers");
    } else if (myName.value == "a" && myPass.value == "a") {
      setLoggedIn(true);
    } else {
      alert("wrong input details");
    }
  }
  return (
    <>
      <div className="login-form">
        <div className="left-img">
          <img src={mobile}></img>
        </div>
        <div className="right-login">
          <h1>Tech-Gram</h1>
          <hr></hr>
          <div className="input-fields">
            <div className="myInput">
              <img src={User}></img>{""}
              <input
                type="text"
                id="myName"
                placeholder="Enter UserName"
                onKeyPress={handleKeyPress}
              />
            </div>
            <div className="myInput">
              <img src={password} />{" "}
              <input
                type={showPassword ? "password" : "text"}
                id="myPass"
                placeholder="Enter Password"
                onKeyPress={handleKeyPress}
              ></input>
              <h5 onClick={updatePassword}>{showPassword ? "show" : "hide"}</h5>
            </div>
          </div>
          <div className="submit-btn">
            <button onClick={functiononlogin} style={{ color: "white" }}>
              Login
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "20px 0px",
            }}
          >
            <hr
              style={{
                width: "105px",
                position: "relative",
                height: "0.1px",
              }}
            />
            <span>OR</span>
            <hr
              style={{ width: "105px", position: "relative", height: "0.1px" }}
            />
          </div>
          <div className="fb-login">
            <img src={faceBook} />
            <span>Login With Facebook</span>
          </div>
          <div className="forgot-password">
            <h6>
              <a href="#">Forgot Password?</a>
            </h6>
          </div>

          <div></div>

          <div className="sign-up">
            <span>
              Don't have an account?
              <span>
                <a href="#" style={{ textDecoration: "none" }}>
                  SignUp
                </a>
              </span>
            </span>
          </div>
          <div id="adjesments">
            Get The App Now!
            <div className="install-app">
              <div>
                <img src={playstore} />
              </div>
              <div>
                <img src={appstore} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
