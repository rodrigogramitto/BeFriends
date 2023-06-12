import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/loginButton.jsx';
import LogoutButton from './components/logoutButton.jsx';
import Questionnaire from './components/Questionnaire.jsx';
import Profile from './components/Profile/Profile.jsx';
import NavBar from './components/navBar.jsx'


function App() {
  const [count, setCount] = useState(0)
  const { isAuthenticated } = useAuth0()

  return (
    <>
      <NavBar />

      {(!isAuthenticated) &&
        <LoginButton />
      }


      {(isAuthenticated) &&
      <>
        <Questionnaire />
        <LogoutButton />
      </>
      }
    </>
  )
}

export default App;