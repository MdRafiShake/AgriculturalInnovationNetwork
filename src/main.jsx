import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router";
import { store } from './app/store'
import { Provider } from 'react-redux'
import Router from './router/routes.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={Router} />
    </Provider>
    
  </StrictMode>,
)
