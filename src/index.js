import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Index.css'
import {BrowserRouter} from 'react-router-dom'
import { CartProvider } from './Reducers/CartProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);
