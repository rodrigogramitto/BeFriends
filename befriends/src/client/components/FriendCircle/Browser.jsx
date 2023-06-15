import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const Browser = ({userChats, setUserChats, currentUser}) => {
  const [friendCircles, setFriendCircles] = useState(["Horses", "Painting", "Soccer", "Basketball", "Puzzles", "Video Games", "Reading", "Kardashians", "Tik-Tok", "Self Development", "Programming"]);

  const[circleIdNames, setCircleIdNames] = useState({});

  const circleInput = useRef();

  const [searchCircles, setSearchCircles] = useState(friendCircles)

  useEffect(() => {
    axios.get('http://localhost:3000/circles')
    .then((circles) => {
      let allRooms = {}
      let circleObjs = circles.data.map((circle) =>
        {
          allRooms[circle.name] = circle.id;
          return circle.name
        });
      setCircleIdNames(allRooms);

      setSearchCircles(circleObjs);
      setFriendCircles(circleObjs);
    })
    .catch((err) => console.log('error', err));
  }, []);

  const handleChange = (e) => {
    var value = e.target.value.toLowerCase();
    var searchValues = searchCircles.filter((circle) => {
        return circle.toLowerCase().indexOf(value) > -1;
    })
    if (value.length === 0) {
        setSearchCircles(friendCircles)
    } else {
        setSearchCircles(searchValues);
    }
  }

  const handleAddCircleClick = async () => {
      var newCircle = circleInput.current.value;
      if (newCircle !== '') {
        // setFriendCircles(friendCircles.concat(newCircle));
        setSearchCircles(searchCircles.concat(newCircle));
        circleInput.current.value = '';
        let newCircleId = await axios.post('http://localhost:3000/circles', {
          circlename: newCircle,
          user_id: currentUser.id
        });
        //add the new friend circle to friend circles state for now

        let newChat = await axios.post('http://localhost:3000/usercircle', {
          userid: currentUser.id,
          circleid: newCircleId.data.id
        })

        let newestChat = {
          chatId:  newCircleId.data.id,
          chatName: newCircleId.data.name
        }

        let completeChat = [...userChats, newestChat];

        setUserChats(completeChat);

      }
  }

  const joinCircle = async (circle) => {
    let circleid = circleIdNames[circle];
    axios.post('http://localhost:3000/usercircle', {
      userid: currentUser.id,
      circleid: circleid
    })
  }

  return (
    <div className="flex flex-col">
        <div>
        <input type="text" placeholder="Search" onChange={(e)=>handleChange(e)} className="input input-bordered m-4 w-full max-w-xs" />
        <button className="btn" onClick={()=>window.my_modal_1.showModal()}>+ Add a FriendCircle</button>
        <dialog id="my_modal_1" className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Add a FriendCircle</h3>
            <p className="py-4">Please type in a name for a FriendCircle</p>
            <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <input type="text" ref={circleInput}></input>
            <input type='submit' onClick={handleAddCircleClick} />
            <button className="btn">Close</button>
            </div>
          </form>
        </dialog>
        </div>
        <div className="flex-wrap">
          {searchCircles.map((circle, i) => {
               return ( <button key={i} onClick={() => joinCircle(circle)} id="browser-btn" className="btn btn-outline m-4">{circle}</button>)
                 })}
        </div>
    </div>
  )
}

export default Browser