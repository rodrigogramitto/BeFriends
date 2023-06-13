import react from 'react';

const dummyHobbies = ['Jousting', 'Holding Computers', 'Fly Fishing', 'Spelunking'];
const dummyFriends = [`Peter L'Anguile`, 'John the Pokemon', 'Imogen Heap'];

const Hobbies = ({ userHobbies }) => {

  console.log(userHobbies)

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
        {dummyFriends.map((friend, key) => (<li key={key}>{friend}</li>))}
      </ul>
    </div>
    </div> : <span className="loading loading-spinner loading-md"></span>
  )
}

export default Hobbies;