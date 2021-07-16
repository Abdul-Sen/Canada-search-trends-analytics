import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/app';
import "./app/styles/scss/main.scss";
import { AppContextProvider } from './app/store/AppContextProvider';


ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
  , document.getElementById('root'));