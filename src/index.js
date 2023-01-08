import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap';
import {BrowserRouter} from 'react-router-dom'; 
import { AppProvider } from './context/productcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  // </React.StrictMode>
);