import React from "react";
import Post from "./Post";
import classes from "../components/PostList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";
const PostList = (props) => {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");



  function bodychangeHandler(event) {
    setText(event.target.value);
  }
  function authorChangeHandler(event) {
    setAuthor(event.target.value);
  }

  return (
    <>
      {props.isPosting && (
        <Modal onClose={props.onStopPosting}>
          <NewPost
            onBodyChange={bodychangeHandler}
            onAuthorChange={authorChangeHandler}
            onCancel={props.onStopPosting}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post name={text} course={author} />
        <Post
          name={"Yeabsira working hard to land a remote job"}
          course={"Yeaba"}
        />
      </ul>
    </>
  );
};

export default PostList;
