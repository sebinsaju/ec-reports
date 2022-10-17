import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import Button from "../button";
import InputField from "../input-field";
import style from "./Login.module.scss";
import axios from "axios";
import { baseURL } from "../../const";
import Loading from "../loading";
const Login = ({token,link}) => {
  const[loading,setLoading] = useState(false);
  const[error,setError] = useState("");
  const Validate = Yup.object({
    email: Yup.string().required("Enter Username"),
    password: Yup.string().required("Enter Password"),
  });
  const INITIALLVALUES = {
    email: "",
    password: "",
  };
  const handleSubmit = (values) => {
    setLoading(true)
    axios.post(`${baseURL}${link}`,{...values}).then((res)=>{
      if(res.data.token){
        localStorage.setItem(`${token}`,res.data.token);
      }
      window.location.href="/admin"
      setLoading(false)
    }).catch((err)=>{setError(err.response.data.message), setLoading(false)})
  };
  return (
    <div className={style.login}>
     {loading?<Loading />:""}
      <div className={style.login_wrapper}>
        <div className={style.title}>Login</div>
        <Formik
          initialValues={INITIALLVALUES}
          onSubmit={handleSubmit}
          validationSchema={Validate}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <form className={style.login_form} onSubmit={handleSubmit}>
              <InputField>
                <input
                  type="text"
                  placeholder="username"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                />
                <div className={style.error}>
                  <ErrorMessage name="email" />
                </div>
              </InputField>
              <InputField>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                />
                <div className={style.error}>
                  <ErrorMessage name="password" />
                </div>
              </InputField>
              {error && <div className={style.error_non_field}>
                {error}
              </div>}
              <button className={style.btn_login} disabled={(!values.email)||(!values.password)} type="submit">Login</button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
