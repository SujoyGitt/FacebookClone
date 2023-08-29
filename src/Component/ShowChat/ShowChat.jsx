import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
const ShowChat = ({
  setshowChatBox,
  clickedItems,
  showChatBox,
  setClickedItems,
}) => {
  useEffect(() => {
    setClickedItems(clickedItems);
  }, [clickedItems]);
  const removeItem = (index) => {
    const updatedArray = [...clickedItems];
    updatedArray.splice(index, 1);
    setClickedItems(updatedArray);
  };
  if (clickedItems.length === 0) {
    setshowChatBox(false);
  } else {
    setshowChatBox(true);
  }

  return (
    <>
      {showChatBox && (
        <div className="showChatContainer d-flex justify-content-between align-items-center">
          {clickedItems
            .reverse()
            .slice(0, 2)
            .map(({ first, last, thumbnail }, index) => {
              return (
                <div className="showChatBox">
                  <div className="showChatboxHeader d-flex justify-content-between align-items-center">
                    <NavLink className="userData">
                      <img
                        alt=""
                        className="shortcutsImg circle"
                        src={thumbnail}
                      />
                      <div className="">
                        <span>
                          {first} {last}
                        </span>
                        <span className="messageText my-1">Active 2 m ago</span>
                      </div>
                    </NavLink>
                    <div className="showIcon">
                      <svg
                        height="26px"
                        role="presentation"
                        viewBox="-5 -5 30 30"
                        width="26px"
                      >
                        <path
                          d="M10.952 14.044c.074.044.147.086.22.125a.842.842 0 001.161-.367c.096-.195.167-.185.337-.42.204-.283.552-.689.91-.772.341-.078.686-.105.92-.11.435-.01 1.118.174 1.926.648a15.9 15.9 0 011.713 1.147c.224.175.37.43.393.711.042.494-.034 1.318-.754 2.137-1.135 1.291-2.859 1.772-4.942 1.088a17.47 17.47 0 01-6.855-4.212 17.485 17.485 0 01-4.213-6.855c-.683-2.083-.202-3.808 1.09-4.942.818-.72 1.642-.796 2.136-.754.282.023.536.17.711.392.25.32.663.89 1.146 1.714.475.808.681 1.491.65 1.926-.024.31-.026.647-.112.921-.11.35-.488.705-.77.91-.236.17-.226.24-.42.336a.841.841 0 00-.368 1.161c.04.072.081.146.125.22a14.012 14.012 0 004.996 4.996z"
                          fill="#1b74e4"
                        ></path>
                        <path
                          d="M10.952 14.044c.074.044.147.086.22.125a.842.842 0 001.161-.367c.096-.195.167-.185.337-.42.204-.283.552-.689.91-.772.341-.078.686-.105.92-.11.435-.01 1.118.174 1.926.648.824.484 1.394.898 1.713 1.147.224.175.37.43.393.711.042.494-.034 1.318-.754 2.137-1.135 1.291-2.859 1.772-4.942 1.088a17.47 17.47 0 01-6.855-4.212 17.485 17.485 0 01-4.213-6.855c-.683-2.083-.202-3.808 1.09-4.942.818-.72 1.642-.796 2.136-.754.282.023.536.17.711.392.25.32.663.89 1.146 1.714.475.808.681 1.491.65 1.926-.024.31-.026.647-.112.921-.11.35-.488.705-.77.91-.236.17-.226.24-.42.336a.841.841 0 00-.368 1.161c.04.072.081.146.125.22a14.012 14.012 0 004.996 4.996z"
                          fill="#1b74e4"
                          stroke="#1b74e4"
                        ></path>
                      </svg>
                      <svg
                        height="26px"
                        role="presentation"
                        viewBox="-5 -5 30 30"
                        width="26px"
                      >
                        <path
                          d="M19.492 4.112a.972.972 0 00-1.01.063l-3.052 2.12a.998.998 0 00-.43.822v5.766a1 1 0 00.43.823l3.051 2.12a.978.978 0 001.011.063.936.936 0 00.508-.829V4.94a.936.936 0 00-.508-.828zM10.996 18A3.008 3.008 0 0014 14.996V5.004A3.008 3.008 0 0010.996 2H3.004A3.008 3.008 0 000 5.004v9.992A3.008 3.008 0 003.004 18h7.992z"
                          fill="#1b74e4"
                        ></path>
                      </svg>
                      <svg height="26px" viewBox="-4 -4 24 24" width="26px">
                        <line
                          stroke="#1b74e4"
                          stroke-linecap="round"
                          stroke-width="2"
                          x1="2"
                          x2="14"
                          y1="8"
                          y2="8"
                        ></line>
                      </svg>
                      <svg
                        onClick={() => removeItem(index)}
                        aria-hidden="true"
                        class="xvijh9v xhhsvwb x1ty9z65 xgzva0m"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                      >
                        <g
                          stroke="#1b74e4"
                          stroke-linecap="round"
                          stroke-width="2"
                        >
                          <line x1="6" x2="18" y1="6" y2="18"></line>
                          <line x1="6" x2="18" y1="18" y2="6"></line>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default ShowChat;
