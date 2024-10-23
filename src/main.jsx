import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './bootstrap.min (2).css'
import {BrowserRouter} from 'react-router-dom'
import ContextShare from './context/ContextShare.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextShare>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ContextShare>
  
    
  </StrictMode>,
)
