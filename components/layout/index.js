import React from "react";
import Header from "../header";
import style from "./Layout.module.scss"
const Layout = (props) => {
  return (
    <div>
      <div className={style.header}>
        <Header />
      </div>
      <div className={`container ${style.content}`}>{props.children}</div>
    </div>
  );
};

export default Layout;
