import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
