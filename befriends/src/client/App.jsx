import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/loginButton.jsx';
import LogoutButton from './components/logoutButton.jsx';
import Questionnaire from './components/Questionnaire.jsx';
import Profile from './components/Profile/Profile.jsx';
import NavBar from './components/navBar.jsx';
import MyCalendar from './components/Calendar';
import axios from 'axios';

function App() {
  const { isAuthenticated } = useAuth0()
  const [currentView, setCurrentView] = useState(0);
  const viewSwitcher = (num) => {
    setCurrentView(num);
  }

  // will need User from auth0 to retrieve data from server
  const { user } = useAuth0();
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    if (user) {
      axios.get(`http://localhost:3000/user/${user.nickname}`)
    .then((res) => {
      setCurrentUser(res)
    })
    .catch((err) => {
      console.error(err);
    })
    }
  }, [user])


  // make a function to reassign current view and pass it to all main components
  const views = {
    0: <Questionnaire viewSwitcher={viewSwitcher} />,
    1: <Profile viewSwitcher={viewSwitcher} user={user} currentUser={currentUser} />,
    2: <h1>DiscoverMode</h1>,
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