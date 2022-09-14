import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Secao from './componentes/exercicio1/secao';
import Card from './componentes/comps/cardHobby/cardHobby'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>
);
