import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import PlayerContexProvider from './context/PlayerContex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <PlayerContexProvider>
      <App />
    </PlayerContexProvider> 
    </BrowserRouter>
  </React.StrictMode>,
)
