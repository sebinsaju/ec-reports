import * as Yup from "yup";

export const INITAILVALUES = {
    username:"",
    password:"",
}

export const VALIDATION = Yup.object().shape({
    username:Yup.string().required("Enter Username"),
    password:Yup.string().required("Enter Password")
})