import * as Yup from "yup"
export const INITIALLVALUES={
    name:"",
    email:"",
    password:"",
    role:"Editor"
}
export const VALIDATION = Yup.object().shape({
    name:Yup.string().required("Enter username"),
    email:Yup.string().email('Enter valid email').required("Enter email"),
    password:Yup.string().required("Enter password"),
})
export const VALIDATION2 = Yup.object().shape({
    name:Yup.string().required("Enter username"),
    email:Yup.string().email('Enter valid email').required("Enter email"),
})