import React from 'react'
import ReactDOM from 'react-dom/client'
import Inicio from './pages/Inicio'

import Dashboard from './pages/Dashboard'
import DashboardProducts from './pages/Dashboard/Products'
import DashboardCategories from './pages/Dashboard/Categories'

import UsuarioConfig from './pages/Usuarios/UsuarioConfiguracion'
import UsuarioDireccion from './pages/Usuarios/UsuarioDireccion'
import UsuarioPagos from './pages/Usuarios/UsuarioPagos'
import UsuarioRecibos from './pages/Usuarios/UsuarioRecibos'

import SignIn from './components/SignIn'
import Register from './components/Register'
import SignOut from './components/SignOut'
import Registered from './pages/UsuarioCreado'

import Carta from './pages/Carta'

import Carrito from './pages/Productos/Carrito'
import Producto from './pages/Productos/Producto'
import Checkout from './pages/Productos/Checkout'

import PopUp from './modals/PopUp/PopUp'

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
    path: "/user",
    element: <UsuarioConfig />,
  },
  {
    path: "/user/orders",
    element: <UsuarioRecibos />,
  },
  {
    path: "/user/adress",
    element: <UsuarioDireccion />,
  },
  {
    path: "/user/payments",
    element: <UsuarioPagos />,
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
    path: "/signout",
    element: <SignOut />,
  },
  {
    path: "/menu",
    element: <Carta />,
  },
  {
    path: "/cart",
    element: <Carrito />,
  },
  {
    path: "/product",
    element: <Producto />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
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
    path: "/popup",
    element: <PopUp />,
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