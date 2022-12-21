import *  as Yup from "yup"
export const INITIAL ={
    title:"",
    description:"",
    question:"",
    type:"text",
    option:""
}
export const VALIDATION = Yup.object().shape({
    title:Yup.string().required("Enter title"),
    description:Yup.string().required("Enter description"),
})