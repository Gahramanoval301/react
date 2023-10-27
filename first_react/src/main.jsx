import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, NavLink } from 'react-router-dom'
import AuthContextProvider from './context-api/AuthorContext.jsx'
import { MyContextProvider } from './context-api/MyContext.jsx'
import './index.css'
import { ModeContextProvider } from './context-api/ModeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModeContextProvider>
  </React.StrictMode>,
)
