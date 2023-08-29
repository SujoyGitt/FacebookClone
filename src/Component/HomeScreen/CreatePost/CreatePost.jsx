import React from "react";
import profile from "../Stories/Storiesimg/profile.jpg";
import { useState } from "react";
import CreatePostBox from "./CreatePostBox";
const CreatePost = () => {
  const [createPostShow, setcreatePostShow] = useState(false);

  return (
    <>
      <div className="createPost w-full col-xl-9 mt-3 ">
        <div className="postHeader d-flex justify-content-between">
          <div className="profile">
            <img src={profile} alt="" />
          </div>
          <input
            type="text"
            placeholder="What's on your mind, Sû?"
            readOnly
            onClick={() => setcreatePostShow(true)}
          />
        </div>
        <div className="postFooter d-flex justify-content-around mt-3 mb-2">
          <div className="liveVideo posticon">
            <img
              height="24"
              width="24"
              alt=""
              referrerpolicy="origin-when-cross-origin"
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png"
            />
            <span>Live video</span>
          </div>
          <div className="photo posticon">
            <img
              height="24"
              width="24"
              alt=""
              referrerpolicy="origin-when-cross-origin"
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png"
            />
            <span>Photo/video</span>
          </div>
          <div className="photo posticon">
            <img
              height="24"
              width="24"
              alt=""
              referrerpolicy="origin-when-cross-origin"
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png"
            />
            <span>Feeling/activity</span>
          </div>
        </div>
      </div>
      {createPostShow&&<CreatePostBox setcreatePostShow={setcreatePostShow}/>}
    </>
  );
};

export default CreatePost;
