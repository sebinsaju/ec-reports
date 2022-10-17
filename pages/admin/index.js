import axios from "axios";
import React, { useEffect, useState } from "react";
import NoSSR from "react-no-ssr";
import Button from "../../components/button";
import Loading from "../../components/loading";
import Login from "../../components/login";
import Popup from "../../components/popup";
import { baseURL } from "../../const";
import style from "./Admin.module.scss";
import { SUPERADMIN_CONFIG } from "../../config/config";
import { instance } from "../../config/instanceSuperAdmin";
import Header from "../../components/header";
import Modal from "../../components/modal";
import CreateAdmin from "../../components/create-admin";
const Admin = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    instance
      .get("superadmin/viewadmins")
      .then((res) => {
        setData(res.data.admins);
      }, setLoading(false))
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  const isLoagedIn = () => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("S_Token")) {
        return true;
      } else {
        return false;
      }
    }
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const close = () => {
    setIsModalOpen(false)
  };
  return (
    <div>
      {loading ? <Loading /> : ""}
      <NoSSR>
        {!isLoagedIn() ? <Login token="S_Token" link="superadmin/login"/> : ""}
        <Header />
        <div className="container">
          <div className={style.btn_wrapper}>
            <Button primary>
              <button onClick={toggleModal}>Add New User</button>
            </Button>
          </div>
          <table className={`table ${style.table}`}>
            <thead className={`thead-dark ${style.table_head}`}>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item, index) => {
                  return (
                    <tr>
                      <td scope="row">{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.createdAt}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </NoSSR>
      {isModalOpen && <Modal>
        <CreateAdmin close={close}/>
        </Modal>}
    </div>
  );
};

export default Admin;
