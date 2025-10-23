import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login.jsx'
import About from './components/About.jsx'
import Profile from './components/Profile.jsx'
import ErrorPage from './components/ErrorPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/about", element: <About />},
      {path: "/profile", element: <Profile />},
      {path: "*", element: <ErrorPage />}
    ]
  },
  {path: "/login", element: <Login />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
