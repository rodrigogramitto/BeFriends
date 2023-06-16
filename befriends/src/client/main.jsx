import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import './index.css';

import { Auth0Provider } from '@auth0/auth0-react';
const REACT_APP_CLIENT_ID='cspWgho6cvtdfKy1CMGiXvG8CmStnWdY'
const REACT_APP_DOMAIN='dev-f1b4a5hmp63a60ox.us.auth0.com'

ReactDOM.createRoot(document.getElementById('root')).render(
      <Auth0Provider
      domain={REACT_APP_DOMAIN}
      clientId={REACT_APP_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <React.StrictMode>
        <div className="app">
          <App />
        </div>
      </React.StrictMode>
    </Auth0Provider>,

);

