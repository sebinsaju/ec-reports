import React from 'react'
import style from "./Button.module.scss";

const Button = (props) => {
  return (
    <div className={`${style.button} ${props.primary?style.primary:""} ${props.fullWidth?style.fullwidth:""}`}>{props.children}</div>
  )
}

export default Button