import React from 'react';
import ReactDOM from 'react-dom';
import './_variables.sass';
import './index.sass';
import Calculator from './Calculator';

ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);