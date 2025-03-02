import React from "react";
import Post from "./Post";
import classes from "../components/PostList.module.css";
import NewPost from "./NewPost";
const PostList = () => {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post name={"Yeabsira"} course={"React.js is the best"} />
        <Post name={"Mesfin"} course={"React is cool bro!"} />
      </ul>
    </>
  );
};

export default PostList;
