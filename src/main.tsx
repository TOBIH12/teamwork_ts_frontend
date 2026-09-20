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
import Feed from './pages/Feed'
import Articles from './pages/Articles'
import Gifs from './pages/Gifs'
import Colleagues from './pages/Colleagues'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
     {index: true, element: <Home />},
     {path: '/feed', element: <Feed />},
     {path: '/articles', element: <Articles />},
     {path: '/gifs', element: <Gifs />},
     {path: '/colleagues', element: <Colleagues />},

    ]
  },

  {
    path: '/auth',
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
