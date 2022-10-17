import axios from "axios";
import { ErrorMessage, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { instance } from "../../axios/admin-instance";
import { ENDPOINT } from "../../axios/ENDPOINT";
import Button from "../button";
import InputField from "../input-field";
import style from "./AddUser.module.scss";
import { INITIALLVALUES, VALIDATION, VALIDATION2 } from "./schema";
import Loading from "../loading";
import { useRouter } from "next/router";
import { getData } from "../../utility/getData";
import { toast } from "react-toastify";
const AddNewUser = ({init}) => {
  const router = useRouter();
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const formSubmit = (values) => {
    setLoading(true);
    instance
      .post(`${init?`${ENDPOINT.userSingle}/${init._id}/edit`:ENDPOINT.newUser}`, values)
      .then((res) => {
        router.push('/employee-admin/users')
        setLoading(false);
        toast(init?'User Updated successfully':'User created successfully')
      })
      .catch((err) => {
        if(err&&err.response && err.response.data&& err.response.data.message){
          setError(err.response.data.message)
        }
        setLoading(false)
      });
    console.log(values)
  };
  return (
    <div className={style.add_user}>
      {loading && <Loading />}
      <Formik
        initialValues={init?init:INITIALLVALUES}
        validationSchema={init?VALIDATION2:VALIDATION}
        onSubmit={formSubmit}
      >
        {({ values, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <InputField name="name">
              <input
                name="name"
                placeholder="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
              />
            </InputField>
            <InputField name="email">
              <input
                name="email"
                placeholder="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
              />
            </InputField>
            <InputField name="password">
              <input
                name="password"
                placeholder="Password"
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </InputField>
            <div>
              <select name="role" onChange={handleChange} onBlur={handleBlur}>
                <option value="Editor">Editor</option>
                <option value="Reader">Reader</option>
              </select>
            </div>
            {error &&<div style={{color:"red"}}>{error}</div>}
            <Button primary>
              <button type="submit">Submit</button>
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddNewUser;
