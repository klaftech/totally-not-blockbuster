import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './assets/css/index.css'

// import react-router functions
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import appRoutes from './routes.jsx'

const router = createBrowserRouter(appRoutes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)