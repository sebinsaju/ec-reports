import * as Yup from "yup";

export const INITAILVALUES ={
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    user_rol: 10,
    password: ""
}
export const VALIDATION_SCHEMA = Yup.object().shape({
    first_name:Yup.string().required('Enter Firstname'),
    last_name:Yup.string().required('Enter Lastname'),
    username:Yup.string().required('Enter Username'),
    email:Yup.string().required('Enter Email').email('Enter Valid Email'),
    password:Yup.string().required('Enter Password'),
}) 