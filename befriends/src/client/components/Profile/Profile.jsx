import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileBanner from "./ProfileBanner.jsx";
import Sidebar from "./Sidebar.jsx";
import Feed from "./Feed.jsx";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = ({ user, currentUser }) => {
  const [userHobbies, setUserHobbies] = useState([]);
  const [userFriends, setUserFriends] = useState([]);

  //ProfileBanner needs profile_pic (varchar) and banner_pic (varchar)
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

  return user ? (
    <div className="profile-container">
      <ProfileBanner profilePic={user.picture} />
      <div className="profile-main">
        <div className="profile-header">
          <h2>{user.given_name + " " + user.family_name}</h2>
          <h5>{currentUser.location}</h5>
        </div>
        <section className="profile-content">
          <div className="profile-sidebar">
            <Sidebar userHobbies={userHobbies} userFriends={userFriends} />
          </div>
          <div className="profile-feed">
            <Feed />
          </div>
        </section>
      </div>
    </div>
  ) : (
    <span className="loading loading-spinner loading-md"></span>
  );
};

export default Profile;
