import React, { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Lazy from 'yup/lib/Lazy';
import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')))
const AdminDashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')))
const SamplePage = Loadable(lazy(() => import('../views/sample-page/SamplePage')))
const Icons = Loadable(lazy(() => import('../views/icons/Icons')))
const TypographyPage = Loadable(lazy(() => import('../views/utilities/TypographyPage')))
const Shadow = Loadable(lazy(() => import('../views/utilities/Shadow')))
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));
const UsersList = Loadable(lazy(()=>import('../views/users-list/UsersList')));
const UserForms = Loadable(lazy(()=>import('../views/user-forms/index')));
const UserCreate = Loadable(lazy(()=>import('../views/admin-create-user')));
const AdminForms = Loadable(lazy(()=>import('../views/admin-forms')));
const AdminFormView = Loadable(lazy(()=>import('../views/admin-form-view')));
const AdminCreateForm = Loadable(lazy(()=>import('../views/admin-create-form')));
const AdminReport =Loadable(lazy(()=>import('../views/admin-report')));
const UserAnswer =Loadable(lazy(()=>import('../views/user-answer')));
const UserSubmitted = Loadable(lazy(()=>import('../views/user-submitted-form')))
const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      // { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '/dashboard', exact: true, element: <Dashboard /> },
      { path: '/admin-dashboard', exact: true, element: <AdminDashboard /> },
      { path: '/user-forms', exact: true, element: <UserForms /> },
      { path: '/sample-page', exact: true, element: <SamplePage /> },
      { path: '/icons', exact: true, element: <Icons /> },
      { path: '/ui/typography', exact: true, element: <TypographyPage /> },
      { path: '/ui/shadow', exact: true, element: <Shadow /> },
      { path: '/admin/users-list', element: <UsersList /> },
      { path: '/admin/create-user', element: <UserCreate /> },
      { path: '/admin-forms', element: <AdminForms /> },
      { path: '/admin-forms/:id', element: <AdminFormView /> },
      { path: '/admin/create-form', element: <AdminCreateForm /> },
      { path: '/admin/report', element: <AdminReport /> },
      { path: '/user-submit-answer/:id', element: <UserAnswer/> },
      { path: '/user-submitted-forms', element: <UserSubmitted/> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/login', element: <Login /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
