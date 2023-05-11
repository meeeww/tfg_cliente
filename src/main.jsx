import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './pages/Dashboard'
import Inicio from './pages/Inicio'
import NoMatch from './pages/NoMatch'
import './estilos/estilos.css'
import Precio from './components/SignIn'
import Carta from './components/Carta'
import Merchandising from './components/Merchandising'
import ContactUs from './components/ContactUs'
import WorkWithUs from './components/WorkWithUs'

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
    path: "/carta",
    element: <Carta />,
  },
  {
    path: "/Merchandising",
    element: <Merchandising />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <NoMatch />,
  },
  {
    path: "/precio",
    element: <Precio />,
  },
  {
    path: "/ContactUs",
    element: <ContactUs />,
  },
  {
    path: "/WorkWithUs",
    element: <WorkWithUs />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)