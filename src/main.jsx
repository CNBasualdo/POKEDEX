import React from 'react'
import ReactDOM from 'react-dom/client'
import {createHashRouter, RouterProvider} from 'react-router-dom'
import './estilos/index.css';
import App from './App.jsx';
import Home from './componentes/Home.jsx'

const router = createHashRouter([
  {
    path:'/',
    element: <Home/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
