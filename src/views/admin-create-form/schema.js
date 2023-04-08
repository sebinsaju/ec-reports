import * as Yup from 'yup'
// export const _INITAILVALUES = {
//         name: "Sebin",
//         question_set: [
//             {
//                 id: 5,
//                 text: "What is your name?",
//                 answer_type: "text",
//                 order_by: 1,
//                 option_set: []
//             },
//             {
//                 id: 6,
//                 text: "How old are you?",
//                 answer_type: "number",
//                 order_by: 2,
//                 option_set: []
//             },
//             {
//                 id: 7,
//                 text: "What is your favorite color?",
//                 answer_type: "select",
//                 order_by: 3,
//                 option_set: [
//                     {
//                         id: 7,
//                         text: "Red"
//                     },
//                     {
//                         id: 8,
//                         text: "Blue"
//                     },
//                     {
//                         id: 9,
//                         text: "Green"
//                     }
//                 ]
//             },
//             {
//                 id: 8,
//                 text: "Which of the following do you like?",
//                 answer_type: "multi-select",
//                 order_by: 4
//             }
//         ]
// };
export const INITAILVALUES ={
    name:"",
    question_set:[]
}
export const VALIDATION =Yup.object().shape({
    name:Yup.string().required("Enter form title")
})