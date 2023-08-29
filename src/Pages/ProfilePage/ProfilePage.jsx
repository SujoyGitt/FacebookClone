import React, { useEffect } from "react";
import profile from "../../Component/Sidebar/profile.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../Global/action";
import { NavLink } from "react-router-dom";
const ProfilePage = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  console.log(data.slice(0, 7).reverse());
  return (
    <div className="col-12 m-auto profileImgContainer  px-lg-5 bg-white px-0 px-lg-auto">
      <div className="col-12 col-lg-9 cover-img m-auto">
        <div className="editCoverPhotoContainer">
          <div className="editCoverPhoto">
            <div className="avatar d-flex align-items-center justify-content-around">
              <i
                data-visualcompletion="css-img"
                className="x1b0d499 xaj1gnb"
                style={{
                  backgroundImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/RRtk5WWM2aL.png)",
                  backgroundPosition: "0px -130px",
                  backgroundSize: "auto",
                  width: "16px",
                  height: "16px",
                  backgroundRepeat: "no-repeat",
                  display: "inline-block",
                }}
              ></i>
              <span>Create with avatar</span>
            </div>
            <div className="editcover d-flex align-items-center justify-content-around">
              <i
                data-visualcompletion="css-img"
                className="x1b0d499 xaj1gnb"
                style={{
                  backgroundImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/RRtk5WWM2aL.png)",
                  backgroundPosition: "0px -181px",
                  backgroundSize: "auto",
                  width: "16px",
                  height: "16px",
                  backgroundRepeat: "no-repeat",
                  display: "inline-block",
                }}
              ></i>
              <span>Edit cover photo</span>
            </div>
          </div>
        </div>
      </div>
      <div className="profile col-12 col-lg-9 px-lg-4 m-auto d-flex justify-content-center justify-content-lg-between flex-wrap py-0">
        <div className="profilecontent d-flex align-items-center justify-content-center flex-wrap">
          <div className="mainImg">
            <img src={profile} alt="" />
            <span>
              <i
                data-visualcompletion="css-img"
                className="x1b0d499 xep6ejk"
                style={{
                  backgroundImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/RRtk5WWM2aL.png)",
                  backgroundPosition: "0px -88px",
                  backgroundSize: "auto",
                  width: "22px",
                  height: "22px",
                  backgroundRepeat: "no-repeat",
                  display: "inline-block",
                }}
              ></i>
            </span>
          </div>
          <div className="profileName ml-md-3 mb-md-4  text-center text-md-left">
            <h2 className="mb-0">Sû Jøy</h2>
            <p className="mb-0 pb-2">2.1K friends</p>
            <div className="friendsImg mb-2 mb-lg-0">
              {data
                .reverse()
                .slice(0, 7)
                .map(({ picture: { thumbnail } }, index) => {
                  return (
                    <span
                      style={{
                        transform: `translateX(-${index * 8}px)`,
                        zIndex: data.length - index,
                      }}
                    >
                      <img src={thumbnail} alt="" />
                    </span>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="edit d-flex align-items-end justify-content-end mb-5 ">
          <div className="addStory">
            <img
              className="x1b0d499 xaj1gnb"
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/AqoGWewwdNN.png"
              alt=""
              height="16"
              width="16"
            />
            Add to story
          </div>
          <div className="editProfile">
            <img
              className="x1b0d499 xep6ejk"
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/OR6SzrfoMFg.png"
              alt=""
              height="16"
              width="16"
            />
            Edit profile
          </div>
          <div className="down">
            <i
              data-visualcompletion="css-img"
              class="x1b0d499 xep6ejk"
              style={{
                backgroundImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/RRtk5WWM2aL.png)",
                backgroundPosition: " 0px -198px",
                backgroundSize: "auto",
                width: "16px",
                height: "16px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
          </div>
        </div>
      </div>
      <div className="profileNav col-lg-9 col-12 m-auto pb-0 ">
        <NavLink className='Icon'>Posts</NavLink>
        <NavLink className='Icon'>About</NavLink>
        <NavLink className='Icon'>Friends</NavLink>
        <NavLink className='Icon'>Photos</NavLink>
        <NavLink className='Icon'>Videos</NavLink>
        <NavLink className='Icon'>Check Ins</NavLink>
        <NavLink className='Icon'>More</NavLink>
      </div>
    </div>
  );
};

export default ProfilePage;
