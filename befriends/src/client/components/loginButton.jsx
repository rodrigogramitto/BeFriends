import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
      <div id="login" className="hero min-h-screen">
        <div id="login-text" className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-6xl font-bold">Hello there 👋</h1>
            <p className="py-6 text-xl">Sign in to start finding friends!</p>
            <button id="login-button" type="button" className="btn" onClick={() => loginWithRedirect()}>Log In or Create Account</button>
          </div>
        </div>
      </div>     
  ) 
}

export default LoginButton;
