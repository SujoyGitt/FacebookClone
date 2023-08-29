import React, { useEffect, useState } from "react";
import Profile from "./Storiesimg/profile.jpg";
import { fetchUserData } from "../../../Global/action";
import { useDispatch, useSelector } from "react-redux";
import Img1 from "./Storiesimg/profile1.jpg"
import Img2 from "./Storiesimg/profile2.jpg"
import Img3 from "./Storiesimg/profile3.jpg"
export const Stories = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  const [ScrollLeft, setscrollLeft] = useState(0);
  useEffect(() => {
    let slideStories = document.querySelector(".slideStories");
    let leftslideIcon = document.querySelector(".leftSlideIcon");
    let boxWidth = slideStories.clientWidth;
    if (0 < ScrollLeft) {
      leftslideIcon.style.display = "block";
    } else {
      leftslideIcon.style.display = "none";
    }

    leftslideIcon.addEventListener("click", function () {
      let left = (slideStories.scrollLeft = slideStories.scrollLeft - boxWidth);
      setscrollLeft(left);
    });
    document.querySelector(".rightSlideIcon").addEventListener("click", () => {
      let right = (slideStories.scrollLeft =
        slideStories.scrollLeft + boxWidth);
      setscrollLeft(right);
    });
  }, [ScrollLeft]);

  return (
    <>
      <div className="mainStories col-12 col-xl-11 p-0 p-xl-auto pr-xl-2">
        <div className="leftSlideIcon">
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1.6em"
            height="1.6em"
            class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 xxk0z11 xvy4d1p"
          >
            <path d="M14.791 5.207 8 12l6.793 6.793a1 1 0 1 1-1.415 1.414l-7.5-7.5a1 1 0 0 1 0-1.414l7.5-7.5a1 1 0 1 1 1.415 1.414z"></path>
          </svg>
        </div>
        <div className="rightSlideIcon">
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1.6em"
            height="1.6em"
            class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 xxk0z11 xvy4d1p"
          >
            <path d="M9.209 5.207 16 12l-6.791 6.793a1 1 0 1 0 1.415 1.414l7.5-7.5a1 1 0 0 0 0-1.414l-7.5-7.5a1 1 0 1 0-1.415 1.414z"></path>
          </svg>
        </div>

        <div className="slideStories  d-flex justify-between align-items-center">
          <div className="card profile">
            <img src={Profile} alt="" className="mainimg profilemainimg" />
            <div className="profileShortimg">
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                width="1em"
                height="1em"
                class="x1lliihq x1k90msu x2h7rmj x1qfuztq x14ctfv x1qx5ct2 xw4jnvo"
              >
                <g fill-rule="evenodd" transform="translate(-446 -350)">
                  <g fill-rule="nonzero">
                    <path
                      d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z"
                      transform="translate(354.5 159.5)"
                    ></path>
                    <path
                      d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z"
                      transform="translate(354.5 159.5)"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <h4 className="profiletitle">Create Story</h4>
          </div>
          <div className="card">
              <img src={Img1} alt="" className="mainimg"/>
              <div className="shortimg overflow-hidden">
                <img src={Img1} alt="" />
              </div>
              <h4>Selina Gomenz</h4>
            </div><div className="card">
              <img src={Img2} alt="" className="mainimg"/>
              <div className="shortimg overflow-hidden">
                <img src={Img2} alt="" />
              </div>
              <h4>Jhon Doe</h4>
            </div><div className="card">
              <img src={Img3} alt="" className="mainimg"/>
              <div className="shortimg overflow-hidden">
                <img src={Img3} alt="" />
              </div>
              <h4>Chistopher Colum</h4>
            </div>
          {data.slice(10, 25).map(({picture:{large,thumbnail},name:{first,last}},index) => (
            <div className="card" key={index}>
              <img src={large} alt="" className="mainimg"/>
              <div className="shortimg overflow-hidden">
                <img src={thumbnail} alt="" />
              </div>
              <h4>{first} {last}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
