import React from 'react'
import ReactDOM from 'react-dom/client'
import Inicio from './pages/Inicio'

import Dashboard from './pages/Dashboard'
import DashboardProducts from './pages/Dashboard/Products'
import DashboardCategories from './pages/Dashboard/Categories'

import UsuarioConfig from './pages/Usuarios/UsuarioConfiguracion'

import SignIn from './components/SignIn'
import Register from './components/Register'
import Registered from './pages/UsuarioCreado'
import NoMatch from './pages/NoMatch'
import Carta from './pages/Carta'

import './estilos/estilos.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/user",
    element: <UsuarioConfig />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "/carta",
    element: <Carta />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/products",
    element: <DashboardProducts />,
  },
  {
    path: "/dashboard/categories",
    element: <DashboardCategories />,
  },
  {
    path: "/registered",
    element: <Registered />,
  },
  {
    path: "*",
    element: <NoMatch />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)