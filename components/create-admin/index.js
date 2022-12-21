import React, { useState } from "react";
import style from "./CreateAdmin.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { Formik } from "formik";
import InputField from "../input-field";
import Button from "../button";
import { instance } from "../../config/instanceSuperAdmin";
import { useRouter } from "next/router";
import * as Yup from "yup"
const CreateAdmin = ({ close }) => {
  const [image, setImage] = useState("");
  const router = useRouter();
  const INITIALVALUES = {
    name: "",
    email: "",
    password: "",
  };
  const handleFormSubmit = (values) => {
    instance.post("superAdmin/newadmin", { ...values, image }).then((res) => {
      console.log(res)
      router.push("/admin");
    }).catch((err)=>{console.log(err)});
  };
  const VALIDATION = Yup.object().shape({
    name:Yup.string().required("Enter name"),
    email:Yup.string().required("Enter email"),
    password:Yup.string().required("Enter a password")
  })
  return (
    <div className={style.form_wrapper}>
      <span className={style.close} onClick={close}>
        <AiOutlineClose />
      </span>
      <div className={style.title}>Admin Register</div>
      <Formik initialValues={INITIALVALUES} onSubmit={handleFormSubmit} validationSchema={VALIDATION}>
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit} className={style.form_wrapper}>
            <InputField> 
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </InputField>
            <InputField>
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </InputField>
            <InputField>
              <input
                type="text"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </InputField>
            <input
              type="file"
              name="logo"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
            <Button primary>
              <button type="Submit">Submit</button>
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default CreateAdmin;