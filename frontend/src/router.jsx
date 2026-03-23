import { createBrowserRouter } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Layout from './layouts/Layout'
import Login from './views/Login'
import Registro from './views/Registro'
import Inicio from './views/Inicio'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: 'login', element: <Login /> },
      { path: 'registro', element: <Registro /> },
    ]
  },
  {
    path: '/kiosco',
    element: <Layout />,
    children: [
      { index: true, element: <Inicio /> }
    ]
  }
])

export default router