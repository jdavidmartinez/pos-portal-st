// dependencies
import React from 'react';
import ReactDOM from 'react-dom';
// Components
import Home from './components/pages/Home/Home';
// Js
import reportWebVitals from './reportWebVitals';
// assets
import './assets/css/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
