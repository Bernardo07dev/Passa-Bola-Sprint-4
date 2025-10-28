import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Welcome from './Welcome.jsx'
import Login from './pages/Login.jsx'
import Fase1 from './pages/atleta/at-fase-1.jsx'
import Fase2 from './pages/atleta/at-fase-2.jsx'
import Fase3 from './pages/atleta/at-fase-3.jsx'
import RFase1 from './pages/recrutador/rec-fase-1.jsx'
import RFase2 from './pages/recrutador/rec-fase-2.jsx'
import Rfase3 from './pages/recrutador/rec-fase-3.jsx'
import AtletaHome from './pages/atleta/AtletaHome.jsx'
import LolaAi from './pages/atleta/LolaAi.jsx'
import Calendario from './pages/atleta/Calendario.jsx'
import Comunidade from './pages/atleta/Comunidade.jsx'
import RecrutadorHome from './pages/recrutador/RecrutadorHome.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {path: '/', element: <Welcome />},
  {path: '/login',element: <Login />},
  {path: '/Fase1',element: <Fase1 />},
  {path: '/Fase2',element: <Fase2 />},
  {path: '/Fase3',element: <Fase3 />},
  {path: '/RFase1',element: <RFase1 />},
  {path: '/RFase2', element:<RFase2 />},
  {path: '/RFase3', element:<Rfase3 />},
  {path: '/AtletaHome', element:<AtletaHome />},
  {path: '/LolaAi', element:<LolaAi/>},
  {path: '/Calendario', element:<Calendario />},
  {path: '/Comunidade', element:<Comunidade />},
  {path: '/RecrutadorHome', element:<RecrutadorHome />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
