import { Toaster } from 'react-hot-toast'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        toastOptions={{
          maxToasts: 1,
          duration: 3000,
        }}
      />
    </BrowserRouter>
  </React.StrictMode>
)
