import React, { useEffect } from "react";
import UserLayout from "../../components/user-layout";
import { AiOutlineForm } from "react-icons/ai";
import style from "./User.module.scss";
import form from "../../assets/images/form.png";
import {instance} from "../../axios/admin-instance";
import Link from "next/link";

const User = () => {
  useEffect(()=>{
    instance.get('user/forms').then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
  },[])
  return (
    <div className={style.user}>
      <UserLayout>
        <h3 className={style.title}>Forms</h3>
        <div className="row">
          {/* {data &&
            data.map((item, index) => {
              return (
                <div className="col-lg-2 col-md-4 col-sm-6 col-6" key={index}>
                  <Link href={item.title}>
                    <a>
                      <div className={style.form}>
                        <img src={form.src} />
                        <div className={style.form_name}>{item.title}</div>
                      </div>
                    </a>
                  </Link>
                </div>
              );
            })} */}
        </div>
      </UserLayout>
    </div>
  );
};

export default User;
