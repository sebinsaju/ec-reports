import React from "react";
import Button from "../button";
import style from "./Popup.module.scss";

const Popup = ({ title, desc, submit, cancel }) => {
  const handleClick = () => {
    if (typeof submit !== "function") {
      return;
    }
    submit();
  };
  const handleCancel = () => {
    if (typeof cancel !== "function") {
      return;
    }
    cancel();
  };
  return (
    <div className={style.popup}>
      <div className={style.popup_component}>
        <div className={style.title}>{title}</div>
        <div className={style.content}>{desc}</div>
        <div className={style.btn_wrapper}>
          <Button primary>
            <button onClick={handleClick}>Ok</button>
          </Button>
          <Button>
            <button onClick={handleCancel}>Cancel</button>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
