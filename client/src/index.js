import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import './styles.css'; // Import your CSS here
import { BrowserRouter } from 'react-router-dom';


/*

const root = ReactDOM.createRoot(document.getElementById('root')); //onaj nas div
root.render( //da se ukljuci nsa root u app.js
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);