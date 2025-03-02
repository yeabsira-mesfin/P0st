import React from 'react'
import Post from './Post'
import classes from '../components/PostList.module.css'
const PostList = () => {
   
  return (
    <ul className={classes.posts}>
       <Post name={'Yeabsira'} course={"React.js is the best"}/>
       <Post name={'Mesfin'} course={"React is cool bro!"}/>
       
    </ul>
  )
}

export default PostList
