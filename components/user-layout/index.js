import React, { useState } from "react";
import HeaderUser from "../header-user";
import SidebarUser from "../sidebar-user";
import style from "./UserLayout.module.scss";
const UserLayout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const toggle = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className={style.user_layout}>
      {sidebar?"true":"false"}
      <div className={`${style.sidebar_wrapper} ${sidebar ? style.show : ""}`}>
        <SidebarUser close={toggle} />
      </div>
      <div className={style.header}>
        <HeaderUser menu={toggle} />
      </div>
      <div className={`container ${style.content}`}>{children}</div>
    </div>
  );
};

export default UserLayout;
