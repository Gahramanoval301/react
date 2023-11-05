import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvider from './context-api/AuthorContext.jsx'
import { MyContextProvider } from './context-api/MyContext.jsx'
import './index.css'
import { createStore } from 'redux'
import { ModeContextProvider } from './context-api/ModeContext.jsx'
import RootReducer from './components/redux/index.jsx'
import { Provider } from 'react-redux'
import {storet} from './app/store.jsx' 
 
const store = createStore(RootReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={storet}>
      <ModeContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModeContextProvider>
    </Provider>
  </React.StrictMode>,
)
