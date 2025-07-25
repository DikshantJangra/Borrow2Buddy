import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginSignup from './components/LoginSignup/LoginSignup.jsx'
import SignUp from './components/LoginSignup/SignUp.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import DashboardLayout from './components/Dashboard/DashboardLayout.jsx'
import PageNotFound from './components/NotFound/PageNotFound.jsx'
import Layout from './components/Layout/Layout.jsx'
import Messages from './components/Messages/Messages.jsx'
import Requests from './components/Lend & Borrow/Requests.jsx'
import Borrow from './components/Lend & Borrow/Borrow.jsx'
import Transactions from './components/Transactions/Transactions.jsx'

const router = createBrowserRouter([
  {path:'/',
    element:<App />,
    errorElement:<PageNotFound />
  },
  {
    path:'/Login',
    element:<LoginSignup />,
    errorElement:<PageNotFound />
  },
  {
    path:'/SignUp',
    element:<SignUp />,
    errorElement:<PageNotFound />
  },
  {
    path:'/Dashboard',
    element:(
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    ),
    errorElement:<PageNotFound />
  },
  {
    path:'/requests',
    element:(
      <DashboardLayout>
        <Requests />
      </DashboardLayout>
    ),
    errorElement:<PageNotFound />
  },
  {
    path:'/borrow',
    element:(
      <DashboardLayout>
        <Borrow />
      </DashboardLayout>
    ),
    errorElement:<PageNotFound />
  },
  {
    path:'/transactions',
    element:(
      <DashboardLayout>
        <Transactions />
      </DashboardLayout>
    ),
    errorElement:<PageNotFound />
  },
  {
    path:'/messages',
    element:(
      <DashboardLayout>
        <Messages />
      </DashboardLayout>
    ),
    errorElement:<PageNotFound />
  },
  {
    path:'/Layout',
    element:<Layout />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
