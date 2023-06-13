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
  const [userHobbies, setUserHobbies] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        try {
          const retrievedUser = await axios.get(`http://localhost:3000/user/${user.nickname}`);
          const hobbies = await axios.get(`http://localhost:3000/user/${retrievedUser.id}`)
          setUser(retrievedUser.data);
          setUserHobbies(hobbies);
        } catch (err) {
          console.error(err);
        }
      }
    };

    fetchData();
  }, [user]);

  console.log('current User:', currentUser);

  return user ? (
    <div>
      <ProfileBanner profilePic={user.picture} />
      <section>
        <h2>{user.given_name + ' ' + user.family_name}</h2>
        <h5>Paris, TX</h5>
        <Hobbies userHobbies={userHobbies} />
        <Feed />
      </section>
    </div>
  ) : (
    <span className="loading loading-spinner loading-md"></span>
  );
};

export default Profile;