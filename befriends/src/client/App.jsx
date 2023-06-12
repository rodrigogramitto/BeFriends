import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/loginButton.jsx';
import LogoutButton from './components/logoutButton.jsx';
import Profile from './components/Profile/Profile.jsx';

function App() {
  const [count, setCount] = useState(0)
  const { isAuthenticated } = useAuth0()

  return (
    <>
    <Profile />

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

//{ isAuthenticated ? <LogoutButton/> : <LoginButton/> }