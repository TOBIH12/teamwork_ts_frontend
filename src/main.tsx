import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Login from './pages/Login'
import Logout from './pages/Logout'
import AuthLayout from './components/AuthLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
     {index: true, element: <Home />},

    ]
  },

  {
    element: <AuthLayout/>,
    errorElement: <ErrorPage/>,
    children: [
       {path: 'login', element: <Login />},
       {path: 'logout', element: <Logout />},
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
