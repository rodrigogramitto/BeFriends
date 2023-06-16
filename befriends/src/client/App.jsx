import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/loginButton.jsx";
import LogoutButton from "./components/logoutButton.jsx";
import Questionnaire from "./components/Questionnaire/Questionnaire.jsx";
import Profile from "./components/Profile/Profile.jsx";
import NavBar from "./components/navBar.jsx";
import MyCalendar from "./components/Calendar";
import axios from "axios";
import DiscoverMode from "./components/Discover/discoverMode.jsx";
import FriendCircle from "./components/FriendCircle/friendCircle.jsx";

function App() {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  const [currentUser, setCurrentUser] = useState({});
  const [currentView, setCurrentView] = useState(0);

  const viewSwitcher = (num) => {
    setCurrentView(num);
  };
  
  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:3000/user/${user.nickname}`)
        .then((res) => {
          setCurrentUser(res.data);
          if (res.data !== "") {
            viewSwitcher(1);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [user]);

  const views = {
    0: (
      <Questionnaire
        setCurrentUser={setCurrentUser}
        viewSwitcher={viewSwitcher}
      />
    ),
    1: (
      <Profile
        viewSwitcher={viewSwitcher}
        user={user}
        currentUser={currentUser}
      />
    ),
    2: <DiscoverMode currentUser={currentUser}/>,
    3: <FriendCircle currentUser={currentUser}/>,
    4: <MyCalendar />,
  };
  return (
    <>
    <div >
      <NavBar
        viewSwitcher={viewSwitcher}
        currentView={currentView}
        setCurrentView={setCurrentView}
        currentUser={currentUser}
      />
      {!isAuthenticated && <LoginButton />}

      {isAuthenticated && (
        <>
          {views[currentView]}
          <LogoutButton />
        </>
      )}
    </div>
    </>
  );
}

export default App;
