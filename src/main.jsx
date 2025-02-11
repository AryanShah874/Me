import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {HelmetProvider} from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  // StrictMode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.
  // HelmetProvider is a context provider component that wraps your application. It provides a context for all the Helmet components in your application.
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>  
  </StrictMode>,
)
