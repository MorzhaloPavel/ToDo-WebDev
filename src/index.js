import React from 'react';
import ReactDOM from 'react-dom';
import App from './Redux/App.js';
import './index.css';
import { Provider } from 'react-redux';
import store from './Redux/store';
import reportWebVitals from './reportWebVitals';

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

reportWebVitals();
