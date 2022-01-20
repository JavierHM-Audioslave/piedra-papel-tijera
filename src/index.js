import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import App from './App';
import configureStore from "./Store/index";
import "./Assets/App.css";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />,  
  </Provider>,
  document.getElementById('root')
);
