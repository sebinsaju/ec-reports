import { ErrorMessage } from "formik";
import React from "react";
import style from "./Input.module.scss";

const InputField = (props) => {
  return (
    <div className={style.input}>
      {props.children}
      {props.name && <div style={{color:"red"}}> <ErrorMessage name={props.name} /></div>}
    </div>
  );
};

export default InputField;
