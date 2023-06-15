import { useState } from 'react';
import axios from 'axios';

const EditProfile = ({ currentUser, userHobbies }) => {
  const [firstName, setFirstName] = useState(currentUser.firstname);
  const [lastName, setLastName] = useState(currentUser.lastname);
  const [location, setLocation] = useState(currentUser.location);
  const [profilePic, setProfilePic] = useState(currentUser.profile_pic);
  const [bannerPic, setBannerPic] = useState(currentUser.banner_pic);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleProfilePicChange = (event) => {
    setProfilePic(event.target.value);
  };

  const handleBannerPicChange = (event) => {
    setBannerPic(event.target.value);
  };

  const handleEditSubmit = (e) => {
      e.preventDefault();
      const updateUser = {}
      updateUser.id = currentUser.id;
      updateUser.firstname = firstName;
      updateUser.lastname = lastName;
      updateUser.location = location;
      updateUser.profile_pic = profilePic;
      updateUser.banner_pic = bannerPic;

      axios.put('http://localhost:3000/user', {
      updateUser })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  if (currentUser) {
    return (
      <div>
        <button className="edit-profile-button" type="button" onClick={() => window.my_modal_3.showModal()}>
          Edit Profile
        </button>
        <dialog id="my_modal_3" className="modal">
          <form method="dialog" className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <input type="text" value={firstName} onChange={handleFirstNameChange} />
            <input type="text" value={lastName} onChange={handleLastNameChange} />
            <input type="text" value={location} onChange={handleLocationChange} />
            <input type="text" value={profilePic} onChange={handleProfilePicChange} />
            <input type="text" value={bannerPic} onChange={handleBannerPicChange} />
            <button type="button" className="edit-profile-button" onClick={handleEditSubmit} >Update Me!</button>
          </form>
        </dialog>
      </div>
    );
  } else {
    return null;
  }
};

export default EditProfile;
