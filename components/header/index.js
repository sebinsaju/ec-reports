import React from "react";
import style from "./Header.module.scss";
import {FaPowerOff} from 'react-icons/fa'
const Header = ({logoWhite}) => {
  return (
    <header className={style.header}>
      <span className={`${style.logo} ${logoWhite?style.white:""}`}>EC Reports</span>
      <span className={style.logout_icon}>
      {/* <FaPowerOff /> */}
      </span>
    </header>
  );
};

export default Header;
