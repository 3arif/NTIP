import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import './styles.css'; // Import your CSS here

const root = ReactDOM.createRoot(document.getElementById('root')); //onaj nas div
root.render( //da se ukljuci nsa root u app.js
  <React.StrictMode>
    <App />
  </React.StrictMode>
);