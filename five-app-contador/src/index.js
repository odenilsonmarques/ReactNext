import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Dados from './components/Dados';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Dados />
  </React.StrictMode>
);


