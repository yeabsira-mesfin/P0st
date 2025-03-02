import React from "react";
import Post from "./Post";
import classes from "../components/PostList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";
const PostList = () => {
      const [text,setText] = useState('');
      const [author,setAuthor] = useState('');
      const [modalVisible,setModal] = useState(true);

      function hideModaHandler(){
        setModal(()=>!modalVisible);
      }
     
      function bodychangeHandler(event) {
       setText(event.target.value);
      }
      function authorChangeHandler(event) {
       setAuthor(event.target.value);
      }
   
  return (
    <>
      <Modal onClose={hideModaHandler} value = {modalVisible}>
          <NewPost onBodyChange ={bodychangeHandler} onAuthorChange = {authorChangeHandler}/>
      </Modal>
      <ul className={classes.posts}>
        <Post name={text} course={author} />
        <Post name={text} course={author} />
        
      </ul>
    </>
  );
};

export default PostList;
