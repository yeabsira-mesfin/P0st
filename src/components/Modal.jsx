import React from 'react'
import classes from '../components/Modal.module.css'

const Modal = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onClose}>
        <dialog open = {props.value} className={classes.modal}>
            {props.children}
        </dialog>
      </div>
    </>
  )
}

export default Modal
