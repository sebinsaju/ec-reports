import React, { useState } from 'react'
import style from "./CreateAdmin.module.scss";
import {AiOutlineClose} from "react-icons/ai"
import { Formik } from 'formik';
import InputField from '../input-field';
import Button from '../button';
const CreateAdmin = ({close}) => {
    const [image,setImage] = useState("");
    const INITIALVALUES = {
        name:"",
        email:"",
        password:""
    }
  return (
    <div className={style.form_wrapper}>
        {console.log(image)}
        <span className={style.close} onClick={close}><AiOutlineClose /></span>
        <div className={style.title}>Admin Register</div>
        <Formik initialValues={INITIALVALUES}>
            {({values,handleChange,handleBlur,handleSubmit})=>(
                <form onSubmit={handleSubmit} className={style.form_wrapper}>
                <InputField>
                <input type="text" placeholder="Name" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur}/>
                </InputField>
                <InputField>
                <input type="text" placeholder="Email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                </InputField>
                <InputField>
                <input type="text" placeholder="Password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                </InputField>
                <input type="file" name="logo" onChange={(e)=>{setImage(e.target.files[0])}}/>
                <Button primary>
                    <button>Submit</button>
                </Button>
                </form>
            )}
        </Formik>
    </div>
  )
}

export default CreateAdmin