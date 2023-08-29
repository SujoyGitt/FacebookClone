import React from "react";
import { Stories } from "./Stories/Stories";
import CreatePost from "./CreatePost/CreatePost";
import { Posts } from "./PostsData/Posts";
const HomeScreen = () => {
  return (
    <div className="homeScreen col-12 col-sm-10 col-md-8 col-lg-6 m-auto m-md-0 m-lg-auto p-0 p-xl-auto">
      <Stories />
      <CreatePost />
      <Posts />
    </div>
  );
};

export default HomeScreen;
