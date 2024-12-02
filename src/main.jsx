import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './assets/css/index.css'
import App from './components/App'

//bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </StrictMode>,
)