import React from 'react'
import style from "./SidebarUser.module.scss";
import {MdClose} from "react-icons/md"
const SidebarUser = ({close}) => {
  const data = [
    {title:"Form",link:"/user",active:"true"},
    {title:"Submitted",link:"/user"},
    {title:"Pending",link:"/user"},
  ]
  return (
    <div className={style.sidebar}>
      <div className={style.close} onClick={close}><MdClose /></div>
      <div className={style.sidebar_wrapper}>
        {data.map((item,index)=>{
          return(
            <div className={`${style.menu_item} ${item.active?style.active:""}`}>{item.title}</div>
          )
        })}
      </div>
    </div>
  )
}

export default SidebarUser