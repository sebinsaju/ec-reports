import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { ErrorMessage, Formik } from 'formik';
import React, { useState } from 'react';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import Loading from 'src/components/loading';
import { http } from 'src/utilits/http';
import { INITAILVALUES, VALIDATION_SCHEMA } from './schema';

const CreateUser = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (values, { resetForm }) => {
    setLoading(true);
    http
      .post('/users/users/', values)
      .then((res) => {
        setLoading(false);
        resetForm({ values: '' });
        setSuccess(true);
        setError('');
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data);
      });
  };

  return (
    <Stack className="admin-create-user">
      {loading && <Loading />}
      <h2>Create User</h2>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={INITAILVALUES}
        validationSchema={VALIDATION_SCHEMA}
      >
        {({ values, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Stack mt={4} mb={4}>
              <Box>
                <CustomTextField
                  id="first_name"
                  name="first_name"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.first_name}
                  label="First Name"
                />
                <Stack mt={1} mb={1} color={"red"}>
                  <ErrorMessage name="first_name" />
                </Stack>
                {error.first_name && <Stack color={'red'}>{error.first_name}</Stack>}
              </Box>
              <Box>
                <CustomTextField
                  id="last_name"
                  name="last_name"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.last_name}
                  label="Last Name *"
                />
                <Stack mt={1} mb={1} color={"red"}>
                  <ErrorMessage name="last_name" />
                </Stack>
                {error.last_name && <Stack color={'red'}>{error.last_name}</Stack>}
              </Box>
              <Box>
                <CustomTextField
                  id="username"
                  name="username"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  label="Username *"
                />
                <Stack mt={1} mb={1} color={"red"}>
                  <ErrorMessage name="username" />
                </Stack>
                {error.username && <Stack color={'red'}>{error.username}</Stack>}
              </Box>
              <Box>
                <CustomTextField
                  id="email"
                  name="email"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  label="Email *"
                />
                <Stack mt={1} mb={1} color={"red"}>
                  <ErrorMessage name="email" />
                </Stack>
                {error.email && <Stack color={'red'}>{error.email}</Stack>}
              </Box>
              <Box>
                <CustomTextField
                  id="password"
                  name="password"
                  fullWidth
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  label="Password *"
                />
                <Stack mt={1} mb={1} color={"red"}>
                  <ErrorMessage name="password" />
                </Stack>
                {error.password && <Stack color={'red'}>{error.password}</Stack>}
              </Box>
              <Box>
                {success && (
                  <Stack mb={3} fontSize={20} color={'green'}>
                    User Created Successfully
                  </Stack>
                )}
                <Button color="primary" variant="contained" size="large" type="submit">
                  Submit
                </Button>
              </Box>
            </Stack>
          </form>
        )}
      </Formik>
    </Stack>
  );
};

export default CreateUser;
