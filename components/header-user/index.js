import React from "react";
import style from "./HeaderUser.module.scss";
import { FiMenu } from "react-icons/fi";
import UserModule from "../user-module";
const HeaderUser = ({menu}) => {
  return (
    <div className={style.header}>
      <div className={style.menu_icon} onClick={menu}>
        <FiMenu />
      </div>
      <div className={style.logo}>EC REPORTS</div>
      <div className={style.user}><UserModule /></div>
    </div>
  );
};

export default HeaderUser;
