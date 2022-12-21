import React from 'react';
import style from "./UserModule.module.scss";
import avatar from "../../assets/images/avatar.png"
import { Logout } from '../../utility/logout';
const UserModule = () => {
  return (
    <div className={style.user_module}><img src={avatar.src} />
    <span className={style.name}>Sebin saju</span>
    <div className={style.logout} onClick={Logout}>logout</div>
    </div>
  )
}

export default UserModule