import { ErrorMessage, Formik } from "formik";
import React, { useState } from "react";
import style from "./CreateForm.module.scss";
import { INITIAL, VALIDATION } from "./schema";
import InputField from "../input-field";
import Button from "../button";
import { FormatAnsType } from "../../utility/formatAnsType";
import { instance } from "../../axios/admin-instance";
import { useRouter } from "next/router";
import Loading from "../loading";
import { toast } from "react-toastify";
const CreateFormComponent = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [questions, setquestions] = useState([]);
  const [options, setOptions] = useState([]);
  const addQuestion = (values) => {
    const { question, type } = values;
    const qno = questions.length + 1;
    setquestions((prev) => [...prev, { qno,question, type ,options}]);
    values.question = "";
    setOptions([]);
  };
  const addOption = (values) => {
    const { option } = values;
    setOptions((prev) => [...prev, option]);
    values.option = "";
  };
  const handleFormSubmit = (values) => {
    const data = { title: values.title, description: values.description };
    setLoading(true);
    instance
      .post("admin/newform", { ...data, questions })
      .then((res) => {
        router.push("/employee-admin/forms");
        setLoading(false);
        toast("Form created");
      })
      .catch((err) => {
        console.log(err), setLoading(false);
      });
    console.log(questions)
  };
  return (
    <div className={style.create_form}>
      {loading && <Loading />}
      <Formik
        initialValues={INITIAL}
        onSubmit={handleFormSubmit}
        validationSchema={VALIDATION}
      >
        {({ values, handleSubmit, handleChange, handleBlur }) => (
          <form onSubmit={handleSubmit}>
            <div className={style.section_form}>
              <h5 className={style.title}>Form Details</h5>
              <InputField>
                <input
                  type="text"
                  placeholder="Form title"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
              </InputField>
              <div className={style.error}>
                <ErrorMessage name="title" />
              </div>
              <InputField>
                <input
                  type="text"
                  placeholder="Form description"
                  name="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                />
              </InputField>
              <div className={style.error}>
                <ErrorMessage name="description" />
              </div>
            </div>
            <div className={style.section_question}>
              <h5 className={style.title}>Create Question</h5>
              <ol className={style.questions}>
                {questions.length > 0 ? (
                  <>
                    {questions.map((item, index) => {
                      return (
                        <li className={style.question_wrapper} key={index}>
                          <h6>{item.question}</h6>
                          <div>{FormatAnsType(item.type)}</div>
                          {item.options?<ul>
                            {item.options.map((option,index)=>{
                              return<li key={index}>{option}</li>
                            })}
                          </ul>:""}
                        </li>
                      );
                    })}
                  </>
                ) : (
                  <div className="text-center">No question added</div>
                )}
              </ol>
              <InputField>
                <input
                  type="text"
                  placeholder="Question"
                  name="question"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.question}
                />
              </InputField>
              <div className="mb-2">
                <label>Select answer type</label>
              </div>
              <select
                name="type"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.ans_type}
              >
                <option value="single_choice">Single Choice</option>
                <option value="multi_choice">Multi Choise</option>
                <option value="text">Text</option>
                <option value="image">Image</option>
              </select>
              {values.type === "multi_choice" ||
              values.type === "single_choice" ? (
                <div className="mb-2">
                  <h6 className="mb-2">Options</h6>
                  <div className={style.option_input}>
                    <InputField>
                      <input
                        type="text"
                        placeholder="Option"
                        name="option"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.option}
                      />
                    </InputField>
                    <div style={{ marginLeft: "10px" }}>
                      <Button>
                        <button
                          disabled={values.option ? false : true}
                          onClick={() => {
                            addOption(values);
                          }}
                          type="button"
                        >
                          Add option
                        </button>
                      </Button>
                    </div>
                  </div>
                  <ol className={style.options_display}>
                    {options.length > 0 &&
                      options.map((item, index) => {
                        return <li key={index}>{item}</li>;
                      })}
                  </ol>
                </div>
              ) : (
                ""
              )}
              <Button primary>
                <button
                  onClick={() => {
                    addQuestion(values);
                  }}
                  type="button"
                  disabled={values.question ? false : true}
                >
                  Add Question
                </button>
              </Button>
            </div>
            <div className={style.btn_wrapper}>
              <Button primary>
                <button type="submit">Submit</button>
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CreateFormComponent;
