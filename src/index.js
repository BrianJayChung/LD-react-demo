import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import Home from './components/Home'
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';


import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware())
  );
  

export const ThemeContext = React.createContext()


ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>,
  document.getElementById('root')
)