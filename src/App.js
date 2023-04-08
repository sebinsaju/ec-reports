import { CssBaseline, ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useRoutes, useNavigate } from 'react-router-dom';
import { updateUser } from './features/userSlice';
import Router from './routes/Router';

import { baselightTheme } from './theme/DefaultColors';
import { http } from './utilits/http';
import Home from './views/Home';

function App() {
  const theme = baselightTheme;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleNavigation = (role) => {
    if (role == 'ADMIN') {
      navigate('/admin-dashboard');
    } else if (role == 'USER') {
      navigate('/dashboard');
    } else {
      navigate('/auth/login');
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
        navigate('/auth/login');
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
