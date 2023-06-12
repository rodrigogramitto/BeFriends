import react from 'react';

const dummyHobbies = ['Jousting', 'Holding Computers', 'Fly Fishing', 'Spelunking'];
const dummyFriends = [`Peter L'Anguile`, 'John the Pokemon', 'Imogen Heap'];

const Hobbies = () => {

  return (
    <div >
    <div>
      <h4 className="card-title">Hobbies</h4>
    <ul>
      {dummyHobbies.map((hobby, key) => (<li key={key}>{hobby}</li>))}
    </ul>
    </div>
    <div>
      <h4 className="card-title">Bess Frenz</h4>
      <ul>
        {dummyFriends.map((friend, key) => (<li key={key}>{friend}</li>))}
      </ul>
    </div>
    </div>
  )
}

export default Hobbies;