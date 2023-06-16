import React from "react";
import PropTypes from "prop-types";
import EditProfile from "./EditProfile.jsx";

const dummyHobbies = [
  "Jousting",
  "Holding Computers",
  "Fly Fishing",
  "Spelunking",
];
const dummyFriends = [`Peter L'Anguile`, "John the Pokemon", "Imogen Heap"];

const Sidebar = ({
  user,
  currentUser,
  userHobbies,
  setUserHobbies,
  userFriends,
  handleFindFriendsClick,
}) => {
  console.log(currentUser);
  return userHobbies ? (
    <div className="profile-sidebar">
      <div className="profile-header-container">
        <div className="profile-header">
          {currentUser.firstname && currentUser.lastname ? (
            <h4 className="text-4xl mb-3">{`${currentUser.firstname} ${currentUser.lastname}`}</h4>
          ) : (
          <h4 className="text-4xl mb-3">{`${user.given_name} ${user.family_name}`}</h4>
          )}
          <h4>{currentUser.location}</h4>
        </div>
      </div>
      <section className="profile-related">
        <div className="profile-hobbies">
          <h4 className="card-title">Hobbies</h4>
          <ul className="profile-list">
            {userHobbies.map((hobby, key) => (
              <li key={key}>{hobby.hobby}</li>
            ))}
          </ul>
        </div>
        <div className="profile-hobbies">
          <h4 className="card-title">Bess Frenz</h4>
          <ul className="profile-list">
            {userFriends.length === 0 ? (
              <li className="profile-list-item">
                No friends :&#40;
                <button
                  className="profile-discover-button"
                  type="button"
                  onClick={handleFindFriendsClick}
                >
                  Find Friends
                </button>
              </li>
            ) : (
              userFriends.map((friend, key) => (
                <li key={key}>{`${friend.firstname} ${friend.lastname}`}</li>
              ))
            )}
          </ul>
        </div>
        <EditProfile currentUser={currentUser} userHobbies={userHobbies} setUserHobbies={setUserHobbies}/>
      </section>
    </div>
  ) : (
    <span className="loading loading-spinner loading-md"></span>
  );
};

Sidebar.propTypes = {
  userHobbies: PropTypes.arrayOf(PropTypes.object),
  userFriends: PropTypes.arrayOf(PropTypes.object),
};

export default Sidebar;
