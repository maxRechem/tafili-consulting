import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import Header from './Header/Header';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';  // Import du BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* Ajout de BrowserRouter ici */}
      <Header />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Mesure des performances si nécessaire
reportWebVitals();
