import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import PiePagina from "./componentes/PiePagina.js"
import Navegacion from './componentes/Navegacion.js';
import Encabezado from './componentes/Encabezado.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Encabezado/>
    <Navegacion enlace1="Inicio" enlace2="Crear Artículo" enlace3="inciar Sesión" enlace4="Crear Usuario"/>
    {/* <App /> */}    
    <PiePagina/>    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
