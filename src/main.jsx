import React from 'react'
import ReactDOM from 'react-dom/client'
import Inicio from './pages/Inicio'

import Dashboard from './pages/Dashboard'
import DashboardProducts from './pages/Dashboard/Products'
import DahsboardCategories from './pages/Dashboard/Categories'

import SignIn from './components/SingIn'
import Register from './components/Register'
import Registered from './pages/UsuarioCreado'
import NoMatch from './pages/NoMatch'
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
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/products",
    element: <DashboardProducts />,
  },
  {
    path: "/dashboard/categories",
    element: <DahsboardCategories />,
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <Register />,
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