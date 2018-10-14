import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';

import { Router, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import history from './history';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Router history={history}>
      <App />
    </Router>
    </BrowserRouter>
  </Provider>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
