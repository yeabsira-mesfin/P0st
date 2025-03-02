import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost() {
  const [text,setText] = useState('');
 
  function changeBodyhandler(event) {
   setText(event.target.value);
  }
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyhandler} />
      </p>
      <p>{text}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
