import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store'
// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// import styles
import "./sass/index.scss"

import MainLayout from './layouts/MainLayout';

ReactDOM.render(
  <Provider store={store}>
    <MainLayout />
  </Provider>,
  document.getElementById('root')
);

