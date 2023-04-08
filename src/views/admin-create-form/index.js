import { Box, Button, Grid, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import { ErrorMessage, FieldArray, Formik } from 'formik';
import React, { useState } from 'react';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import { INITAILVALUES, VALIDATION, _INITAILVALUES } from './schema';
import {
  IconCheckbox,
  IconPhoto,
  IconSelector,
  IconTextSize,
  IconTrash,
  IconTrashX,
} from '@tabler/icons';
import { http } from 'src/utilits/http';
import Loading from 'src/components/loading';
import { useNavigate } from 'react-router';
import './AdminForm.css';
import { useRef } from 'react';

const AdminCreateForm = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const InputRef = useRef([]);

  const QUESTION_TYPES = [
    { title: 'Text', icon: IconTextSize, value: 'text' },
    { title: 'Image', icon: IconPhoto, value: 'image' },
    // { title: 'Multiselect', icon: IconCheckbox, value: 'multiselect' },
    // { title: 'Singleselect', icon: IconSelector, value: 'radio' },
  ];

  const handleFormSubmit = (values) => {
    setLoading(true);
    http
      .post('questionare/create-survey/', { ...values, is_enabled: true })
      .then((res) => {
        if (res.status < 300) {
          setLoading(false);
          navigate('/admin-forms/');
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const setInputFocus = () => {
    setTimeout(() => {
      InputRef.current[InputRef.current.length - 1].focus();
    }, 0);
  };

  const handleRemoveQuestion = () => {
    // console.log(InputRef.current)
    InputRef.current =InputRef.current.filter((ref) => ref != null);
    
  };

  return (
    <Stack className="create-form">
      {loading && <Loading />}
      <h2>Create Form</h2>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={INITAILVALUES}
        validationSchema={VALIDATION}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit, setValues }) => (
          <form onSubmit={handleSubmit}>
            <Stack>
              {/* <h3>Form Details</h3> */}
              <Box style={{ display: 'flex', gap: '0 10px' }}>
                <CustomTextField
                  id="name"
                  name="name"
                  value={values.name}
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Form title"
                />
                <Button color="primary" variant="contained" type="submit">
                  Publish
                </Button>
              </Box>
              {errors.name && touched.name && (
                <Stack mt={1} color="red">
                  {errors.name}
                </Stack>
              )}
              <Stack mt={2}>
                <h2>Create questions</h2>
                <FieldArray name="question_set">
                  {({ form, push, remove }) => (
                    <Stack style={{ display: 'flex', flexDirection: 'row' }}>
                      <Stack mr={2}>
                        {QUESTION_TYPES.map((type, index) => {
                          return (
                            <Box
                              key={index}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              flexDirection="column"
                              mb={2}
                              bgcolor="#e3e6ff"
                              p={1}
                              onClick={() => {
                                push({ text: type.title, answer_type: type.value });
                                setInputFocus();
                              }}
                            >
                              <Stack>
                                <type.icon />
                              </Stack>
                              <Stack>{type.title}</Stack>
                            </Box>
                          );
                        })}
                      </Stack>
                      <Stack width="100%" bgcolor="#e3e6ff" px={2}>
                        {form.values.question_set &&
                          form.values.question_set.length > 0 &&
                          form.values.question_set.map((question, index) => (
                            <Box
                              key={index}
                              pb={1}
                              pt={1}
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}
                              className="question"
                            >
                              <Stack width="100%">
                                <input
                                  value={values.question_set[index].text}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name={`question_set[${index}].text`}
                                  className="inputBox"
                                  placeholder="Enter question"
                                  ref={(ref) => {
                                    InputRef.current[index] = ref;
                                  }}
                                />
                              </Stack>
                              <button
                                style={{
                                  border: 'none',
                                  outline: 'none',
                                  margin: '0 5px',
                                  cursor: 'pointer',
                                  color: 'red',
                                  background: 'none',
                                }}
                                type="button"
                                onClick={() => {
                                  remove(index);
                                  handleRemoveQuestion();
                                }}
                              >
                                <IconTrash size={16} />
                              </button>
                            </Box>
                          ))}
                      </Stack>
                    </Stack>
                  )}
                </FieldArray>
              </Stack>
            </Stack>
          </form>
        )}
      </Formik>
    </Stack>
  );
};

export default AdminCreateForm;
