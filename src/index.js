import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./router/Router";
import { Provider } from 'react-redux';
import store from './redux/store';
import "./scss/reset.scss";
import "./scss/bg-area.scss";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <div className="banner-box">
          <AppRouter />
        </div>
        <div class="bg-animation">
          <ul class="box-area">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

