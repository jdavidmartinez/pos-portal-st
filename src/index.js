// dependencies
import React from 'react';
import ReactDOM from 'react-dom';
// Components
import App from './components/pages/App';
// Js
import reportWebVitals from './reportWebVitals';
// assets
import './assets/css/index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
