import React from "react";
import Post from "./Post";
import classes from "../components/PostList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
const PostList = () => {
      const [text,setText] = useState('');
      const [author,setAuthor] = useState('');
     
      function bodychangeHandler(event) {
       setText(event.target.value);
      }
      function authorChangeHandler(event) {
       setAuthor(event.target.value);
      }
   
  return (
    <>
      <NewPost onBodyChange ={bodychangeHandler} onAuthorChange = {authorChangeHandler}/>
      <ul className={classes.posts}>
        <Post name={text} course={author} />
        <Post name={text} course={author} />
        
      </ul>
    </>
  );
};

export default PostList;
