import react, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileBanner from './ProfileBanner.jsx';
import Hobbies from './Hobbies.jsx';
import Feed from './Feed.jsx';

const Profile = () => {
  // will need User from auth0 to retrieve data from server

  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3000/user')
    .then((res) => {
      setUser(res)
    })
    .catch((err) => {
      console.error(err);
    })
  }, [])

  return (
    <div>
      <ProfileBanner />
      <section>
      <h2>Antonio Perez</h2>
      <h5>Paris, Tx</h5>
      <Hobbies />
      <Feed />
      </section>

    </div>
  )
}

export default Profile;