import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { ErrorMessage, Formik } from 'formik';
import { INITAILVALUES, VALIDATION } from './schema';
import { http, login } from 'src/utilits/http';
import { useDispatch } from 'react-redux';
import { updateUser } from 'src/features/userSlice';

const AuthLogin = ({ title, subtitle, subtext }) => {
  const [error, setError] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigation = (role) => {
    if (role == 'ADMIN') {
      navigate('/admin-dashboard');
    } else if (role == 'USER') {
      navigate('/dashboard');
    }
  };

  useEffect(() => {
    http
      .get('/verify_token/')
      .then((res) => {
        if (res.data) {
          dispatch(updateUser({ ...res.data, is_logged_in: true }));
          handleNavigation(res.data.user_role);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleFormSubmit = (values) => {
    login
      .post('/authenticate/', values)
      .then((res) => {
        setError([]);
        if (res.status == 200) {
          console.log(res.data.token.key);
          if (res.data.token.key) {
            localStorage.setItem('Token', res.data.token.key);
            dispatch(updateUser({ ...res.data, is_logged_in: true }));
            handleNavigation(res.data.user_role);
          }
        }
      })
      .catch((err) => {
        setError(err?.response?.data?.non_field_errors);
      });
  };
  return (
    <Formik initialValues={INITAILVALUES} validationSchema={VALIDATION} onSubmit={handleFormSubmit}>
      {({ values, handleBlur, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          {title ? (
            <Typography fontWeight="700" variant="h2" mb={1}>
              {title}
            </Typography>
          ) : null}

          {subtext}

          <Stack mb={4}>
            <Box>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                component="label"
                htmlFor="username"
                mb="5px"
              >
                Username
              </Typography>
              <CustomTextField
                id="username"
                variant="outlined"
                fullWidth
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Stack mt={2} color="red">
                <ErrorMessage name="username" />
              </Stack>
            </Box>
            <Box mt="25px">
              <Typography
                variant="subtitle1"
                fontWeight={600}
                component="label"
                htmlFor="password"
                mb="5px"
              >
                Password
              </Typography>
              <CustomTextField
                id="password"
                type="password"
                variant="outlined"
                fullWidth
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Stack mt={2} color="red">
                <ErrorMessage name="password" />
              </Stack>
            </Box>
          </Stack>
          {error && (
            <Box color="red">
              {error.map((error, index) => {
                return (
                  <Stack mb={3} key={index}>
                    {error}
                  </Stack>
                );
              })}
            </Box>
          )}
          <Box>
            <Button color="primary" variant="contained" size="large" fullWidth type="submit">
              Sign In
            </Button>
          </Box>
          {subtitle}
        </form>
      )}
    </Formik>
  );
};

export default AuthLogin;
