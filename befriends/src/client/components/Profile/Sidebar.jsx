import React from 'react';
import PropTypes from 'prop-types';

const dummyHobbies = ['Jousting', 'Holding Computers', 'Fly Fishing', 'Spelunking'];
const dummyFriends = [`Peter L'Anguile`, 'John the Pokemon', 'Imogen Heap'];

const Sidebar = ({ userHobbies, userFriends }) => {

  console.log(userFriends);

  return (
    userHobbies ?
    <div >
    <div>
      <h4 className="card-title">Hobbies</h4>
    <ul>
      {userHobbies.map((hobby, key) => (<li key={key}>{hobby.hobby}</li>))}
    </ul>
    </div>
    <div>
      <h4 className="card-title">Bess Frenz</h4>
      <ul>
        {userFriends.map((friend, key) => (<li key={key}>{friend.firstname + ' ' + friend.lastname}</li>))}
      </ul>
    </div>
    </div> : <span className="loading loading-spinner loading-md"></span>
  )
}

Sidebar.propTypes = {
  userHobbies: PropTypes.arrayOf(PropTypes.object),
  userFriends: PropTypes.arrayOf(PropTypes.object),
};

export default Sidebar;