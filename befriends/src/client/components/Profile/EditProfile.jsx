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
            <div className="edit-input">
              First Name:
              <input
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </div>
            <div className="edit-input">
              Last Name:
              <input
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
            <div className="edit-input">
              User Location:
              <input
                type="text"
                value={location}
                onChange={handleLocationChange}
              />
            </div>
            <div className="edit-input">
              Profile Picture:
              <input
                type="text"
                value={profilePic}
                onChange={handleProfilePicChange}
              />
            </div>
            <div className="edit-input">
              Banner Picture:
              <input
                type="text"
                value={bannerPic}
                onChange={handleBannerPicChange}
              />
            </div>

            <div className="questionnaire-form-input">
              <h6>Add your hobbies:</h6>
              <label htmlFor="hobbies-input"></label>
              <input
                id="hobbies-input"
                maxLength="30"
                placeholder=""
                ref={hobbyInput}
                type="text"
              />
              <button type="button" onClick={addHobby}>
                Add
              </button>
            </div>

            {userHobbies && userHobbies.length > 0 && (
              <div className="questionnaire-form-hobby">
                {userHobbies.map((tag, index) => (
                  <span
                    className="tag"
                    key={index}
                    onClick={() => removeHobby(index)}
                  >
                    &times;&nbsp;&nbsp;{tag.hobby}
                  </span>
                ))}
              </div>
            )}

            <button
              type="button"
              className="edit-profile-button"
              onClick={handleEditSubmit}
            >
              Update Me!
            </button>
          </form>
        </dialog>
      </div>
    );
  } else {
    return null;
  }
};

export default EditProfile;
