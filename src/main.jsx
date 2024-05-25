import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import 'desmy-react/dist/style.css';
import Home from './views/App.jsx'
import './index.css'
const helmetContext = {};

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider context={helmetContext}>
      <BrowserRouter>
            <Home />
      </BrowserRouter>
   
  </HelmetProvider>
)
