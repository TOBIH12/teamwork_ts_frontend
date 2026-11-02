import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import AuthLayout from './components/AuthLayout';
import Feed from './pages/Feed';
import Articles from './pages/Articles';
import Gifs from './pages/Gifs';
import Colleagues from './pages/Colleagues';
import RegisterUser from './pages/RegisterUser';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import { UserProvider } from './context/AuthContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <UserProvider>
        <Layout />
      </UserProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/feed', element: <Feed /> },
      { path: '/articles', element: <Articles /> },
      { path: '/gifs', element: <Gifs /> },
      { path: '/colleagues', element: <Colleagues /> },
    ],
  },

  {
    path: '/auth',
    element: (
      <UserProvider>
        <AuthLayout />
      </UserProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register-user', element: <RegisterUser /> },
      { path: 'logout', element: <Logout /> },
      { path: 'forgot-password', element: <ForgotPassword /> },
      { path: 'reset-password', element: <ResetPassword /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
