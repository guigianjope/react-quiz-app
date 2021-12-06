import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./router/Router";
import { Provider } from 'react-redux';
import store from './redux/store';
import "./scss/reset.scss";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

