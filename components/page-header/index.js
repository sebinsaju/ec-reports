import React from 'react'
import BreadCrumb from '../breadcrumb';
import style from "./PageHeader.module.scss";

const PageHeader = ({title,breadcrumb}) => {
  return (
    <div className={style.page_header}>
        <div className={style.title}>{title}</div>
        {breadcrumb && <BreadCrumb breadcrumb={breadcrumb}/>}
    </div>
  )
}

export default PageHeader