import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Welcome from './Welcome.jsx'
import Login from './pages/Login.jsx'
import Fase1 from './pages/atleta/at-fase-1.jsx'
import Fase2 from './pages/atleta/at-fase-2.jsx'
import Fase3 from './pages/atleta/at-fase-3.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {path: '/', element: <Welcome />},
  {path: '/login',element: <Login />},
  {path: '/Fase1',element: <Fase1 />},
  {path: '/Fase2',element: <Fase2 />},
  {path: '/Fase3',element: <Fase3 />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
