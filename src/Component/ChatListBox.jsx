import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchUserData } from "../Global/action";
import { useDispatch, useSelector } from "react-redux";
import ShowChat from "./ShowChat/ShowChat";

const ChatListBox = ({
  buttonRef,
  showChatBox,
  setshowChatBox,
  setshowMessagebox,
  showMessagebox,
}) => {
  const [clickedItems, setClickedItems] = useState([]);

  let boxHandler = (clickedItem) => {
    const updatedClickedItems = [...clickedItems, clickedItem];
    setClickedItems(updatedClickedItems);
    setshowChatBox(true);
    setshowMessagebox(false);
  };

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  return (
    <>
      {showMessagebox && (
        <div className="chatBox" ref={buttonRef}>
          <div className="notificationHeader w-full d-flex justify-content-between align-items-center">
            <h4>Chats</h4>
            <div className="icon d-flex align-items-center gap-2">
              <i
                data-visualcompletion="css-img"
                class="x1b0d499 x1d69dk1"
                style={{
                  backgroundImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/c1RYSCs8g9M.png)",
                  backgroundPosition: "0px -105px",
                  backgroundSize: "auto",
                  width: "20px",
                  height: "20px",
                  backgroundRepeat: "no-repeat",
                  display: "inline-block",
                }}
              ></i>
              <i
                data-visualcompletion="css-img"
                class="x1b0d499 x1d69dk1 "
                style={{
                  backgroundImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/U-Tq85r4G4K.png)",
                  backgroundPosition: "0px -647px",
                  backgroundSize: "auto",
                  width: "20px",
                  height: "20px",
                  backgroundRepeat: "no-repeat",
                  display: "inline-block",
                  margin: "0px 15px",
                }}
              ></i>
              <i
                data-visualcompletion="css-img"
                class="x1b0d499 x1d69dk1"
                style={{
                  backgroundImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/U-Tq85r4G4K.png)",
                  backgroundPosition: "-17px -727px",
                  backgroundSize: "auto",
                  width: "20px",
                  height: "18px",
                  backgroundRepeat: "no-repeat",
                  display: "inline-block",
                }}
              ></i>
            </div>
          </div>
          <div className="logoWithSearch d-flex  align-items-start w-full mt-2">
            <div className="searchBar d-flex  align-items-center w-full">
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                width="1em"
                height="1em"
                class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 xlup9mm x1kky2od"
              >
                <g fillRule="evenodd" transform="translate(-448 -544)">
                  <g fillRule="nonzero">
                    <path
                      d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z"
                      transform="translate(448 544)"
                    ></path>
                    <path
                      d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z"
                      transform="translate(448 544)"
                    ></path>
                    <path
                      d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z"
                      transform="translate(448 544)"
                    ></path>
                    <path
                      d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z"
                      transform="translate(448 544)"
                    ></path>
                  </g>
                </g>
              </svg>
              <input
                type="search"
                name=""
                placeholder="Search Messanger"
                id=""
              />
            </div>
          </div>
          <div className="d-flex chatBtnGroup ">
            <NavLink className="chatBtn inbox">Inbox</NavLink>
            <NavLink className="chatBtn communities">Communities</NavLink>
          </div>

          <div className="friends">
          {data
              .slice(20, 40)
              .map(({ name: { first, last }, picture: { thumbnail } }) => (
                <NavLink
                  className=""
                  onClick={() => boxHandler({ first, last, thumbnail })}
                >
                  <img alt="" className="shortcutsImg circle" src={thumbnail} />
                  <div className="">
                    <span style={{fontSize:'16px',fontWeight:"500"}}>
                      {first} {last}
                    </span>
                    <span className="messageText my-1">
                      Hi How are you Guys?
                    </span>
                  </div>
                </NavLink>
              ))}
          </div>
        </div>
      )}
      {showChatBox && (
        <ShowChat setshowChatBox={setshowChatBox} showChatBox={showChatBox} clickedItems={clickedItems} setClickedItems={setClickedItems}/>
      )}
    </>
  );
};

export default ChatListBox;
