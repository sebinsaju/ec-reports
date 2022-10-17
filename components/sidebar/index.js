import React from "react";
import style from "./Sidebar.module.scss";
import { MENU } from "./MENU";
import Link from 'next/link'
import { useRouter } from "next/router";
import { Logout } from "../../utility/logout";

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className={style.sidebar}>
      <div className={style.logo}>EC REPORTS</div>
      <ul className={style.menu_wrapper}>
        {MENU.map((item, index) => {
          return (
            <li key={index} className={router.route === item.slug || (router.route==="/employee-admin/users/add-new"||router.route==="/employee-admin/users/edit/[id]")&&item.slug==="/employee-admin/users" ||router.route==="/employee-admin/forms/create"&&item.slug==="/employee-admin/forms"?style.active:""}>
              <Link href={item.slug}>
                <a>{item.title}</a>
              </Link>
            </li>
          );
        })}
        <li><a onClick={()=>{Logout()}}>Logout</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
