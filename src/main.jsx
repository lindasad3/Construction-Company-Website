import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter><StrictMode>
    <App />
  </StrictMode></BrowserRouter>, 
)
