import React from 'react'
import ReactDOM from 'react-dom/client'
import Inicio from './pages/Inicio'

import DashboardUsers from './pages/Dashboard/Users'
import DashboardEmpleados from './pages/Dashboard/Workers'
import DashboardProducts from './pages/Dashboard/Products'
import DashboardCategories from './pages/Dashboard/Categories'
import DashboardOrders from './pages/Dashboard/Orders'
import DashboardContact from './pages/Dashboard/Contact'
import DashboardJobApplications from './pages/Dashboard/JobApplications'
import DashboardDocuments from './pages/Dashboard/Documents'
import DashboardComite from './pages/Dashboard/Comite'

import UsuarioConfig from './pages/Usuarios/UsuarioConfiguracion'
import UsuarioDireccion from './pages/Usuarios/UsuarioDireccion'
import UsuarioPagos from './pages/Usuarios/UsuarioPagos'
import UsuarioRecibos from './pages/Usuarios/UsuarioRecibos'
import UsuarioReciboIndividual from './pages/Recibos/ReciboIndividual'

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

import Merchandising from './components/Merchandising'
import ContactUs from './components/ContactUs'
import WorkWithUs from './components/WorkWithUs/WorkWithUs'
import WorkWithUsForm from './components/WorkWithUs/WorkWithUsForm'

import AboutUs from './components/AboutUs'
import PrivacyPolicy from './components/PrivacyPolity'
import Cookies from './components/Cookies'

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
    path: "/user/orders/orderid",
    element: <UsuarioReciboIndividual />,
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
    path: "/merchandising",
    element: <Merchandising />,
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
    element: <DashboardUsers />,
  },
  {
    path: "/dashboard/employees",
    element: <DashboardEmpleados />,
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
    path: "/dashboard/orders",
    element: <DashboardOrders />,
  },
  {
    path: "/dashboard/contact",
    element: <DashboardContact />,
  },
  {
    path: "/dashboard/documents",
    element: <DashboardDocuments />
  },
  {
    path: "/dashboard/jobapplication",
    element: <DashboardJobApplications />
  },
  {
    path: "/dashboard/comite",
    element: <DashboardComite />
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
  {
    path: "/ContactUs",
    element: <ContactUs />,
  },
  {
    path: "/WorkWithUs",
    element: <WorkWithUs />,
  },
  {
    path: "/WorkWithUsForm",
    element: <WorkWithUsForm />,
  },
  {
    path: "/AboutUs",
    element: <AboutUs />,
  },
  {
    path: "/privacy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/cookies",
    element: <Cookies />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)