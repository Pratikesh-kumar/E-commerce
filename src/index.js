import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { LoginContextProvider } from './Store/LoginContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LoginContextProvider>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </LoginContextProvider>
);