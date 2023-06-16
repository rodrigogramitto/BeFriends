import { useState, useRef, useEffect } from "react";
import axios from "axios";

const EditProfile = ({ currentUser, userHobbies, userFriends, setUserHobbies }) => {
  const [firstName, setFirstName] = useState(currentUser.firstname);
  const [lastName, setLastName] = useState(currentUser.lastname);
  const [location, setLocation] = useState(currentUser.location);
  const [profilePic, setProfilePic] = useState(currentUser.profile_pic);
  const [bannerPic, setBannerPic] = useState(currentUser.banner_pic);
  const [deleteCalled, setDeleteCalled] = useState(false);
  const [addCalled, setAddCalled] = useState(false);
  const hobbyInput = useRef();
  const excludedHobby = useRef();

  useEffect(() => {
    if (deleteCalled) {
      axios
        .delete("http://localhost:3000/hobby", { data: { id: excludedHobby.current.id } })
        .then((response) => console.log("this is response for delete!!", response))
        .catch((err) => console.error(err));
    } else if (addCalled) {
      console.log("this is userHobbies2", userHobbies);

      const data = {
        id: currentUser.id,
        hobbies: userHobbies.filter((obj) => obj.id === undefined)
      };

      console.log("adding hobby data", data);

      axios
        .post('http://localhost:3000/hobby', data)
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
    }
  }, [userHobbies]);

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

  const addHobby = () => {
    const hobby = hobbyInput.current.value;

    if (hobby && userHobbies.length < 10) {
      setUserHobbies((prevTags) => [...prevTags, { hobby: hobby }]);
      hobbyInput.current.value = "";
    }

    setAddCalled(!addCalled);
  };


const removeHobby = (index) => {
  setUserHobbies((prevTags) => {
    const updatedHobbies = prevTags.filter((_, i) => {
      if (i === index) {
        excludedHobby.current = prevTags[i];
        return false;
      }
      return true;
    });

    return updatedHobbies;
  });

  setDeleteCalled(!deleteCalled);
};

  const handleEditSubmit = (e) => {
    e.preventDefault();

    const updateUser = {};

    updateUser.id = currentUser.id;
    updateUser.firstname = firstName;
    updateUser.lastname = lastName;
    updateUser.location = location;
    updateUser.profile_pic = profilePic;
    updateUser.banner_pic = bannerPic;

    axios
      .put("http://localhost:3000/user", updateUser)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  if (currentUser) {
    return (
      <div>
        <button
          className="edit-profile-button"
          type="button"
          onClick={() => window.my_modal_3.showModal()}
        >
          Edit Profile
        </button>
        <dialog id="my_modal_3" className="modal">
          <form method="dialog" className="modal-box edit-profile-modal">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <h1 className="text-2xl flex justify-center mb-3">Edit your profile</h1>
            <label className="mb-3">
              <b className="font-bold">
              First Name:
              </b>
              <input
                className="ml-4"
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </label>
            <label className="mb-3">
              <b className="font-bold">
              Last Name:
              </b>
              <input
                className="ml-4"
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </label>
            <label className="mb-3">
              <b className="font-bold">
              Location:
              </b>
              <input
                className="ml-4"
                type="text"
                value={location}
                onChange={handleLocationChange}
              />
            </label>
            <label className="mb-3">
             <b className="font-bold">
              Profile Picture:
              </b>
              <label className="ml-4">url: </label>
              <input    
                type="text"
                value={profilePic}
                onChange={handleProfilePicChange}
              />
            </label>
            <label className="ml-10 mb-3">or upload: 
             <input className="ml-2" type="file"/>
            </label>
            <label className="mb-3">
              <b className="font-bold">
              Banner Picture:
              </b>
              <label className="ml-4">url: </label>
              <input
                type="text"
                value={bannerPic}
                onChange={handleBannerPicChange}
              />
            </label>
            <label className="ml-10 mr-2">or upload: 
            <input className="ml-2" type="file"/>
           </label>
            <div className="questionnaire-form-input">
              <label htmlFor="hobbies-input">
                <b className="font-bold">
                Add your hobbies:
                </b>
              </label>
              <input
                id="hobbies-input"
                maxLength="30"
                placeholder=""
                ref={hobbyInput}
                type="text"
              />
              <button 
              id="edit-profile-btns"
              className="btn" 
              type="button" 
              onClick={addHobby}>
                Add
              </button>
            </div>
            <div >
            {userHobbies && userHobbies.length > 0 && (
              <div className="flex flex-wrap">
                {userHobbies.map((tag, index) => (
                  <span
                    id="hobby-span"
                    className="tag m-1"
                    key={index}
                    onClick={() => removeHobby(index)}
                  >
                    &times;&nbsp;&nbsp;{tag.hobby}
                  </span>
                ))}
              </div>    
            )}
            </div>
            <div className="flex justify-center">
            <button
              id="edit-profile-btns"
              type="button"
              className="btn mt-4 w-20"
              style={{color: "white"}}
              onClick={handleEditSubmit}
            >
              Update Me!
            </button>
            </div>
          </form>
        </dialog>
      </div>
    );
  } else {
    return null;
  }
};

export default EditProfile;
