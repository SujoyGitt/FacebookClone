import React, { useRef, useEffect, useState } from "react";
import img from "../Stories/Storiesimg/profile.jpg";
import { NavLink } from "react-router-dom";
const CreatePostBox = ({ setcreatePostShow }) => {
  const buttonRef = useRef(null);
const [Postsdata, setPostsdata] = useState();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        // Clicked outside the button, so hide the notification
        setcreatePostShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="createPostbox">
      <div className="postBox py-2" ref={buttonRef}>
        <div className="closePostbox" onClick={() => setcreatePostShow(false)}>
          <i
            data-visualcompletion="css-img"
            class="x1b0d499 x1d69dk1"
            style={{
              backgroundImage:
                "url(https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/eKbbhUjvYo3.png)",
              backgroundPosition: " -168px -84px",
              backgroundSize: "auto",
              width: "18px",
              height: "18px",
              backgroundRepeat: " no-repeat",
              display: "inline-block",
            }}
          ></i>
        </div>
        <div className="postHeader py-2">
          <h4>Create post</h4>
        </div>
        <div className="postProfile px-3 pt-3">
          <NavLink className="d-flex align-items-center">
            <img alt="" className="shortcutsImg circle" src={img} />
            <div className="">
              <span style={{ fontSize: "16px", fontWeight: "500" }}>
                Sû Jøy
              </span>
              <span className="messageText my-1 d-block d-flex justify-content-between align-items-center">
                <img
                  class="x1b0d499 xep6ejk"
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/zPcex_q0TM1.png"
                  alt="Friends"
                  height="12"
                  width="12"
                />
                Friends
                <i
                  data-visualcompletion="css-img"
                  class="x1b0d499 x1d69dk1 "
                  style={{
                    backgroundImage:
                      "url(https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/eKbbhUjvYo3.png)",
                    backgroundPosition: "-155px -143px",
                    backgroundSize: "auto",
                    width: "12px",
                    height: "12px",
                    backgroundRepeat: " no-repeat",
                    display: "inline-block",
                  }}
                ></i>
              </span>
            </div>
          </NavLink>
        </div>
        <div className="postInput px-2">
          <textarea rows="4" placeholder="What's on your mind, Sû?" name="post" value={Postsdata} onChange={(e)=>setPostsdata(e.target.value)}></textarea>
        </div>
        <div className="emoji d-flex justify-content-between align-items-center px-2">
          <img
            height="38"
            width="38"
            alt=""
            referrerpolicy="origin-when-cross-origin"
            src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png"
          />
          <i
            data-visualcompletion="css-img"
            class="x1b0d499 x1d69dk1"
            style={{
              backgroundImage:
                "url(https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/9sNpqC_0QuR.png)",
              backgroundPosition: " 0px -70px",
              backgroundSize: "auto",
              width: "24px",
              height: "24px",
              backgroundRepeat: " no-repeat",
              display: "inline-block",
            }}
          ></i>
        </div>
        <div className="postBtn p-3 ">
        <button className={Postsdata?"postBtnActive":''}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostBox;
