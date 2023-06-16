import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileBanner from "./ProfileBanner.jsx";
import Sidebar from "./Sidebar.jsx";
import Feed from "./Feed.jsx";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = ({ viewSwitcher, user, currentUser }) => {
  const [userHobbies, setUserHobbies] = useState([]);
  const [userFriends, setUserFriends] = useState([]);

  useEffect(() => {
    if (currentUser) {
      axios
        .get(`http://localhost:3000/hobbies/${currentUser.id}`)
        .then((res) => {
          setUserHobbies(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
      axios
        .get(`http://localhost:3000/friends/${currentUser.id}`)
        .then((res) => {
          setUserFriends(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [user, currentUser]);

  const handleFindFriendsClick = () => {
    viewSwitcher(2);
  };

  return user ? (
    <div className="profile-container">
      <ProfileBanner profilePic={user.picture} currentUser={currentUser} />
      <div className="profile-main">
        <section className="profile-content">
          <Sidebar
            user={user}
            currentUser={currentUser}
            userHobbies={userHobbies}
            setUserHobbies={setUserHobbies}
            userFriends={userFriends}
            handleFindFriendsClick={handleFindFriendsClick}
          />
          <Feed />
        </section>
      </div>
    </div>
  ) : (
    <span className="loading loading-spinner loading-md"></span>
  );
};

export default Profile;
