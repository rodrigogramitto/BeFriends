import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/loginButton.jsx';
import LogoutButton from './components/logoutButton.jsx';

function App() {
  const [count, setCount] = useState(0)
  const { isAuthenticated } = useAuth0()

  return (
    <>
      <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>

      {(!isAuthenticated) &&
        <LoginButton />
      }


      {(isAuthenticated) &&
       <LogoutButton />
      }
    </>
  )
}

export default App
