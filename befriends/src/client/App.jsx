import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/loginButton.jsx';
import LogoutButton from './components/logoutButton.jsx';
import Questionnaire from './components/Questionnaire.jsx';
import Profile from './components/Profile/Profile.jsx';
import NavBar from './components/navBar.jsx'
import MyCalendar from './components/Calendar'
import DiscoverMode from './components/Discover/discoverMode.jsx';

function App() {
  const { isAuthenticated } = useAuth0()
  const [currentView, setCurrentView] = useState(0);
  const viewSwitcher = (num) => {
    setCurrentView(num);
  }


  // make a function to reassign current view and pass it to all main components
  const views = {
    0: <Questionnaire viewSwitcher={viewSwitcher} />,
    1: <Profile viewSwitcher={viewSwitcher} />,
    2: <DiscoverMode />,
    3: <h1>FriendCircle</h1>,
    4: <MyCalendar />
  }
  return (
    <>
      <NavBar
      viewSwitcher={viewSwitcher}
      currentView={currentView}
      setCurrentView={setCurrentView}
      />
      {(!isAuthenticated) &&
        <LoginButton />
      }


      {(isAuthenticated) &&
      <>
        {views[currentView]}
        <LogoutButton />
      </>
      }
    </>
  )
}

export default App