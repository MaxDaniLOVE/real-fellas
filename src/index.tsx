import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import App from './components/App';
import axios from 'axios';
import Spinner from './components/Spinner';

axios.defaults.baseURL = process.env.REACT_APP_URL_BASE;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Spinner />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
