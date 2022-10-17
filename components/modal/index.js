import React from "react";
import style from "./Modal.module.scss";

const Modal = (props) => {
  return(
    <div className={style.modal}>
        {props.children}
    </div>
  )
};

export default Modal;
