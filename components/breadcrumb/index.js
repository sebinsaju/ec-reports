import Link from "next/link";
import React from "react";
import style from "./BreadCrumb.module.scss";

const BreadCrumb = ({ breadcrumb }) => {
  return (
    <div className={style.breadcrumb}>
      <ul>
        {breadcrumb &&
          breadcrumb.map((item, index) => {
            return(
                <li><Link href={item.slug}><a>{item.title}</a></Link></li>
            )
          })}
      </ul>
    </div>
  );
};

export default BreadCrumb;
