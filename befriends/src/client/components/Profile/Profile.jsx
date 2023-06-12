import react, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileBanner from './ProfileBanner.jsx';
import Hobbies from './Hobbies.jsx';
import Feed from './Feed.jsx';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  // will need User from auth0 to retrieve data from server
  const { user } = useAuth0();
  //ProfileBanner needs profile_pic (varchar) and banner_pic (varchar)

  const [currentUser, setUser] = useState({});

  useEffect(() => {
    if (user) {
      axios.get(`http://localhost:3000/user/${user.nickname}`)
    .then((res) => {
      setUser(res)
    })
    .catch((err) => {
      console.error(err);
    })
    }
  }, [user])

  console.log(user);

  return user ? (
    <div>
      <ProfileBanner profilePic={user.picture} />
      <section>
        <h2>{user.given_name + ' ' + user.family_name}</h2>
        <h5>Paris, TX</h5>
        <Hobbies />
        <Feed />
      </section>
    </div>
  ) : (
    <span className="loading loading-spinner loading-md"></span>
  );
};

export default Profile;