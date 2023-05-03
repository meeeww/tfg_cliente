import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './pages/Dashboard'
import Inicio from './pages/Inicio'
import NoMatch from './pages/NoMatch'
import './estilos/estilos.css'
import Precio from './components/Register'
import InicioActualizado from './components/InformacionActualizado'

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
    path: "/inicioactualizado",
    element: <InicioActualizado />,
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)