import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Auth0Provider
        domain="dev-w5i5f510uf23um6n.us.auth0.com"
        clientId="HJ9yhXOYQ2Bll4ISVF48rXSZjeSPkkt2"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
    <Provider store={store}>
      
        <App />
    </Provider>
      </Auth0Provider>
  </BrowserRouter>


);

