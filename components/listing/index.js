import React, { useEffect, useState } from "react";
import { instance } from "../../axios/admin-instance";
import Loading from "../loading";
import style from "./Listing.module.scss";

const Listing = ({ children, endpoint }) => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    instance
      .get(endpoint)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className={style.listing}>
      {loading && <Loading />}
      {children &&
        typeof children == "function" &&
        children(data, error)}
    </div>
  );
};

export default Listing;
