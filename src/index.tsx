import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import Router from './routes';
import reportWebVitals from './reportWebVitals';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mocks/server';
// styles
import './styles/App.css';

const persistor = persistStore(store);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
