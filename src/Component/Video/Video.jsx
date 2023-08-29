import React from "react";
import { Comments } from "../HomeScreen/PostsData/Comments";
import img1 from "../HomeScreen/Stories/Storiesimg/profile1.jpg"
import img2 from "../HomeScreen/Stories/Storiesimg/profile2.jpg"
import img3 from "../HomeScreen/Stories/Storiesimg/profile3.jpg"
import img4 from "../HomeScreen/Stories/Storiesimg/profile4.jpg"
function Video() {
  return (
    <div className="FacebookVideo col-12 col-sm-10 mx-sm-auto mx-md-0 col-md-8 mx-lg-auto col-lg-5 p-0">
      <div className="postData col-12  my-3 p-0">
        <div className="postHeader d-flex justify-content-between align-items-center px-3 pt-2">
          <div className="profile d-flex align-items-center">
            <div className="profileImg">
              <img src={img1} alt="" />
            </div>
            <div className="profileDetails ">
              <span className="profileName">mr. Sujoy Ghosal</span>
              <p>
                <span>3 days ago 12:30 </span>
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  width="1em"
                  height="1em"
                  class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1kpxq89 xsmyaan"
                  title="Shared with Public"
                >
                  <title>Shared with Public</title>
                  <g fill-rule="evenodd" transform="translate(-448 -544)">
                    <g>
                      <path
                        d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434"
                        transform="translate(354 143.5)"
                      ></path>
                      <path
                        d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096"
                        transform="translate(354 143.5)"
                      ></path>
                      <path
                        fill-rule="nonzero"
                        d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
                        transform="translate(354 143.5)"
                      ></path>
                    </g>
                  </g>
                </svg>
              </p>
            </div>
          </div>
          <div className="postCross d-flex  align-items-center">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              width="1.3em"
              height="1.3em"
              class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1qx5ct2 xw4jnvo"
            >
              <g fill-rule="evenodd" transform="translate(-446 -350)">
                <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>
              </g>
            </svg>
            <i
              data-visualcompletion="css-img"
              class="x1b0d499 x1d69dk1"
              style={{
                backgroundImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/CWSXrwUt-eA.png)",
                backgroundPosition: " 0px -105px",
                backgroundSize: "auto",
                width: "22px",
                height: "22px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
          </div>
        </div>
        <div className="postTitle px-3">post title</div>
        <div className="postimg w-100">
          <iframe
            title="video1"
            src="https://www.facebook.com/plugins/video.php?height=420&href=https%3A%2F%2Fwww.facebook.com%2F100090670322024%2Fvideos%2F1251851635480240%2F&show_text=false&width=560&t=0"
            className="w-100"
            height="330"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen="true"
          ></iframe>
        </div>
        <div className="postComments px-3 pb-2">
          <Comments />
        </div>
      </div>
      <div className="postData col-12  my-3 p-0">
        <div className="postHeader d-flex justify-content-between align-items-center px-3 pt-2">
          <div className="profile d-flex align-items-center">
            <div className="profileImg">
              <img src={img2} alt="" />
            </div>
            <div className="profileDetails ">
              <span className="profileName">mr. Sujoy Ghosal</span>
              <p>
                <span>3 days ago 12:30 </span>
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  width="1em"
                  height="1em"
                  class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1kpxq89 xsmyaan"
                  title="Shared with Public"
                >
                  <title>Shared with Public</title>
                  <g fill-rule="evenodd" transform="translate(-448 -544)">
                    <g>
                      <path
                        d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434"
                        transform="translate(354 143.5)"
                      ></path>
                      <path
                        d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096"
                        transform="translate(354 143.5)"
                      ></path>
                      <path
                        fill-rule="nonzero"
                        d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
                        transform="translate(354 143.5)"
                      ></path>
                    </g>
                  </g>
                </svg>
              </p>
            </div>
          </div>
          <div className="postCross d-flex  align-items-center">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              width="1.3em"
              height="1.3em"
              class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1qx5ct2 xw4jnvo"
            >
              <g fill-rule="evenodd" transform="translate(-446 -350)">
                <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>
              </g>
            </svg>
            <i
              data-visualcompletion="css-img"
              class="x1b0d499 x1d69dk1"
              style={{
                backgroundImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/CWSXrwUt-eA.png)",
                backgroundPosition: " 0px -105px",
                backgroundSize: "auto",
                width: "22px",
                height: "22px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
          </div>
        </div>
        <div className="postTitle px-3">post title</div>
        <div className="postimg w-100">
          <iframe
            title="video2"
            src="https://www.facebook.com/plugins/video.php?height=420&href=https%3A%2F%2Fwww.facebook.com%2F126579623784412%2Fvideos%2F763261412221903%2F&show_text=false&width=560&t=0"
            className="w-100"
            height="350"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen="true"
          ></iframe>
        </div>
        <div className="postComments px-3 pb-2">
          <Comments />
        </div>
      </div>
      <div className="postData col-12  my-3 p-0">
        <div className="postHeader d-flex justify-content-between align-items-center px-3 pt-2">
          <div className="profile d-flex align-items-center">
            <div className="profileImg">
              <img src={img3} alt="" />
            </div>
            <div className="profileDetails ">
              <span className="profileName">CrishtoFer Column</span>
              <p>
                <span>3 days ago 12:30 </span>
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  width="1em"
                  height="1em"
                  class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1kpxq89 xsmyaan"
                  title="Shared with Public"
                >
                  <title>Shared with Public</title>
                  <g fill-rule="evenodd" transform="translate(-448 -544)">
                    <g>
                      <path
                        d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434"
                        transform="translate(354 143.5)"
                      ></path>
                      <path
                        d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096"
                        transform="translate(354 143.5)"
                      ></path>
                      <path
                        fill-rule="nonzero"
                        d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
                        transform="translate(354 143.5)"
                      ></path>
                    </g>
                  </g>
                </svg>
              </p>
            </div>
          </div>
          <div className="postCross d-flex  align-items-center">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              width="1.3em"
              height="1.3em"
              class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1qx5ct2 xw4jnvo"
            >
              <g fill-rule="evenodd" transform="translate(-446 -350)">
                <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>
              </g>
            </svg>
            <i
              data-visualcompletion="css-img"
              class="x1b0d499 x1d69dk1"
              style={{
                backgroundImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/CWSXrwUt-eA.png)",
                backgroundPosition: " 0px -105px",
                backgroundSize: "auto",
                width: "22px",
                height: "22px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
          </div>
        </div>
        <div className="postTitle px-3">post title</div>
        <div className="postimg w-100">
          <iframe
            title="video3"
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FBoxofficeMovieScenes%2Fvideos%2F2247979995332520%2F&show_text=false&width=560&t=0"
            className="w-100"
            height="350"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen="true"
          ></iframe>
        </div>
        <div className="postComments px-3 pb-2">
          <Comments />
        </div>
      </div>
      <div className="postData col-12  my-3 p-0">
        <div className="postHeader d-flex justify-content-between align-items-center px-3 pt-2">
          <div className="profile d-flex align-items-center">
            <div className="profileImg">
              <img src={img4} alt="" />
            </div>
            <div className="profileDetails ">
              <span className="profileName">Selina Gomez</span>
              <p>
                <span>3 days ago 12:30 </span>
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  width="1em"
                  height="1em"
                  class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1kpxq89 xsmyaan"
                  title="Shared with Public"
                >
                  <title>Shared with Public</title>
                  <g fill-rule="evenodd" transform="translate(-448 -544)">
                    <g>
                      <path
                        d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434"
                        transform="translate(354 143.5)"
                      ></path>
                      <path
                        d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096"
                        transform="translate(354 143.5)"
                      ></path>
                      <path
                        fill-rule="nonzero"
                        d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
                        transform="translate(354 143.5)"
                      ></path>
                    </g>
                  </g>
                </svg>
              </p>
            </div>
          </div>
          <div className="postCross d-flex  align-items-center">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              width="1.3em"
              height="1.3em"
              class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1qx5ct2 xw4jnvo"
            >
              <g fill-rule="evenodd" transform="translate(-446 -350)">
                <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>
              </g>
            </svg>
            <i
              data-visualcompletion="css-img"
              class="x1b0d499 x1d69dk1"
              style={{
                backgroundImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/CWSXrwUt-eA.png)",
                backgroundPosition: " 0px -105px",
                backgroundSize: "auto",
                width: "22px",
                height: "22px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
          </div>
        </div>
        <div className="postTitle px-3">post title</div>
        <div className="postimg w-100">
          <iframe
            title="video4"
            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FOfficial.Masud.Abdullah%2Fvideos%2F862011574484077%2F&show_text=false&width=267&t=0"
            className="w-100"
            style={{ border: "none", overflow: "hidden",objectFit:'cover',height:"90vh" }}
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen="true"
          ></iframe>
        </div>
        <div className="postComments px-3 pb-2">
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default Video;
