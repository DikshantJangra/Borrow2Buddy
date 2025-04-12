import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginSignup from './components/LoginSignup/LoginSignup.jsx'
import SignUp from './components/LoginSignup/SignUp.jsx'


const router = createBrowserRouter([
  {path:'/',
    element:<App />
  },
  {
    path:'/Login',
    element:<LoginSignup />
  },
  {
    path:'/SignUp',
    element:<SignUp />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
