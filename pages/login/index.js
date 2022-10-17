import { ErrorMessage, Formik } from "formik";
import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import InputField from "../../components/input-field";
import style from "./Login.module.scss";
import * as Yup from "yup";
import Button from "../../components/button";
import axios from "axios";
import Loading from "../../components/loading";
import { useRouter } from "next/router";
const Login = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const route = useRouter();
  const INITIALVALUES = {
    email: "",
    password: "",
  };
  const VALIDATION = Yup.object({
    email: Yup.string().required("Enter Username"),
    password: Yup.string().required("Enter Password"),
  });
  const handleSubmit = (values) => {
    setLoading(true);
    axios
      .post(
        "https://app-form-project.herokuapp.com/api/v1/common/login",
        values
      )
      .then((res) => {
        console.log(res);
        if (res.data.token && res.data.role) {
          localStorage.setItem("Token", res.data.token);
          localStorage.setItem("Role", res.data.role);
          if (res.data.role === "admin") {
            route.push("employee-admin");
          }
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err?.response?.data?.message);
        setLoading(false);
      });
  };
  return (
    <div className={style.login}>
      {loading && <Loading />}
      <div className={style.form_wrapper}>
        <div className={style.welcome_title}>Welcome back!</div>
        <Formik
          initialValues={INITIALVALUES}
          validationSchema={VALIDATION}
          onSubmit={handleSubmit}
        >
          {({ values, handleBlur, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <InputField>
                <label>Email</label>
                <input
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                  value={values.email}
                />
              </InputField>
              <div className={style.error}>
                <ErrorMessage name="email" />
              </div>
              <InputField>
                <label>Password</label>
                <input
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="password"
                  value={values.password}
                />
              </InputField>
              <div className={style.error}>
                <ErrorMessage name="password" />
              </div>
              {error && <div className={style.error}>{error}</div>}
              <Button primary fullWidth>
                <button>Submit</button>
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
